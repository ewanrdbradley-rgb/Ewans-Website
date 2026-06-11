"use client";

import { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "motion/react";
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

// Polaroid-style gallery under the wordmark
const gallery = [
  { src: "/images/track-start.jpg", label: "World Athletics Continental Tour — Italy",  pos: "50% 35%" },
  { src: "/images/headshot-v2.jpg", label: "Durham, NC",                                pos: "50% 15%" },
  { src: "/images/fuqua-pitch.jpg", label: "Jeani",                                     pos: "50% 25%" },
  { src: "/images/arusha-overlook.jpg", label: "Arusha, Tanzania",                      pos: "50% 35%" },
  { src: "/images/duke-team.jpg",   label: "Loughborough & Duke Track and Field",       pos: "50% 10%" },
];

function BigWord({ word, delay }: { word: string; delay: number }) {
  return (
    <span className="block overflow-hidden">
      <span className="flex">
        {word.split("").map((ch, i) => (
          <motion.span
            key={i}
            className="inline-block flex-1 text-center"
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{
              duration: 0.7,
              delay: delay + i * 0.045,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {ch}
          </motion.span>
        ))}
      </span>
    </span>
  );
}

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const yName = useTransform(scrollYProgress, [0, 1], [0, 90]);

  useEffect(() => {
    const id = setInterval(() => {
      setRoleIndex((i) => (i + 1) % roles.length);
    }, 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <section ref={sectionRef} id="hero" className="pt-24 pb-16 overflow-hidden">
      {/* Full-bleed wordmark */}
      <motion.h1
        style={{ y: yName }}
        className="font-display uppercase text-display-2xl text-blue px-2 sm:px-4 select-none"
      >
        <BigWord word="EWAN" delay={0.1} />
        <BigWord word="BRADLEY" delay={0.35} />
      </motion.h1>

      {/* Sub-row: bio + roles + CTAs */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 grid grid-cols-1 md:grid-cols-[1fr,1fr] gap-10 items-start">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex items-center gap-2 text-xs font-semibold tracking-[0.3em] uppercase text-coral mb-4"
          >
            /Duke University · Durham, NC
          </motion.p>

          <div className="h-8 overflow-hidden mb-4 flex items-center gap-3">
            <span className="font-mono text-xs text-blue shrink-0">
              0{roleIndex + 1}
            </span>
            <AnimatePresence mode="wait">
              <motion.p
                key={roleIndex}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="text-lg font-bold text-ink"
              >
                {roles[roleIndex]}
              </motion.p>
            </AnimatePresence>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="text-mid leading-relaxed max-w-md"
          >
            Co-Founder & CEO of Jeani, a wearable technology company focused on
            movement, musculoskeletal health, and longevity. International
            Decathlete competing for Duke University. MS in Global Health from
            Duke. Passionate about leveraging sport and movement to address
            health disparities globally.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="flex flex-col items-start md:items-end gap-6"
        >
          <div className="flex flex-wrap gap-3">
            <a
              href="#experience"
              className="inline-flex items-center px-6 py-3 rounded-pill bg-blue text-paper text-sm font-bold uppercase tracking-wide hover:bg-ink transition-colors"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 rounded-pill border border-ink/30 text-ink text-sm font-bold uppercase tracking-wide hover:border-blue hover:text-blue transition-colors"
            >
              Get in Touch
            </a>
          </div>
          <div className="flex items-center gap-4">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={label !== "Email" ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                className="text-mid hover:text-blue hover:-translate-y-0.5 transition-all"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Tilted photo gallery — straightens on hover */}
      <div className="mt-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto flex gap-4 sm:gap-6 items-center justify-center flex-wrap lg:flex-nowrap">
          {gallery.map((shot, i) => (
            <motion.figure
              key={shot.src}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 1.15 + i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ scale: 1.05, zIndex: 10 }}
              className={`relative shrink-0 w-36 sm:w-44 lg:w-1/5 bg-card p-2 pb-8 shadow-lg cursor-default ${
                i > 2 ? "hidden sm:block" : ""
              }`}
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={shot.src}
                  alt={shot.label}
                  fill
                  className="object-cover"
                  style={{ objectPosition: shot.pos }}
                  sizes="(max-width: 640px) 160px, 240px"
                  priority={i < 3}
                />
              </div>
              <figcaption className="absolute bottom-1.5 left-2 right-2 text-[9px] font-mono text-faint leading-tight line-clamp-2">
                {shot.label}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
