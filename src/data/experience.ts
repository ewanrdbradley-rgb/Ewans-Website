import type { ExperienceEntry } from "@/types";

export const experiences: ExperienceEntry[] = [
  {
    id: "jeani-ceo",
    role: "Chief Executive Officer",
    organization: "Jeani Health",
    organizationUrl: "https://www.jeanihealth.com",
    period: "2022 – Present",
    location: "Durham, NC",
    description:
      "Building AI-powered joint health technology that helps athletes monitor and protect their bodies. Leading product, engineering, and go-to-market strategy from zero to launch on the App Store.",
    highlights: [
      "Founded and scaled Jeani from concept to live iOS product",
      "Led seed fundraising and investor relations",
      "Built cross-functional team across engineering, research, and design",
      "Partnered with Duke Athletics for beta testing and clinical validation",
    ],
    tags: ["Startup", "Health Tech", "AI", "Wearables"],
    icon: "jeani",
  },
  {
    id: "duke-decathlon",
    role: "Decathlete",
    organization: "Duke Track & Field",
    organizationUrl: "https://goduke.com",
    period: "2021 – Present",
    location: "Durham, NC",
    description:
      "Competing in all ten decathlon disciplines for Duke University at the ACC level. The decathlon demands elite conditioning across speed, strength, and technical events — training that directly informs my work in sports science and athlete health.",
    highlights: [
      "Competes across all ten disciplines: 100m, 400m, 1500m, 110m hurdles, long jump, high jump, pole vault, shot put, discus, javelin",
      "ACC conference competitor representing Duke University",
      "Uses Jeani's own technology for personal training optimization and injury prevention",
      "Bridges athlete perspective with sports medicine and product development",
    ],
    tags: ["Athletics", "Decathlon", "Duke", "ACC"],
    icon: "duke",
  },
  {
    id: "duke-research",
    role: "Lead Researcher",
    organization: "Global Sports Medicine, Duke University",
    period: "2023 – Present",
    location: "Durham, NC",
    description:
      "Leading applied research at the intersection of sports medicine and technology. Focused on joint health outcomes, injury prevention, and the role of wearable sensor data in athletic performance and longevity.",
    highlights: [
      "Leads research team studying ACL injury prevention protocols in collegiate athletes",
      "Develops data pipelines integrating wearable sensor inputs with clinical outcomes",
      "Collaborates with Duke Sports Medicine clinicians and orthopedic surgeons",
      "Research findings directly inform Jeani product development and clinical positioning",
    ],
    tags: ["Research", "Sports Medicine", "Biomechanics", "Duke"],
    icon: "research",
  },
];
