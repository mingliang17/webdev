import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bepearls Enterprise",
  description:
    "Small-batch fermented tea, naturally low in sugar and alive with probiotics.",
  // You can keep or remove 'icons' here if using the manual <link> tag below
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        {/* Direct link fallback */}
        <link rel="icon" href="/images/logo_transparent.png" type="image/png" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400..800&family=Inter:wght@400;500;600&family=Space+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}