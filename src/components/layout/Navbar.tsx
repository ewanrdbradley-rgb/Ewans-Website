"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "About",      href: "#hero" },
  { label: "Experience", href: "#experience" },
  { label: "Education",  href: "#education" },
  { label: "Projects",   href: "#projects" },
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
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-jeani-cream/95 backdrop-blur-sm border-b border-jeani-border"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <a
          href="#hero"
          className="font-grotesk font-bold text-jeani-dark text-lg tracking-tight hover:text-jeani-accent transition-colors"
        >
          EB
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="text-sm font-medium text-jeani-mid hover:text-jeani-dark transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 text-sm font-semibold bg-jeani-dark text-jeani-cream px-5 py-2.5 rounded-pill hover:bg-jeani-accent transition-colors"
        >
          Get in Touch
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-jeani-dark"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-jeani-cream/98 backdrop-blur-sm border-t border-jeani-border px-4 pb-6 pt-4">
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={handleNavClick}
                  className="block py-3 text-base font-medium text-jeani-mid hover:text-jeani-dark transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={handleNavClick}
            className="mt-4 block text-center text-sm font-semibold bg-jeani-dark text-jeani-cream px-5 py-3 rounded-pill hover:bg-jeani-accent transition-colors"
          >
            Get in Touch
          </a>
        </div>
      )}
    </header>
  );
}
