"use client";

import React, { useState } from "react";
import { ShoppingCart, Check, Package, Droplets, Leaf } from "lucide-react";
import { Product } from "@/types";
import { useCart } from "@/context/CartContext";
import { formatINR } from "@/lib/utils";

interface ProductCardProps { product: Product; }

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  const CategoryIcon = product.category === "oil" ? Droplets : Leaf;

  return (
    <div className="theme-card flex flex-col overflow-hidden animate-fade-in">
      {/* Image area */}
      <div className="relative h-52 overflow-hidden" style={{ background: "var(--bg-elevated)" }}>
        <div className="absolute inset-0" style={{ background: "radial-gradient(circle at 60% 40%, var(--accent-subtle), transparent 70%)" }} />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-24 h-24 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
            style={{ background: "var(--accent-subtle)", border: "1px solid var(--accent-border)" }}>
            <CategoryIcon className="w-12 h-12 theme-accent" />
          </div>
        </div>
        {/* Badges */}
        <div className="absolute top-3 left-3">
          <span className={`theme-badge ${product.inStock ? "theme-badge-success" : "theme-badge-danger"}`}>
            {product.inStock ? "In Stock" : "Out of Stock"}
          </span>
        </div>
        <div className="absolute top-3 right-3">
          <span className="theme-badge">{product.category === "oil" ? "Mustard Oil" : "Oil Cake"}</span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        <div>
          <h3 className="font-bold text-base theme-text leading-snug">{product.name}</h3>
          <div className="flex items-baseline gap-1.5 mt-2">
            <span className="text-2xl font-extrabold text-gradient">{formatINR(product.price)}</span>
            <span className="text-xs theme-text-muted">{product.unit}</span>
          </div>
        </div>

        <p className="theme-text-secondary text-sm leading-relaxed line-clamp-2">{product.description}</p>

        <div className="flex items-center gap-1.5 text-xs theme-text-muted">
          <Package className="w-3.5 h-3.5 theme-accent" />
          <span>{product.packaging}</span>
        </div>

        <ul className="space-y-1.5">
          {product.features.slice(0, 3).map((f) => (
            <li key={f} className="flex items-center gap-2 text-xs theme-text-secondary">
              <span className="w-1.5 h-1.5 rounded-full theme-accent-bg shrink-0" />
              {f}
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-3 border-t theme-divider flex items-center justify-between">
          <span className="text-xs theme-text-muted">GST {product.gstRate}% · HSN {product.hsnCode}</span>
        </div>

        <button
          onClick={handleAddToCart}
          disabled={!product.inStock || added}
          className={cn(
            "w-full py-2.5 px-4 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-200",
            added
              ? "bg-green-500/20 text-green-400 border border-green-500/30 cursor-default"
              : product.inStock
              ? "theme-btn-primary"
              : "opacity-40 cursor-not-allowed theme-elevated theme-text-muted"
          )}
        >
          {added ? (
            <><Check className="w-4 h-4" />Added to Cart</>
          ) : (
            <><ShoppingCart className="w-4 h-4" />Add to Cart</>
          )}
        </button>
      </div>
    </div>
  );
}

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}
