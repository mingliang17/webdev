import type { Tone } from "@/lib/shop";

type VideoBlockProps = {
  src?: string;
  poster?: string;
  title?: string;
  tone?: Tone;
  className?: string;
};

/** Video with a gradient placeholder when no `src` is provided. */
export default function VideoBlock({
  src,
  poster,
  title = "Featured video",
  tone,
  className = "media-video",
}: VideoBlockProps) {
  const style = tone
    ? ({ "--c1": tone.c1, "--c2": tone.c2 } as React.CSSProperties)
    : undefined;

  return (
    <div className={`media ${className}`} style={style}>
      {src ? (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={src}
          poster={poster}
          controls
          playsInline
          preload="metadata"
          aria-label={title}
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
          <span className="play-icon" aria-hidden="true">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
          <span className="font-mono text-xs uppercase tracking-[.12em] text-ink/55">
            {title}
          </span>
        </div>
      )}
    </div>
  );
}
