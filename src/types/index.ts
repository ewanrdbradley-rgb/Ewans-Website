export interface ExperienceEntry {
  id: string;
  role: string;
  organization: string;
  organizationUrl?: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
  tags: string[];
  icon: "jeani" | "duke" | "research";
}

export interface ProjectEntry {
  id: string;
  title: string;
  category: "athletic" | "tech" | "research";
  description: string;
  year: string;
  tags: string[];
  link?: string;
  linkLabel?: string;
  featured: boolean;
  imagePlaceholder?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: "email" | "twitter" | "instagram" | "linkedin";
  label: string;
  href: string;
  displayValue: string;
}
