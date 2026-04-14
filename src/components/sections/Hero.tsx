"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Twitter, Instagram, Linkedin, Mail } from "lucide-react";
import Image from "next/image";

const roles = [
  "Co-Founder & CEO, Jeani",
  "International Decathlete",
  "MS Global Health — Duke University",
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
            Co-Founder & CEO of Jeani, a wearable technology company focused on
            movement, musculoskeletal health, and longevity. International
            Decathlete competing for Duke University. MS in Global Health from
            Duke. Passionate about leveraging sport and movement to address
            health disparities globally.
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

        {/* Right column — headshot */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="hidden lg:flex flex-col items-center justify-center"
        >
          <div className="relative w-full max-w-sm aspect-[3/4] rounded-card overflow-hidden border border-jeani-border shadow-sm">
            <Image
              src="/images/headshot-v2.jpg"
              alt="Ewan Bradley"
              fill
              className="object-cover object-[center_15%]"
              sizes="400px"
              priority
            />
            {/* Subtle bottom gradient for text legibility if needed */}
            <div className="absolute inset-0 bg-gradient-to-t from-jeani-dark/20 to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
