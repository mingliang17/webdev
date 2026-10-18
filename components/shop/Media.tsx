import Image from "next/image";
import type { Tone } from "@/lib/shop";

type MediaProps = {
  src?: string;
  alt: string;
  tone?: Tone;
  /** Size/shape class, e.g. "media-banner", "media-card", "media-product" */
  className?: string;
  priority?: boolean;
  sizes?: string;
  children?: React.ReactNode;
};

/** Image with a gradient placeholder when no `src` is provided. */
export default function Media({
  src,
  alt,
  tone,
  className = "media-card",
  priority = false,
  sizes = "(min-width: 1024px) 25vw, 50vw",
  children,
}: MediaProps) {
  const style = tone
    ? ({ "--c1": tone.c1, "--c2": tone.c2 } as React.CSSProperties)
    : undefined;

  return (
    <div className={`media ${className}`} style={style}>
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          unoptimized
          sizes={sizes}
          priority={priority}
          className="object-cover"
        />
      ) : (
        <span className="media-placeholder">{alt}</span>
      )}
      {children}
    </div>
  );
}
