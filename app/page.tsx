import type { Metadata } from "next";
import Link from "next/link";
import {
  Droplets, Leaf, Award, Truck, ShieldCheck,
  ArrowRight, Phone, Star, Users, Factory, Sparkles, CheckCircle2
} from "lucide-react";
import { SITE } from "@/lib/constants";
import { PRODUCTS } from "@/lib/products";
import ProductCard from "@/components/ProductCard";
import SocialLinks from "@/components/SocialLinks";

export const metadata: Metadata = {
  title: "Pure Mustard Oil Manufacturer & Supplier India",
  description: "Saukat Mill Oil — trusted manufacturer of cold-pressed mustard oil and oil cake. FSSAI certified. Wholesale & retail supply across India.",
};

const STATS = [
  { value: "20+",  label: "Years Experience", icon: Factory },
  { value: "500+", label: "Happy Customers",  icon: Users   },
  { value: "100%", label: "Pure Quality",     icon: Award   },
  { value: "5★",   label: "Customer Rating",  icon: Star    },
];

const FEATURES = [
  { icon: Droplets,    title: "Cold-Pressed Purity",   desc: "Traditional Kachi Ghani extraction preserves all natural nutrients, aroma, and authentic flavour." },
  { icon: ShieldCheck, title: "FSSAI Certified",        desc: "Every batch is tested and certified to meet strict FSSAI food-safety standards. Quality you can trust." },
  { icon: Truck,       title: "Pan-India Supply",       desc: "Reliable delivery from small retail orders to large industrial bulk quantities anywhere across India." },
  { icon: Leaf,        title: "Oil Cake (Cattle Feed)", desc: "High-protein mustard oil cake — a nutritious by-product ideal for cattle and poultry farming." },
];

const PROMISES = [
  "No additives or blending — ever",
  "FSSAI certified every batch",
  "Direct from mill pricing",
  "Same-week dispatch",
  "Bulk & retail both welcome",
  "Trusted by 500+ customers",
];

export default function HomePage() {
  const featuredProducts = PRODUCTS.slice(0, 3);
  return (
    <>
      {/* ── HERO ──────────────────────────────────────── */}
      <section className="relative min-h-[94vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 dot-grid" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, var(--bg-page) 40%, transparent 100%)" }} />
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full blur-[120px] pointer-events-none" style={{ background: "var(--accent-subtle)" }} />

        <div className="container relative z-10 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-8 animate-fade-in theme-badge">
                <Sparkles className="w-3.5 h-3.5" />
                FSSAI Certified · Kachi Ghani · Made in India
              </div>
              <h1 className="text-5xl md:text-6xl xl:text-7xl font-extrabold leading-[1.05] mb-6 animate-slide-up">
                Pure<br />
                <span className="text-gradient">Cold-Pressed</span><br />
                Mustard Oil
              </h1>
              <p className="text-lg leading-relaxed mb-4 animate-slide-up delay-100" style={{ color: "var(--text-secondary)" }}>
                Direct from our mill in <strong style={{ color: "var(--text-primary)" }}>Bharatpur, Rajasthan</strong>. Traditional extraction, zero compromises, unbeatable purity.
              </p>
              <ul className="grid grid-cols-2 gap-2 mb-10 animate-slide-up delay-200">
                {PROMISES.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                    <CheckCircle2 className="w-4 h-4 shrink-0 theme-accent" />
                    {p}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-4 animate-slide-up delay-300">
                <Link href="/products">
                  <button className="theme-btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-base font-bold shadow-lg">
                    Shop Products <ArrowRight className="w-5 h-5" />
                  </button>
                </Link>
                <a href={`tel:${SITE.phone}`}>
                  <button className="theme-btn-outline inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-base font-bold">
                    <Phone className="w-5 h-5" /> {SITE.phone}
                  </button>
                </a>
              </div>
            </div>

            {/* Right — decorative product visual */}
            <div className="hidden lg:flex items-center justify-center animate-scale-in delay-200">
              <div className="relative w-80 h-80">
                {/* outer ring */}
                <div className="absolute inset-0 rounded-full border-2 theme-accent-border opacity-30 animate-[spin_20s_linear_infinite]" />
                <div className="absolute inset-6 rounded-full border theme-accent-border opacity-20 animate-[spin_15s_linear_infinite_reverse]" />
                {/* center */}
                <div className="absolute inset-12 rounded-full flex items-center justify-center theme-accent-subtle border-2 theme-accent-border shadow-2xl" style={{ boxShadow: "var(--shadow-glow)" }}>
                  <div className="text-center">
                    <Droplets className="w-16 h-16 theme-accent mx-auto mb-2" />
                    <div className="text-xs font-bold theme-text-muted uppercase tracking-widest">Pure Oil</div>
                  </div>
                </div>
                {/* floating badges */}
                {[
                  { label: "100% Pure", deg: 0   },
                  { label: "Cold Press", deg: 120 },
                  { label: "FSSAI ✓",   deg: 240 },
                ].map(({ label, deg }) => {
                  const rad = (deg - 90) * Math.PI / 180;
                  const r = 148;
                  const x = 160 + r * Math.cos(rad);
                  const y = 160 + r * Math.sin(rad);
                  return (
                    <div key={label} className="absolute theme-badge text-xs font-bold whitespace-nowrap" style={{ left: x, top: y, transform: "translate(-50%,-50%)" }}>
                      {label}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20 animate-slide-up delay-400">
            {STATS.map(({ value, label, icon: Icon }) => (
              <div key={label} className="theme-card p-5 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl theme-accent-subtle border theme-accent-border flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6 theme-accent" />
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-gradient leading-none">{value}</div>
                  <div className="text-xs theme-text-muted mt-1">{label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US ────────────────────────────────────── */}
      <section className="section-pad" style={{ background: "var(--bg-surface)" }}>
        <div className="container">
          <div className="text-center mb-14">
            <span className="theme-badge inline-flex mb-4">Why Saukat Mill?</span>
            <h2 className="text-3xl md:text-4xl font-extrabold theme-text mb-4">Quality You Can Taste</h2>
            <p className="theme-text-secondary text-lg max-w-2xl mx-auto">Traditional cold-press methods with modern quality controls — mustard oil that is pure, potent, and nutritious.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURES.map(({ icon: Icon, title, desc }, i) => (
              <div key={title} className={`theme-card p-6 animate-slide-up delay-${(i + 1) * 100}`}>
                <div className="w-12 h-12 rounded-2xl theme-accent-subtle border theme-accent-border flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 theme-accent" />
                </div>
                <h3 className="font-bold theme-text mb-2">{title}</h3>
                <p className="theme-text-secondary text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCTS ──────────────────────────────────── */}
      <section className="section-pad">
        <div className="container">
          <div className="text-center mb-14">
            <span className="theme-badge inline-flex mb-4">Our Products</span>
            <h2 className="text-3xl md:text-4xl font-extrabold theme-text mb-4">Shop Mustard Oil & Oil Cake</h2>
            <p className="theme-text-secondary text-lg max-w-2xl mx-auto">From household bottles to industrial bulk — quality products at competitive prices.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {featuredProducts.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
          <div className="text-center">
            <Link href="/products">
              <button className="theme-btn-outline inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-bold">
                View All Products <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── BULK CTA ──────────────────────────────────── */}
      <section className="section-pad" style={{ background: "var(--bg-surface)" }}>
        <div className="container">
          <div className="relative rounded-3xl overflow-hidden p-10 md:p-16 theme-card">
            <div className="absolute inset-0 dot-grid opacity-30" />
            <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 30% 50%, var(--accent-subtle), transparent 60%)" }} />
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <span className="theme-badge inline-flex mb-5">Bulk & Wholesale</span>
                <h2 className="text-3xl md:text-4xl font-extrabold theme-text mb-4">Need Large Quantity Supply?</h2>
                <p className="theme-text-secondary text-lg leading-relaxed">Special pricing for distributors, traders, restaurants & food processors. Min. 200L bulk orders. Direct from mill — no middlemen.</p>
              </div>
              <div className="flex flex-col gap-4">
                <a href={`tel:${SITE.phone}`}>
                  <button className="theme-btn-primary w-full inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-base font-bold shadow-lg">
                    <Phone className="w-5 h-5" /> Call: {SITE.phone}
                  </button>
                </a>
                <Link href="/contact">
                  <button className="theme-btn-outline w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold">
                    Send Enquiry <ArrowRight className="w-5 h-5" />
                  </button>
                </Link>
                <p className="text-center text-xs theme-text-muted">Usually responds within a few hours</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SOCIAL MEDIA ──────────────────────────────── */}
      <section className="section-pad">
        <div className="container">
          <div className="text-center mb-12">
            <span className="theme-badge inline-flex mb-4">Stay Connected</span>
            <h2 className="text-3xl md:text-4xl font-extrabold theme-text mb-4">Follow Us on Social Media</h2>
            <p className="theme-text-secondary text-lg max-w-xl mx-auto">Get updates, tips, and behind-the-scenes from our mill. Latest offers, recipes & more!</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 max-w-2xl mx-auto gap-4 mb-10">
            <SocialLinks variant="full" className="md:col-span-2 grid-cols-2" />
          </div>
          <div className="text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl theme-card text-sm theme-text-secondary">
              <Star className="w-4 h-4 theme-accent" />
              Share your experience with <strong className="theme-text mx-1">#SaukatMillOil</strong> and tag us!
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
