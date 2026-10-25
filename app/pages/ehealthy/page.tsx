"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function BubbleTwoPage() {
  const [isOpen, setIsOpen] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true; // Required by browsers for autoplay compliance
      videoRef.current.play().catch((err) => {
        console.log("Autoplay prevented:", err);
      });
    }
  }, []);

  const handleClose = () => {
    setIsExiting(true);
    setTimeout(() => {
      setIsOpen(false);
    }, 300); // Matches the 300ms transition duration
  };

  const handleVideoEnd = () => {
    handleClose();
  };

  return (
    <main className="min-h-screen bg-[#140F13] text-[#FBF1DE] antialiased selection:bg-[#FF4E86] selection:text-white relative">
      {/* =========================================================================
          LARGE AUTO-PLAYING VIDEO POP-OUT MODAL WITH FADE-OUT ANIMATION
          ========================================================================= */}
      {isOpen && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-lg p-4 sm:p-8 transition-opacity duration-300 ease-out ${isExiting ? "opacity-0" : "opacity-100"
            }`}
        >
          <div
            className={`relative w-full max-w-5xl bg-[#1A1117] rounded-3xl overflow-hidden border border-white/25 shadow-2xl transition-all duration-300 ease-out ${isExiting ? "scale-95 opacity-0" : "scale-100 opacity-100"
              }`}
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 z-10 bg-black/70 hover:bg-black text-white rounded-full w-9 h-9 flex items-center justify-center text-xs font-mono transition-colors"
              aria-label="Close video"
            >
              ✕
            </button>
            <video
              ref={videoRef}
              autoPlay
              muted
              playsInline
              controls
              onEnded={handleVideoEnd}
              className="w-full aspect-video object-cover max-h-[80vh]"
              poster="/images/bubbles/bubble_2.png"
            >
              <source src="/video/coffee/coffee.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="p-4 bg-[#140F13] flex items-center justify-between border-t border-white/10">
              <span className="text-xs font-mono text-[#FF8F6B]">● LIVE BATCH 02 INITIAL PREVIEW</span>
              <span className="text-xs font-mono text-[#FBF1DE]/60">Closing automatically when finished</span>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          TOP NAVIGATION BAR
          ========================================================================= */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-[#140F13]/80 border-b border-white/10 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#FBF1DE]/70 hover:text-[#FF4E86] transition-colors"
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
            <span className="px-3 py-1 rounded-full bg-[#FF4E86] text-white font-bold shadow-sm">
              02
            </span>
            <Link
              href="/pages/snowlotus"
              className="px-3 py-1 rounded-full text-[#FBF1DE]/60 hover:text-[#FBF1DE] hover:bg-white/10 transition-colors"
            >
              03
            </Link>
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
          TOP HALF: 2 Images on Left | Title, Description, & Price on Right
          ========================================================================= */}
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Side: 2 Different Images */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="group relative rounded-2xl overflow-hidden aspect-[3/4] bg-neutral-900 border border-white/15 shadow-xl">
              <img
                src="/images/bubbles/bubble_2.png"
                alt="Bubble 2 Primary View"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#140F13]/80 via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-3 left-3 text-[10px] font-mono tracking-wider bg-[#140F13]/80 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/15 text-[#FFD3B8]">
                View 01
              </div>
            </div>

            <div className="group relative rounded-2xl overflow-hidden aspect-[3/4] bg-neutral-900 border border-white/15 shadow-xl mt-8">
              <img
                src="/images/bubbles/bubble_2.png"
                alt="Bubble 2 Secondary Angle"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter saturate-125"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#140F13]/80 via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-3 left-3 text-[10px] font-mono tracking-wider bg-[#140F13]/80 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/15 text-[#FF4E86]">
                View 02
              </div>
            </div>
          </div>

          {/* Right Side: Title, Description, Price */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF4E86]/15 border border-[#FF4E86]/30 text-[#FF4E86] text-xs font-mono uppercase tracking-widest">
              Top Half Showcase
            </div>

            <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-[#FBF1DE] leading-[1.05]">
              Goji Garden Coffee <br /> 枸杞花园咖啡
            </h1>

            <p className="text-3xl font-mono text-[#FF8F6B]">
              $44.00 <span className="text-xs text-[#FBF1DE]/50 font-normal">/ 6-Pack Cans</span>
            </p>

            <p className="text-lg text-[#FBF1DE]/80 leading-relaxed font-light">
              Soft peach flesh rounded out with a whisper of rose. Fully independent formulation designed to nourish vitality and elevate your daily ceremony with smooth botanical notes.
            </p>

            <div className="pt-2 flex gap-4">
              <button
                onClick={() => {
                  setIsExiting(false);
                  setIsOpen(true);
                  if (videoRef.current) {
                    videoRef.current.currentTime = 0;
                    videoRef.current.play().catch(() => { });
                  }
                }}
                className="py-3 px-6 rounded-full bg-[#FF4E86] hover:bg-[#ff5d92] text-white font-semibold text-sm transition-all shadow-lg shadow-[#FF4E86]/25"
              >
                Replay Pop-out Video
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          BOTTOM HALF: Title, Description, & Price on Left | 2 Images on Right
          ========================================================================= */}
      <section className="border-t border-white/10 bg-white/[0.02] py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Side: Title, Description, Price */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF8F6B]/15 border border-[#FF8F6B]/30 text-[#FF8F6B] text-xs font-mono uppercase tracking-widest">
                Bottom Half Showcase
              </div>

              <h2 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-[#FBF1DE] leading-[1.05]">
                Botanical Alchemy <br /> 玫瑰蜜桃风味
              </h2>

              <p className="text-3xl font-mono text-[#FFD3B8]">
                $44.00 <span className="text-xs text-[#FBF1DE]/50 font-normal">/ 6-Pack Cans</span>
              </p>

              <p className="text-lg text-[#FBF1DE]/80 leading-relaxed font-light">
                Balanced with the intense fragrance of freshly picked Damascus roses against the sweet tang of organic white peach. Never heat-treated to preserve living biological benefits.
              </p>

              <div className="pt-2">
                <Link
                  href="/pages/snowlotus"
                  className="inline-block py-3 px-6 rounded-full bg-white/10 hover:bg-white/15 text-[#FBF1DE] font-semibold text-sm transition-all border border-white/15"
                >
                  Next: Bubble 03 →
                </Link>
              </div>
            </div>

            {/* Right Side: 2 Different Images (Flipped Order) */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="group relative rounded-2xl overflow-hidden aspect-[3/4] bg-neutral-900 border border-white/15 shadow-xl mt-8">
                <img
                  src="/images/bubbles/bubble_2.png"
                  alt="Detail Angle 01"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#140F13]/80 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-3 left-3 text-[10px] font-mono tracking-wider bg-[#140F13]/80 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/15 text-[#FFD3B8]">
                  Detail 01
                </div>
              </div>

              <div className="group relative rounded-2xl overflow-hidden aspect-[3/4] bg-neutral-900 border border-white/15 shadow-xl">
                <img
                  src="/images/bubbles/bubble_2.png"
                  alt="Detail Angle 02"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#140F13]/80 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-3 left-3 text-[10px] font-mono tracking-wider bg-[#140F13]/80 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/15 text-[#FF4E86]">
                  Detail 02
                </div>
              </div>
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
            href="/pages/nifashion"
            className="group flex items-center gap-2 text-xs font-mono text-[#FBF1DE]/70 hover:text-white"
          >
            <span className="transition-transform group-hover:-translate-x-1">←</span>
            Previous: Bubble 1 (Citrus Bloom)
          </Link>
          <Link
            href="/pages/snowlotus"
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