"use client";

import { useState } from "react";
import type { ProductColor } from "@/lib/shop";

type ProductPurchaseProps = {
  sizes: string[];
  colors: ProductColor[];
  selectedColorIndex?: number;
  onColorChange?: (index: number) => void;
};

/**
 * Size / colour pickers + add-to-bag button.
 * Replace the onClick handler with your cart logic (context, Shopify, Stripe...).
 */
export default function ProductPurchase({
  sizes,
  colors,
  selectedColorIndex,
  onColorChange,
}: ProductPurchaseProps) {
  const [internalColorIndex, setInternalColorIndex] = useState(0);
  const activeColorIndex = selectedColorIndex !== undefined ? selectedColorIndex : internalColorIndex;
  const activeColorName = colors[activeColorIndex]?.name ?? "";

  const [size, setSize] = useState(sizes.length === 1 ? sizes[0] : "");
  const [added, setAdded] = useState(false);
  const [error, setError] = useState(false);

  const handleColorClick = (idx: number) => {
    setInternalColorIndex(idx);
    onColorChange?.(idx);
  };

  const handleAdd = () => {
    if (!size) {
      setError(true);
      return;
    }
    setError(false);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="mt-8 space-y-7">
      {colors.length > 0 && (
        <div>
          <span className="field-label">Colour: {activeColorName}</span>
          <div className="flex gap-3">
            {colors.map((c, i) => (
              <button
                key={c.name}
                type="button"
                aria-label={c.name}
                aria-pressed={activeColorIndex === i}
                onClick={() => handleColorClick(i)}
                className={`swatch ${activeColorIndex === i ? "swatch-active" : ""}`}
                style={{ background: c.hex }}
              />
            ))}
          </div>
        </div>
      )}

      <div>
        <span className="field-label">Size</span>
        <div className="flex flex-wrap gap-2.5">
          {sizes.map((s) => (
            <button
              key={s}
              type="button"
              aria-pressed={size === s}
              onClick={() => {
                setSize(s);
                setError(false);
              }}
              className={`chip-option ${size === s ? "chip-active" : ""}`}
            >
              {s}
            </button>
          ))}
        </div>
        {error && (
          <p className="mt-2 text-sm text-guava" role="alert">
            Please choose a size.
          </p>
        )}
      </div>

      <button type="button" onClick={handleAdd} className="btn btn-primary w-full">
        {added ? "Added to bag ✓" : "Add to bag"}
      </button>
    </div>
  );
}
