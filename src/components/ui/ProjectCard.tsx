"use client";

import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import RoleTag from "./RoleTag";
import { cn } from "@/lib/utils";
import type { ProjectEntry } from "@/types";

interface ProjectCardProps {
  project: ProjectEntry;
  index: number;
}

const categoryColors: Record<ProjectEntry["category"], string> = {
  athletic:  "text-jeani-accent",
  tech:      "text-blue-700",
  research:  "text-amber-700",
};

const categoryLabels: Record<ProjectEntry["category"], string> = {
  athletic:  "Athletics",
  tech:      "Technology",
  research:  "Research",
};

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      viewport={{ once: true, margin: "-60px" }}
      className={cn(
        "bg-jeani-cream-dark border border-jeani-border rounded-card overflow-hidden flex flex-col",
        project.featured && "md:col-span-2"
      )}
    >
      {/* Image area */}
      {(project.featured || project.image) && (
        <div
          className={cn(
            "relative w-full overflow-hidden",
            project.featured ? "h-40 sm:h-52" : "h-36",
            !project.image && (project.imagePlaceholder ?? "bg-jeani-cream-dark")
          )}
        >
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              style={{ objectPosition: project.imagePosition ?? "center" }}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className={`text-sm font-bold tracking-widest uppercase ${project.imagePlaceholder === "bg-jeani-accent" ? "text-jeani-cream/60" : "text-jeani-muted"}`}>
                {project.title}
              </span>
            </div>
          )}
        </div>
      )}

      <div className="p-6 sm:p-7 flex flex-col flex-1">
        {/* Category + year */}
        <div className="flex items-center justify-between mb-3">
          <span
            className={cn(
              "text-xs font-semibold tracking-widest uppercase",
              categoryColors[project.category]
            )}
          >
            {categoryLabels[project.category]}
          </span>
          <span className="text-xs text-jeani-muted font-mono">
            {project.year}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-grotesk font-bold text-lg text-jeani-dark mb-3 leading-snug">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-jeani-mid text-sm leading-relaxed flex-1 mb-5">
          {project.description}
        </p>

        {/* Tags + link */}
        <div className="flex flex-wrap items-center justify-between gap-3 mt-auto">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <RoleTag key={tag} label={tag} variant="muted" />
            ))}
          </div>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-semibold text-jeani-accent hover:text-jeani-accent-light transition-colors"
            >
              {project.linkLabel ?? "View"}
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
