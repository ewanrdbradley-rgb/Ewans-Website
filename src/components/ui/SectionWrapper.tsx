"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function SectionWrapper({
  id,
  children,
  className,
  delay = 0,
}: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      viewport={{ once: true, margin: "-80px" }}
      className={cn("py-section px-4 sm:px-6 lg:px-8", className)}
    >
      <div className="max-w-5xl mx-auto">{children}</div>
    </motion.section>
  );
}
