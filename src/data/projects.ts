import type { ProjectEntry } from "@/types";

export const projects: ProjectEntry[] = [
  {
    id: "jeani-app",
    title: "Jeani",
    category: "tech",
    description:
      "A wearable technology company focused on movement, musculoskeletal health, and longevity. Built from the ground up to bring movement intelligence to athletes and active people.",
    year: "Present",
    tags: ["Wearable Tech", "Health", "Musculoskeletal", "Longevity"],
    link: "https://www.jeanihealth.com",
    linkLabel: "Visit Jeani",
    featured: true,
    image: "/images/track-portrait.jpg",
    imagePosition: "50% 50%",
  },
  {
    id: "rtp-scoping-review",
    title: "Return-to-Play in LMICs: A Scoping Review",
    category: "research",
    description:
      "A PRISMA-guided scoping review examining return-to-play decision-making and athlete outcomes in sports & exercise medicine across low- and middle-income countries.",
    year: "2026",
    tags: ["Sports Medicine", "Global Health", "LMICs", "Scoping Review", "PRISMA"],
    link: "/RTP_LMICs_FINAL_04_23_26.pdf",
    linkLabel: "Read Paper",
    featured: false,
    image: "/images/rtp-map.png",
    imagePosition: "center",
    imagePlaceholder: "bg-card-2",
  },
];
