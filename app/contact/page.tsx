"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, MessageSquare, Send, CheckCircle, Clock, Loader2 } from "lucide-react";
import { SITE } from "@/lib/constants";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]     = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", subject: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1200);
  };

  const CONTACT_ITEMS = [
    { icon: Phone,      label: "Phone / WhatsApp", val: SITE.phone,   href: `tel:${SITE.phone}`,         sub: "Call or WhatsApp anytime" },
    { icon: Mail,       label: "Email",             val: SITE.email,   href: `mailto:${SITE.email}`,      sub: "We reply within 24 hours"  },
    { icon: MapPin,     label: "Address",           val: SITE.address, href: SITE.maps,                   sub: `PIN: ${SITE.pincode}`      },
    { icon: Clock,      label: "Business Hours",    val: "Mon–Sat, 8 AM – 7 PM", href: null,             sub: "Sunday: 9 AM – 2 PM"       },
  ];

  return (
    <>
      {/* HERO */}
      <section className="relative section-pad overflow-hidden">
        <div className="absolute inset-0 dot-grid" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, var(--bg-page) 30%, transparent)" }} />
        <div className="container relative z-10 max-w-3xl text-center">
          <div className="w-20 h-20 rounded-3xl theme-accent-subtle border theme-accent-border flex items-center justify-center mx-auto mb-8 shadow-lg" style={{ boxShadow: "var(--shadow-glow)" }}>
            <MessageSquare className="w-10 h-10 theme-accent" />
          </div>
          <span className="theme-badge inline-flex mb-6">Contact Us</span>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            Get in <span className="text-gradient">Touch</span>
          </h1>
          <p className="theme-text-secondary text-xl leading-relaxed">
            Have a question or want to place a bulk order? We&apos;re happy to help. Reach out directly or use the form below.
          </p>
        </div>
      </section>

      <section className="section-pad pt-0">
        <div className="container max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

            {/* CONTACT INFO */}
            <div className="lg:col-span-2 space-y-4">
              <h2 className="text-xl font-bold theme-text mb-6">Contact Details</h2>
              {CONTACT_ITEMS.map(({ icon: Icon, label, val, href, sub }) => (
                <div key={label} className="theme-card p-5 flex gap-4 items-start">
                  <div className="w-11 h-11 rounded-xl theme-accent-subtle border theme-accent-border flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 theme-accent" />
                  </div>
                  <div>
                    <div className="text-xs font-bold theme-text-muted uppercase tracking-widest mb-1">{label}</div>
                    {href ? (
                      <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                        className="font-semibold theme-text hover:theme-accent transition-colors text-sm block">
                        {val}
                      </a>
                    ) : (
                      <span className="font-semibold theme-text text-sm block">{val}</span>
                    )}
                    <span className="text-xs theme-text-muted">{sub}</span>
                  </div>
                </div>
              ))}

              {/* WhatsApp quick button */}
              {/* <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noopener noreferrer">
                <button className="w-full py-4 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 transition-all"
                  style={{ background: "#25d366", color: "#fff" }}>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.117 1.524 5.845L0 24l6.335-1.499C8.05 23.447 9.985 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.9 0-3.68-.52-5.21-1.42l-.374-.22-3.762.89.934-3.648-.244-.386C2.52 15.66 2 13.9 2 12 2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
                  Chat on WhatsApp
                </button>
              </a> */}
            </div>

            {/* FORM */}
            <div className="lg:col-span-3">
              <div className="theme-card p-8 md:p-10">
                {submitted ? (
                  <div className="text-center py-16">
                    <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ background: "rgba(16,185,129,0.1)", border: "2px solid rgba(16,185,129,0.3)" }}>
                      <CheckCircle className="w-10 h-10 text-green-500" />
                    </div>
                    <h2 className="text-2xl font-bold theme-text mb-3">Message Sent!</h2>
                    <p className="theme-text-secondary mb-8">Thank you for reaching out. We&apos;ll get back to you within 1 business day.</p>
                    <button className="theme-btn-outline px-8 py-3 rounded-xl font-bold"
                      onClick={() => { setSubmitted(false); setForm({ name:"",phone:"",email:"",subject:"",message:"" }); }}>
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-xl font-bold theme-text mb-8">Send an Enquiry</h2>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {[
                          { name: "name",  label: "Your Name*",    type: "text",  placeholder: "Saukat Ali",         required: true  },
                          { name: "phone", label: "Phone Number*", type: "tel",   placeholder: "+91 9694929317",     required: true  },
                          { name: "email", label: "Email Address", type: "email", placeholder: "you@example.com",    required: false },
                        ].map(({ name, label, type, placeholder, required }) => (
                          <div key={name} className={name === "email" ? "sm:col-span-2" : ""}>
                            <label className="block text-xs font-bold theme-text-muted uppercase tracking-widest mb-2">{label}</label>
                            <input name={name} type={type} placeholder={placeholder} required={required}
                              value={(form as Record<string,string>)[name]} onChange={handleChange}
                              className="theme-input w-full rounded-xl px-4 py-3 text-sm" />
                          </div>
                        ))}
                      </div>
                      <div>
                        <label className="block text-xs font-bold theme-text-muted uppercase tracking-widest mb-2">Subject</label>
                        <input name="subject" type="text" placeholder="Bulk order enquiry / Product query..."
                          value={form.subject} onChange={handleChange}
                          className="theme-input w-full rounded-xl px-4 py-3 text-sm" />
                      </div>
                      <div>
                        <label className="block text-xs font-bold theme-text-muted uppercase tracking-widest mb-2">Message*</label>
                        <textarea name="message" rows={3} required placeholder="Tell us what you need — quantity, product type, delivery location..."
                          value={form.message} onChange={handleChange}
                          className="theme-input w-full rounded-xl px-4 py-3 text-sm resize-none" />
                      </div>
                      <button type="submit" disabled={loading}
                        className="w-full theme-btn-primary py-4 rounded-xl font-bold text-base flex items-center justify-center gap-2 disabled:opacity-60">
                        {loading ? <><Loader2 className="w-5 h-5 animate-spin" /> Sending...</> : <><Send className="w-5 h-5" /> Send Message</>}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
