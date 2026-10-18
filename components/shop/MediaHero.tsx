import Link from "next/link";
import Media from "./Media";
import type { Tone } from "@/lib/shop";

type MediaHeroProps = {
  eyebrow?: string;
  title: string;
  body?: string;
  image?: string;
  tone?: Tone;
  cta?: { label: string; href: string };
};

/** Key image banner with an overlaid text card. Used on page_1 and categories. */
export default function MediaHero({
  eyebrow,
  title,
  body,
  image,
  tone,
  cta,
}: MediaHeroProps) {
  return (
    <section className="page-top">
      <div className="shell">
        <Media
          src={image}
          alt={image ? title : "Key image"}
          tone={tone}
          className="media-banner"
          priority
          sizes="(min-width: 1180px) 1116px, 100vw"
        >
          <div className="banner-card">
            {eyebrow && <div className="eyebrow">{eyebrow}</div>}
            <h1 className="mt-2.5 text-[clamp(32px,5vw,56px)]">{title}</h1>
            {body && <p className="body-copy mt-4">{body}</p>}
            {cta && (
              <Link href={cta.href} className="btn btn-primary mt-6">
                {cta.label}
              </Link>
            )}
          </div>
        </Media>
      </div>
    </section>
  );
}
