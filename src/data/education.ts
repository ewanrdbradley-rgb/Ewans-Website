export interface EducationEntry {
  id: string;
  degree: string;
  institution: string;
  institutionUrl?: string;
  period: string;
  location: string;
  description?: string;
}

export const education: EducationEntry[] = [
  {
    id: "duke-ms",
    degree: "MS, Global Health",
    institution: "Duke Global Health Institute, Duke University",
    institutionUrl: "https://globalhealth.duke.edu",
    period: "2026",
    location: "Durham, NC",
    description:
      "Focus areas: global sports medicine, primary healthcare systems, and the use of movement and wearable data to support long-term health outcomes.",
  },
  {
    id: "loughborough-bsc",
    degree: "BSc, Human Biology — First Class Honours",
    institution: "Loughborough University",
    institutionUrl: "https://www.lboro.ac.uk",
    period: "2024",
    location: "Loughborough, UK",
    description:
      "Graduated with First Class Honours in Human Biology.",
  },
];
