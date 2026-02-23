import React from "react";
import Link from "next/link";
import { Droplets, Phone, Mail, MapPin, Shield, ArrowRight } from "lucide-react";
import { SITE, FOOTER_LINKS } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ background: "var(--bg-surface)", borderTop: "1px solid var(--border-subtle)" }} className="mt-16">
      <div className="container mx-auto px-4 max-w-7xl py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-5 group">
              <div className="w-10 h-10 rounded-xl theme-accent-bg flex items-center justify-center shadow-lg">
                <Droplets className="w-5 h-5 text-[#1a1a1a]" />
              </div>
              <div>
                <span className="font-bold text-base theme-text block leading-tight">{SITE.name}</span>
                <span className="text-xs theme-text-muted">Since 2004</span>
              </div>
            </Link>
            <p className="theme-text-secondary text-sm leading-relaxed mb-5">{SITE.tagline}. Trusted manufacturer & supplier of cold-pressed mustard oil and oil cake across India.</p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full theme-badge">
              <Shield className="w-3.5 h-3.5" />
              <span>FSSAI Certified · GST Registered</span>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="theme-text font-semibold text-sm uppercase tracking-widest mb-5">Quick Links</h3>
            <ul className="space-y-3">
              {[...FOOTER_LINKS.quickLinks, ...FOOTER_LINKS.legal].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="theme-text-secondary hover:theme-accent text-sm transition-colors flex items-center gap-1.5 group">
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all theme-accent" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="theme-text font-semibold text-sm uppercase tracking-widest mb-5">Our Products</h3>
            <ul className="space-y-3 text-sm theme-text-secondary">
              {["Mustard Oil 1L Bottle","Mustard Oil 5L Jar","Mustard Oil 15L Tin","Bulk Mustard Oil","Oil Cake (Cattle Feed)"].map((p) => (
                <li key={p} className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full theme-accent-bg" />
                  {p}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="theme-text font-semibold text-sm uppercase tracking-widest mb-5">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm theme-text-secondary">
                <div className="w-8 h-8 rounded-lg theme-accent-subtle flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 theme-accent" />
                </div>
                <span>{SITE.address}</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <div className="w-8 h-8 rounded-lg theme-accent-subtle flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 theme-accent" />
                </div>
                <a href={`tel:${SITE.phone}`} className="theme-text-secondary hover:theme-accent transition-colors">{SITE.phone}</a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <div className="w-8 h-8 rounded-lg theme-accent-subtle flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 theme-accent" />
                </div>
                <a href={`mailto:${SITE.email}`} className="theme-text-secondary hover:theme-accent transition-colors">{SITE.email}</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t theme-divider mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="theme-text-muted text-xs">© {currentYear} {SITE.name}. All rights reserved.</p>
          <div className="flex items-center gap-4 text-xs theme-text-muted">
            <span>GSTIN: {SITE.gst}</span>
            <span>·</span>
            <span>FSSAI: {SITE.fssai}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
