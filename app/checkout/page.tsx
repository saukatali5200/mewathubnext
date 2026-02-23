"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { CheckCircle, Truck, ArrowLeft, CreditCard, Banknote, QrCode, ShoppingBag, Droplets, Leaf, Loader2 } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { formatINR, calculateGST } from "@/lib/utils";
import { STATES_OF_INDIA, SITE } from "@/lib/constants";
import type { BillingDetails, PaymentMethod } from "@/types";

const PAYMENT_METHODS: { id: PaymentMethod; label: string; icon: React.ElementType; desc: string }[] = [
  { id: "cod",           label: "Cash on Delivery",          icon: Banknote,    desc: "Pay cash when your order arrives"                           },
  { id: "upi",           label: "UPI Payment",               icon: QrCode,      desc: "Pay via PhonePe, GPay, Paytm, or any UPI app"               },
  { id: "bank_transfer", label: "Bank Transfer (NEFT/RTGS)", icon: CreditCard,  desc: "Transfer directly to our bank account — details after order" },
];

const EMPTY: BillingDetails = { fullName:"", phone:"", email:"", address:"", city:"", state:"", pincode:"" };

export default function CheckoutPage() {
  const router = useRouter();
  const { items, totalPrice, totalItems, clearCart } = useCart();
  const [billing, setBilling]     = useState<BillingDetails>(EMPTY);
  const [payment, setPayment]     = useState<PaymentMethod>("cod");
  const [loading, setLoading]     = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [orderNumber, setOrderNumber] = useState("");

  if (items.length === 0 && !showSuccess) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center relative">
        <div className="absolute inset-0 dot-grid opacity-50" />
        <div className="relative z-10 text-center">
          <div className="w-24 h-24 rounded-3xl theme-accent-subtle border theme-accent-border flex items-center justify-center mx-auto mb-6">
            <ShoppingBag className="w-12 h-12 theme-text-muted" />
          </div>
          <h1 className="text-2xl font-bold theme-text mb-2">Nothing to checkout</h1>
          <p className="theme-text-secondary mb-8">Your cart is empty.</p>
          <Link href="/products">
            <button className="theme-btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-bold">
              Browse Products
            </button>
          </Link>
        </div>
      </div>
    );
  }

  const gstTotal   = items.reduce((s, { product, quantity }) => s + calculateGST(product.price * quantity, product.gstRate), 0);
  const grandTotal = totalPrice + gstTotal;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setBilling((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      const num = "SMO-" + Date.now().toString().slice(-6);
      setOrderNumber(num);
      setLoading(false);
      setShowSuccess(true);
      clearCart();
    }, 1500);
  };

  return (
    <>
      <div className="section-pad">
        <div className="container max-w-5xl">
          {/* Header */}
          <div className="flex items-center gap-4 mb-10">
            <Link href="/cart">
              <button className="w-10 h-10 rounded-xl theme-btn-ghost flex items-center justify-center">
                <ArrowLeft className="w-5 h-5" />
              </button>
            </Link>
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold theme-text">Checkout</h1>
              <p className="theme-text-secondary">{totalItems} item{totalItems !== 1 ? "s" : ""}</p>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              {/* LEFT — Forms */}
              <div className="lg:col-span-3 space-y-6">

                {/* Delivery Details */}
                <div className="theme-card p-6 md:p-8">
                  <h2 className="font-bold theme-text text-lg mb-6 flex items-center gap-2">
                    <Truck className="w-5 h-5 theme-accent" />
                    Delivery Details
                  </h2>
                  <div className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold theme-text-muted uppercase tracking-widest mb-2">Full Name *</label>
                        <input name="fullName" required placeholder="Saukat Ali" value={billing.fullName} onChange={handleChange}
                          className="theme-input w-full rounded-xl px-4 py-3 text-sm" />
                      </div>
                      <div>
                        <label className="block text-xs font-bold theme-text-muted uppercase tracking-widest mb-2">Phone Number *</label>
                        <input name="phone" type="tel" required placeholder="+91 9694929317" value={billing.phone} onChange={handleChange}
                          className="theme-input w-full rounded-xl px-4 py-3 text-sm" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-bold theme-text-muted uppercase tracking-widest mb-2">Email Address</label>
                      <input name="email" type="email" placeholder="you@email.com (for invoice)" value={billing.email} onChange={handleChange}
                        className="theme-input w-full rounded-xl px-4 py-3 text-sm" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold theme-text-muted uppercase tracking-widest mb-2">Delivery Address *</label>
                      <textarea name="address" required rows={3} placeholder="House/shop no, street, area, landmark..."
                        value={billing.address} onChange={handleChange}
                        className="theme-input w-full rounded-xl px-4 py-3 text-sm resize-none" />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-xs font-bold theme-text-muted uppercase tracking-widest mb-2">City *</label>
                        <input name="city" required placeholder="City" value={billing.city} onChange={handleChange}
                          className="theme-input w-full rounded-xl px-4 py-3 text-sm" />
                      </div>
                      <div>
                        <label className="block text-xs font-bold theme-text-muted uppercase tracking-widest mb-2">State *</label>
                        <Select value={billing.state} onValueChange={(v) => setBilling((p) => ({ ...p, state: v }))}>
                          <SelectTrigger className="theme-input rounded-xl h-[46px] text-sm">
                            <SelectValue placeholder="Select state" />
                          </SelectTrigger>
                          <SelectContent>
                            {STATES_OF_INDIA.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="block text-xs font-bold theme-text-muted uppercase tracking-widest mb-2">Pincode *</label>
                        <input name="pincode" required pattern="[0-9]{6}" maxLength={6} placeholder="321203"
                          value={billing.pincode} onChange={handleChange}
                          className="theme-input w-full rounded-xl px-4 py-3 text-sm" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Payment Method */}
                <div className="theme-card p-6 md:p-8">
                  <h2 className="font-bold theme-text text-lg mb-6 flex items-center gap-2">
                    <CreditCard className="w-5 h-5 theme-accent" />
                    Payment Method
                  </h2>
                  <div className="space-y-3">
                    {PAYMENT_METHODS.map(({ id, label, icon: Icon, desc }) => (
                      <div key={id} onClick={() => setPayment(id)} className="flex items-center gap-4 p-4 rounded-2xl border cursor-pointer transition-all"
                        style={{
                          background: payment === id ? "var(--accent-subtle)" : "var(--bg-elevated)",
                          borderColor: payment === id ? "var(--accent)" : "var(--border-color)",
                        }}>
                        <div className="w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors"
                          style={{ borderColor: payment === id ? "var(--accent)" : "var(--border-color)" }}>
                          {payment === id && <div className="w-2.5 h-2.5 rounded-full theme-accent-bg" />}
                        </div>
                        <div className="w-9 h-9 rounded-xl theme-accent-subtle flex items-center justify-center shrink-0">
                          <Icon className="w-5 h-5 theme-accent" />
                        </div>
                        <div>
                          <div className="font-semibold theme-text text-sm">{label}</div>
                          <div className="text-xs theme-text-muted">{desc}</div>
                        </div>
                      </div>
                    ))}

                    {payment === "upi" && (
                      <div className="p-5 rounded-2xl text-center theme-elevated border theme-divider">
                        <div className="w-32 h-32 mx-auto rounded-xl theme-accent-subtle border theme-accent-border flex items-center justify-center mb-3">
                          <QrCode className="w-16 h-16 theme-accent opacity-40" />
                        </div>
                        <p className="text-xs theme-text-muted">UPI ID will be shared after order placement</p>
                      </div>
                    )}

                    {payment === "bank_transfer" && (
                      <div className="p-5 rounded-2xl theme-elevated border theme-divider text-sm space-y-1.5">
                        <p className="font-bold theme-text mb-3">Bank Account Details</p>
                        {[
                          ["Account Name", SITE.owner],
                          ["Bank", "Your Bank Name"],
                          ["Account No", "XXXXXXXXXXXX"],
                          ["IFSC", "XXXXXXXXXX"],
                        ].map(([k, v]) => (
                          <div key={k} className="flex justify-between">
                            <span className="theme-text-muted">{k}</span>
                            <span className="theme-text font-medium">{v}</span>
                          </div>
                        ))}
                        <p className="text-xs theme-text-muted mt-3">* Share payment screenshot on WhatsApp after transfer</p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Place Order */}
                <button type="submit" disabled={loading}
                  className="w-full theme-btn-primary py-5 rounded-2xl font-bold text-base flex items-center justify-center gap-2 disabled:opacity-60 shadow-lg">
                  {loading
                    ? <><Loader2 className="w-5 h-5 animate-spin" /> Processing your order...</>
                    : <><CheckCircle className="w-5 h-5" /> Place Order · {formatINR(grandTotal)}</>
                  }
                </button>
              </div>

              {/* RIGHT — Summary */}
              <div className="lg:col-span-2">
                <div className="theme-card p-6 sticky top-20">
                  <h2 className="font-bold theme-text text-base mb-5 flex items-center gap-2">
                    <ShoppingBag className="w-4 h-4 theme-accent" />
                    Order Summary
                    <span className="ml-auto theme-badge">{totalItems} item{totalItems !== 1 ? "s" : ""}</span>
                  </h2>

                  <div className="space-y-3 mb-5">
                    {items.map(({ product, quantity }) => {
                      const Icon = product.category === "oil" ? Droplets : Leaf;
                      return (
                        <div key={product.id} className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl theme-accent-subtle border theme-accent-border flex items-center justify-center shrink-0">
                            <Icon className="w-5 h-5 theme-accent" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-xs font-semibold theme-text truncate">{product.name}</p>
                            <p className="text-xs theme-text-muted">Qty: {quantity}</p>
                          </div>
                          <span className="text-sm theme-text font-bold shrink-0">{formatINR(product.price * quantity)}</span>
                        </div>
                      );
                    })}
                  </div>

                  <div className="border-t theme-divider my-4" />

                  <div className="space-y-3 text-sm mb-4">
                    <div className="flex justify-between"><span className="theme-text-secondary">Subtotal</span><span className="theme-text font-medium">{formatINR(totalPrice)}</span></div>
                    <div className="flex justify-between"><span className="theme-text-secondary">GST</span><span className="theme-text font-medium">{formatINR(gstTotal)}</span></div>
                    <div className="flex justify-between"><span className="theme-text-secondary">Shipping</span><span className="theme-text-muted text-xs">To be determined</span></div>
                  </div>

                  <div className="border-t theme-divider my-4" />

                  <div className="flex justify-between items-center mb-5">
                    <span className="font-bold theme-text">Total</span>
                    <span className="font-extrabold text-xl text-gradient">{formatINR(grandTotal)}</span>
                  </div>

                  <div className="rounded-xl p-4 text-xs theme-text-muted text-center" style={{ background: "var(--bg-elevated)" }}>
                    🔒 Your information is safe. We do not store card details.
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* SUCCESS DIALOG */}
      <Dialog open={showSuccess} onOpenChange={setShowSuccess}>
        <DialogContent className="max-w-md">
          <div className="py-4 text-center">
            <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ background: "rgba(16,185,129,0.1)", border: "2px solid rgba(16,185,129,0.3)" }}>
              <CheckCircle className="w-10 h-10 text-green-500" />
            </div>
            <DialogHeader>
              <DialogTitle className="text-2xl font-extrabold theme-text text-center">Order Placed! 🎉</DialogTitle>
              <DialogDescription className="theme-text-secondary mt-2 text-center">
                Thank you. We&apos;ll confirm your order within 1 business day.
              </DialogDescription>
            </DialogHeader>

            <div className="mt-6 p-5 rounded-2xl theme-elevated border theme-divider">
              <p className="text-xs theme-text-muted uppercase tracking-widest mb-2">Order Number</p>
              <p className="text-2xl font-extrabold text-gradient font-mono">{orderNumber}</p>
            </div>

            <p className="text-sm theme-text-secondary mt-5">
              Our team will contact you on <strong className="theme-text">{billing.phone}</strong> to confirm delivery &amp; payment details.
            </p>

            <button onClick={() => { setShowSuccess(false); router.push("/"); }}
              className="w-full theme-btn-primary py-4 rounded-2xl font-bold mt-6">
              Return to Home
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
