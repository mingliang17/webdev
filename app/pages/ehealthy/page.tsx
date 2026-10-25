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
              <span className="text-xs font-mono text-[#FF8F6B]">Mixed Video</span>
              <span className="text-xs font-mono text-[#FBF1DE]/60">Closes automatically when finished</span>
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
                src="/images/ehealthy/goji_coffee/1.png"
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
                src="/images/ehealthy/goji_coffee/2.jpeg"
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
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-[#FBF1DE] leading-[1.05]">
              Goji Garden Coffee <br /> 枸杞花园咖啡
            </h1>

            <p className="text-3xl font-mono text-[#FF8F6B]">
              $61.00 <span className="text-xs text-[#FBF1DE]/50 font-normal">/ 6-Pack Cans</span>
            </p>

            <p className="text-lg text-[#FBF1DE]/80 leading-relaxed font-light">
              Ingredients: European Coffee Beans, Black Goji Berry <br />
              Product Details: 30 packages/box (2.5g/package)<br />
              Caffeine content in GojiGarden Coffee: 69mg<br />
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

        {/* Decaffineated coffee*/}

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
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-[#FBF1DE] leading-[1.05]">
              Goji Garden Decaffeineated <br /> 低因枸杞花园咖啡
            </h1>

            <p className="text-3xl font-mono text-[#FF8F6B]">
              $61.00 <span className="text-xs text-[#FBF1DE]/50 font-normal">/ 6-Pack Cans</span>
            </p>

            <p className="whitespace-pre-line text-lg text-[#FBF1DE]/80 leading-relaxed font-light">
              Ingredients: European Coffee Beans, Black Goji Berry <br />
              Product Details: 30 packages/box (2.5g/package)<br />
              Caffeine content in GojiGarden Coffee: 2.7mg<br />


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

      <section>
        <div className="text-center text-l font-mono">
          Research shows: Coffee Helps Prolong Life
          •	Consuming coffee everyday (three to four cups a day) show more benefits than harm across various health outcomes. <br />
          It was associated with reduced risks of all-cause mortality, cardiovascular mortality, cardiovascular disease, and several specific cancers as well as neurological, metabolic, and liver conditions. <br />  It also helps to protect the liver and prevent gallstones.
          •	Professional Manufacturing Technology:  Choosing the right roasting temperature and time as a safety standard to ensure that Acrylamide and Diterpenes are reduced to the lowest.<br />  Freeze-dried, instant drip coffee (powder form), maximizes the antioxidants of the coffee and with adding black goji berries, it is the most unique beauty coffee in the market. <br />

        </div>
      </section>

      {/* =========================================================================
          Phytotech
          ========================================================================= */}
      <section className="border-t border-white/10 bg-white/[0.02] py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Side: Title, Description, Price */}
            <div className="lg:col-span-6 space-y-6">
              <h2 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-[#FBF1DE] leading-[1.05]">
                Phytotech <br /> 诗豆
              </h2>

              <p className="text-3xl font-mono text-[#FFD3B8]">
                $84.00 <span className="text-xs text-[#FBF1DE]/50 font-normal">/ 6-Pack Cans</span>
              </p>

              <p className="text-lg text-[#FBF1DE]/80 leading-relaxed font-light">
                Ingredients: Soy, Banana (Original) Soy, Strawberry, Raspberry (Berry) <br />
                Product details: 30 packages/box (18g / package)<br />

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
      </section >
    </main >
  );
}