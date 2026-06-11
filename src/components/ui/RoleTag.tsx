import { cn } from "@/lib/utils";

interface RoleTagProps {
  label: string;
  variant?: "default" | "accent" | "muted";
}

export default function RoleTag({ label, variant = "default" }: RoleTagProps) {
  return (
    <span
      className={cn(
        "inline-block rounded-pill px-3 py-1 text-[11px] font-bold uppercase tracking-[0.1em]",
        variant === "default" && "border border-ink/25 text-mid",
        variant === "accent" && "bg-blue text-paper",
        variant === "muted" && "border border-ink/15 text-faint"
      )}
    >
      {label}
    </span>
  );
}
