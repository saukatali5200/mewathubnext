import type { Metadata } from "next";
import Link from "next/link";
import { Droplets, Leaf, Phone, ArrowRight, Truck } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { PRODUCTS } from "@/lib/products";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Products — Mustard Oil & Oil Cake",
  description: "Browse Saukat Mill Oil products: 1L, 5L, 15L mustard oil bottles, bulk supply, and oil cake cattle feed. Best prices direct from the mill.",
};

export default function ProductsPage() {
  const oilProducts     = PRODUCTS.filter((p) => p.category === "oil");
  const oilcakeProducts = PRODUCTS.filter((p) => p.category === "oilcake");

  return (
    <>
      {/* HERO */}
      <section className="relative section-pad overflow-hidden">
        <div className="absolute inset-0 dot-grid" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, var(--bg-page) 30%, transparent)" }} />
        <div className="container relative z-10 max-w-3xl text-center">
          <div className="w-20 h-20 rounded-3xl theme-accent-subtle border theme-accent-border flex items-center justify-center mx-auto mb-8 shadow-lg" style={{ boxShadow: "var(--shadow-glow)" }}>
            <Droplets className="w-10 h-10 theme-accent" />
          </div>
          <span className="theme-badge inline-flex mb-6">FSSAI Certified</span>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            Our <span className="text-gradient">Products</span>
          </h1>
          <p className="theme-text-secondary text-xl leading-relaxed">
            Pure cold-pressed mustard oil in every size, and high-protein oil cake for livestock. All dispatched directly from our mill in Bharatpur.
          </p>
        </div>
      </section>

      {/* MUSTARD OIL */}
      <section className="section-pad" style={{ background: "var(--bg-surface)" }}>
        <div className="container">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 rounded-2xl theme-accent-subtle border theme-accent-border flex items-center justify-center">
              <Droplets className="w-6 h-6 theme-accent" />
            </div>
            <div>
              <span className="theme-badge inline-flex mb-1">Mustard Oil</span>
              <h2 className="text-2xl md:text-3xl font-extrabold theme-text">Pure Kachi Ghani Mustard Oil</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {oilProducts.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </section>

      {/* OIL CAKE */}
      <section className="section-pad">
        <div className="container">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 rounded-2xl theme-accent-subtle border theme-accent-border flex items-center justify-center">
              <Leaf className="w-6 h-6 theme-accent" />
            </div>
            <div>
              <span className="theme-badge inline-flex mb-1">Oil Cake</span>
              <h2 className="text-2xl md:text-3xl font-extrabold theme-text">High-Protein Cattle Feed</h2>
            </div>
          </div>
          <div className="max-w-sm">
            {oilcakeProducts.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </section>

      {/* BULK BANNER */}
      <section className="pb-20">
        <div className="container max-w-4xl">
          <div className="theme-card rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute right-0 top-0 bottom-0 w-1/3" style={{ background: "radial-gradient(ellipse at right, var(--accent-subtle), transparent)" }} />
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
              <div className="w-16 h-16 rounded-2xl theme-accent-subtle border theme-accent-border flex items-center justify-center shrink-0">
                <Truck className="w-8 h-8 theme-accent" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl font-extrabold theme-text mb-2">Bulk Orders Welcome!</h3>
                <p className="theme-text-secondary">Min. order 200L for bulk. Tanker loads & custom packaging also available. Contact us for best wholesale pricing.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <a href={`tel:${SITE.phone}`}>
                  <button className="theme-btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold whitespace-nowrap">
                    <Phone className="w-4 h-4" /> Call Now
                  </button>
                </a>
                <Link href="/contact">
                  <button className="theme-btn-outline inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold">
                    Enquire <ArrowRight className="w-4 h-4" />
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
