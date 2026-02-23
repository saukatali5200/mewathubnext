// =============================================================
// src/app/legal/page.tsx
// GST, FSSAI, legal compliance information page
// =============================================================

import type { Metadata } from "next";
import { ShieldCheck, FileText, AlertCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SectionHeader from "@/components/SectionHeader";
import { SITE } from "@/lib/constants";
import { PRODUCTS } from "@/lib/products";

export const metadata: Metadata = {
  title: "GST & Legal Information",
  description:
    "GST registration details, FSSAI licence, HSN codes, billing policies and legal information for Saukat Mill Oil.",
};

export default function LegalPage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="section-pad bg-gradient-to-b from-dark-900 to-dark-950">
        <div className="container max-w-4xl text-center">
          <div className="w-16 h-16 rounded-2xl bg-mustard-500/10 border border-mustard-500/20 flex items-center justify-center mx-auto mb-6">
            <ShieldCheck className="w-8 h-8 text-mustard-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            GST &amp; <span className="text-gradient">Legal Info</span>
          </h1>
          <p className="text-gray-400 text-lg">
            All regulatory registrations, GST details, HSN codes, and compliance
            information for {SITE.name}.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container max-w-4xl space-y-8">

          {/* ── Business Registration ──────────────────────────── */}
          <Card className="border-dark-700 bg-dark-900">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-mustard-400" />
                Business Registration Details
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { label: "Business Name",    value: SITE.name },
                  { label: "Type",             value: "Proprietorship / Manufacturing Unit" },
                  { label: "Location",         value: "India" },
                  { label: "GSTIN",            value: SITE.gst },
                  { label: "FSSAI Licence No", value: SITE.fssai },
                  { label: "CIN",              value: SITE.cin },
                ].map(({ label, value }) => (
                  <div key={label} className="border-b border-dark-700 pb-3 last:border-0">
                    <dt className="text-xs text-gray-500 uppercase tracking-wider mb-1">{label}</dt>
                    <dd className="text-white font-mono text-sm">{value}</dd>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* ── GST Information ───────────────────────────────── */}
          <Card className="border-dark-700 bg-dark-900">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-mustard-400" />
                GST Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-400 text-sm">
                {SITE.name} is a GST-registered entity. GST will be charged as applicable
                on all taxable supplies. A proper tax invoice will be issued for all B2B
                purchases, enabling Input Tax Credit (ITC) for eligible buyers.
              </p>

              {/* HSN & GST rate table */}
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-dark-700">
                      <th className="text-left py-3 px-4 text-gray-400 font-medium text-xs uppercase tracking-wider">Product Category</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium text-xs uppercase tracking-wider">HSN Code</th>
                      <th className="text-center py-3 px-4 text-gray-400 font-medium text-xs uppercase tracking-wider">GST Rate</th>
                      <th className="text-center py-3 px-4 text-gray-400 font-medium text-xs uppercase tracking-wider">IGST</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-dark-700">
                    <tr>
                      <td className="py-3 px-4 text-white">Mustard Oil (all pack sizes)</td>
                      <td className="py-3 px-4 font-mono text-gray-300">1514</td>
                      <td className="py-3 px-4 text-center text-mustard-400 font-semibold">5%</td>
                      <td className="py-3 px-4 text-center text-gray-300">5%</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white">Oil Cake / Cattle Feed</td>
                      <td className="py-3 px-4 font-mono text-gray-300">2306</td>
                      <td className="py-3 px-4 text-center text-green-400 font-semibold">0%</td>
                      <td className="py-3 px-4 text-center text-gray-300">0%</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-xs text-gray-500 flex items-start gap-2">
                <AlertCircle className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                GST rates are as per current government notification and are subject to change.
                Please consult your tax advisor for latest applicability.
              </p>
            </CardContent>
          </Card>

          {/* ── Billing Policy ────────────────────────────────── */}
          <Card className="border-dark-700 bg-dark-900">
            <CardHeader>
              <CardTitle>Billing &amp; Invoice Policy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-400 text-sm leading-relaxed">
              <p>
                <strong className="text-white">Tax Invoice:</strong> A GST-compliant tax invoice
                will be issued for all purchases above ₹200 and for all B2B transactions,
                regardless of amount.
              </p>
              <p>
                <strong className="text-white">Invoice Format:</strong> Invoices will include
                GSTIN, HSN codes, quantity, rate, taxable value, GST amount (CGST+SGST or IGST),
                and total amount as required under GST rules.
              </p>
              <p>
                <strong className="text-white">Payment Terms (Wholesale):</strong> Standard terms
                are 50% advance and 50% before dispatch for new customers. Established customers
                may be extended credit on a case-by-case basis.
              </p>
              <p>
                <strong className="text-white">Returns &amp; Refunds:</strong> Claims for
                damaged or defective goods must be raised within 48 hours of delivery with
                photographic evidence. Approved claims will be replaced or credited in the
                next order.
              </p>
            </CardContent>
          </Card>

          {/* ── Privacy & Terms ───────────────────────────────── */}
          <Card className="border-dark-700 bg-dark-900">
            <CardHeader>
              <CardTitle>Privacy &amp; Terms of Use</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-400 text-sm leading-relaxed">
              <p>
                <strong className="text-white">Data Collection:</strong> This website collects
                contact information (name, phone, email) provided voluntarily through enquiry
                forms. This information is used solely to respond to your enquiry and is not
                sold to any third party.
              </p>
              <p>
                <strong className="text-white">Cookies:</strong> We use only essential cookies
                required for cart functionality (stored in your browser&apos;s localStorage).
                No tracking or advertising cookies are used.
              </p>
              <p>
                <strong className="text-white">Accuracy:</strong> Prices, stock availability,
                and product specifications are subject to change without notice. We endeavour
                to keep the website accurate and up to date.
              </p>
              <p>
                <strong className="text-white">Jurisdiction:</strong> Any disputes shall be
                subject to the jurisdiction of courts in India.
              </p>
            </CardContent>
          </Card>

        </div>
      </section>
    </>
  );
}
