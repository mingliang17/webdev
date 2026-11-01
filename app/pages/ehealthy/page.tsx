"use client";
import Link from "next/link";
import { useState, useEffect, useRef, useId, useCallback } from "react";
// =============================================================================
// DESIGN TOKENS
// =============================================================================
const C = {
  paper: "#F6F0E8",
  paperDeep: "#EDE3D6",
  paperLight: "#FBF7F1",
  ink: "#231A14",
  inkSoft: "rgba(35,26,20,0.72)",
  inkFaint: "rgba(35,26,20,0.42)",
  line: "rgba(35,26,20,0.10)",
  lineSoft: "rgba(35,26,20,0.06)",
  accent: "#521e26ff",
  accentDeep: "#41151cff",
  accentSoft: "#F4A3B0",
  sage: "#5B7B5E",
  sageDeep: "#3D5A40",
  sageLight: "#A8C4AA",
  gold: "#B8863B",
  goldLight: "#E8C98A",
  earth: "#8B6F5C",
  purple: "#e8d6e9ff"
};
const PAGE_MAX_WIDTH = "max-w-[1280px]";
const PAGE_GUTTER = "px-6 sm:px-8 lg:px-12";
// =============================================================================
// INLINE SVG ICONS
// =============================================================================
function LeafIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M12 22c0-6 4-12 10-14-2 8-6 12-10 14Z" fill="currentColor" opacity="0.6" />
      <path d="M12 22C12 16 8 10 2 8c2 8 6 12 10 14Z" fill="currentColor" opacity="0.4" />
      <path d="M12 22V10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
}
function BeanIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <ellipse cx="12" cy="12" rx="7" ry="10" transform="rotate(-15 12 12)" fill="currentColor" opacity="0.7" />
      <path d="M9 4c2 4 2 8 0 12" stroke="white" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
    </svg>
  );
}
// =============================================================================
// PRIMITIVES
// =============================================================================
function Multiline({ text, className = "" }: { text: string; className?: string }) {
  return <span className={`whitespace-pre-line ${className}`}>{text}</span>;
}
function Eyebrow({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.24em] uppercase text-[#231A14]/45 ${className}`}>
      <span className="h-px w-4 bg-current opacity-40" />
      {children}
    </span>
  );
}
function Pill({
  children,
  tone = "solid",
  className = "",
}: {
  children: React.ReactNode;
  tone?: "solid" | "ghost" | "sage";
  className?: string;
}) {
  const base =
    "inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[10px] font-mono tracking-[0.16em] uppercase font-medium";
  const styles =
    tone === "solid"
      ? "bg-[#231A14] text-[#FBF7F1]"
      : tone === "sage"
        ? "bg-[#5B7B5E]/10 text-[#3D5A40] ring-1 ring-[#5B7B5E]/20"
        : "border border-[#231A14]/15 text-[#231A14]/60 bg-white/40";
  return <span className={`${base} ${styles} ${className}`}>{children}</span>;
}
function Rule({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#231A14]/15 to-[#231A14]/15" />
      <LeafIcon className="w-3.5 h-3.5 text-[#231A14]/20" />
      <span className="h-px flex-1 bg-gradient-to-l from-transparent via-[#231A14]/15 to-[#231A14]/15" />
    </div>
  );
}
// =============================================================================
// AMBIENT BOTANICAL FIELD
// =============================================================================
type FloatItem = {
  id: number;
  top: number;
  left: number;
  size: number;
  rotate: number;
  opacity: number;
  duration: number;
  delay: number;
  drift: number;
  kind: "bean" | "leaf" | "orb";
};
function AmbientField() {
  const [items] = useState<FloatItem[]>(() => {
    const arr: FloatItem[] = [];
    for (let i = 0; i < 12; i++) {
      arr.push({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: 14 + Math.random() * 26,
        rotate: Math.random() * 360,
        opacity: 0.06 + Math.random() * 0.06,
        duration: 16 + Math.random() * 16,
        delay: Math.random() * -24,
        drift: 4 + Math.random() * 8,
        kind: "bean",
      });
    }
    for (let i = 0; i < 8; i++) {
      arr.push({
        id: 100 + i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: 20 + Math.random() * 36,
        rotate: Math.random() * 360,
        opacity: 0.04 + Math.random() * 0.05,
        duration: 20 + Math.random() * 18,
        delay: Math.random() * -30,
        drift: 6 + Math.random() * 10,
        kind: "leaf",
      });
    }
    for (let i = 0; i < 4; i++) {
      arr.push({
        id: 200 + i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: 120 + Math.random() * 200,
        rotate: 0,
        opacity: 0.025 + Math.random() * 0.02,
        duration: 24 + Math.random() * 20,
        delay: Math.random() * -40,
        drift: 3 + Math.random() * 5,
        kind: "orb",
      });
    }
    return arr;
  });
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,rgba(91,123,94,0.07)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_100%,rgba(232,83,107,0.05)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,transparent_30%,rgba(35,26,20,0.04)_100%)]" />
      {items.map((b) => (
        <div
          key={b.id}
          className="absolute animate-ambient will-change-transform"
          style={{
            top: `${b.top}%`,
            left: `${b.left}%`,
            width: b.size,
            height: b.kind === "orb" ? b.size : b.size * 1.3,
            opacity: b.opacity,
            transform: `rotate(${b.rotate}deg)`,
            animationDuration: `${b.duration}s`,
            animationDelay: `${b.delay}s`,
            "--drift": `${b.drift}vh`,
            "--rot": `${b.rotate}deg`,
          } as React.CSSProperties}
        >
          {b.kind === "bean" && <BeanGlyph />}
          {b.kind === "leaf" && <LeafGlyph />}
          {b.kind === "orb" && (
            <div className="w-full h-full rounded-full bg-gradient-to-br from-[#5B7B5E] to-[#E8536B] blur-2xl" />
          )}
        </div>
      ))}
    </div>
  );
}
function BeanGlyph() {
  return (
    <svg viewBox="0 0 24 32" fill="none" className="w-full h-full">
      <defs>
        <radialGradient id="bean-shade" cx="38%" cy="32%" r="72%">
          <stop offset="0%" stopColor="#4A3428" />
          <stop offset="100%" stopColor="#1E1410" />
        </radialGradient>
      </defs>
      <ellipse cx="12" cy="16" rx="10.5" ry="14.5" fill="url(#bean-shade)" />
      <path
        d="M12 3C9.5 7 9.5 11 12 16C14.5 21 14.5 25 12 29"
        stroke="#F6F0E8"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.7"
      />
    </svg>
  );
}
function LeafGlyph() {
  return (
    <svg viewBox="0 0 24 32" fill="none" className="w-full h-full">
      <path d="M12 28C12 20 16 12 22 8C20 18 16 24 12 28Z" fill="#3D5A40" opacity="0.9" />
      <path d="M12 28C12 20 8 12 2 8C4 18 8 24 12 28Z" fill="#5B7B5E" opacity="0.7" />
      <path d="M12 28V14" stroke="#F6F0E8" strokeWidth="0.8" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
}
// =============================================================================
// IMAGE CARD + PAIR
// =============================================================================
function ImageCard({
  src,
  alt,
  label,
  className = "",
  imgClassName = "",
  aspect = "aspect-[4/5]",
  priority = false,
}: {
  src: string;
  alt: string;
  label?: string;
  className?: string;
  imgClassName?: string;
  aspect?: string;
  priority?: boolean;
}) {
  return (
    <figure
      className={`group relative rounded-[1.75rem] overflow-hidden shadow-[0_20px_60px_-24px_rgba(35,26,20,0.45)] ring-1 ring-black/[0.04] bg-[#EDE3D6] ${aspect} ${className}`}
    >
      <img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        className={`w-full h-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.07] ${imgClassName}`}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#231A14]/60 via-transparent to-transparent opacity-80" />
      <div className="pointer-events-none absolute inset-0 rounded-[1.75rem] ring-1 ring-inset ring-white/10" />
      {label && (
        <figcaption className="absolute left-4 bottom-4 flex items-center gap-2 font-mono text-[9.5px] tracking-[0.22em] uppercase text-[#FBF7F1]/90">
          <span className="h-1 w-1 rounded-full bg-[#E8536B] shadow-[0_0_8px_rgba(232,83,107,0.8)]" />
          {label}
        </figcaption>
      )}
    </figure>
  );
}
function ImagePair({
  first,
  second,
  firstUp = true,
}: {
  first: React.ReactNode;
  second: React.ReactNode;
  firstUp?: boolean;
}) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-4 items-start">
      <div className={firstUp ? "-mt-6 sm:-mt-10" : "mt-10 sm:mt-16"}>{first}</div>
      <div className={firstUp ? "mt-10 sm:mt-16" : "-mt-6 sm:-mt-10"}>{second}</div>
    </div>
  );
}
// =============================================================================
// CART CONTROL
// =============================================================================
function AddToCartControl({
  label,
  price = 61,
  onAddToCart,
}: {
  label: string;
  price?: number;
  onAddToCart?: (qty: number) => void;
}) {
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const decrement = () => setQty((q) => Math.max(1, q - 1));
  const increment = () => setQty((q) => q + 1);
  const handleAdd = () => {
    if (qty <= 0) return;
    onAddToCart?.(qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 1600);
    setQty(1);
  };
  return (
    <div className="flex flex-wrap items-center gap-3">
      <div className="inline-flex items-center rounded-full border border-[#231A14]/15 bg-white/60 backdrop-blur-sm overflow-hidden shadow-sm">
        <button
          onClick={decrement}
          aria-label={`Decrease quantity of ${label}`}
          disabled={qty <= 1}
          className="w-10 h-10 flex items-center justify-center text-lg text-[#231A14] hover:bg-[#231A14]/[0.06] disabled:opacity-25 disabled:cursor-not-allowed transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8536B] focus-visible:ring-inset"
        >
          −
        </button>
        <span className="w-10 text-center text-sm font-mono text-[#231A14] tabular-nums font-medium" aria-live="polite">
          {qty}
        </span>
        <button
          onClick={increment}
          aria-label={`Increase quantity of ${label}`}
          className="w-10 h-10 flex items-center justify-center text-lg text-[#231A14] hover:bg-[#231A14]/[0.06] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8536B] focus-visible:ring-inset"
        >
          +
        </button>
      </div>
      <button
        onClick={handleAdd}
        disabled={qty <= 0 || added}
        className={`relative overflow-hidden py-3 px-7 rounded-full font-semibold text-sm tracking-wide transition-all duration-300 shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#E8536B] disabled:cursor-not-allowed ${added
          ? "bg-[#5B7B5E] text-white shadow-[#5B7B5E]/30 scale-[0.98]"
          : "bg-[#231A14] hover:bg-[#E8536B] text-[#FBF7F1] shadow-[#231A14]/20 hover:shadow-[#E8536B]/40 hover:-translate-y-0.5"
          }`}
      >
        <span className="relative z-10 flex items-center gap-2">
          {added ? (
            <>
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Added
            </>
          ) : (
            <>
              Add to cart
              <span className="opacity-60">·</span>
              <span className="tabular-nums">${(qty * price).toFixed(2)}</span>
            </>
          )}
        </span>
      </button>
    </div>
  );
}
function CartButton({ count = 0 }: { count?: number }) {
  return (
    <button
      className="group relative inline-flex items-center gap-2.5 rounded-full border border-[#231A14]/15 bg-white/50 backdrop-blur-sm px-4 py-2 text-[10.5px] font-mono tracking-[0.18em] uppercase text-[#231A14]/75 hover:text-[#E8536B] hover:border-[#E8536B]/30 hover:bg-white/80 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8536B] focus-visible:ring-offset-2 shadow-sm"
      aria-label={`Open cart, ${count} item${count === 1 ? "" : "s"}`}
    >
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M3 6h2l2.4 12.2a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6L21 9H6"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="9" cy="21" r="1.2" fill="currentColor" />
        <circle cx="18" cy="21" r="1.2" fill="currentColor" />
      </svg>
      <span>Cart</span>
      {count > 0 && (
        <span className="ml-0.5 min-w-[20px] h-5 px-1.5 rounded-full bg-[#E8536B] text-white text-[10px] font-bold flex items-center justify-center tabular-nums shadow-sm">
          {count}
        </span>
      )}
    </button>
  );
}
// =============================================================================
// PRODUCT LAYOUT
// =============================================================================
function ProductLayout({
  index,
  imagesSide,
  images,
  text,
}: {
  index: string;
  imagesSide: "left" | "right";
  images: React.ReactNode;
  text: React.ReactNode;
}) {
  const imagesOnLeft = imagesSide === "left";
  const headingId = useId();
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center" aria-labelledby={headingId}>
      <div className={`lg:col-span-6 relative ${imagesOnLeft ? "order-1" : "lg:order-2"}`}>
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -top-10 -left-3 font-display font-black text-[clamp(80px,12vw,180px)] leading-none text-[#231A14]/[0.035] select-none tracking-tighter"
        >
          {index}
        </span>
        <div className="pointer-events-none absolute -inset-8 -z-10 rounded-[3rem] bg-gradient-to-br from-[#5B7B5E]/[0.06] via-transparent to-[#E8536B]/[0.06] blur-2xl" />
        {images}
      </div>
      <div
        className={`lg:col-span-5 flex flex-col space-y-6 ${imagesOnLeft
          ? "order-2 lg:justify-self-end text-left lg:text-right lg:items-end"
          : "lg:order-1 lg:justify-self-start text-left"
          }`}
      >
        <span id={headingId} className="sr-only">Product {index}</span>
        {text}
      </div>
    </div>
  );
}
// =============================================================================
// FEATURE STRIP
// =============================================================================
function FeatureStrip() {
  const features = [
    { icon: <LeafIcon className="w-5 h-5" />, label: "Plant-powered", sub: "Natural ingredients" },
    { icon: <BeanIcon className="w-5 h-5" />, label: "Antioxidant rich", sub: "Black goji blend" },
    {
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M12 21s-7-4.5-7-11a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 6.5-7 11-7 11Z" fill="currentColor" opacity="0.7" />
        </svg>
      ),
      label: "Heart healthy",
      sub: "Clinically studied",
    },
    {
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" opacity="0.5" />
          <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" opacity="0.7" />
        </svg>
      ),
      label: "Daily ritual",
      sub: "3–4 cups a day",
    },
  ];
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
      {features.map((f, i) => (
        <div
          key={i}
          className="group flex flex-col items-center text-center gap-2 rounded-2xl border border-[#231A14]/[0.06] bg-white/40 backdrop-blur-sm px-3 py-5 hover:bg-white/70 hover:border-[#5B7B5E]/20 transition-all duration-300"
        >
          <span className="text-[#5B7B5E] group-hover:text-[#E8536B] transition-colors duration-300">{f.icon}</span>
          <span className="font-display text-[13px] font-bold text-[#231A14]">{f.label}</span>
          <span className="font-mono text-[9px] tracking-[0.14em] uppercase text-[#231A14]/45">{f.sub}</span>
        </div>
      ))}
    </div>
  );
}
// =============================================================================
// PAGE
// =============================================================================
export default function BubbleTwoPage() {
  const [isOpen, setIsOpen] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [cartCount, setCartCount] = useState(0);
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch((err) => console.log("Autoplay prevented:", err));
    }
  }, []);
  const handleClose = useCallback(() => {
    setIsExiting(true);
    setTimeout(() => setIsOpen(false), 300);
  }, []);
  const handleAddToCart = useCallback((_p: string, qty: number) => {
    setCartCount((c) => c + qty);
  }, []);
  // ---------------------------------------------------------------------------
  // Content blocks
  // ---------------------------------------------------------------------------
  const gojiCoffeeImages = (
    <ImagePair
      firstUp
      first={<ImageCard src="/images/ehealthy/goji_coffee/1.png" alt="Goji Garden Coffee front" label="Hero · 01" priority />}
      second={<ImageCard src="/images/ehealthy/goji_coffee/2.jpg" alt="Goji Garden Coffee detail" imgClassName="filter saturate-[1.15]" label="Detail · 02" />}
    />
  );
  const gojiCoffeeText = (
    <>
      <div className="flex items-center gap-3 lg:justify-end">
        <Eyebrow>Series · Goji Garden</Eyebrow>
        <Pill tone="solid">Bestseller</Pill>
      </div>
      <h1 className="font-display text-[clamp(38px,6vw,66px)] font-extrabold tracking-[-0.02em] leading-[0.96] text-[#231A14]">
        Goji Garden Coffee
        <span className="block text-[clamp(18px,2.2vw,24px)] font-semibold text-[#5B7B5E] mt-3 tracking-wide">
          枸杞花园咖啡
        </span>
      </h1>
      <div className="flex items-baseline gap-3 lg:justify-end">
        <span className="text-[clamp(28px,4vw,42px)] font-mono font-semibold text-[#231A14] tracking-tight">$61.00</span>
        <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-[#231A14]/50">/ 6-pack cans</span>
      </div>
      <Rule className="w-full lg:w-3/4" />
      <div className="text-[15px] leading-[1.75] text-[#231A14]/70 space-y-3">
        <div className="flex items-start gap-2.5">
          <span className="mt-1.5 h-1 w-1 rounded-full bg-[#5B7B5E] shrink-0" />
          <p><span className="font-semibold text-[#231A14]">Ingredients:</span> European Coffee Beans, Black Goji Berry</p>
        </div>
        <div className="flex items-start gap-2.5">
          <span className="mt-1.5 h-1 w-1 rounded-full bg-[#5B7B5E] shrink-0" />
          <p><span className="font-semibold text-[#231A14]">Product Details:</span> 30 packages/box (2.5g/package)</p>
        </div>
        <div className="flex items-start gap-2.5">
          <span className="mt-1.5 h-1 w-1 rounded-full bg-[#5B7B5E] shrink-0" />
          <p><span className="font-semibold text-[#231A14]">Caffeine content:</span> <span className="font-mono text-[#231A14]">69mg</span></p>
        </div>
        <p className="text-[#231A14]/65 italic border-l-2 border-[#5B7B5E]/30 pl-3 mt-2">
          Crafted from just two natural ingredients — premium coffee beans and black goji berries. Every sachet is full of irresistible goodness.
        </p>
      </div>
      <div className="pt-2 lg:self-end">
        <AddToCartControl
          label="Goji Garden Coffee"
          price={61}
          onAddToCart={(qty) => handleAddToCart("gojiCoffee", qty)}
        />
      </div>
    </>
  );
  const gojiDecafImages = (
    <ImagePair
      firstUp
      first={<ImageCard src="/images/ehealthy/goji_coffee/3.jpeg" alt="Goji Decaf front" label="Hero · 01" />}
      second={<ImageCard src="/images/ehealthy/goji_coffee/4.jpeg" alt="Goji Decaf detail" imgClassName="filter saturate-[1.15]" label="Detail · 02" />}
    />
  );
  const gojiDecafText = (
    <>
      <div className="flex items-center gap-3 lg:justify-end">
        <Eyebrow>Series · Goji Garden</Eyebrow>
        <Pill tone="sage">Decaf</Pill>
      </div>
      <h2 className="font-display text-[clamp(38px,6vw,66px)] font-extrabold tracking-[-0.02em] leading-[0.96] text-[#231A14]">
        Goji Garden Decaffeinated
        <span className="block text-[clamp(18px,2.2vw,24px)] font-semibold text-[#5B7B5E] mt-3 tracking-wide">
          低因枸杞花园咖啡
        </span>
      </h2>
      <div className="flex items-baseline gap-3 lg:justify-end">
        <span className="text-[clamp(28px,4vw,42px)] font-mono font-semibold text-[#231A14] tracking-tight">$61.00</span>
        <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-[#231A14]/50">/ 6-pack cans</span>
      </div>
      <Rule className="w-full lg:w-3/4" />
      <div className="text-[15px] leading-[1.75] text-[#231A14]/70 space-y-3">
        <div className="flex items-start gap-2.5">
          <span className="mt-1.5 h-1 w-1 rounded-full bg-[#5B7B5E] shrink-0" />
          <p><span className="font-semibold text-[#231A14]">Ingredients:</span> European Coffee Beans, Black Goji Berry</p>
        </div>
        <div className="flex items-start gap-2.5">
          <span className="mt-1.5 h-1 w-1 rounded-full bg-[#5B7B5E] shrink-0" />
          <p><span className="font-semibold text-[#231A14]">Product Details:</span> 30 packages/box (2.5g/package)</p>
        </div>
        <div className="flex items-start gap-2.5">
          <span className="mt-1.5 h-1 w-1 rounded-full bg-[#5B7B5E] shrink-0" />
          <p><span className="font-semibold text-[#231A14]">Caffeine content:</span> <span className="font-mono text-[#5B7B5E]">2.7mg</span></p>
        </div>
        <p className="text-[#231A14]/65 italic border-l-2 border-[#5B7B5E]/30 pl-3 mt-2">
          All the ritual, none of the jitters. A gentler cup for evening moments and sensitive sippers.
        </p>
      </div>
      <div className="pt-2 lg:self-end">
        <AddToCartControl
          label="Goji Garden Decaffeinated"
          price={61}
          onAddToCart={(qty) => handleAddToCart("gojiDecaf", qty)}
        />
      </div>
    </>
  );
  const phytofitImages = (
    <ImagePair
      firstUp
      first={<ImageCard src="/images/ehealthy/phytofit/5.jpeg" alt="Phytofit detail 01" label="Detail · 01" />}
      second={<ImageCard src="/images/ehealthy/phytofit/6.jpeg" alt="Phytofit detail 02" label="Detail · 02" />}
    />
  );
  const phytofitText = (
    <>
      <div className="flex items-center gap-3 lg:justify-end">
        <Eyebrow>Series · Phytofit</Eyebrow>
        <Pill tone="ghost">Plant-based</Pill>
      </div>
      <h2 className="font-display text-[clamp(38px,6vw,66px)] font-extrabold tracking-[-0.02em] leading-[0.96] text-[#231A14]">
        Phytofit
        <span className="block text-[clamp(18px,2.2vw,24px)] font-semibold text-[#B8863B] mt-3 tracking-wide">
          诗豆
        </span>
      </h2>
      <div className="flex items-baseline gap-3 lg:justify-end">
        <span className="text-[clamp(28px,4vw,42px)] font-mono font-semibold text-[#B8863B] tracking-tight">$84.00</span>
        <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-[#231A14]/50">/ 6-pack cans</span>
      </div>
      <Rule className="w-full lg:w-3/4" />
      <div className="text-[15px] leading-[1.75] text-[#231A14]/70 space-y-3">
        <div className="flex items-start gap-2.5">
          <span className="mt-1.5 h-1 w-1 rounded-full bg-[#B8863B] shrink-0" />
          <p>
            <span className="font-semibold text-[#231A14]">Ingredients:</span>{" "}
            Soy, Banana (Original); Soy, Strawberry, Raspberry (Berry)
          </p>
        </div>
        <div className="flex items-start gap-2.5">
          <span className="mt-1.5 h-1 w-1 rounded-full bg-[#B8863B] shrink-0" />
          <p>
            <span className="font-semibold text-[#231A14]">Product Details:</span>{" "}
            30 packages/box (18g/package)
          </p>
        </div>
        <p className="text-[#231A14]/65 italic border-l-2 border-[#B8863B]/30 pl-3 mt-2">
          A delicious soy-based beverage made for health-conscious people and those managing their weight with low-calorie diets.
        </p>
      </div>
      <div className="pt-2 lg:self-end">
        <AddToCartControl
          label="Phytofit"
          price={84}
          onAddToCart={(qty) => handleAddToCart("phytofit", qty)}
        />
      </div>
    </>
  );
  // ---------------------------------------------------------------------------
  // Render
  // ---------------------------------------------------------------------------
  return (
    <main
      className="min-h-screen antialiased selection:bg-[#E8536B] selection:text-white relative"
      style={{ background: C.purple, color: C.ink }}
    >
      <AmbientField />
      {/* Local keyframes for ambient drift */}
      <style jsx>{`
        @keyframes ambient-float {
          0%   { transform: translateY(0) rotate(var(--rot, 0deg)); }
          50%  { transform: translateY(calc(-1 * var(--drift))) rotate(calc(var(--rot, 0deg) + 8deg)); }
          100% { transform: translateY(0) rotate(var(--rot, 0deg)); }
        }
        :global(.animate-ambient) {
          animation-name: ambient-float;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          :global(.animate-ambient) { animation: none; }
        }
      `}</style>
      {/* ==================== VIDEO MODAL ==================== */}
      {isOpen && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl p-4 sm:p-8 transition-opacity duration-300 ease-out ${isExiting ? "opacity-0" : "opacity-100"
            }`}
        >
          <div
            className={`relative w-full max-w-5xl bg-[#140F13] rounded-3xl overflow-hidden border border-white/15 shadow-[0_40px_120px_-40px_rgba(232,83,107,0.4)] transition-all duration-300 ease-out ${isExiting ? "scale-95 opacity-0" : "scale-100 opacity-100"
              }`}
          >
            <div className="absolute top-4 left-4 z-10 flex items-center gap-2 rounded-full bg-black/60 backdrop-blur px-3 py-1.5 font-mono text-[10px] tracking-widest uppercase text-[#FBF7F1]/80">
              <span className="h-1.5 w-1.5 rounded-full bg-[#E8536B] animate-pulse" />
              Now playing
            </div>
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 z-10 bg-black/70 hover:bg-black text-white rounded-full w-9 h-9 flex items-center justify-center text-xs font-mono transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8536B]"
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
              onEnded={handleClose}
              className="w-full aspect-video object-cover max-h-[80vh] bg-black"
              poster="/images/bubbles/bubble_2.png"
            >
              <source src="/video/coffee/coffee.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="p-4 bg-[#100B10] flex items-center justify-between border-t border-white/10">
              <span className="text-[11px] font-mono tracking-widest uppercase text-[#F4A3B0]">Mixed Video</span>
              <span className="text-[11px] font-mono text-[#FBF7F1]/50">Auto-closes when finished</span>
            </div>
          </div>
        </div>
      )}
      {/* ==================== HEADER ==================== */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-[#F6F0E8]/80 border-b border-[#231A14]/10">
        <div className={`${PAGE_MAX_WIDTH} mx-auto ${PAGE_GUTTER} py-4 flex items-center justify-between`}>
          <Link
            href="/"
            className="group inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.22em] uppercase text-[#231A14]/70 hover:text-[#E8536B] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8536B] focus-visible:ring-offset-2 rounded-full px-2 py-1"
          >
            <span className="transition-transform group-hover:-translate-x-1">←</span>
            Back to BePearls
          </Link>
          <div className="hidden sm:flex items-center gap-2">
            <Eyebrow>Series</Eyebrow>
            <span className="h-1 w-1 rounded-full bg-[#231A14]/30" />
            <Eyebrow>3 Products</Eyebrow>
          </div>
          <CartButton count={cartCount} />
        </div>
      </header>
      {/* ==================== CONTENT ==================== */}
      <div className="relative z-10">
        {/* HERO INTRO / FEATURE STRIP */}
        <section className={`${PAGE_MAX_WIDTH} mx-auto ${PAGE_GUTTER} pt-12 sm:pt-16`}>
          <FeatureStrip />
        </section>
        {/* PRODUCT 01 */}
        <section className={`${PAGE_MAX_WIDTH} mx-auto ${PAGE_GUTTER} pt-20 sm:pt-24 pb-24`}>
          <ProductLayout index="01" imagesSide="right" images={gojiCoffeeImages} text={gojiCoffeeText} />
        </section>
        <Rule className={`${PAGE_MAX_WIDTH} mx-auto ${PAGE_GUTTER}`} />
        {/* PRODUCT 02 */}
        <section className={`${PAGE_MAX_WIDTH} mx-auto ${PAGE_GUTTER} py-24`}>
          <ProductLayout index="02" imagesSide="right" images={gojiDecafImages} text={gojiDecafText} />
        </section>
        <Rule className={`${PAGE_MAX_WIDTH} mx-auto ${PAGE_GUTTER}`} />
        {/* RESEARCH BLURB */}
        <section className={`${PAGE_MAX_WIDTH} mx-auto ${PAGE_GUTTER} py-24`}>
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow className="mb-6 inline-block">Field notes</Eyebrow>
            <h2 className="font-display text-[clamp(28px,4vw,44px)] font-extrabold tracking-tight leading-[1.05] text-[#231A14]">
              Research shows: Coffee helps prolong life
            </h2>
            <div className="mt-8 space-y-4 text-[15.5px] leading-relaxed text-[#231A14]/70 text-left sm:text-center">
              <p>
                Consuming coffee every day (three to four cups a day) shows more benefits than harm across various health outcomes.
              </p>
              <p>
                It was associated with reduced risks of all-cause mortality, cardiovascular mortality, cardiovascular disease, and several specific cancers, as well as neurological, metabolic, and liver conditions. It also helps to protect the liver and prevent gallstones.
              </p>
              <p>
                <strong className="text-[#231A14]">Professional manufacturing technology:</strong> choosing the right roasting temperature and time as a safety standard ensures that acrylamide and diterpenes are reduced to the lowest. Freeze-dried, instant drip coffee (powder form) maximises the antioxidants of the coffee, and with added black goji berries it is the most unique beauty coffee in the market.
              </p>
            </div>
          </div>
        </section>
        <Rule className={`${PAGE_MAX_WIDTH} mx-auto ${PAGE_GUTTER}`} />
        {/* PRODUCT 03 */}
        <section className="border-t border-[#231A14]/10 bg-[#231A14]/[0.03]">
          <div className={`${PAGE_MAX_WIDTH} mx-auto ${PAGE_GUTTER} py-24`}>
            <ProductLayout index="03" imagesSide="right" images={phytofitImages} text={phytofitText} />
          </div>
        </section>
        {/* FOOTER */}
        <footer className={`${PAGE_MAX_WIDTH} mx-auto ${PAGE_GUTTER} py-16 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono tracking-widest uppercase text-[#231A14]/50`}>
          <span>© BePearls Enterprise</span>
          <span className="flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-[#E8536B]" />
            Curated coffee &amp; wellness
          </span>
        </footer>
      </div>
    </main>
  );
}