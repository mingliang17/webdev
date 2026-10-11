import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bubble 5: Mango Sunset | Solstice Craft Ferments",
  description:
    "Sun-ripened Alphonso mango with a velvety texture and perfumed finish. Fully independent page for Bubble 5.",
};

export default function BubbleFivePage() {
  return (
    <main className="min-h-screen bg-[#18130D] text-[#FBF1DE] antialiased selection:bg-[#FFA94D] selection:text-[#18130D]">
      {/* =========================================================================
          TOP NAVIGATION BAR
          ========================================================================= */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#18130D]/80 border-b border-white/10 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#FBF1DE]/70 hover:text-[#FFA94D] transition-colors"
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
            <Link
              href="/bubble/2"
              className="px-3 py-1 rounded-full text-[#FBF1DE]/60 hover:text-[#FBF1DE] hover:bg-white/10 transition-colors"
            >
              02
            </Link>
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
            <span className="px-3 py-1 rounded-full bg-[#FFA94D] text-[#18130D] font-bold shadow-sm">
              05
            </span>
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
            <div className="group relative rounded-3xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-neutral-900 to-[#2A1E11] border border-white/15 shadow-2xl">
              <img
                src="/images/bubbles/bubble_5.png"
                alt="Bubble 5: Mango Sunset"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#18130D]/85 via-transparent to-transparent opacity-60" />
              
              {/* Floating Badge */}
              <div className="absolute top-5 left-5 bg-[#18130D]/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15 text-xs font-mono tracking-wider text-[#FFD37A]">
                ● BATCH 05 / GOLDEN HOUR RESERVE
              </div>

              <div className="absolute bottom-5 left-5 right-5 flex justify-between items-end">
                <div>
                  <p className="text-xs font-mono uppercase text-[#FBF1DE]/60">Custom Media Slot</p>
                  <p className="text-sm font-semibold text-[#FBF1DE]">Alphonso Mango Sunset Showcase</p>
                </div>
                <span className="text-xs font-mono px-2.5 py-1 rounded bg-[#FFA94D]/20 text-[#FFA94D] border border-[#FFA94D]/30">
                  Customizable
                </span>
              </div>
            </div>

            {/* Secondary Media / Tropical Harvest Card */}
            <div className="rounded-2xl p-6 bg-white/[0.03] border border-white/10 backdrop-blur-sm flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="font-display text-lg text-[#FBF1DE]">Sun-Ripened Alphonso Harvest</h4>
                <p className="text-sm text-[#FBF1DE]/60 mt-0.5">
                  Single-estate Indian Alphonso mangoes, revered for saffron-scented aromatics and rich nectar body.
                </p>
              </div>
              <button className="shrink-0 px-4 py-2 text-xs font-mono uppercase tracking-wider rounded-full bg-white/10 hover:bg-white/20 text-[#FBF1DE] transition-colors border border-white/15">
                Harvest Details ↗
              </button>
            </div>
          </div>

          {/* Right Column: Editorial Copy, Pricing, & Customization Guide */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFA94D]/15 border border-[#FFA94D]/30 text-[#FFA94D] text-xs font-mono uppercase tracking-widest mb-4">
                Bubble Page #05
              </div>
              <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-[#FBF1DE] leading-[1.05]">
                Mango Sunset
              </h1>
              <p className="text-2xl font-mono text-[#FFD37A] mt-3">
                $50.00 <span className="text-xs text-[#FBF1DE]/50 font-normal">/ 6-Pack Cans</span>
              </p>
            </div>

            <p className="text-lg text-[#FBF1DE]/80 leading-relaxed font-light">
              Sun-ripe mango with a velvety texture and perfumed finish. The closest thing in our cellar to a golden tropical soda — without the sugar crash.
            </p>

            {/* Developer Customization Hint */}
            <div className="p-4 rounded-xl bg-[#FFA94D]/10 border border-[#FFA94D]/20 text-xs font-mono text-[#FBF1DE]/80 space-y-1">
              <span className="text-[#FFA94D] font-bold block">💡 Developer Note:</span>
              <p>
                This is a fully independent page located at <code className="text-white bg-black/40 px-1 py-0.5 rounded">app/bubble/5/page.tsx</code>. You can customize the layout, text, pictures, or animations here without affecting any other bubble.
              </p>
            </div>

            {/* Flavor Tasting Radar */}
            <div className="border-t border-white/10 pt-6 space-y-3">
              <h3 className="text-xs font-mono uppercase tracking-widest text-[#FBF1DE]/50">
                Sensory Profile
              </h3>
              <div className="space-y-2">
                {[
                  { label: "Golden Sweetness", val: "88%" },
                  { label: "Velvety Body", val: "94%" },
                  { label: "Perfumed Aromatics", val: "91%" },
                  { label: "Effervescent Spark", val: "62%" },
                ].map((stat, i) => (
                  <div key={i} className="text-xs font-mono flex items-center justify-between">
                    <span className="text-[#FBF1DE]/70">{stat.label}</span>
                    <div className="flex items-center gap-3">
                      <div className="w-28 h-1.5 rounded-full bg-white/10 overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-[#FFD37A] to-[#FFA94D]"
                          style={{ width: stat.val }}
                        />
                      </div>
                      <span className="text-[#FFD37A] w-8 text-right">{stat.val}</span>
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
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FFA94D]" />
                  Pure single-origin Alphonso mango nectar
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FFD37A]" />
                  Madagascar vanilla pod cold infusion
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FFA94D]" />
                  Rich in natural beta-carotene and digestive prebiotics
                </li>
              </ul>
            </div>

            {/* Actions */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button className="flex-1 py-3.5 px-6 rounded-full bg-[#FFA94D] hover:bg-[#ffb564] text-[#18130D] font-semibold text-sm transition-all shadow-lg shadow-[#FFA94D]/25">
                Acquire Batch 05
              </button>
              <Link
                href="/bubble/1"
                className="py-3.5 px-6 rounded-full bg-white/10 hover:bg-white/15 text-[#FBF1DE] font-semibold text-sm transition-all border border-white/15 text-center"
              >
                Back to Bubble 01 ↺
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
            <span className="text-xs font-mono uppercase tracking-widest text-[#FFA94D]">
              Tropical Opulence
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-[#FBF1DE]">
              The Golden Hour of Solstice 05
            </h2>
            <p className="text-[#FBF1DE]/60 max-w-xl mx-auto text-sm leading-relaxed">
              Capturing the nostalgic warmth of late summer sunsets with luxurious fruit viscosity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3">
              <div className="text-xl font-mono text-[#FFD37A]">01 / Selection</div>
              <h3 className="font-display text-lg text-[#FBF1DE]">King of Mangoes</h3>
              <p className="text-xs text-[#FBF1DE]/70 leading-relaxed">
                Ratnagiri Alphonso mangoes, known for their golden hue and intense floral sweetness.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3">
              <div className="text-xl font-mono text-[#FFA94D]">02 / Conditioning</div>
              <h3 className="font-display text-lg text-[#FBF1DE]">Slow Mellowing</h3>
              <p className="text-xs text-[#FBF1DE]/70 leading-relaxed">
                Aged with whole split vanilla beans to round off natural fruit acidity into silky smoothness.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3">
              <div className="text-xl font-mono text-[#FBF1DE]">03 / Texture</div>
              <h3 className="font-display text-lg text-[#FBF1DE]">Probiotic Nectar</h3>
              <p className="text-xs text-[#FBF1DE]/70 leading-relaxed">
                Dense in living cultures yet clean-drinking, leaving a sun-drenched tropical memory.
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
            href="/bubble/4"
            className="group flex items-center gap-2 text-xs font-mono text-[#FBF1DE]/70 hover:text-white"
          >
            <span className="transition-transform group-hover:-translate-x-1">←</span>
            Previous: Bubble 4 (Watermelon Fizz)
          </Link>
          <Link
            href="/bubble/1"
            className="group flex items-center gap-3 px-5 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-sm font-mono text-[#FBF1DE] transition-all"
          >
            <span>Cycle to Bubble 1: Citrus Bloom</span>
            <span className="transition-transform group-hover:translate-x-1">↻</span>
          </Link>
        </div>
      </footer>
    </main>
  );
}
