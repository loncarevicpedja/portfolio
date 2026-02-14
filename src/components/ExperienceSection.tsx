import { Briefcase } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const ExperienceSection = () => (
  <SectionWrapper id="experience">
    <h2 className="text-3xl md:text-4xl font-bold mb-12">
      Experience
    </h2>
    <div className="relative pl-8 border-l-2 border-border">
      <div className="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-primary border-4 border-background" />
      <div className="group p-6 rounded-xl border border-border bg-card hover:border-primary/50 hover:glow-card transition-all duration-300 hover:-translate-y-1">
        <div className="flex flex-wrap items-center gap-3 mb-3">
          <Briefcase className="text-primary" size={20} />
          <h3 className="text-xl font-semibold text-foreground">Software Developer</h3>
          <span className="text-xs font-mono px-2 py-1 rounded-full bg-primary/10 text-primary">
            Current
          </span>
        </div>
        <p className="text-muted-foreground font-medium mb-1">Insicon · Belgrade, Serbia</p>
        <p className="text-sm text-muted-foreground mb-4">
          Working on enterprise-grade internal business software for major companies.
        </p>
        <div className="space-y-2 mb-4">
          {[
            "Developing and maintaining .NET backend systems and Angular frontend interfaces",
            "Working with SQL Server databases — queries, procedures, data management",
            "Collaborating in structured teams on large-scale business solutions",
            "Applying clean code practices and participating in code reviews",
          ].map((item) => (
            <div key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
              {item}
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          {[".NET", "Angular", "SQL Server", "TypeScript", "C#"].map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 text-xs font-mono rounded bg-secondary text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  </SectionWrapper>
);

export default ExperienceSection;
