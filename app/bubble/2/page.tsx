import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Coffee",
  description:
    "Soft peach flesh rounded out with a whisper of rose. Fully independent page for Bubble 2.",
};

export default function BubbleTwoPage() {
  return (
    <main className="min-h-screen bg-[#140F13] text-[#FBF1DE] antialiased selection:bg-[#FF4E86] selection:text-white">
      {/* =========================================================================
          TOP NAVIGATION BAR
          ========================================================================= */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#140F13]/80 border-b border-white/10 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#FBF1DE]/70 hover:text-[#FF4E86] transition-colors"
          >
            <span className="transition-transform group-hover:-translate-x-1">←</span>
            Back to Solstice
          </Link>

          {/* Quick Bubble Page Switcher */}
          <nav className="flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-full p-1 text-xs font-mono">
            <Link
              href="/bubble/1"
              className="px-3 py-1 rounded-full text-[#FBF1DE]/60 hover:text-[#FBF1DE] hover:bg-white/10 transition-colors"
            >
              01
            </Link>
            <span className="px-3 py-1 rounded-full bg-[#FF4E86] text-white font-bold shadow-sm">
              02
            </span>
            <Link
              href="/bubble/3"
              className="px-3 py-1 rounded-full text-[#FBF1DE]/60 hover:text-[#FBF1DE] hover:bg-white/10 transition-colors"
            >
              03
            </Link>
            <Link
              href="/bubble/4"
              className="px-3 py-1 rounded-full text-[#FBF1DE]/60 hover:text-[#FBF1DE] hover:bg-white/10 transition-colors"
            >
              04
            </Link>
            <Link
              href="/bubble/5"
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

            {/* Main Showcase Image */}
            <div className="group relative rounded-3xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-neutral-900 to-[#22131C] border border-white/15 shadow-2xl">
              <img
                src="/images/bubbles/bubble_2.png"
                alt="Bubble 2: Rose Peach Wave"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#140F13]/85 via-transparent to-transparent opacity-60" />

              {/* Floating Badge */}
              <div className="absolute top-5 left-5 bg-[#140F13]/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15 text-xs font-mono tracking-wider text-[#FFD3B8]">
                ● BATCH 02 / FLORAL INFUSION
              </div>

              <div className="absolute bottom-5 left-5 right-5 flex justify-between items-end">
                <div>
                  <p className="text-xs font-mono uppercase text-[#FBF1DE]/60">Custom Media Slot</p>
                  <p className="text-sm font-semibold text-[#FBF1DE]">Botanical Still Life Showcase</p>
                </div>
                <span className="text-xs font-mono px-2.5 py-1 rounded bg-[#FF4E86]/20 text-[#FF4E86] border border-[#FF4E86]/30">
                  Customizable
                </span>
              </div>
            </div>

            {/* Placeholder Video Player */}
            <div className="relative rounded-2xl overflow-hidden aspect-video bg-[#1A1117] border border-white/10 shadow-lg group flex items-center justify-center">
              <video
                controls
                className="w-full h-full object-cover"
                poster="/images/bubbles/bubble_2.png"
              >
                <source src="/video/coffee/coffee.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute top-4 left-4 pointer-events-none bg-[#140F13]/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-[10px] font-mono tracking-wider text-[#FF8F6B]">
                VIDEO PREVIEW
              </div>
            </div>

            {/* Secondary Media / Tasting Quote Block */}
            <div className="rounded-2xl p-6 bg-white/[0.03] border border-white/10 backdrop-blur-sm flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="font-display text-lg text-[#FBF1DE]">Botanical Infusion Notes</h4>
                <p className="text-sm text-[#FBF1DE]/60 mt-0.5">
                  Steeped with Damascus rose petals and white peach flesh for an iced-tea smoothness.
                </p>
              </div>
              <button className="shrink-0 px-4 py-2 text-xs font-mono uppercase tracking-wider rounded-full bg-white/10 hover:bg-white/20 text-[#FBF1DE] transition-colors border border-white/15">
                Lab Profile ↗
              </button>
            </div>
          </div>

          {/* Right Column: Editorial Copy, Pricing, & Customization Guide */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF4E86]/15 border border-[#FF4E86]/30 text-[#FF4E86] text-xs font-mono uppercase tracking-widest mb-4">
                Bubble Page #02
              </div>
              <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-[#FBF1DE] leading-[1.05]">
                Rose Peach Wave
              </h1>
              <p className="text-2xl font-mono text-[#FF8F6B] mt-3">
                $44.00 <span className="text-xs text-[#FBF1DE]/50 font-normal">/ 6-Pack Cans</span>
              </p>
            </div>

            <p className="text-lg text-[#FBF1DE]/80 leading-relaxed font-light">
              Soft peach flesh rounded out with a whisper of rose. Reads like an artisanal iced tea, drinks with an airy, effortless effervescence.
            </p>

            {/* Developer Customization Hint */}
            <div className="p-4 rounded-xl bg-[#FF4E86]/10 border border-[#FF4E86]/20 text-xs font-mono text-[#FBF1DE]/80 space-y-1">
              <span className="text-[#FF4E86] font-bold block">💡 Developer Note:</span>
              <p>
                This is a fully independent page located at <code className="text-white bg-black/40 px-1 py-0.5 rounded">app/bubble/2/page.tsx</code>. You can customize the layout, text, pictures, or animations here without affecting any other bubble.
              </p>
            </div>

            {/* Flavor Tasting Radar */}
            <div className="border-t border-white/10 pt-6 space-y-3">
              <h3 className="text-xs font-mono uppercase tracking-widest text-[#FBF1DE]/50">
                Sensory Profile
              </h3>
              <div className="space-y-2">
                {[
                  { label: "Floral Aromatics", val: "94%" },
                  { label: "Silky Peach Body", val: "88%" },
                  { label: "Gentle Effervescence", val: "65%" },
                  { label: "Tartness", val: "32%" },
                ].map((stat, i) => (
                  <div key={i} className="text-xs font-mono flex items-center justify-between">
                    <span className="text-[#FBF1DE]/70">{stat.label}</span>
                    <div className="flex items-center gap-3">
                      <div className="w-28 h-1.5 rounded-full bg-white/10 overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-[#FFD3B8] to-[#FF4E86]"
                          style={{ width: stat.val }}
                        />
                      </div>
                      <span className="text-[#FF8F6B] w-8 text-right">{stat.val}</span>
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
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF4E86]" />
                  Steam-distilled Damascus rosewater extract
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF4E86]" />
                  Tree-ripened organic white peach puree
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF4E86]" />
                  Naturally alkaline mountain spring base
                </li>
              </ul>
            </div>

            {/* Actions */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button className="flex-1 py-3.5 px-6 rounded-full bg-[#FF4E86] hover:bg-[#ff5d92] text-white font-semibold text-sm transition-all shadow-lg shadow-[#FF4E86]/25">
                Acquire Batch 02
              </button>
              <Link
                href="/bubble/3"
                className="py-3.5 px-6 rounded-full bg-white/10 hover:bg-white/15 text-[#FBF1DE] font-semibold text-sm transition-all border border-white/15 text-center"
              >
                Next: Bubble 03 →
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
            <span className="text-xs font-mono uppercase tracking-widest text-[#FF4E86]">
              Floral Alchemy
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-[#FBF1DE]">
              The Poetry of Solstice 02
            </h2>
            <p className="text-[#FBF1DE]/60 max-w-xl mx-auto text-sm leading-relaxed">
              Balancing the intense fragrance of freshly picked roses against the sweet tang of ripe white peach.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3">
              <div className="text-xl font-mono text-[#FFD3B8]">01 / Petals</div>
              <h3 className="font-display text-lg text-[#FBF1DE]">Damascus Rose Harvest</h3>
              <p className="text-xs text-[#FBF1DE]/70 leading-relaxed">
                Picked before sunrise while morning dew retains the delicate floral aromatic compounds.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3">
              <div className="text-xl font-mono text-[#FF4E86]">02 / Puree</div>
              <h3 className="font-display text-lg text-[#FBF1DE]">Cold-Pressed Peach</h3>
              <p className="text-xs text-[#FBF1DE]/70 leading-relaxed">
                Never heat-treated. The delicate stone fruit sugars feed the living cultures directly.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3">
              <div className="text-xl font-mono text-[#FF8F6B]">03 / Texture</div>
              <h3 className="font-display text-lg text-[#FBF1DE]">Velvet Mouthfeel</h3>
              <p className="text-xs text-[#FBF1DE]/70 leading-relaxed">
                Infused with micro-bubbles that dissolve softly on the palate without sharpness.
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
            href="/bubble/1"
            className="group flex items-center gap-2 text-xs font-mono text-[#FBF1DE]/70 hover:text-white"
          >
            <span className="transition-transform group-hover:-translate-x-1">←</span>
            Previous: Bubble 1 (Citrus Bloom)
          </Link>
          <Link
            href="/bubble/3"
            className="group flex items-center gap-3 px-5 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-sm font-mono text-[#FBF1DE] transition-all"
          >
            <span>Jump to Bubble 3: Dragon Bloom Tropical</span>
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </footer>
    </main>
  );
}