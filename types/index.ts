// =============================================================
// src/types/index.ts
// Central type definitions for the entire application
// =============================================================

/** A single product in the catalog */
export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;           // Price in INR
  unit: string;            // e.g. "per litre", "per kg"
  packaging: string;       // e.g. "1L HDPE Bottle"
  category: "oil" | "oilcake";
  description: string;
  features: string[];
  inStock: boolean;
  gstRate: number;         // GST percentage e.g. 5
  hsnCode: string;
  image: string;           // Placeholder path or alt text key
}

/** A single item inside the cart */
export interface CartItem {
  product: Product;
  quantity: number;
}

/** Cart context shape */
export interface CartContextType {
  items: CartItem[];
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}

/** Checkout billing form fields */
export interface BillingDetails {
  fullName: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
}

/** Payment methods available in checkout UI */
export type PaymentMethod = "cod" | "upi" | "bank_transfer";

/** Price list row */
export interface PriceRow {
  product: string;
  packaging: string;
  pricePerUnit: number;
  unit: string;
  gst: number;
  hsnCode: string;
}
