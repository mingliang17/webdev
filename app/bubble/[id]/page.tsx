import { notFound } from "next/navigation";
import Link from "next/link";
import { bubbles } from "@/lib/bubbles";

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
    <main className="min-h-screen bg-ink text-cream">
      <div className="max-w-[900px] mx-auto px-8 pt-16 pb-24">
        <Link
          href="/"
          className="eyebrow text-cream/60 inline-flex items-center gap-2 mb-10 hover:text-cream transition-colors"
        >
          ← Back to Solstice
        </Link>

        <div className="rounded-[28px] overflow-hidden mb-10 aspect-[16/9]">
          <img
            src={bubble.image}
            alt={bubble.title}
            className="w-full h-full object-cover"
          />
        </div>

        <h1 className="text-[clamp(36px,6vw,64px)] mb-5">{bubble.title}</h1>
        <p className="text-cream/70 text-lg leading-relaxed max-w-[560px]">
          {bubble.description}
        </p>
      </div>
    </main>
  );
}
