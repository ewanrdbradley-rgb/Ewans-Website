"use client";

import { motion } from "motion/react";
import { Mail, Twitter, Instagram, Linkedin, ExternalLink } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";

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
    <SectionWrapper id="contact">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left */}
        <div>
          <SectionHeader label="Contact" heading="Let's Connect" />
          <p className="text-jeani-mid leading-relaxed max-w-sm">
            Whether you&apos;re building in health tech, working in sports
            science, or just want to say hello — I&apos;m always happy to
            connect.
          </p>
        </div>

        {/* Right — link rows */}
        <div className="flex flex-col gap-2">
          {contactLinks.map(({ icon: Icon, label, value, href }, i) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08, ease: "easeOut" }}
              viewport={{ once: true }}
              className="group flex items-center gap-4 px-5 py-4 rounded-xl border border-transparent hover:bg-jeani-cream-dark hover:border-jeani-border transition-all"
            >
              <div className="w-9 h-9 rounded-xl bg-jeani-cream-dark border border-jeani-border flex items-center justify-center shrink-0 group-hover:border-jeani-accent transition-colors">
                <Icon className="w-4 h-4 text-jeani-mid group-hover:text-jeani-accent transition-colors" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-jeani-muted font-medium mb-0.5">
                  {label}
                </p>
                <p className="text-sm font-semibold text-jeani-dark truncate">
                  {value}
                </p>
              </div>
              <ExternalLink className="w-4 h-4 text-jeani-muted opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
            </motion.a>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
