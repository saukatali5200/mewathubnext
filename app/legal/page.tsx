import type { Metadata } from "next";
import { ShieldCheck, FileText, AlertCircle } from "lucide-react";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "GST & Legal Information",
  description:
    "GST registration details, FSSAI licence, HSN codes, billing policies and legal information for Saukat Mill Oil.",
};

export default function LegalPage() {
  return (
    <>
      {/* HERO */}
      <section className="section-pad" style={{ background: "var(--bg-surface)" }}>
        <div className="container max-w-4xl text-center">
          <div className="w-16 h-16 rounded-2xl theme-accent-subtle border theme-accent-border flex items-center justify-center mx-auto mb-6">
            <ShieldCheck className="w-8 h-8 theme-accent" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 theme-text">
            GST &amp; <span className="text-gradient">Legal Info</span>
          </h1>
          <p className="theme-text-secondary text-lg">
            All regulatory registrations, GST details, HSN codes, and compliance information for {SITE.name}.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container max-w-4xl space-y-8">

          {/* Business Registration */}
          <div className="theme-card rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-5">
              <FileText className="w-5 h-5 theme-accent" />
              <h2 className="font-bold theme-text text-lg">Business Registration Details</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { label: "Business Name",    value: SITE.name },
                { label: "Type",             value: "Proprietorship / Manufacturing Unit" },
                { label: "Location",         value: "India" },
                { label: "GSTIN",            value: SITE.gst },
                { label: "FSSAI Licence No", value: SITE.fssai },
                { label: "CIN",              value: SITE.cin },
              ].map(({ label, value }) => (
                <div key={label} className="border-b theme-divider pb-3 last:border-0">
                  <dt className="text-xs theme-text-muted uppercase tracking-wider mb-1">{label}</dt>
                  <dd className="theme-text font-mono text-sm">{value}</dd>
                </div>
              ))}
            </div>
          </div>

          {/* GST Information */}
          <div className="theme-card rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-5">
              <ShieldCheck className="w-5 h-5 theme-accent" />
              <h2 className="font-bold theme-text text-lg">GST Information</h2>
            </div>
            <p className="theme-text-secondary text-sm mb-4">
              {SITE.name} is a GST-registered entity. GST will be charged as applicable on all taxable supplies.
              A proper tax invoice will be issued for all B2B purchases, enabling Input Tax Credit (ITC) for eligible buyers.
            </p>
            <div className="overflow-x-auto rounded-xl border theme-divider">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b theme-divider" style={{ background: "var(--bg-surface)" }}>
                    <th className="text-left py-3 px-4 theme-text-muted font-medium text-xs uppercase tracking-wider">Product Category</th>
                    <th className="text-left py-3 px-4 theme-text-muted font-medium text-xs uppercase tracking-wider">HSN Code</th>
                    <th className="text-center py-3 px-4 theme-text-muted font-medium text-xs uppercase tracking-wider">GST Rate</th>
                    <th className="text-center py-3 px-4 theme-text-muted font-medium text-xs uppercase tracking-wider">IGST</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b theme-divider">
                    <td className="py-3 px-4 theme-text">Mustard Oil (all pack sizes)</td>
                    <td className="py-3 px-4 font-mono theme-text-secondary">1514</td>
                    <td className="py-3 px-4 text-center theme-accent font-semibold">5%</td>
                    <td className="py-3 px-4 text-center theme-text-secondary">5%</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 theme-text">Oil Cake / Cattle Feed</td>
                    <td className="py-3 px-4 font-mono theme-text-secondary">2306</td>
                    <td className="py-3 px-4 text-center text-green-500 font-semibold">0%</td>
                    <td className="py-3 px-4 text-center theme-text-secondary">0%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs theme-text-muted flex items-start gap-2 mt-4">
              <AlertCircle className="w-3.5 h-3.5 shrink-0 mt-0.5" />
              GST rates are as per current government notification and are subject to change. Please consult your tax advisor for latest applicability.
            </p>
          </div>

          {/* Billing Policy */}
          <div className="theme-card rounded-2xl p-6">
            <h2 className="font-bold theme-text text-lg mb-5">Billing &amp; Invoice Policy</h2>
            <div className="space-y-4 theme-text-secondary text-sm leading-relaxed">
              <p><strong className="theme-text">Tax Invoice:</strong> A GST-compliant tax invoice will be issued for all purchases above ₹200 and for all B2B transactions, regardless of amount.</p>
              <p><strong className="theme-text">Invoice Format:</strong> Invoices will include GSTIN, HSN codes, quantity, rate, taxable value, GST amount (CGST+SGST or IGST), and total amount as required under GST rules.</p>
              <p><strong className="theme-text">Payment Terms (Wholesale):</strong> Standard terms are 50% advance and 50% before dispatch for new customers. Established customers may be extended credit on a case-by-case basis.</p>
              <p><strong className="theme-text">Returns &amp; Refunds:</strong> Claims for damaged or defective goods must be raised within 48 hours of delivery with photographic evidence. Approved claims will be replaced or credited in the next order.</p>
            </div>
          </div>

          {/* Privacy & Terms */}
          <div className="theme-card rounded-2xl p-6">
            <h2 className="font-bold theme-text text-lg mb-5">Privacy &amp; Terms of Use</h2>
            <div className="space-y-4 theme-text-secondary text-sm leading-relaxed">
              <p><strong className="theme-text">Data Collection:</strong> This website collects contact information (name, phone, email) provided voluntarily through enquiry forms. This information is used solely to respond to your enquiry and is not sold to any third party.</p>
              <p><strong className="theme-text">Cookies:</strong> We use only essential cookies required for cart functionality (stored in your browser&apos;s localStorage). No tracking or advertising cookies are used.</p>
              <p><strong className="theme-text">Accuracy:</strong> Prices, stock availability, and product specifications are subject to change without notice. We endeavour to keep the website accurate and up to date.</p>
              <p><strong className="theme-text">Jurisdiction:</strong> Any disputes shall be subject to the jurisdiction of courts in India.</p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
