import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bubble 3: Dragon Bloom Tropical | Solstice Craft Ferments",
  description:
    "Dragonfruit sweetness meeting fermented tea's sharp edge and rare snow lotus botanicals. Fully independent page for Bubble 3.",
};

export default function BubbleThreePage() {
  return (
    <main className="min-h-screen bg-[#0E121B] text-[#FBF1DE] antialiased selection:bg-[#D946EF] selection:text-white">
      {/* =========================================================================
          TOP NAVIGATION BAR
          ========================================================================= */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#0E121B]/80 border-b border-white/10 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#FBF1DE]/70 hover:text-[#D946EF] transition-colors"
          >
            <span className="transition-transform group-hover:-translate-x-1">←</span>
            Back to BePearls Enterprise
          </Link>

          {/* Quick Bubble Page Switcher */}
          <nav className="flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-full p-1 text-xs font-mono">
            <Link
              href="/pages/nifashion"
              className="px-3 py-1 rounded-full text-[#FBF1DE]/60 hover:text-[#FBF1DE] hover:bg-white/10 transition-colors"
            >
              01
            </Link>
            <Link
              href="/pages/ehealthy"
              className="px-3 py-1 rounded-full text-[#FBF1DE]/60 hover:text-[#FBF1DE] hover:bg-white/10 transition-colors"
            >
              02
            </Link>
            <span className="px-3 py-1 rounded-full bg-[#D946EF] text-white font-bold shadow-sm">
              03
            </span>
            <Link
              href="/pages/uslandreseller"
              className="px-3 py-1 rounded-full text-[#FBF1DE]/60 hover:text-[#FBF1DE] hover:bg-white/10 transition-colors"
            >
              04
            </Link>
            <Link
              href="/pages/embroidery"
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
            <div className="group relative rounded-3xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-neutral-900 to-[#19192C] border border-white/15 shadow-2xl">
              <img
                src="/images/bubbles/bubble_3.png"
                alt="Bubble 3: Dragon Bloom Tropical"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E121B]/85 via-transparent to-transparent opacity-60" />

              {/* Floating Badge */}
              <div className="absolute top-5 left-5 bg-[#0E121B]/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15 text-xs font-mono tracking-wider text-[#C6E23D]">
                ● BATCH 03 / ALPINE SNOW LOTUS
              </div>

              <div className="absolute bottom-5 left-5 right-5 flex justify-between items-end">
                <div>
                  <p className="text-xs font-mono uppercase text-[#FBF1DE]/60">Custom Media Slot</p>
                  <p className="text-sm font-semibold text-[#FBF1DE]">Tianshan Flora & Botanical Bloom</p>
                </div>
                <span className="text-xs font-mono px-2.5 py-1 rounded bg-[#D946EF]/20 text-[#D946EF] border border-[#D946EF]/30">
                  Customizable
                </span>
              </div>
            </div>

            {/* Secondary Media / Fermentation Specs Card */}
            <div className="rounded-2xl p-6 bg-white/[0.03] border border-white/10 backdrop-blur-sm flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="font-display text-lg text-[#FBF1DE]">Wild Mountain Fermentation</h4>
                <p className="text-sm text-[#FBF1DE]/60 mt-0.5">
                  Infused with high-elevation Saussurea involucrata and rich dragonfruit pigment.
                </p>
              </div>
              <button className="shrink-0 px-4 py-2 text-xs font-mono uppercase tracking-wider rounded-full bg-white/10 hover:bg-white/20 text-[#FBF1DE] transition-colors border border-white/15">
                Inspect Batch ↗
              </button>
            </div>
          </div>

          {/* Right Column: Editorial Copy, Pricing, & Customization Guide */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D946EF]/15 border border-[#D946EF]/30 text-[#D946EF] text-xs font-mono uppercase tracking-widest mb-4">
                Bubble Page #03
              </div>
              <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-[#FBF1DE] leading-[1.05]">
                Dragon Bloom Tropical
              </h1>
              <p className="text-2xl font-mono text-[#C6E23D] mt-3">
                $46.00 <span className="text-xs text-[#FBF1DE]/50 font-normal">/ 6-Pack Cans</span>
              </p>
            </div>

            <p className="text-lg text-[#FBF1DE]/80 leading-relaxed font-light">
              Dragonfruit sweetness meeting fermented tea's tart, mysterious edge.
              Tropical, vivid, and fortified with alpine glacial botanicals.
            </p>

            {/* Developer Customization Hint */}
            <div className="p-4 rounded-xl bg-[#D946EF]/10 border border-[#D946EF]/20 text-xs font-mono text-[#FBF1DE]/80 space-y-1">
              <span className="text-[#D946EF] font-bold block">💡 Developer Note:</span>
              <p>
                This is a fully independent page located at <code className="text-white bg-black/40 px-1 py-0.5 rounded">app/pages/snowlotus/page.tsx</code>. You can customize the layout, text, pictures, or animations here without affecting any other bubble.
              </p>
            </div>

            {/* Flavor Tasting Radar */}
            <div className="border-t border-white/10 pt-6 space-y-3">
              <h3 className="text-xs font-mono uppercase tracking-widest text-[#FBF1DE]/50">
                Sensory Profile
              </h3>
              <div className="space-y-2">
                {[
                  { label: "Tropical Radiance", val: "95%" },
                  { label: "Antioxidant Density", val: "91%" },
                  { label: "Fermentation Zing", val: "75%" },
                  { label: "Earth & Alpine Depth", val: "68%" },
                ].map((stat, i) => (
                  <div key={i} className="text-xs font-mono flex items-center justify-between">
                    <span className="text-[#FBF1DE]/70">{stat.label}</span>
                    <div className="flex items-center gap-3">
                      <div className="w-28 h-1.5 rounded-full bg-white/10 overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-[#D946EF] to-[#C6E23D]"
                          style={{ width: stat.val }}
                        />
                      </div>
                      <span className="text-[#C6E23D] w-8 text-right">{stat.val}</span>
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
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D946EF]" />
                  Wild crimson dragonfruit reduction
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C6E23D]" />
                  Saussurea alpine snow flower botanical extract
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D946EF]" />
                  Polyphenol-dense raw fermentation
                </li>
              </ul>
            </div>

            {/* Actions */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button className="flex-1 py-3.5 px-6 rounded-full bg-[#D946EF] hover:bg-[#e05af4] text-white font-semibold text-sm transition-all shadow-lg shadow-[#D946EF]/25">
                Acquire Batch 03
              </button>
              <Link
                href="/pages/uslandreseller"
                className="py-3.5 px-6 rounded-full bg-white/10 hover:bg-white/15 text-[#FBF1DE] font-semibold text-sm transition-all border border-white/15 text-center"
              >
                Next: Bubble 04 →
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
            <span className="text-xs font-mono uppercase tracking-widest text-[#D946EF]">
              Alpine Botanicals
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-[#FBF1DE]">
              The High-Mountain Enigma of Solstice 03
            </h2>
            <p className="text-[#FBF1DE]/60 max-w-xl mx-auto text-sm leading-relaxed">
              Merging deep equatorial fruit intensity with flora thriving above 4,000 meters snow lines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3">
              <div className="text-xl font-mono text-[#D946EF]">01 / Flora</div>
              <h3 className="font-display text-lg text-[#FBF1DE]">Snow Peak Resilience</h3>
              <p className="text-xs text-[#FBF1DE]/70 leading-relaxed">
                Alpine botanicals harvested under strict ecological limits, infusing bio-active flavonoid resilience.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3">
              <div className="text-xl font-mono text-[#C6E23D]">02 / Crimson</div>
              <h3 className="font-display text-lg text-[#FBF1DE]">Deep Magenta Hues</h3>
              <p className="text-xs text-[#FBF1DE]/70 leading-relaxed">
                Natural betalain pigments from whole sun-grown dragonfruit create an electric hue with zero dyes.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3">
              <div className="text-xl font-mono text-[#FBF1DE]">03 / Complexity</div>
              <h3 className="font-display text-lg text-[#FBF1DE]">Layered Tannins</h3>
              <p className="text-xs text-[#FBF1DE]/70 leading-relaxed">
                Fermented aged pu'erh tea creates a profound structural backbone that lingers on the palate.
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
            href="/pages/ehealthy"
            className="group flex items-center gap-2 text-xs font-mono text-[#FBF1DE]/70 hover:text-white"
          >
            <span className="transition-transform group-hover:-translate-x-1">←</span>
            Previous: Bubble 2 (Rose Peach Wave)
          </Link>
          <Link
            href="/pages/uslandreseller"
            className="group flex items-center gap-3 px-5 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-sm font-mono text-[#FBF1DE] transition-all"
          >
            <span>Jump to Bubble 4: Watermelon Fizz</span>
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </footer>
    </main>
  );
}
