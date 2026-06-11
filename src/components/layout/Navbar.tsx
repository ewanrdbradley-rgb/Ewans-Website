"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "About",      href: "#hero" },
  { label: "Journey",    href: "#journey" },
  { label: "Experience", href: "#experience" },
  { label: "Education",  href: "#education" },
  { label: "Projects",   href: "#projects" },
  { label: "Press",      href: "#press" },
  { label: "Contact",    href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = () => setMobileOpen(false);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b",
        scrolled
          ? "bg-paper/90 backdrop-blur-md border-ink/15"
          : "bg-transparent border-transparent"
      )}
    >
      <nav className="px-4 sm:px-6 lg:px-8 flex items-center justify-between h-14">
        {/* Logo */}
        <a
          href="#hero"
          className="font-display text-blue text-xl leading-none hover:text-ink transition-colors"
        >
          EB
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-7">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="text-xs font-bold uppercase tracking-[0.15em] text-mid hover:text-blue transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center text-xs font-bold uppercase tracking-[0.15em] bg-blue text-paper px-4 py-2 rounded-pill hover:bg-ink transition-colors"
        >
          Get in Touch
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-ink"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-paper/95 backdrop-blur-md border-t border-ink/15 px-4 pb-6 pt-4">
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={handleNavClick}
                  className="block py-3 text-base font-bold uppercase tracking-wide text-mid hover:text-blue transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={handleNavClick}
            className="mt-4 block text-center text-sm font-bold uppercase tracking-wide bg-blue text-paper px-5 py-3 rounded-pill hover:bg-ink transition-colors"
          >
            Get in Touch
          </a>
        </div>
      )}
    </header>
  );
}
