// =============================================================
// src/lib/utils.ts
// Shared utility helpers
// =============================================================

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/** Merge Tailwind classes safely (shadcn/ui convention) */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Format a number as Indian Rupees */
export function formatINR(amount: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(amount);
}

/** Calculate GST amount from base price */
export function calculateGST(price: number, gstRate: number): number {
  return (price * gstRate) / 100;
}

/** Calculate total price including GST */
export function priceWithGST(price: number, gstRate: number): number {
  return price + calculateGST(price, gstRate);
}
