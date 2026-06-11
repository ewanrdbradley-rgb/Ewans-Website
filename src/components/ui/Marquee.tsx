import Image from "next/image";
import { cn } from "@/lib/utils";

interface MarqueeProps {
  items: string[];
  /** Optional background art image — renders white type over it */
  art?: string;
}

/**
 * Infinite horizontal text strip — poster-style display type in motion.
 * Two identical halves translate -50% for a seamless loop.
 */
export default function Marquee({ items, art }: MarqueeProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden border-y py-5",
        art ? "border-transparent" : "border-ink/15 bg-card-2/50"
      )}
    >
      {art && (
        <>
          <Image
            src={art}
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
            aria-hidden
          />
          <div className="absolute inset-0 bg-blue/20" aria-hidden />
        </>
      )}
      <div className="relative flex w-max animate-marquee">
        {[0, 1].map((half) => (
          <div key={half} className="flex items-center shrink-0">
            {items.map((item, i) => (
              <span
                key={i}
                className={cn(
                  "flex items-center whitespace-nowrap px-6 font-display uppercase text-xl tracking-wide",
                  art ? "text-paper" : "text-blue"
                )}
              >
                {item}
                <span
                  className={cn(
                    "ml-12 text-base leading-none",
                    art ? "text-paper/70" : "text-coral"
                  )}
                >
                  ●
                </span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
