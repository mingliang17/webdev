"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { bubbles } from "@/lib/bubbles";
import Warrior from "./Warrior";

type Ball = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  squash: number; // 0 = sphere, 1 = max deformation
  squashAngle: number; // radians, axis of the last impact
};

const BASE_RADII = [260, 260, 260, 150, 150];

// Physics tuning
const GRAVITY = 0.18;
const WALL_RESTITUTION = 0.72; // bounce off walls/floor/ceiling
const BALL_RESTITUTION = 0.86; // bouncier ball-vs-ball contact
const FLOOR_FRICTION = 0.98;
const REPEL_RADIUS = 160;
const REPEL_STRENGTH = 2.6;
const COLLISION_ITERATIONS = 4; // multiple passes/frame so balls never overlap
const REST_EPS = 0.05; // below this speed (and resting on floor) a ball fully stops
const SQUASH_DECAY = 0.84; // how fast a bubble springs back to a sphere

// Scroll-jack tuning (in vh, i.e. relative to viewport height)
const HOLD_VH = 25; // scroll distance the hero stays fully locked/visible before transitioning
const TRANSITION_VH = 180; // scroll distance over which bubbles float up + fade, Warrior fades in
const DWELL_VH = 60; // scroll distance Warrior stays fully visible/locked after the fade, before unlocking
const FLOAT_DISTANCE = 480; // px the bubble layer floats upward during the transition

function scaleFactor(width: number) {
  if (width < 640) return 0.6;
  if (width < 960) return 0.8;
  return 1;
}

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const bubbleLayerRef = useRef<HTMLDivElement>(null);
  const warriorLayerRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const ballRefs = useRef<(HTMLDivElement | null)[]>([]);
  const balls = useRef<Ball[]>([]);
  const mouse = useRef({ x: 0, y: 0, active: false });
  const rafRef = useRef<number | null>(null);

  // --- Bubble physics ------------------------------------------------
  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    function applySizes() {
      const factor = scaleFactor(stage!.clientWidth);
      balls.current.forEach((b, i) => {
        b.r = BASE_RADII[i % BASE_RADII.length] * factor;
        const el = ballRefs.current[i];
        if (el) {
          el.style.width = `${b.r * 2}px`;
          el.style.height = `${b.r * 2}px`;
        }
      });
    }

    // Drop-in entrance: every ball starts above the stage and staggers in
    function init() {
      balls.current = bubbles.map(() => ({
        x: 0,
        y: 0,
        vx: 0,
        vy: 0,
        r: 0,
        squash: 0,
        squashAngle: 0,
      }));
      applySizes();
      const width = stage!.clientWidth;
      balls.current.forEach((b, i) => {
        const slot = (i + 1) / (balls.current.length + 1);
        b.x = width * slot + (Math.random() - 0.5) * 24;
        b.y = -b.r - i * 90 - Math.random() * 40;
        b.vx = (Math.random() - 0.5) * 1.5;
        b.vy = 0;
      });
    }

    function handleResize() {
      applySizes();
      const width = stage!.clientWidth;
      const height = stage!.clientHeight;
      balls.current.forEach((b) => {
        b.x = Math.min(Math.max(b.x, b.r), Math.max(width - b.r, b.r));
        b.y = Math.min(b.y, Math.max(height - b.r, b.r));
      });
    }

    function resolveWalls(b: Ball, width: number, height: number) {
      if (b.x - b.r < 0) {
        b.x = b.r;
        const impact = Math.abs(b.vx);
        b.vx = -b.vx * WALL_RESTITUTION;
        setSquash(b, impact, 0);
      }
      if (b.x + b.r > width) {
        b.x = width - b.r;
        const impact = Math.abs(b.vx);
        b.vx = -b.vx * WALL_RESTITUTION;
        setSquash(b, impact, 0);
      }
      if (b.y - b.r < 0) {
        b.y = b.r;
        const impact = Math.abs(b.vy);
        b.vy = -b.vy * WALL_RESTITUTION;
        setSquash(b, impact, Math.PI / 2);
      }
      if (b.y + b.r > height) {
        b.y = height - b.r;
        const impact = Math.abs(b.vy);
        b.vy = -b.vy * WALL_RESTITUTION;
        b.vx *= FLOOR_FRICTION;
        setSquash(b, impact, Math.PI / 2);

        // fully settle once a ball is resting on the floor with tiny velocity
        if (Math.abs(b.vy) < REST_EPS && Math.abs(b.vx) < REST_EPS) {
          b.vy = 0;
          b.vx = 0;
        }
      }
    }

    function setSquash(b: Ball, impactSpeed: number, angle: number) {
      const amt = Math.min(impactSpeed / 14, 1);
      if (amt > b.squash) {
        b.squash = amt;
        b.squashAngle = angle;
      }
    }

    // Multiple relaxation passes per frame so bubbles never end up overlapping
    function resolveBallCollisions() {
      const list = balls.current;
      for (let pass = 0; pass < COLLISION_ITERATIONS; pass++) {
        for (let i = 0; i < list.length; i++) {
          for (let j = i + 1; j < list.length; j++) {
            const a = list[i];
            const c = list[j];
            const dx = c.x - a.x;
            const dy = c.y - a.y;
            const dist = Math.sqrt(dx * dx + dy * dy) || 0.0001;
            const minDist = a.r + c.r;
            if (dist < minDist) {
              const nx = dx / dist;
              const ny = dy / dist;
              const overlap = minDist - dist;

              // positional correction — fully separates the pair, no residual overlap
              a.x -= nx * (overlap / 2);
              a.y -= ny * (overlap / 2);
              c.x += nx * (overlap / 2);
              c.y += ny * (overlap / 2);

              // velocity impulse along the contact normal (equal mass, restitution e)
              const rvx = c.vx - a.vx;
              const rvy = c.vy - a.vy;
              const rvn = rvx * nx + rvy * ny;
              if (rvn < 0) {
                const impulse = -(1 + BALL_RESTITUTION) * rvn * 0.5;
                a.vx -= impulse * nx;
                a.vy -= impulse * ny;
                c.vx += impulse * nx;
                c.vy += impulse * ny;

                const angle = Math.atan2(ny, nx);
                const impactSpeed = Math.abs(rvn);
                setSquash(a, impactSpeed, angle);
                setSquash(c, impactSpeed, angle);
              }
            }
          }
        }
      }
    }

    function step() {
      const width = stage!.clientWidth;
      const height = stage!.clientHeight;
      const list = balls.current;

      for (let i = 0; i < list.length; i++) {
        const b = list[i];
        b.vy += GRAVITY;
        b.x += b.vx;
        b.y += b.vy;

        if (mouse.current.active) {
          const dx = b.x - mouse.current.x;
          const dy = b.y - mouse.current.y;
          const dist = Math.sqrt(dx * dx + dy * dy) || 0.001;
          if (dist < REPEL_RADIUS) {
            const force = ((REPEL_RADIUS - dist) / REPEL_RADIUS) * REPEL_STRENGTH;
            b.vx += (dx / dist) * force;
            b.vy += (dy / dist) * force;
          }
        }

        resolveWalls(b, width, height);
      }

      resolveBallCollisions();

      list.forEach((b, i) => {
        // spring the squash back toward 0 — bubbles only rest as a perfect sphere
        b.squash *= SQUASH_DECAY;
        if (b.squash < 0.02) b.squash = 0;

        const el = ballRefs.current[i];
        if (!el) return;
        const angleDeg = (b.squashAngle * 180) / Math.PI;
        const stretch = b.squash * 0.22;
        el.style.transform =
          `translate3d(${b.x - b.r}px, ${b.y - b.r}px, 0) ` +
          `rotate(${angleDeg}deg) scale(${1 + stretch}, ${1 - stretch}) rotate(${-angleDeg}deg)`;
      });

      rafRef.current = requestAnimationFrame(step);
    }

    init();
    rafRef.current = requestAnimationFrame(step);

    function onPointerMove(e: PointerEvent) {
      const rect = stage!.getBoundingClientRect();
      mouse.current.x = e.clientX - rect.left;
      mouse.current.y = e.clientY - rect.top;
      mouse.current.active = true;
    }
    function onPointerLeave() {
      mouse.current.active = false;
    }

    stage.addEventListener("pointermove", onPointerMove);
    stage.addEventListener("pointerleave", onPointerLeave);
    window.addEventListener("resize", handleResize);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      stage.removeEventListener("pointermove", onPointerMove);
      stage.removeEventListener("pointerleave", onPointerLeave);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // --- Locked scroll-jack transition: bubbles float up + fade out, --
  // --- Warrior content fades/rises in, both pinned in the same view -
  useEffect(() => {
    const section = sectionRef.current;
    const bubbleLayer = bubbleLayerRef.current;
    const warriorLayer = warriorLayerRef.current;
    if (!section || !bubbleLayer || !warriorLayer) return;

    function updateProgress() {
      const vh = window.innerHeight;
      const holdPx = (HOLD_VH / 100) * vh;
      const transitionPx = (TRANSITION_VH / 100) * vh;

      const rect = section!.getBoundingClientRect();
      const scrolled = Math.min(Math.max(-rect.top, 0), holdPx + transitionPx);

      const t =
        scrolled <= holdPx
          ? 0
          : Math.min(Math.max((scrolled - holdPx) / transitionPx, 0), 1);

      // outgoing bubble layer: floats upward, fades out
      bubbleLayer!.style.opacity = String(1 - t);
      bubbleLayer!.style.transform = `translate3d(0, ${-t * FLOAT_DISTANCE}px, 0)`;
      bubbleLayer!.style.pointerEvents = t > 0.4 ? "none" : "auto";

      // incoming Warrior layer: rises into place, fades in
      warriorLayer!.style.opacity = String(t);
      warriorLayer!.style.transform = `translate3d(0, ${(1 - t) * 40}px, 0)`;
      warriorLayer!.style.pointerEvents = t > 0.6 ? "auto" : "none";
    }

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative"
      style={{ height: `calc(100svh + ${HOLD_VH + TRANSITION_VH + DWELL_VH}vh)` }}
    >
      <div className="sticky top-0 h-[100svh] w-full overflow-hidden bg-[linear-gradient(180deg,#FDF8EC,var(--color-cream))]">
        {/* Layer 1: bouncy bubble hero — floats up + fades during transition */}
        <div
          ref={bubbleLayerRef}
          className="absolute inset-0 h-full w-full flex flex-col will-change-transform"
        >
          <div className="relative z-10 shrink-0 pt-28 pb-6 text-center px-6">
            <div className="eyebrow">Pick your ferment</div>
            <h1 className="text-[clamp(32px,5vw,54px)] mt-2">Bump a bubble to begin</h1>
            <p className="text-ink/60 text-sm mt-3 max-w-md mx-auto">
              Move your cursor through the bubbles — they drop in, bounce off
              the walls and each other, and each one opens its own page.
            </p>
          </div>

          <div ref={stageRef} className="relative flex-1 min-h-0">
            {bubbles.map((bubble, i) => (
              <div
                key={bubble.id}
                ref={(el) => {
                  ballRefs.current[i] = el;
                }}
                className="absolute top-0 left-0 will-change-transform"
              >
                <Link
                  href={bubble.href || `/bubble/${bubble.id}`}
                  className="bubble"
                  aria-label={`Open ${bubble.title}`}
                >
                  <span className="bubble-glow" aria-hidden="true" />
                  <span className="bubble-face">
                    <img src={bubble.image} alt="" className="bubble-image" />
                    <span className="bubble-content">
                      <span className="bubble-title">{bubble.title}</span>
                      {bubble.subtitle && (
                        <span className="bubble-subtitle">
                          {bubble.subtitle.split('\n').map((line, idx) => (
                            <span key={idx} className="block">
                              {line.trim()}
                            </span>
                          ))}
                        </span>
                      )}
                    </span>
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Layer 2: Warrior content — rises + fades in as the bubbles leave */}
        <div
          ref={warriorLayerRef}
          id="warrior"
          className="absolute inset-0 h-full w-full opacity-0 will-change-transform"
        >
          <Warrior />
        </div>
      </div>
    </section>
  );
}