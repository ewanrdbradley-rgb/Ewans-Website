import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import { MapPin } from "lucide-react";
import { education } from "@/data/education";

export default function Education() {
  return (
    <SectionWrapper id="education">
      <SectionHeader label="Education" heading="Academic Background" index="03" />
      <div className="border-b border-ink/15">
        {education.map((entry) => (
          <div
            key={entry.id}
            className="group border-t border-ink/15 py-6 grid grid-cols-1 md:grid-cols-[1fr,16rem] gap-x-8 gap-y-2 items-baseline"
          >
            <div>
              <h3 className="font-display uppercase text-xl sm:text-2xl text-ink group-hover:text-blue transition-colors leading-tight mb-2">
                {entry.degree}
              </h3>
              <div className="flex items-center gap-3 flex-wrap mb-2">
                {entry.institutionUrl ? (
                  <a
                    href={entry.institutionUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-blue hover:text-ink transition-colors"
                  >
                    {entry.institution}
                  </a>
                ) : (
                  <span className="text-sm font-bold text-ink">
                    {entry.institution}
                  </span>
                )}
                <span className="flex items-center gap-1 text-xs text-faint">
                  <MapPin className="w-3 h-3" />
                  {entry.location}
                </span>
              </div>
              {entry.description && (
                <p className="text-sm text-mid leading-relaxed max-w-xl">
                  {entry.description}
                </p>
              )}
            </div>
            <span className="font-mono text-sm text-faint md:text-right">
              {entry.period}
            </span>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
