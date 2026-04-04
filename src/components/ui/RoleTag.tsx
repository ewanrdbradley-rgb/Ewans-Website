import { cn } from "@/lib/utils";

interface RoleTagProps {
  label: string;
  variant?: "default" | "accent" | "muted";
}

export default function RoleTag({ label, variant = "default" }: RoleTagProps) {
  return (
    <span
      className={cn(
        "inline-block rounded-pill px-3 py-1 text-xs font-medium tracking-wide",
        variant === "default" && "bg-jeani-border text-jeani-mid",
        variant === "accent" && "bg-jeani-accent/10 text-jeani-accent",
        variant === "muted" &&
          "bg-transparent border border-jeani-border text-jeani-muted"
      )}
    >
      {label}
    </span>
  );
}
