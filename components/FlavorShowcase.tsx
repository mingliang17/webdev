"use client";

import { useEffect, useRef } from "react";
import { flavors } from "@/lib/flavors";
import Can from "./Can";

function ShowcaseRow({
  index,
  total,
  reverse,
}: {
  index: number;
  total: number;
  reverse: boolean;
}) {
  const flavor = flavors[index];
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll(".animate-in").forEach((child) =>
            child.classList.add("is-visible")
          );
        }
      },
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`group flex items-center gap-20 py-22 border-b border-line last:border-b-0 ${
        reverse ? "flex-row-reverse text-right md:text-right" : ""
      } max-md:flex-col max-md:text-center max-md:gap-8`}
    >
      <div className="animate-in flex-none w-70 flex justify-center">
        <ShowcaseVisual c1={flavor.c1} c2={flavor.c2} name={flavor.name} delay={index} />
      </div>

      <div className="animate-in flex-1 [transition-delay:100ms]">
        <div className="font-mono text-xs opacity-50 mb-2.5">
          0{index + 1} / 0{total}
        </div>
        <h3 className="text-[clamp(28px,4vw,44px)] mb-3.5">{flavor.name}</h3>
        <p className={`text-[15.5px] leading-relaxed text-ink/68 max-w-[420px] ${reverse ? "md:ml-auto" : ""} max-md:mx-auto`}>
          {flavor.desc}
        </p>
        <div className={`flex gap-2 mt-5 flex-wrap ${reverse ? "justify-end" : ""} max-md:justify-center`}>
          {flavor.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[11px] px-3 py-1.5 border border-line rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function ShowcaseVisual({
  c1,
  c2,
  name,
  delay,
}: {
  c1: string;
  c2: string;
  name: string;
  delay: number;
}) {
  return (
    <Can
      c1={c1}
      c2={c2}
      label={name}
      size="lg"
      className="animate-float-y"
      style={{ animationDelay: `-${delay}s` }}
    />
  );
}

export default function FlavorShowcase() {
  const shown = flavors.slice(0, 5);
  return (
    <section className="py-32">
      <div className="max-w-[1180px] mx-auto px-8">
        <div className="max-w-[640px] mx-auto mb-14 text-center">
          <div className="eyebrow">The range, up close</div>
          <h2 className="text-[clamp(32px,5vw,52px)] mt-2.5">
            Every ferment has a mood
          </h2>
        </div>

        {shown.map((_, i) => (
          <ShowcaseRow key={i} index={i} total={shown.length} reverse={i % 2 === 1} />
        ))}
      </div>
    </section>
  );
}
