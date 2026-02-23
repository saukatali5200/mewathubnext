"use client";

import React, { useState, useRef, useEffect } from "react";
import { Sun, Moon, Sunset } from "lucide-react";
import { useTheme, type Theme } from "@/context/ThemeContext";
import { cn } from "@/lib/utils";

const THEMES: { value: Theme; label: string; icon: React.ReactNode; desc: string }[] = [
  { value: "dark",    label: "Dark",    icon: <Moon className="w-4 h-4" />,   desc: "Classic dark" },
  { value: "light",   label: "Light",   icon: <Sun className="w-4 h-4" />,    desc: "Clean light"  },
  { value: "saffron", label: "Saffron", icon: <Sunset className="w-4 h-4" />, desc: "Warm saffron" },
];

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const current = THEMES.find((t) => t.value === theme) ?? THEMES[0];

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((p) => !p)}
        className={cn(
          "flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200",
          "border theme-btn"
        )}
        aria-label="Change theme"
      >
        {current.icon}
        <span className="hidden sm:inline">{current.label}</span>
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 w-44 rounded-xl border shadow-xl z-50 theme-dropdown overflow-hidden">
          {THEMES.map((t) => (
            <button
              key={t.value}
              onClick={() => { setTheme(t.value); setOpen(false); }}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-3 text-sm transition-colors text-left",
                "theme-option",
                theme === t.value && "theme-option-active"
              )}
            >
              <span className="theme-icon">{t.icon}</span>
              <div>
                <div className="font-medium">{t.label}</div>
                <div className="text-xs opacity-60">{t.desc}</div>
              </div>
              {theme === t.value && (
                <span className="ml-auto w-2 h-2 rounded-full bg-current opacity-70" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
