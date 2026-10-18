import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bubble 4: Watermelon Fizz | Solstice Craft Ferments",
  description:
    "Juicy summer watermelon with crisp lime sparkle and revitalizing minerals. Fully independent page for Bubble 4.",
};

export default function BubbleFourPage() {
  return (
    <main className="min-h-screen bg-[#0D1814] text-[#FBF1DE] antialiased selection:bg-[#FF4E6E] selection:text-white">
      {/* =========================================================================
          TOP NAVIGATION BAR
          ========================================================================= */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#0D1814]/80 border-b border-white/10 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#FBF1DE]/70 hover:text-[#FF4E6E] transition-colors"
          >
            <span className="transition-transform group-hover:-translate-x-1">←</span>
            Back to Solstice
          </Link>

          {/* Quick Bubble Page Switcher */}
          <nav className="flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-full p-1 text-xs font-mono">
            <Link
              href="/pages/1"
              className="px-3 py-1 rounded-full text-[#FBF1DE]/60 hover:text-[#FBF1DE] hover:bg-white/10 transition-colors"
            >
              01
            </Link>
            <Link
              href="/pages/2"
              className="px-3 py-1 rounded-full text-[#FBF1DE]/60 hover:text-[#FBF1DE] hover:bg-white/10 transition-colors"
            >
              02
            </Link>
            <Link
              href="/pages/3"
              className="px-3 py-1 rounded-full text-[#FBF1DE]/60 hover:text-[#FBF1DE] hover:bg-white/10 transition-colors"
            >
              03
            </Link>
            <span className="px-3 py-1 rounded-full bg-[#FF4E6E] text-white font-bold shadow-sm">
              04
            </span>
            <Link
              href="/pages/5"
              className="px-3 py-1 rounded-full text-[#FBF1DE]/60 hover:text-[#FBF1DE] hover:bg-white/10 transition-colors"
            >
              05
            </Link>
          </nav>
        </div>
      </header>

      {/* =========================================================================
          HERO & MEDIA SHOWCASE
          ========================================================================= */}
      <section className="max-w-6xl mx-auto px-6 pt-12 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Visual Media Container */}
          <div className="lg:col-span-7 space-y-6">
            <div className="group relative rounded-3xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-neutral-900 to-[#1B2922] border border-white/15 shadow-2xl">
              <img
                src="/images/bubbles/bubble_4.png"
                alt="Bubble 4: Watermelon Fizz"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D1814]/85 via-transparent to-transparent opacity-60" />
              
              {/* Floating Badge */}
              <div className="absolute top-5 left-5 bg-[#0D1814]/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15 text-xs font-mono tracking-wider text-[#4FCB8F]">
                ● BATCH 04 / SUMMER CRISP
              </div>

              <div className="absolute bottom-5 left-5 right-5 flex justify-between items-end">
                <div>
                  <p className="text-xs font-mono uppercase text-[#FBF1DE]/60">Custom Media Slot</p>
                  <p className="text-sm font-semibold text-[#FBF1DE]">Crisp Watermelon Fizz Photography</p>
                </div>
                <span className="text-xs font-mono px-2.5 py-1 rounded bg-[#FF4E6E]/20 text-[#FF4E6E] border border-[#FF4E6E]/30">
                  Customizable
                </span>
              </div>
            </div>

            {/* Secondary Media / Mineral Specs Card */}
            <div className="rounded-2xl p-6 bg-white/[0.03] border border-white/10 backdrop-blur-sm flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="font-display text-lg text-[#FBF1DE]">Hydration Electrolytes & Mineral Salt</h4>
                <p className="text-sm text-[#FBF1DE]/60 mt-0.5">
                  Natural potassium and cold-extracted melon juice designed for effortless hydration.
                </p>
              </div>
              <button className="shrink-0 px-4 py-2 text-xs font-mono uppercase tracking-wider rounded-full bg-white/10 hover:bg-white/20 text-[#FBF1DE] transition-colors border border-white/15">
                View Electrolytes ↗
              </button>
            </div>
          </div>

          {/* Right Column: Editorial Copy, Pricing, & Customization Guide */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF4E6E]/15 border border-[#FF4E6E]/30 text-[#FF4E6E] text-xs font-mono uppercase tracking-widest mb-4">
                Bubble Page #04
              </div>
              <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-[#FBF1DE] leading-[1.05]">
                Watermelon Fizz
              </h1>
              <p className="text-2xl font-mono text-[#4FCB8F] mt-3">
                $42.00 <span className="text-xs text-[#FBF1DE]/50 font-normal">/ 6-Pack Cans</span>
              </p>
            </div>

            <p className="text-lg text-[#FBF1DE]/80 leading-relaxed font-light">
              Juicy watermelon, barely-there residual sweetness, and an effervescent champagne fizz that does all the refreshing heavy lifting.
            </p>

            {/* Developer Customization Hint */}
            <div className="p-4 rounded-xl bg-[#FF4E6E]/10 border border-[#FF4E6E]/20 text-xs font-mono text-[#FBF1DE]/80 space-y-1">
              <span className="text-[#FF4E6E] font-bold block">💡 Developer Note:</span>
              <p>
                This is a fully independent page located at <code className="text-white bg-black/40 px-1 py-0.5 rounded">app/pages/4/page.tsx</code>. You can customize the layout, text, pictures, or animations here without affecting any other bubble.
              </p>
            </div>

            {/* Flavor Tasting Radar */}
            <div className="border-t border-white/10 pt-6 space-y-3">
              <h3 className="text-xs font-mono uppercase tracking-widest text-[#FBF1DE]/50">
                Sensory Profile
              </h3>
              <div className="space-y-2">
                {[
                  { label: "Crisp Refreshment", val: "98%" },
                  { label: "Sparkling Effervescence", val: "90%" },
                  { label: "Juicy Melon Aroma", val: "84%" },
                  { label: "Subtle Lime Rind", val: "42%" },
                ].map((stat, i) => (
                  <div key={i} className="text-xs font-mono flex items-center justify-between">
                    <span className="text-[#FBF1DE]/70">{stat.label}</span>
                    <div className="flex items-center gap-3">
                      <div className="w-28 h-1.5 rounded-full bg-white/10 overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-[#FF4E6E] to-[#4FCB8F]"
                          style={{ width: stat.val }}
                        />
                      </div>
                      <span className="text-[#4FCB8F] w-8 text-right">{stat.val}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Botanical Highlights */}
            <div className="border-t border-white/10 pt-6 space-y-3">
              <h3 className="text-xs font-mono uppercase tracking-widest text-[#FBF1DE]/50">
                Key Highlights
              </h3>
              <ul className="space-y-2 text-sm text-[#FBF1DE]/80">
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF4E6E]" />
                  100% cold-pressed organic heirloom watermelon
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4FCB8F]" />
                  A hint of Persian lime zest & pink sea salt
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF4E6E]" />
                  Ultra-low calorie (only 14 kcal per can)
                </li>
              </ul>
            </div>

            {/* Actions */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button className="flex-1 py-3.5 px-6 rounded-full bg-[#FF4E6E] hover:bg-[#ff5d7b] text-white font-semibold text-sm transition-all shadow-lg shadow-[#FF4E6E]/25">
                Acquire Batch 04
              </button>
              <Link
                href="/pages/5"
                className="py-3.5 px-6 rounded-full bg-white/10 hover:bg-white/15 text-[#FBF1DE] font-semibold text-sm transition-all border border-white/15 text-center"
              >
                Next: Bubble 05 →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          EDITORIAL NARRATIVE SECTION
          ========================================================================= */}
      <section className="border-t border-white/10 bg-white/[0.02] py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#FF4E6E]">
              Pure Summer Quench
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-[#FBF1DE]">
              The Chemistry of Solstice 04
            </h2>
            <p className="text-[#FBF1DE]/60 max-w-xl mx-auto text-sm leading-relaxed">
              Engineered to beat midday heatwaves with crisp, unadulterated botanical hydration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3">
              <div className="text-xl font-mono text-[#FF4E6E]">01 / Pressing</div>
              <h3 className="font-display text-lg text-[#FBF1DE]">Hydraulic Cold Extract</h3>
              <p className="text-xs text-[#FBF1DE]/70 leading-relaxed">
                Slow-crushed melon heart retaining complete cell vitality and crisp, clear sweetness.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3">
              <div className="text-xl font-mono text-[#4FCB8F]">02 / Sparkle</div>
              <h3 className="font-display text-lg text-[#FBF1DE]">Natural Champagne Carbonation</h3>
              <p className="text-xs text-[#FBF1DE]/70 leading-relaxed">
                Secondary bottle conditioning produces ultra-fine bubbles that feel crisp without heavy bloating.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3">
              <div className="text-xl font-mono text-[#FBF1DE]">03 / Minerals</div>
              <h3 className="font-display text-lg text-[#FBF1DE]">Electrolyte Balance</h3>
              <p className="text-xs text-[#FBF1DE]/70 leading-relaxed">
                Naturally packed with L-citrulline and bioavailable potassium for rapid cell rehydration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FOOTER / NEXT BUBBLE TEASER
          ========================================================================= */}
      <footer className="border-t border-white/10 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <Link
            href="/pages/3"
            className="group flex items-center gap-2 text-xs font-mono text-[#FBF1DE]/70 hover:text-white"
          >
            <span className="transition-transform group-hover:-translate-x-1">←</span>
            Previous: Bubble 3 (Dragon Bloom)
          </Link>
          <Link
            href="/pages/5"
            className="group flex items-center gap-3 px-5 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-sm font-mono text-[#FBF1DE] transition-all"
          >
            <span>Jump to Bubble 5: Mango Sunset</span>
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </footer>
    </main>
  );
}
