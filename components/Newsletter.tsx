"use client";

import { useState } from "react";

const marqueeItems = [
  "NI Fashion",
  "eHealthy",
  "Snow Lotus",
  "US Land Reseller",
  "Chinese Folk Embroidery",
];

export default function Newsletter() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <footer id="join" className="relative bg-ink text-cream overflow-hidden pt-28">
      <div className="absolute w-[420px] h-[420px] rounded-full blur-[70px] opacity-35 -top-24 -left-20 bg-guava animate-drift [animation-duration:20s]" />
      <div className="absolute w-[380px] h-[380px] rounded-full blur-[70px] opacity-35 -bottom-30 -right-16 bg-lime animate-drift [animation-duration:20s] [animation-delay:-6s]" />

      <div className="relative z-2 max-w-[640px] mx-auto text-center pb-22 px-8">
        <div className="eyebrow text-cream/60">Make your choices</div>
        <h2 className="text-[clamp(30px,4.4vw,46px)] my-3.5 mb-7.5">
          Be first to taste what&apos;s next.
        </h2>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
          className="flex gap-2.5 max-w-[420px] mx-auto flex-wrap justify-center"
        >
          <input
            type="email"
            required
            placeholder="you@email.com"
            className="flex-1 min-w-55 px-4.5 py-3.5 rounded-full border border-cream/25 bg-cream/6 text-cream text-sm outline-none placeholder:text-cream/40 transition-colors duration-300 ease-brand focus:border-citrus focus:bg-cream/10"
          />
          <button
            type="submit"
            className="px-6 py-3.5 rounded-full bg-citrus text-ink font-semibold text-sm transition-transform duration-300 ease-brand hover:-translate-y-0.5 hover:scale-102"
          >
            {submitted ? "You're in ✓" : "Sign up"}
          </button>
        </form>
      </div>

      <div className="relative z-2 overflow-hidden border-y border-cream/14 py-4">
        <div className="flex gap-10 whitespace-nowrap w-max animate-marquee">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={i}
              className="font-display font-bold text-[15px] flex items-center gap-10 opacity-70 after:content-['◆'] after:text-citrus after:text-[10px]"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="relative z-2 max-w-[1180px] mx-auto px-8 border-t border-cream/14 py-6.5 flex justify-between items-center flex-wrap gap-3 text-[12.5px] text-cream/55">
        <span>© 2026 Bepearls Enterprise</span>
        <div className="flex gap-4.5">
          <a href="#" className="hover:text-cream transition-colors">Instagram</a>
          <a href="#" className="hover:text-cream transition-colors">TikTok</a>
          <a href="#" className="hover:text-cream transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}
