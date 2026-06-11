"use client";

import { motion } from "motion/react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";

const steps = [
  {
    n: "01",
    tag: "Personal",
    title: "Starting point",
    copy: "Health challenges as a kid gave me an early appreciation for access to care — and for treating setbacks as part of the process rather than the end of it.",
  },
  {
    n: "02",
    tag: "Sport",
    title: "The decathlon",
    copy: "Ten events over two days. Training for all of them at once is an exercise in prioritisation and consistency, and competing internationally taught me to perform under pressure.",
  },
  {
    n: "03",
    tag: "Research",
    title: "Global health",
    copy: "At Duke, I studied global health with a focus on sports medicine — how movement and wearable data support long-term health, and how sport can reduce health disparities.",
  },
  {
    n: "04",
    tag: "Business",
    title: "Jeani",
    copy: "Jeani applies that work directly: wearable technology for movement, musculoskeletal health, and longevity.",
  },
  {
    n: "05",
    tag: "Technology",
    title: "What's next",
    copy: "The goal stays the same across all of it — help people move well and stay healthy for longer.",
  },
];

export default function Journey() {
  return (
    <SectionWrapper id="journey">
      <SectionHeader label="Journey" heading="Background" index="01" />

      <div>
        <div>
          <p className="text-mid leading-relaxed max-w-2xl mb-12 text-lg">
            Sport shaped how I work. The decathlon rewards range and
            consistency over any single talent, and I take the same approach to
            research and building a company.
          </p>

          {/* Numbered editorial rows */}
          <ol>
            {steps.map((step, i) => (
              <motion.li
                key={step.n}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: "easeOut" }}
                viewport={{ once: true, margin: "-60px" }}
                className="group grid grid-cols-[3.5rem,1fr] sm:grid-cols-[5rem,12rem,1fr] gap-x-4 gap-y-2 border-t border-ink/15 py-6"
              >
                <span className="font-display text-2xl sm:text-3xl text-outline-blue group-hover:text-blue transition-colors leading-none [-webkit-text-stroke-width:1.5px]">
                  /{step.n}
                </span>
                <div>
                  <span className="block text-[11px] font-bold tracking-[0.25em] uppercase text-coral mb-1">
                    {step.tag}
                  </span>
                  <h3 className="font-display uppercase text-xl text-ink leading-tight">
                    {step.title}
                  </h3>
                </div>
                <p className="col-span-2 sm:col-span-1 text-sm text-mid leading-relaxed max-w-xl">
                  {step.copy}
                </p>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </SectionWrapper>
  );
}
