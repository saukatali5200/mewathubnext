import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { ThemeProvider } from "@/context/ThemeContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import ChatBot from "@/components/ChatBot";
import { SITE } from "@/lib/constants";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | Pure Mustard Oil Manufacturer India`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "mustard oil","sarson ka tel","cold pressed mustard oil",
    "mustard oil manufacturer India","bulk mustard oil supply",
    "oil cake cattle feed","mustard oil wholesaler",
    "Saukat Mill Oil","kachi ghani mustard oil",
  ],
  authors: [{ name: SITE.name }],
  openGraph: {
    type: "website",
    siteName: SITE.name,
    title: `${SITE.name} | Pure Mustard Oil Manufacturer`,
    description: SITE.description,
    locale: "en_IN",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={sora.variable} data-theme="light" suppressHydrationWarning>
      <body style={{ background: "var(--bg-page)", color: "var(--text-primary)" }} className="min-h-screen flex flex-col">
        <ThemeProvider>
          <CartProvider>
            <Navbar />
            <main className="flex-1 pt-16">
              {children}
            </main>
            <Footer />
            <ChatBot />
            <ScrollToTop />
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
