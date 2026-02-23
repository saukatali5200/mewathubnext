"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingCart, Menu, X, Droplets } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";
import ThemeSwitcher from "@/components/ThemeSwitcher";

export default function Navbar() {
  const pathname = usePathname();
  const { totalItems } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 theme-navbar glass",
          scrolled && "shadow-lg"
        )}
      >
        <nav className="container mx-auto px-4 h-16 flex items-center justify-between max-w-7xl">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 hover:opacity-90 transition-opacity">
            <div className="w-9 h-9 rounded-xl theme-accent-bg flex items-center justify-center shadow-lg">
              <Droplets className="w-5 h-5 text-[#1a1a1a]" />
            </div>
            <div className="leading-tight">
              <span className="font-bold text-base theme-text block leading-none">{SITE.name}</span>
              <span className="text-[10px] theme-text-muted tracking-wider uppercase">Pure Mustard Oil</span>
            </div>
          </Link>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                    pathname === link.href
                      ? "theme-accent theme-accent-subtle font-semibold"
                      : "theme-text-secondary hover:theme-text theme-btn-ghost"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right controls */}
          <div className="flex items-center gap-2">
            <ThemeSwitcher />

            {/* Cart */}
            <Link href="/cart">
              <button className="relative w-10 h-10 rounded-lg theme-btn-ghost flex items-center justify-center transition-all">
                <ShoppingCart className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full theme-accent-bg text-[#1a1a1a] text-xs font-bold flex items-center justify-center animate-scale-in">
                    {totalItems > 9 ? "9+" : totalItems}
                  </span>
                )}
              </button>
            </Link>

            {/* Mobile toggle */}
            <button
              className="lg:hidden w-10 h-10 rounded-lg theme-btn-ghost flex items-center justify-center transition-all"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile drawer */}
      <div
        className={cn(
          "fixed top-0 right-0 h-full w-72 z-50 theme-elevated border-l lg:hidden",
          "transform transition-transform duration-300 ease-in-out",
          mobileOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b theme-divider">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg theme-accent-bg flex items-center justify-center">
              <Droplets className="w-4 h-4 text-[#1a1a1a]" />
            </div>
            <span className="font-semibold theme-text">{SITE.name}</span>
          </div>
          <button
            className="w-8 h-8 rounded-lg theme-btn-ghost flex items-center justify-center"
            onClick={() => setMobileOpen(false)}
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <nav className="p-4 space-y-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-all",
                pathname === link.href
                  ? "theme-accent theme-accent-subtle"
                  : "theme-text-secondary hover:theme-text theme-btn-ghost"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="px-4 pt-2 border-t theme-divider mx-4">
          <Link href="/cart" className="block mt-4">
            <button className="w-full py-3 px-4 rounded-xl theme-btn-primary flex items-center justify-center gap-2 font-semibold">
              <ShoppingCart className="w-4 h-4" />
              View Cart
              {totalItems > 0 && (
                <span className="ml-1 bg-[rgba(0,0,0,0.2)] text-inherit text-xs font-bold px-2 py-0.5 rounded-full">
                  {totalItems}
                </span>
              )}
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
