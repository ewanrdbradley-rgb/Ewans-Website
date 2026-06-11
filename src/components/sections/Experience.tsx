"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, MapPin, Plus } from "lucide-react";
import Image from "next/image";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import RoleTag from "@/components/ui/RoleTag";
import { experiences } from "@/data/experience";

const words: Record<string, string> = {
  "jeani-ceo":       "Founder",
  "duke-decathlon":  "Athlete",
  "duke-ms":         "Researcher",
  "kwale-advisor":   "Advisor",
  "lboro-president": "Leader",
};

/**
 * Featured-work rows — thin rules, big display titles, and an
 * expanding panel with the photo banner and full details.
 */
export default function Experience() {
  const [openId, setOpenId] = useState<string | null>(experiences[0].id);

  return (
    <SectionWrapper id="experience">
      <SectionHeader label="Experience" heading="What I Do" index="02" />

      <div className="border-b border-ink/15">
        {experiences.map((entry, i) => {
          const isOpen = entry.id === openId;
          return (
            <motion.article
              key={entry.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05, ease: "easeOut" }}
              viewport={{ once: true, margin: "-60px" }}
              className="border-t border-ink/15"
            >
              {/* Row header — click to expand */}
              <button
                onClick={() => setOpenId(isOpen ? null : entry.id)}
                aria-expanded={isOpen}
                className="group w-full grid grid-cols-[1fr,auto] sm:grid-cols-[8rem,1fr,auto] items-center gap-4 py-5 text-left"
              >
                <span className="hidden sm:block text-[11px] font-bold tracking-[0.25em] uppercase text-coral">
                  {words[entry.id]}
                </span>
                <span
                  className={`font-display uppercase text-2xl sm:text-4xl leading-none transition-colors ${
                    isOpen ? "text-blue" : "text-ink group-hover:text-blue"
                  }`}
                >
                  {entry.role}
                </span>
                <span className="flex items-center gap-4">
                  <span className="hidden md:block text-sm font-semibold text-faint">
                    {entry.organization.split(",")[0]}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`w-8 h-8 rounded-full border flex items-center justify-center transition-colors ${
                      isOpen
                        ? "border-blue bg-blue text-paper"
                        : "border-ink/30 text-ink group-hover:border-blue group-hover:text-blue"
                    }`}
                  >
                    <Plus className="w-4 h-4" />
                  </motion.span>
                </span>
              </button>

              {/* Expanding detail panel */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pb-8 grid grid-cols-1 md:grid-cols-[1.2fr,1fr] gap-6 items-start">
                      {/* Photo banner */}
                      {entry.image && (
                        <div className="relative h-56 sm:h-72 overflow-hidden rounded-card group/img">
                          <Image
                            src={entry.image}
                            alt={`${entry.role} at ${entry.organization}`}
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-700"
                            style={{ objectPosition: entry.imagePosition ?? "center" }}
                            sizes="(max-width: 768px) 100vw, 640px"
                          />
                        </div>
                      )}

                      <div className={entry.image ? "" : "md:col-span-2 max-w-2xl"}>
                        <div className="flex items-center gap-3 flex-wrap mb-3">
                          {entry.organizationUrl ? (
                            <a
                              href={entry.organizationUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm font-bold text-blue hover:text-ink transition-colors flex items-center gap-1"
                            >
                              {entry.organization}
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          ) : (
                            <span className="text-sm font-bold text-ink">
                              {entry.organization}
                            </span>
                          )}
                          <span className="text-xs font-mono text-faint border border-ink/20 px-2 py-0.5 rounded-pill">
                            {entry.period}
                          </span>
                          <span className="flex items-center gap-1 text-xs text-faint">
                            <MapPin className="w-3 h-3" />
                            {entry.location}
                          </span>
                        </div>

                        <p className="text-sm text-mid leading-relaxed mb-4">
                          {entry.description}
                        </p>

                        <ul className="space-y-1.5 mb-5">
                          {entry.highlights.map((h, j) => (
                            <li
                              key={j}
                              className="flex items-start gap-3 text-sm text-mid"
                            >
                              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue shrink-0" />
                              {h}
                            </li>
                          ))}
                        </ul>

                        <div className="flex flex-wrap gap-2">
                          {entry.tags.map((tag) => (
                            <RoleTag key={tag} label={tag} />
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.article>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
