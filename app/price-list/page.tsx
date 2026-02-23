import type { Metadata } from "next";
import Link from "next/link";
import { IndianRupee, Info, Phone, ArrowRight, Tag } from "lucide-react";
import { PRODUCTS } from "@/lib/products";
import { formatINR, priceWithGST, calculateGST } from "@/lib/utils";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Price List — Mustard Oil Rates",
  description: "Current price list for Saukat Mill Oil products including GST, HSN codes and packaging details.",
};

export default function PriceListPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative section-pad overflow-hidden">
        <div className="absolute inset-0 dot-grid" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, var(--bg-page) 30%, transparent)" }} />
        <div className="container relative z-10 max-w-3xl text-center">
          <div className="w-20 h-20 rounded-3xl theme-accent-subtle border theme-accent-border flex items-center justify-center mx-auto mb-8 shadow-lg" style={{ boxShadow: "var(--shadow-glow)" }}>
            <IndianRupee className="w-10 h-10 theme-accent" />
          </div>
          <span className="theme-badge inline-flex mb-6">Transparent Pricing</span>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            <span className="text-gradient">Price List</span>
          </h1>
          <p className="theme-text-secondary text-xl leading-relaxed">
            Transparent pricing with GST breakdowns. Prices are indicative and subject to market rates. Contact us for bulk quotations.
          </p>
        </div>
      </section>

      <section className="section-pad pt-0">
        <div className="container max-w-5xl">

          {/* PRICE TABLE — Desktop */}
          <div className="hidden md:block theme-card rounded-3xl overflow-hidden mb-8">
            <div className="px-8 py-5 border-b theme-divider flex items-center gap-3" style={{ background: "var(--bg-elevated)" }}>
              <Tag className="w-5 h-5 theme-accent" />
              <span className="font-bold theme-text">Current Rates (All prices in ₹ INR)</span>
              <span className="ml-auto text-xs theme-text-muted">Prices updated regularly · Contact for bulk rates</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b theme-divider" style={{ background: "var(--bg-elevated)" }}>
                    {["Product","Packaging","Base Price","GST Amount","Total (incl. GST)","HSN","Availability"].map((h) => (
                      <th key={h} className="text-left px-6 py-4 text-xs font-bold theme-text-muted uppercase tracking-widest whitespace-nowrap">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {PRODUCTS.map((p, i) => (
                    <tr key={p.id} className={`border-b theme-divider transition-colors ${i % 2 === 0 ? "" : ""}`}
                      style={{ background: i % 2 === 1 ? "var(--bg-elevated)" : undefined }}>
                      <td className="px-6 py-4">
                        <div className="font-semibold theme-text">{p.name}</div>
                        <div className="text-xs theme-text-muted mt-0.5">{p.unit}</div>
                      </td>
                      <td className="px-6 py-4 theme-text-secondary">{p.packaging}</td>
                      <td className="px-6 py-4 font-bold theme-accent text-base">{formatINR(p.price)}</td>
                      <td className="px-6 py-4 theme-text-secondary">
                        {p.gstRate > 0 ? <>{formatINR(calculateGST(p.price, p.gstRate))} <span className="text-xs theme-text-muted">({p.gstRate}%)</span></> : <span className="text-xs theme-badge">Exempt</span>}
                      </td>
                      <td className="px-6 py-4 font-bold theme-text">{formatINR(priceWithGST(p.price, p.gstRate))}</td>
                      <td className="px-6 py-4 font-mono text-xs theme-text-muted">{p.hsnCode}</td>
                      <td className="px-6 py-4">
                        <span className={`theme-badge ${p.inStock ? "theme-badge-success" : "theme-badge-danger"}`}>
                          {p.inStock ? "In Stock" : "Out of Stock"}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* PRICE CARDS — Mobile */}
          <div className="md:hidden space-y-4 mb-8">
            {PRODUCTS.map((p) => (
              <div key={p.id} className="theme-card p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-bold theme-text">{p.name}</h3>
                    <p className="text-xs theme-text-muted mt-1">{p.packaging}</p>
                  </div>
                  <span className={`theme-badge ${p.inStock ? "theme-badge-success" : "theme-badge-danger"}`}>
                    {p.inStock ? "In Stock" : "Out"}
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div className="theme-elevated rounded-xl p-3">
                    <div className="text-xs theme-text-muted mb-1">Base</div>
                    <div className="font-bold theme-accent">{formatINR(p.price)}</div>
                  </div>
                  <div className="theme-elevated rounded-xl p-3">
                    <div className="text-xs theme-text-muted mb-1">GST {p.gstRate}%</div>
                    <div className="font-bold theme-text">{formatINR(calculateGST(p.price, p.gstRate))}</div>
                  </div>
                  <div className="theme-elevated rounded-xl p-3">
                    <div className="text-xs theme-text-muted mb-1">Total</div>
                    <div className="font-bold theme-text">{formatINR(priceWithGST(p.price, p.gstRate))}</div>
                  </div>
                </div>
                <div className="mt-3 text-xs theme-text-muted">HSN: {p.hsnCode}</div>
              </div>
            ))}
          </div>

          {/* DISCLAIMER */}
          <div className="theme-card p-6 rounded-2xl flex gap-4 mb-8">
            <Info className="w-5 h-5 theme-accent shrink-0 mt-0.5" />
            <p className="text-sm theme-text-secondary leading-relaxed">
              <strong className="theme-text">Disclaimer:</strong> Prices shown are indicative and subject to change based on market conditions and seasonal variations. For confirmed pricing and bulk quotations, please contact us directly. All prices are exclusive of transportation/delivery charges.
            </p>
          </div>

          {/* CTA */}
          <div className="theme-card rounded-3xl p-8 md:p-12 relative overflow-hidden text-center">
            <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, var(--accent-subtle), transparent 60%)" }} />
            <div className="relative z-10">
              <h3 className="text-2xl font-extrabold theme-text mb-3">Need a Custom Quote?</h3>
              <p className="theme-text-secondary mb-8">For bulk orders, special pricing, or volume discounts — call us directly.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href={`tel:${SITE.phone}`}>
                  <button className="theme-btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-bold">
                    <Phone className="w-5 h-5" /> {SITE.phone}
                  </button>
                </a>
                <Link href="/contact">
                  <button className="theme-btn-outline inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-bold">
                    Send Enquiry <ArrowRight className="w-5 h-5" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
