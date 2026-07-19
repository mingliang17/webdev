"use client";

import { useEffect, useRef, useState } from "react";
import { flavors } from "@/lib/flavors";
import Can from "./Can";

export default function FlavorDial() {
  const [active, setActive] = useState(0);
  const [swapping, setSwapping] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = (i: number) => {
    setSwapping(true);
    setTimeout(() => {
      setActive(i);
      setSwapping(false);
    }, 220);
  };

  useEffect(() => {
    timerRef.current = setInterval(() => {
      goTo((prev => (prev + 1) % flavors.length)(active));
    }, 4200);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  const flavor = flavors[active];
  const ringLabel = `${flavor.name.toUpperCase()} \u00B7 `.repeat(4);

  return (
    <section id="dial" className="bg-ink text-cream py-32 overflow-hidden">
      <div className="max-w-[1180px] mx-auto px-8">
        <div className="max-w-[640px] mx-auto mb-14 text-center">
          <div className="eyebrow text-cream/55">08 ferments, one ritual</div>
          <h2 className="text-[clamp(32px,5vw,52px)] mt-2.5">
            Spin through the range
          </h2>
        </div>

        <div className="relative w-[min(560px,86vw)] aspect-square mx-auto mb-10 flex items-center justify-center">
          <div
            className="absolute w-[260px] h-[260px] rounded-full blur-[50px] opacity-50 transition-colors duration-1000 ease-brand"
            style={{
              background: `radial-gradient(circle, ${flavor.glow}, transparent 70%)`,
            }}
          />

          <div className="absolute inset-0 rounded-full border border-dashed border-cream/18 animate-spin-slow">
            <svg viewBox="0 0 300 300" className="w-full h-full">
              <defs>
                <path
                  id="circlePath"
                  d="M 150,150 m -120,0 a 120,120 0 1,1 240,0 a 120,120 0 1,1 -240,0"
                />
              </defs>
              <text
                fill="rgb(251 241 222 / 0.5)"
                fontFamily="var(--font-mono)"
                fontSize="13"
                letterSpacing="2"
              >
                <textPath href="#circlePath" startOffset="0%">
                  {ringLabel}
                </textPath>
              </text>
            </svg>
          </div>

          <div className="relative z-2">
            <div
              className={`transition-all duration-500 ease-brand ${
                swapping ? "scale-[.86] -rotate-6 opacity-40" : "opacity-100"
              }`}
            >
              <Can c1={flavor.c1} c2={flavor.c2} label={flavor.name} size="xl" />
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2.5 justify-center max-w-[640px] mx-auto mb-7">
          {flavors.map((f, i) => (
            <button
              key={f.name}
              onClick={() => goTo(i)}
              className={`flex items-center gap-2 pl-2.5 pr-4 py-2.5 rounded-full border text-[12.5px] font-medium transition-all duration-300 ease-brand hover:-translate-y-0.5 ${
                i === active
                  ? "bg-cream/10 border-cream/50"
                  : "border-cream/18"
              }`}
            >
              <span
                className="w-2.5 h-2.5 rounded-full"
                style={{ background: `linear-gradient(135deg, ${f.c1}, ${f.c2})` }}
              />
              {f.name}
            </button>
          ))}
        </div>

        <div className="max-w-[480px] mx-auto text-center min-h-[70px]">
          <h3 key={`t-${active}`} className="text-2xl mb-2 animate-[fadeSwap_.5s_ease]">
            {flavor.name}
          </h3>
          <p key={`d-${active}`} className="text-[14.5px] text-cream/65 leading-relaxed animate-[fadeSwap_.5s_ease]">
            {flavor.desc}
          </p>
        </div>
      </div>
    </section>
  );
}
