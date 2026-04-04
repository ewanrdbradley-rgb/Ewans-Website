import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  label: string;
  heading: string;
  align?: "left" | "center";
}

export default function SectionHeader({
  label,
  heading,
  align = "left",
}: SectionHeaderProps) {
  return (
    <div className={cn("mb-12", align === "center" && "text-center")}>
      <p className="text-xs font-semibold tracking-widest uppercase text-jeani-accent mb-3">
        {label}
      </p>
      <h2 className="font-grotesk font-extrabold text-display-md text-jeani-dark">
        {heading}
      </h2>
    </div>
  );
}
