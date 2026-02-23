"use client";
import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 dot-grid" />
      <div className="relative z-10 text-center px-4">
        <div className="text-[8rem] font-extrabold text-gradient leading-none mb-4">404</div>
        <h1 className="text-3xl font-bold theme-text mb-4">Page Not Found</h1>
        <p className="theme-text-secondary text-lg mb-10 max-w-md mx-auto">The page you&apos;re looking for doesn&apos;t exist or has been moved.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <button className="theme-btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-bold">
              <Home className="w-5 h-5" /> Go Home
            </button>
          </Link>
          <button onClick={() => history.back()} className="theme-btn-outline inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-bold">
            <ArrowLeft className="w-5 h-5" /> Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
