"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import { press } from "@/data/press";

export default function Press() {
  return (
    <SectionWrapper id="press">
      <SectionHeader label="Press" heading="In the News" index="05" />
      <div className="border-b border-ink/15">
        {press.map((article, i) => (
          <motion.a
            key={article.id}
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
            viewport={{ once: true, margin: "-60px" }}
            className="group grid grid-cols-[1fr,auto] sm:grid-cols-[14rem,1fr,auto] items-center gap-4 border-t border-ink/15 py-7"
          >
            <div className="hidden sm:block">
              <span className="block text-[11px] font-bold tracking-[0.25em] uppercase text-coral mb-1">
                {article.publication}
              </span>
              <span className="text-xs font-mono text-faint">
                {article.date}
              </span>
            </div>
            <div>
              <span className="sm:hidden block text-[11px] font-bold tracking-[0.25em] uppercase text-coral mb-1">
                {article.publication} · {article.date}
              </span>
              <h3 className="font-display uppercase text-xl sm:text-2xl text-ink group-hover:text-blue transition-colors leading-tight mb-1.5">
                {article.headline}
              </h3>
              <p className="text-sm text-mid leading-relaxed max-w-2xl">
                {article.excerpt}
              </p>
            </div>
            <span className="w-10 h-10 rounded-full border border-ink/30 flex items-center justify-center text-ink group-hover:bg-blue group-hover:border-blue group-hover:text-paper transition-colors shrink-0">
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </motion.a>
        ))}
      </div>
    </SectionWrapper>
  );
}
