import Link from "next/link";
import { Metadata } from "next";
import { bubbles } from "@/lib/bubbles";

export const metadata: Metadata = {
  title: "All Bubble Pages | Solstice Ferments",
  description: "Directory of all 5 independent bubble pages for Solstice.",
};

export default function BubbleIndexPage() {
  return (
    <main className="min-h-screen bg-[#0E1713] text-[#FBF1DE] antialiased selection:bg-[#FF6B35] selection:text-[#0E1713] py-16 px-6">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#FBF1DE]/70 hover:text-[#FF6B35] transition-colors"
          >
            <span className="transition-transform group-hover:-translate-x-1">←</span>
            Back to Solstice
          </Link>
          <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/10 text-[#FBF1DE]/70">
            5 Independent Pages
          </span>
        </div>

        <div className="space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-[#FF6B35]">
            Modular Showcase
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-[#FBF1DE]">
            Independent Bubble Pages
          </h1>
          <p className="text-[#FBF1DE]/70 max-w-2xl leading-relaxed text-sm sm:text-base">
            Each bubble now routes to its own fully standalone page file. You can customize the layout, text, pictures, and interactive logic in each file independently.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bubbles.map((b) => (
            <Link
              key={b.id}
              href={`/pages/${b.id}`}
              className="group rounded-3xl p-6 bg-white/[0.03] border border-white/10 hover:border-white/30 hover:bg-white/[0.06] transition-all flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-neutral-900 border border-white/10 relative">
                  <img
                    src={b.image}
                    alt={b.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-mono text-[#FBF1DE]">
                    Bubble 0{b.id}
                  </div>
                </div>

                <div>
                  <h3 className="font-display text-xl text-[#FBF1DE] group-hover:text-[#FF6B35] transition-colors">
                    {b.title}
                  </h3>
                  <p className="text-xs text-[#FBF1DE]/60 mt-1.5 leading-relaxed line-clamp-2">
                    {b.tagline}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                <code className="text-[#FBF1DE]/50">app/pages/{b.id}/page.tsx</code>
                <span className="text-[#FF6B35] group-hover:translate-x-1 transition-transform">
                  Open →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
