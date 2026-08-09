"use client";

import { useEffect, useRef } from "react";

const steps = [
  {
    num: "01",
    title: "Brew & culture",
    body: "Organic tea is brewed fresh, cooled, and introduced to a live SCOBY culture in small batches.",
  },
  {
    num: "02",
    title: "Ferment slow",
    body: "Three weeks of quiet fermentation lets the culture consume the sugar and build natural fizz.",
  },
  {
    num: "03",
    title: "Flavor & can",
    body: "Real fruit and botanicals go in cold, then it's canned unpasteurized to keep the cultures alive.",
  },
];

export default function ProcessStrip() {
  const gridRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    const line = lineRef.current;
    if (!grid || !line) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.3 }
    );
    grid.querySelectorAll("[data-step]").forEach((el) => io.observe(el));

    const lineIo = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) line.classList.add("draw");
      },
      { threshold: 0.4 }
    );
    lineIo.observe(line);

    return () => {
      io.disconnect();
      lineIo.disconnect();
    };
  }, []);

  return (
    <section id="process" className="bg-cream-2 py-32">
      <div className="max-w-[1180px] mx-auto px-8">
        <div className="max-w-[640px] mx-auto mb-14 text-center">
          <div className="eyebrow">No shortcuts</div>
          <h2 className="text-[clamp(32px,5vw,52px)] mt-2.5">
            Three steps. Three weeks. Zero rush.
          </h2>
        </div>

        <div ref={gridRef} className="relative grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0 mt-5">
          <div
            ref={lineRef}
            className="hidden md:block absolute top-[26px] left-[16.6%] right-[16.6%] h-px bg-line overflow-hidden z-0"
          >
            <div className="process-line-fill absolute inset-0 bg-citrus origin-left scale-x-0 transition-transform duration-[1400ms] ease-brand" />
          </div>

          {steps.map((step) => (
            <div
              key={step.num}
              data-step
              className="animate-in relative z-1 text-center px-6"
            >
              <div className="w-13 h-13 rounded-full bg-ink text-cream flex items-center justify-center mx-auto mb-5.5 font-mono text-sm">
                {step.num}
              </div>
              <h4 className="text-[19px] mb-2.5">{step.title}</h4>
              <p className="text-sm text-ink/65 leading-relaxed max-w-65 mx-auto">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
