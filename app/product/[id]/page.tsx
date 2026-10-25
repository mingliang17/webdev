import { notFound } from "next/navigation";
import Link from "next/link";
import { bubbles } from "@/lib/bubbles";

// Pre-generates static paths for all bubbles (ideal for static hosting & deployment)
export function generateStaticParams() {
  return bubbles.map((bubble) => ({ id: String(bubble.id) }));
}

export default async function BubblePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const bubble = bubbles.find((b) => String(b.id) === id);

  if (!bubble) notFound();

  return (
    <main className="min-h-screen bg-[#0d0d0f] text-[#f7f5ef] font-sans antialiased selection:bg-[#ff6b35] selection:text-white">
      <div className="max-w-[1100px] mx-auto px-6 sm:px-8 pt-12 pb-24">

        {/* Navigation Breadcrumb */}
        <Link
          href="/"
          className="text-sm tracking-wider uppercase opacity-60 hover:opacity-100 inline-flex items-center gap-2 mb-12 transition-opacity"
        >
          ← Back to BePearls Enterprise
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left Column: Image and Video Media Slots */}
          <div className="lg:col-span-7 space-y-6">

            {/* Custom Image Container */}
            <div className="rounded-3xl overflow-hidden aspect-[4/3] bg-neutral-900 border border-white/10 shadow-2xl">
              <img
                src={bubble.image}
                alt={bubble.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Custom Looping Video Container */}
            <div className="rounded-3xl overflow-hidden aspect-[16/9] bg-neutral-900 border border-white/10 relative shadow-xl">
              <video
                src={bubble.videoUrl}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover opacity-90"
              />
              <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full text-xs tracking-wider uppercase border border-white/10">
                Custom Video Feed — Bubble #{bubble.id}
              </div>
            </div>

          </div>

          {/* Right Column: Title, Tagline, Description & Features */}
          <div className="lg:col-span-5 lg:sticky lg:top-12 space-y-8">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#ff6b35] font-semibold block mb-3">
                Custom Bubble Page #{bubble.id}
              </span>
              <h1 className="text-4xl sm:text-5xl font-light tracking-tight mb-4">
                {bubble.title}
              </h1>
              {bubble.price && (
                <p className="text-2xl font-medium text-white/90">
                  {bubble.price}
                </p>
              )}
            </div>

            <p className="text-lg text-white/70 leading-relaxed font-light">
              {bubble.tagline}
            </p>

            <div className="border-t border-white/10 pt-6">
              <h3 className="text-sm uppercase tracking-wider text-white/50 mb-3">
                Overview & Description
              </h3>
              <p className="text-white/80 leading-relaxed text-sm sm:text-base">
                {bubble.description}
              </p>
            </div>

            {bubble.features && bubble.features.length > 0 && (
              <div className="border-t border-white/10 pt-6">
                <h3 className="text-sm uppercase tracking-wider text-white/50 mb-4">
                  Key Highlights
                </h3>
                <ul className="space-y-3">
                  {bubble.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm text-white/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b35]" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="pt-4">
              <button className="w-full py-4 bg-[#ff6b35] text-white font-medium rounded-full hover:bg-[#e05a28] transition-colors shadow-lg shadow-[#ff6b35]/20">
                Explore Batch {bubble.id}
              </button>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}