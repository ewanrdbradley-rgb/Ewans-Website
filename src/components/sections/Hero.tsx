"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Twitter, Instagram, Linkedin, Mail } from "lucide-react";

const roles = [
  "CEO, Jeani Health",
  "Duke Decathlete",
  "Lead Researcher, Global Sports Medicine",
];

const socials = [
  {
    icon: Twitter,
    href: "https://twitter.com/ewanbradley4",
    label: "Twitter",
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/ewan_bradley",
    label: "Instagram",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/ewanrdbradley/",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: "mailto:ewanrdbradley@gmail.com",
    label: "Email",
  },
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setRoleIndex((i) => (i + 1) % roles.length);
    }, 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-5xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-20">
        {/* Left column */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Eyebrow */}
          <p className="text-xs font-semibold tracking-widest uppercase text-jeani-accent mb-6">
            Duke University · Durham, NC
          </p>

          {/* Name */}
          <h1 className="font-grotesk font-extrabold text-display-xl text-jeani-dark mb-4 leading-none">
            Ewan
            <br />
            Bradley
          </h1>

          {/* Animated role */}
          <div className="h-8 overflow-hidden mb-8">
            <AnimatePresence mode="wait">
              <motion.p
                key={roleIndex}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="text-lg font-medium text-jeani-mid"
              >
                {roles[roleIndex]}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Bio */}
          <p className="text-jeani-mid leading-relaxed max-w-md mb-10">
            Building technology that keeps athletes in the game. I bridge the
            worlds of elite sport, clinical research, and software — from
            competing in the decathlon at Duke to founding Jeani Health and
            leading sports medicine research.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 mb-10">
            <a
              href="#experience"
              className="inline-flex items-center px-6 py-3 rounded-pill bg-jeani-dark text-jeani-cream text-sm font-semibold hover:bg-jeani-accent transition-colors"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 rounded-pill border border-jeani-border text-jeani-mid text-sm font-semibold hover:border-jeani-dark hover:text-jeani-dark transition-colors"
            >
              Get in Touch
            </a>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={label !== "Email" ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                className="text-jeani-muted hover:text-jeani-dark transition-colors"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right column — decorative panel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="hidden lg:flex flex-col items-center justify-center"
        >
          <div className="relative w-full aspect-square max-w-sm">
            {/* Outer ring */}
            <div className="absolute inset-0 rounded-card bg-jeani-cream-dark border border-jeani-border" />

            {/* Inner content */}
            <div className="absolute inset-6 rounded-[0.875rem] bg-jeani-cream border border-jeani-border flex flex-col items-center justify-center p-8 text-center gap-6">
              {/* Stats */}
              <div className="w-full grid grid-cols-2 gap-4">
                {[
                  { value: "10", label: "Decathlon Events" },
                  { value: "3×", label: "Roles in Sport & Tech" },
                  { value: "Duke", label: "University" },
                  { value: "iOS", label: "Jeani on App Store" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="flex flex-col items-center justify-center bg-jeani-cream-dark rounded-xl p-4"
                  >
                    <span className="font-grotesk font-extrabold text-2xl text-jeani-dark">
                      {stat.value}
                    </span>
                    <span className="text-xs text-jeani-muted mt-1 text-center leading-tight">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>

              <a
                href="https://www.jeanihealth.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-2.5 rounded-pill border border-jeani-accent text-jeani-accent text-sm font-semibold hover:bg-jeani-accent hover:text-jeani-cream transition-colors"
              >
                Visit Jeani →
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
