"use client";

import { useState } from "react";
import type { ProductColor } from "@/lib/shop";

type ProductPurchaseProps = {
  sizes: string[];
  colors: ProductColor[];
};

/**
 * Size / colour pickers + add-to-bag button.
 * Replace the onClick handler with your cart logic (context, Shopify, Stripe...).
 */
export default function ProductPurchase({ sizes, colors }: ProductPurchaseProps) {
  const [size, setSize] = useState(sizes.length === 1 ? sizes[0] : "");
  const [color, setColor] = useState(colors[0]?.name ?? "");
  const [added, setAdded] = useState(false);
  const [error, setError] = useState(false);

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
          <span className="field-label">Colour: {color}</span>
          <div className="flex gap-3">
            {colors.map((c) => (
              <button
                key={c.name}
                type="button"
                aria-label={c.name}
                aria-pressed={color === c.name}
                onClick={() => setColor(c.name)}
                className={`swatch ${color === c.name ? "swatch-active" : ""}`}
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
