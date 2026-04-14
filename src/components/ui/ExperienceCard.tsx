"use client";

import { motion } from "motion/react";
import { ExternalLink, MapPin } from "lucide-react";
import Image from "next/image";
import RoleTag from "./RoleTag";
import type { ExperienceEntry } from "@/types";

interface ExperienceCardProps {
  entry: ExperienceEntry;
  index: number;
}

function IconBlock({ icon }: { icon: ExperienceEntry["icon"] }) {
  const configs = {
    jeani:    { label: "J", bg: "bg-jeani-accent",  text: "text-jeani-cream" },
    duke:     { label: "D", bg: "bg-[#003087]",     text: "text-white" },
    research: { label: "R", bg: "bg-jeani-mid",     text: "text-white" },
    lboro:    { label: "L", bg: "bg-[#660099]",     text: "text-white" },
  };
  const c = configs[icon];
  return (
    <div
      className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold shrink-0 ${c.bg} ${c.text}`}
    >
      {c.label}
    </div>
  );
}

export default function ExperienceCard({ entry, index }: ExperienceCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.12, ease: "easeOut" }}
      viewport={{ once: true, margin: "-60px" }}
      className="bg-jeani-cream-dark border border-jeani-border rounded-card overflow-hidden"
    >
      {/* Photo banner */}
      {entry.image && (
        <div className="relative w-full h-56 sm:h-72">
          <Image
            src={entry.image}
            alt={`${entry.role} at ${entry.organization}`}
            fill
            className="object-cover"
            style={{ objectPosition: entry.imagePosition ?? "center" }}
            sizes="(max-width: 768px) 100vw, 800px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-jeani-cream-dark/60 to-transparent" />
        </div>
      )}

      <div className="p-7 sm:p-8">
      {/* Top row */}
      <div className="flex items-start gap-4 mb-5">
        <IconBlock icon={entry.icon} />
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <h3 className="font-grotesk font-bold text-lg text-jeani-dark leading-tight">
              {entry.role}
            </h3>
            <span className="text-xs font-mono text-jeani-muted bg-jeani-border px-2 py-0.5 rounded-pill whitespace-nowrap">
              {entry.period}
            </span>
          </div>
          <div className="flex items-center gap-3 flex-wrap">
            {entry.organizationUrl ? (
              <a
                href={entry.organizationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-jeani-mid hover:text-jeani-accent transition-colors flex items-center gap-1 group"
              >
                {entry.organization}
                <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            ) : (
              <span className="font-semibold text-jeani-mid">
                {entry.organization}
              </span>
            )}
            <span className="flex items-center gap-1 text-sm text-jeani-muted">
              <MapPin className="w-3 h-3" />
              {entry.location}
            </span>
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="text-jeani-mid leading-relaxed mb-5">{entry.description}</p>

      {/* Highlights */}
      <ul className="space-y-2 mb-6">
        {entry.highlights.map((h, i) => (
          <li key={i} className="flex items-start gap-3 text-sm text-jeani-mid">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-jeani-accent shrink-0" />
            {h}
          </li>
        ))}
      </ul>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {entry.tags.map((tag) => (
          <RoleTag key={tag} label={tag} />
        ))}
      </div>
      </div>
    </motion.article>
  );
}
