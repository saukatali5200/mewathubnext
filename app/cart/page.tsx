"use client";

import React from "react";
import Link from "next/link";
import { ShoppingCart, Trash2, Plus, Minus, ArrowRight, PackageOpen, Droplets, Leaf } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatINR, calculateGST } from "@/lib/utils";

export default function CartPage() {
  const { items, removeItem, updateQuantity, totalPrice, totalItems } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center relative">
        <div className="absolute inset-0 dot-grid opacity-50" />
        <div className="relative z-10 text-center">
          <div className="w-24 h-24 rounded-3xl theme-accent-subtle border theme-accent-border flex items-center justify-center mx-auto mb-6">
            <PackageOpen className="w-12 h-12 theme-text-muted" />
          </div>
          <h1 className="text-2xl font-bold theme-text mb-2">Your cart is empty</h1>
          <p className="theme-text-secondary mb-8">Looks like you haven&apos;t added anything yet.</p>
          <Link href="/products">
            <button className="theme-btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-bold">
              Browse Products <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </div>
      </div>
    );
  }

  const gstTotal   = items.reduce((sum, { product, quantity }) => sum + calculateGST(product.price * quantity, product.gstRate), 0);
  const grandTotal = totalPrice + gstTotal;

  return (
    <div className="section-pad">
      <div className="container max-w-5xl">
        <h1 className="text-3xl md:text-4xl font-extrabold theme-text mb-2">Shopping Cart</h1>
        <p className="theme-text-secondary mb-10">{totalItems} item{totalItems !== 1 ? "s" : ""} in your cart</p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* CART ITEMS */}
          <div className="lg:col-span-2 space-y-4">
            {items.map(({ product, quantity }) => {
              const ItemIcon = product.category === "oil" ? Droplets : Leaf;
              const lineTotal = product.price * quantity;
              const lineGST   = calculateGST(lineTotal, product.gstRate);
              return (
                <div key={product.id} className="theme-card p-5">
                  <div className="flex gap-4">
                    {/* Icon */}
                    <div className="w-20 h-20 rounded-2xl theme-accent-subtle border theme-accent-border flex items-center justify-center shrink-0">
                      <ItemIcon className="w-9 h-9 theme-accent" />
                    </div>
                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold theme-text truncate">{product.name}</h3>
                      <p className="text-xs theme-text-muted mt-0.5">{product.packaging}</p>
                      <p className="text-xs theme-text-muted mt-0.5">GST {product.gstRate}% · HSN {product.hsnCode}</p>

                      <div className="flex items-center justify-between mt-4 flex-wrap gap-3">
                        {/* Qty controls */}
                        <div className="flex items-center rounded-xl border theme-divider overflow-hidden" style={{ background: "var(--bg-elevated)" }}>
                          <button onClick={() => updateQuantity(product.id, quantity - 1)}
                            className="w-9 h-9 flex items-center justify-center theme-text-secondary hover:theme-accent hover:theme-accent-subtle transition-colors">
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="w-10 text-center theme-text text-sm font-bold">{quantity}</span>
                          <button onClick={() => updateQuantity(product.id, quantity + 1)}
                            className="w-9 h-9 flex items-center justify-center theme-text-secondary hover:theme-accent hover:theme-accent-subtle transition-colors">
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        {/* Line total */}
                        <div className="text-right">
                          <div className="font-bold theme-text">{formatINR(lineTotal)}</div>
                          {product.gstRate > 0 && (
                            <div className="text-xs theme-text-muted">+{formatINR(lineGST)} GST</div>
                          )}
                        </div>

                        {/* Remove */}
                        <button onClick={() => removeItem(product.id)}
                          className="w-9 h-9 rounded-lg flex items-center justify-center theme-text-muted transition-all hover:bg-red-500/10 hover:text-red-400">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            <Link href="/products">
              <button className="theme-btn-ghost inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium">
                ← Continue Shopping
              </button>
            </Link>
          </div>

          {/* ORDER SUMMARY */}
          <div className="lg:col-span-1">
            <div className="theme-card p-6 sticky top-20">
              <h2 className="font-bold theme-text mb-5 flex items-center gap-2 text-lg">
                <ShoppingCart className="w-5 h-5 theme-accent" />
                Order Summary
              </h2>

              <div className="space-y-3 mb-5">
                {items.map(({ product, quantity }) => (
                  <div key={product.id} className="flex justify-between text-sm">
                    <span className="theme-text-secondary truncate pr-2">{product.name} × {quantity}</span>
                    <span className="theme-text font-medium shrink-0">{formatINR(product.price * quantity)}</span>
                  </div>
                ))}
              </div>

              <div className="border-t theme-divider my-4" />

              <div className="space-y-3 text-sm mb-4">
                <div className="flex justify-between">
                  <span className="theme-text-secondary">Subtotal (excl. GST)</span>
                  <span className="theme-text font-medium">{formatINR(totalPrice)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="theme-text-secondary">Estimated GST</span>
                  <span className="theme-text font-medium">{formatINR(gstTotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="theme-text-secondary">Shipping</span>
                  <span className="theme-text-muted text-xs">At checkout</span>
                </div>
              </div>

              <div className="border-t theme-divider my-4" />

              <div className="flex justify-between items-center mb-6">
                <span className="font-bold theme-text text-base">Total</span>
                <span className="font-extrabold text-xl text-gradient">{formatINR(grandTotal)}</span>
              </div>

              <p className="text-xs theme-text-muted mb-5">* Inclusive of GST. Shipping added at checkout.</p>

              <Link href="/checkout" className="block">
                <button className="w-full theme-btn-primary py-4 rounded-xl font-bold flex items-center justify-center gap-2">
                  Proceed to Checkout <ArrowRight className="w-4 h-4" />
                </button>
              </Link>

              <div className="mt-5 pt-4 border-t theme-divider flex items-center justify-center gap-4 text-xs theme-text-muted">
                <span>🔒 Secure</span>
                <span>✓ FSSAI</span>
                <span>🚚 Pan-India</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
