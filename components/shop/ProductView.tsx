"use client";

import { useState } from "react";
import Link from "next/link";
import Media from "@/components/shop/Media";
import ProductPurchase from "@/components/shop/ProductPurchase";
import { formatPrice, categoryHref, type Product, type Category } from "@/lib/shop";

type ProductViewProps = {
  product: Product;
  category: Category;
};

export default function ProductView({ product: p, category: cat }: ProductViewProps) {
  const images = p.images || [];

  const [selectedColorIndex, setSelectedColorIndex] = useState(0);

  // Helper to determine the main image for a given color index
  const getColorImage = (colorIdx: number) => {
    const idx = colorIdx === 0 ? 0 : colorIdx + 3;
    return images[idx] || images[0];
  };

  // Top main image and bottom 3 thumbnails
  const [mainImage, setMainImage] = useState<string | undefined>(() => getColorImage(0));
  const [bottomImages, setBottomImages] = useState<(string | undefined)[]>(() => [
    images[1],
    images[2],
    images[3],
  ]);

  // Reset when viewing a different product
  const [currentSlug, setCurrentSlug] = useState(p.slug);
  if (currentSlug !== p.slug) {
    setCurrentSlug(p.slug);
    setSelectedColorIndex(0);
    setMainImage(getColorImage(0));
    setBottomImages([images[1], images[2], images[3]]);
  }

  // When a color is toggled:
  // - Top displays the corresponding color variant image
  // - Bottom 3 reset back to images 2, 3, 4
  const handleColorChange = (colorIndex: number) => {
    setSelectedColorIndex(colorIndex);
    setMainImage(getColorImage(colorIndex));
    setBottomImages([images[1], images[2], images[3]]);
  };

  // When a smaller bottom image is clicked:
  // Swap it with whatever image was previously on top!
  const handleThumbnailClick = (clickedIndex: number) => {
    const clickedImage = bottomImages[clickedIndex];
    if (!clickedImage) return;

    const previousTopImage = mainImage;

    setMainImage(clickedImage);
    setBottomImages((prev) => {
      const updated = [...prev];
      updated[clickedIndex] = previousTopImage;
      return updated;
    });
  };

  return (
    <div className="product-layout">
      {/* Image gallery */}
      <div className="product-gallery">
        {/* Main top image (first-child gets col-span-3) */}
        <Media
          src={mainImage}
          alt={p.name}
          tone={p.tone}
          className="media-product"
          priority
          sizes="(min-width: 768px) 40vw, 100vw"
        />

        {/* Bottom 3 smaller images */}
        {bottomImages.map((src, idx) => (
          <div
            key={idx}
            onClick={() => handleThumbnailClick(idx)}
            className={src ? "cursor-pointer transition-transform duration-300 hover:scale-[1.02]" : ""}
          >
            <Media
              src={src}
              alt={`${p.name} — thumbnail ${idx + 1}`}
              tone={p.tone}
              className="media-card"
              sizes="(min-width: 768px) 15vw, 33vw"
            />
          </div>
        ))}
      </div>

      {/* Details */}
      <div className="md:sticky md:top-28 md:self-start">
        <h1 className="text-[clamp(32px,4.5vw,52px)] whitespace-pre-line">{p.name}</h1>
        {(p.chineseName || p.chinese_name) && (
          <p className="mt-3 text-3xl font-medium text-ink/80">
            {p.chineseName || p.chinese_name}
          </p>
        )}
        {p.id && (
          <p className="mt-2 font-mono text-xs uppercase tracking-[.14em] text-ink/60">
            ID: {p.id}
          </p>
        )}
        <p className="price-lg mt-4">{formatPrice(p.price)}</p>
        {p.description && <p className="body-copy mt-5">{p.description}</p>}

        <ProductPurchase
          sizes={p.sizes}
          colors={p.colors}
          selectedColorIndex={selectedColorIndex}
          onColorChange={handleColorChange}
        />

        {p.dimensions && p.dimensions.length > 0 && (
          <div className="mt-6 border-t border-line pt-6">
            <span className="field-label">Dimensions</span>
            <ul className="space-y-2 text-sm text-ink/70">
              {p.dimensions.map((d) => (
                <li key={d}>— {d}</li>
              ))}
            </ul>
          </div>
        )}

        {p.material && p.material.length > 0 && (
          <div className="mt-6 border-t border-line pt-6">
            <span className="field-label">Material</span>
            <ul className="space-y-2 text-sm text-ink/70">
              {p.material.map((m) => (
                <li key={m}>— {m}</li>
              ))}
            </ul>
          </div>
        )}

        {p.details && p.details.length > 0 && (
          <div className="mt-6 border-t border-line pt-6">
            <span className="field-label">Details</span>
            <ul className="space-y-2 text-sm text-ink/70">
              {p.details.map((d) => (
                <li key={d}>— {d}</li>
              ))}
            </ul>
          </div>
        )}

        <Link href={categoryHref(cat.slug)} className="btn-link mt-8 inline-block">
          ← Back to {cat.name}
        </Link>
      </div>
    </div>
  );
}
