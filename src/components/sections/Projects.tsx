"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import RoleTag from "@/components/ui/RoleTag";
import { projects } from "@/data/projects";

const categoryLabels: Record<string, string> = {
  athletic: "Athletics",
  tech:     "Technology",
  research: "Research",
};

/**
 * Featured-work banners — full-width image rows with the title
 * column on the right, straight from the studio-site references.
 */
export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <SectionHeader label="Work" heading="Projects & Research" index="04" />

      <div className="flex flex-col gap-14">
        {projects.map((project, i) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.08, ease: "easeOut" }}
            viewport={{ once: true, margin: "-60px" }}
            className="group grid grid-cols-1 lg:grid-cols-[1.6fr,1fr] gap-6 items-start border-t border-ink/15 pt-8"
          >
            {/* Banner image */}
            {project.image && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block h-60 sm:h-80 overflow-hidden rounded-card"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  style={{ objectPosition: project.imagePosition ?? "center" }}
                  sizes="(max-width: 1024px) 100vw, 700px"
                />
              </a>
            )}

            {/* Right column */}
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-coral">
                  /{categoryLabels[project.category]}
                </span>
                <span className="text-xs font-mono text-faint">
                  {project.year}
                </span>
              </div>

              <h3 className="font-display uppercase text-2xl sm:text-3xl text-ink group-hover:text-blue transition-colors leading-tight mb-3">
                {project.title}
              </h3>

              <p className="text-sm text-mid leading-relaxed mb-5">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <RoleTag key={tag} label={tag} variant="muted" />
                ))}
              </div>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center gap-2 self-start px-5 py-2.5 rounded-pill bg-blue text-paper text-xs font-bold uppercase tracking-[0.15em] hover:bg-ink transition-colors"
                >
                  {project.linkLabel ?? "Explore"}
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </SectionWrapper>
  );
}
