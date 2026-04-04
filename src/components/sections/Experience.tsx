import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import ExperienceCard from "@/components/ui/ExperienceCard";
import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <SectionHeader label="Experience" heading="What I Do" />
      <div className="flex flex-col gap-5">
        {experiences.map((entry, i) => (
          <ExperienceCard key={entry.id} entry={entry} index={i} />
        ))}
      </div>
    </SectionWrapper>
  );
}
