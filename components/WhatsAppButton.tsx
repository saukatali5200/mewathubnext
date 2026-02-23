"use client";
import { MessageCircle } from "lucide-react";
import { SITE } from "@/lib/constants";

export default function WhatsAppButton() {
  const url = `https://wa.me/${SITE.whatsapp}?text=Hello%2C%20I%27m%20interested%20in%20your%20mustard%20oil%20products.`;
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl animate-fade-in"
      style={{ background: "#25d366", color: "#fff" }}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
}
