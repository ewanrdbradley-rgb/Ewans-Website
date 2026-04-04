import type { ProjectEntry } from "@/types";

export const projects: ProjectEntry[] = [
  {
    id: "jeani-app",
    title: "Jeani — Joint Health Intelligence",
    category: "tech",
    description:
      "A privacy-first mobile platform that uses AI and wearable sensor data to monitor joint health, flag injury risk, and guide athlete recovery. Built from zero to live on the iOS App Store.",
    year: "2023",
    tags: ["iOS", "AI", "Health Tech", "Wearables"],
    link: "https://www.jeanihealth.com",
    linkLabel: "Visit Jeani",
    featured: true,
    imagePlaceholder: "bg-jeani-cream-dark",
  },
  {
    id: "acl-research",
    title: "ACL Prevention Protocol Study",
    category: "research",
    description:
      "Multi-semester research study analyzing biomechanical risk factors for anterior cruciate ligament injuries in collegiate athletes, using motion capture data and wearable sensors to build a predictive model.",
    year: "2024",
    tags: ["Biomechanics", "ACL", "Injury Prevention", "Data Science"],
    featured: true,
    imagePlaceholder: "bg-stone-100",
  },
  {
    id: "decathlon-training",
    title: "Data-Driven Decathlon Training",
    category: "athletic",
    description:
      "Personal project integrating Jeani sensor data with training logs to optimize event-by-event performance across all ten decathlon disciplines, identifying fatigue patterns and injury risk windows.",
    year: "2024",
    tags: ["Decathlon", "Performance", "Self-tracking", "Analytics"],
    featured: false,
    imagePlaceholder: "bg-jeani-cream-dark",
  },
  {
    id: "joint-health-dashboard",
    title: "Athlete Joint Health Dashboard",
    category: "tech",
    description:
      "Internal tool for Duke Athletics staff to visualize team-wide joint stress data, flagging athletes at heightened injury risk before symptoms emerge during training cycles.",
    year: "2023",
    tags: ["Dashboard", "Next.js", "Data Viz", "Duke Athletics"],
    featured: false,
    imagePlaceholder: "bg-stone-100",
  },
];
