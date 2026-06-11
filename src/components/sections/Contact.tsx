"use client";

import { motion } from "motion/react";
import { Mail, Twitter, Instagram, Linkedin, ExternalLink } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";

const contactLinks = [
  {
    icon: Mail,
    label: "Personal Email",
    value: "ewanrdbradley@gmail.com",
    href: "mailto:ewanrdbradley@gmail.com",
  },
  {
    icon: Mail,
    label: "Jeani Email",
    value: "ewan@jeanihealth.com",
    href: "mailto:ewan@jeanihealth.com",
  },
  {
    icon: Twitter,
    label: "Twitter / X",
    value: "@ewanbradley4",
    href: "https://twitter.com/ewanbradley4",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@ewan_bradley",
    href: "https://www.instagram.com/ewan_bradley",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "ewanrdbradley",
    href: "https://www.linkedin.com/in/ewanrdbradley/",
  },
];

export default function Contact() {
  return (
    <>
      <SectionWrapper id="contact" className="!pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left */}
          <div>
            <p className="text-xs font-bold tracking-[0.3em] uppercase text-coral mb-3">
              /Contact
            </p>
            <h2 className="font-display uppercase text-display-lg text-ink mb-6">
              Let&apos;s Connect
            </h2>
            <p className="text-mid leading-relaxed max-w-sm">
              Whether you&apos;re building in health tech, working in sports
              science, or just want to say hello — I&apos;m always happy to
              connect.
            </p>
          </div>

          {/* Right — link rows */}
          <div className="border-b border-ink/15">
            {contactLinks.map(({ icon: Icon, label, value, href }, i) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: i * 0.07, ease: "easeOut" }}
                viewport={{ once: true }}
                className="group flex items-center gap-4 border-t border-ink/15 py-4"
              >
                <Icon className="w-4 h-4 text-mid group-hover:text-blue transition-colors shrink-0" />
                <span className="text-xs font-bold tracking-[0.15em] uppercase text-faint w-32 shrink-0">
                  {label}
                </span>
                <span className="text-sm font-bold text-ink group-hover:text-blue transition-colors truncate">
                  {value}
                </span>
                <ExternalLink className="w-4 h-4 text-faint opacity-0 group-hover:opacity-100 transition-opacity ml-auto shrink-0" />
              </motion.a>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
