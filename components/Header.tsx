"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-100 flex items-center justify-between transition-all duration-400 ease-brand ${scrolled
        ? "bg-cream/75 backdrop-blur-md py-3.5 px-8 shadow-[0_1px_0_var(--color-line)]"
        : "py-5.5 px-8"
        }`}
    >
      <Link
        href="/"
        className="flex items-center transition-transform duration-300 ease-brand hover:scale-105"
        aria-label="GlobalBeenco"
      >
        <img
          src="/images/logo_transparent.png"
          alt="GlobalBeenco"
          className="h-20 w-auto object-contain"
        />
      </Link>

      <div className="hidden md:flex gap-9 text-sm font-medium">
        {[
          { href: "/pages/nifashion", label: "NI Fashion" },
          { href: "/pages/ehealthy", label: "eHealthy" },
          { href: "/pages/snowlotus", label: "Snow Lotus" },
          { href: "/pages/uslandreseller", label: "US Land Reseller" },
          { href: "/pages/embroidery", label: "Embroidery" },
        ].map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="relative py-1 group"
          >
            {link.label}
            <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-citrus transition-all duration-300 ease-brand group-hover:w-full" />
          </Link>
        ))}
      </div>

      <a
        href="/pages/contact"
        className="text-[13px] font-semibold px-5 py-2.5 rounded-full bg-ink text-cream transition-all duration-300 ease-brand hover:-translate-y-0.5 hover:bg-citrus hover:text-ink"
      >
        Contact Us     </a>
    </nav>
  );
}
