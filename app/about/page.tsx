import type { Metadata } from "next";
import Link from "next/link";
import { Factory, Leaf, Heart, Award, ShieldCheck, Droplets, MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Saukat Mill Oil — our story, mission, and commitment to delivering pure cold-pressed mustard oil across India.",
};

const VALUES = [
  { icon: Droplets,    title: "Purity First",          desc: "No additives, no blending. Every drop of our oil is 100% pure cold-pressed mustard oil, exactly as nature intended." },
  { icon: Heart,       title: "Community Focus",        desc: "We work directly with local farmers, ensuring fair prices at the source while keeping costs low for our customers." },
  { icon: ShieldCheck, title: "Safety & Compliance",    desc: "FSSAI certified operations with rigorous quality control at every step — from seed selection to final bottling." },
  { icon: Leaf,        title: "Sustainable Practices",  desc: "Zero-waste philosophy — our oil cake by-product is turned into valuable cattle feed, leaving nothing behind." },
];

const MILESTONES = [
  { year: "Est.",    event: "Founded as a small family-run mustard oil mill in Bharatpur, Rajasthan." },
  { year: "Year 5",  event: "Expanded production capacity to serve wholesale distributors across the region." },
  { year: "Year 10", event: "Obtained FSSAI certification and GST registration — going fully compliant." },
  { year: "Year 15", event: "Launched retail packaging lines — 1L, 5L, and 15L products." },
  { year: "Today",   event: "Supplying 500+ customers across India with trusted Kachi Ghani quality." },
];

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative section-pad overflow-hidden">
        <div className="absolute inset-0 dot-grid" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, var(--bg-page), transparent 60%)" }} />
        <div className="container relative z-10 max-w-3xl text-center">
          <div className="w-20 h-20 rounded-3xl theme-accent-subtle border theme-accent-border flex items-center justify-center mx-auto mb-8 shadow-lg" style={{ boxShadow: "var(--shadow-glow)" }}>
            <Factory className="w-10 h-10 theme-accent" />
          </div>
          <span className="theme-badge inline-flex mb-6">Our Story</span>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            About <span className="text-gradient">{SITE.name}</span>
          </h1>
          <p className="theme-text-secondary text-xl leading-relaxed">
            A trusted name in mustard oil manufacturing — rooted in tradition, committed to purity, proud to serve households and businesses across India.
          </p>
        </div>
      </section>

      {/* OWNER CARD */}
      <section className="pb-0 pt-4">
        <div className="container max-w-5xl">
          <div className="theme-card rounded-3xl p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center" style={{ background: "var(--bg-surface)" }}>
            <div>
              <span className="theme-badge inline-flex mb-4">Meet the Owner</span>
              <h2 className="text-3xl font-extrabold theme-text mb-2">{SITE.owner}</h2>
              <p className="theme-text-muted text-sm mb-6 font-medium">Founder & Proprietor, {SITE.name}</p>
              <p className="theme-text-secondary leading-relaxed mb-6">
                With over 20 years of experience in mustard oil manufacturing, {SITE.owner} built Saukat Mill Oil on the foundations of honesty, purity, and community. Every product that leaves our mill carries his personal commitment to quality.
              </p>
              <div className="space-y-3">
                {[
                  { icon: Phone,  val: SITE.phone,   href: `tel:${SITE.phone}` },
                  { icon: Mail,   val: SITE.email,   href: `mailto:${SITE.email}` },
                  { icon: MapPin, val: SITE.address,  href: SITE.maps },
                ].map(({ icon: Icon, val, href }) => (
                  <a key={val} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                    className="flex items-start gap-3 theme-text-secondary hover:theme-accent transition-colors text-sm group">
                    <div className="w-8 h-8 rounded-lg theme-accent-subtle flex items-center justify-center shrink-0 mt-0.5 group-hover:border group-hover:theme-accent-border transition-all">
                      <Icon className="w-4 h-4 theme-accent" />
                    </div>
                    {val}
                  </a>
                ))}
              </div>
            </div>
            {/* Visual placeholder for owner */}
            <div className="flex items-center justify-center">
              <div className="w-48 h-48 rounded-full theme-accent-subtle border-4 theme-accent-border flex items-center justify-center shadow-xl" style={{ boxShadow: "var(--shadow-glow)" }}>
                <div className="text-center">
                  <Droplets className="w-16 h-16 theme-accent mx-auto mb-1" />
                  <span className="text-xs theme-text-muted font-semibold tracking-widest uppercase">Mill Owner</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STORY + TIMELINE */}
      <section className="section-pad">
        <div className="container max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="theme-badge inline-flex mb-4">From Seed to Bottle</span>
              <h2 className="text-3xl md:text-4xl font-extrabold theme-text mb-6">Our Journey</h2>
              <div className="space-y-4 theme-text-secondary leading-relaxed">
                <p><strong className="theme-text">Saukat Mill Oil</strong> began as a single-unit mustard oil mill in Khoh, Deeg, Bharatpur — founded on a simple belief: the best mustard oil comes from cold-pressing quality seeds, not cutting corners.</p>
                <p>Over the years, we grew from a neighbourhood mill supplying local households to a trusted supplier for distributors, restaurants, dhabas, and food manufacturers across India — while never compromising on purity.</p>
                <p>Our traditional <em className="theme-text font-medium">Kachi Ghani</em> (cold-press) process ensures every bottle retains the full-bodied pungent flavour and rich nutritional profile that makes mustard oil irreplaceable in Indian cooking.</p>
              </div>
            </div>

            {/* Timeline */}
            <div className="relative pl-8">
              <div className="absolute left-3 top-2 bottom-2 w-0.5 rounded-full" style={{ background: "linear-gradient(to bottom, var(--accent), transparent)" }} />
              <div className="space-y-8">
                {MILESTONES.map(({ year, event }, i) => (
                  <div key={year} className={`relative animate-slide-up delay-${(i + 1) * 100}`}>
                    <div className="absolute -left-8 top-1 w-3 h-3 rounded-full theme-accent-bg border-2" style={{ borderColor: "var(--bg-page)" }} />
                    <span className="text-xs font-bold theme-accent uppercase tracking-widest">{year}</span>
                    <p className="theme-text-secondary text-sm mt-1 leading-relaxed">{event}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section-pad" style={{ background: "var(--bg-surface)" }}>
        <div className="container">
          <div className="text-center mb-14">
            <span className="theme-badge inline-flex mb-4">Our Values</span>
            <h2 className="text-3xl md:text-4xl font-extrabold theme-text mb-4">What We Stand For</h2>
            <p className="theme-text-secondary text-lg max-w-2xl mx-auto">Principles that guide every decision — from sourcing seeds to delivering the final product.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {VALUES.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="theme-card p-6 flex gap-5">
                <div className="w-14 h-14 rounded-2xl theme-accent-subtle border theme-accent-border flex items-center justify-center shrink-0">
                  <Icon className="w-7 h-7 theme-accent" />
                </div>
                <div>
                  <h3 className="font-bold theme-text mb-2 text-lg">{title}</h3>
                  <p className="theme-text-secondary text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="section-pad">
        <div className="container max-w-3xl text-center">
          <span className="theme-badge inline-flex mb-4">Certifications</span>
          <h2 className="text-3xl font-extrabold theme-text mb-4">Verified & Compliant</h2>
          <p className="theme-text-secondary mb-12">All Indian regulatory standards for food safety and business compliance — met and exceeded.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: Award,       label: "FSSAI Certified",   val: SITE.fssai },
              { icon: ShieldCheck, label: "GST Registered",    val: SITE.gst   },
              { icon: Factory,     label: "Manufacturing Unit", val: `${SITE.city}, ${SITE.state}` },
            ].map(({ icon: Icon, label, val }) => (
              <div key={label} className="theme-card p-8 text-center">
                <div className="w-14 h-14 rounded-2xl theme-accent-subtle border theme-accent-border flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-7 h-7 theme-accent" />
                </div>
                <div className="text-xs font-bold theme-accent uppercase tracking-widest mb-2">{label}</div>
                <div className="theme-text-muted text-xs font-mono">{val}</div>
              </div>
            ))}
          </div>
          <Link href="/contact">
            <button className="theme-btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-bold">
              Contact Us <ArrowRight className="w-5 h-5" />
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}
