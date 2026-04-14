import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import { GraduationCap, MapPin } from "lucide-react";
import { education } from "@/data/education";

export default function Education() {
  return (
    <SectionWrapper id="education">
      <SectionHeader label="Education" heading="Academic Background" />
      <div className="flex flex-col gap-4">
        {education.map((entry) => (
          <div
            key={entry.id}
            className="bg-jeani-cream-dark border border-jeani-border rounded-card p-7 flex items-start gap-5"
          >
            <div className="w-10 h-10 rounded-xl bg-jeani-border flex items-center justify-center shrink-0">
              <GraduationCap className="w-5 h-5 text-jeani-mid" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <h3 className="font-grotesk font-bold text-lg text-jeani-dark leading-tight">
                  {entry.degree}
                </h3>
                <span className="text-xs font-mono text-jeani-muted bg-jeani-border px-2 py-0.5 rounded-pill whitespace-nowrap">
                  {entry.period}
                </span>
              </div>
              <div className="flex items-center gap-3 flex-wrap mb-3">
                {entry.institutionUrl ? (
                  <a
                    href={entry.institutionUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-jeani-mid hover:text-jeani-accent transition-colors"
                  >
                    {entry.institution}
                  </a>
                ) : (
                  <span className="font-semibold text-jeani-mid">
                    {entry.institution}
                  </span>
                )}
                <span className="flex items-center gap-1 text-sm text-jeani-muted">
                  <MapPin className="w-3 h-3" />
                  {entry.location}
                </span>
              </div>
              {entry.description && (
                <p className="text-sm text-jeani-mid leading-relaxed">
                  {entry.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
