import { cn } from "@/lib/utils";
import Reveal from "./Reveal";

interface SectionHeaderProps {
  label: string;
  heading: string;
  align?: "left" | "center";
  index?: string;
}

export default function SectionHeader({
  label,
  heading,
  align = "left",
  index,
}: SectionHeaderProps) {
  return (
    <div className={cn("relative mb-12", align === "center" && "text-center")}>
      {index && (
        <span
          aria-hidden
          className="absolute -top-8 right-0 hidden sm:block font-display text-[6.5rem] leading-none text-outline opacity-60 select-none pointer-events-none"
        >
          {index}
        </span>
      )}
      <p className="text-xs font-bold tracking-[0.3em] uppercase text-coral mb-3">
        /{label}
      </p>
      <h2 className="font-display uppercase text-display-lg text-ink">
        <Reveal text={heading} />
      </h2>
    </div>
  );
}
