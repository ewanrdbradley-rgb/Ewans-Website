"use client";

import { motion } from "motion/react";

interface RevealProps {
  text: string;
  className?: string;
  delay?: number;
}

const wordVariants = {
  hidden: { y: "110%" },
  visible: {
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

/**
 * Word-by-word rising reveal for headings — each word slides up
 * out of its own clipping box as it scrolls into view.
 *
 * The viewport observer lives on the (never-clipped) outer span and
 * drives the words through variants: a fully-clipped element has no
 * visible intersection, so observing the words directly never fires.
 */
export default function Reveal({ text, className, delay = 0 }: RevealProps) {
  const words = text.split(" ");
  return (
    <motion.span
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.07, delayChildren: delay },
        },
      }}
    >
      {words.map((word, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden align-bottom pb-1 -mb-1"
        >
          <motion.span className="inline-block" variants={wordVariants}>
            {word}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}
