type CanProps = {
  c1: string;
  c2: string;
  label: string;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  style?: React.CSSProperties;
};

const sizes: Record<NonNullable<CanProps["size"]>, string> = {
  sm: "w-16 h-32 rounded-[12px/16px]",
  md: "w-24 h-[196px]",
  lg: "w-[150px] h-[300px] rounded-[22px/28px]",
  xl: "w-[190px] h-[380px] rounded-[26px/32px]",
};

export default function Can({
  c1,
  c2,
  label,
  size = "md",
  className = "",
  style,
}: CanProps) {
  return (
    <div
      className={`can-shape ${sizes[size]} ${className}`}
      style={{ ["--c1" as string]: c1, ["--c2" as string]: c2, ...style }}
    >
      <div
        className="absolute inset-0 flex items-center justify-center text-center px-2 text-[10px] tracking-[.08em] uppercase font-mono text-ink/85"
        style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
      >
        {label}
      </div>
    </div>
  );
}
