import Link from "next/link";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  body?: string;
  /** "center" stacks and centres; "row" puts an optional link on the right. */
  align?: "center" | "row";
  linkHref?: string;
  linkLabel?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  body,
  align = "center",
  linkHref,
  linkLabel,
}: SectionHeadingProps) {
  if (align === "row") {
    return (
      <div className="section-head-row">
        <div>
          {eyebrow && <div className="eyebrow">{eyebrow}</div>}
          <h2 className="section-title">{title}</h2>
        </div>
        {linkHref && linkLabel && (
          <Link href={linkHref} className="btn-link">
            {linkLabel} →
          </Link>
        )}
      </div>
    );
  }

  return (
    <div className="section-head">
      {eyebrow && <div className="eyebrow">{eyebrow}</div>}
      <h2 className="section-title">{title}</h2>
      {body && <p className="lead mt-4">{body}</p>}
    </div>
  );
}
