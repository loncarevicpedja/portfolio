import { Briefcase } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const experiences = [
  {
    title: "Software Developer",
    company: "Insicon · Belgrade, Serbia",
    period: "Current",
    isCurrent: true,
    description: "Working on enterprise-grade internal business software for major companies.",
    bullets: [
      "Developing and maintaining .NET backend systems and Angular frontend interfaces",
      "Working with SQL Server databases — queries, procedures, data management",
      "Collaborating in structured teams on large-scale business solutions",
      "Applying clean code practices and participating in code reviews",
    ],
    tech: [".NET", "Angular", "SQL Server", "TypeScript", "C#"],
  },
  {
    title: "JavaScript Developer",
    company: "Levi9 · Belgrade, Serbia",
    period: "7.2022 – 8.2022",
    isCurrent: false,
    description:
      "Worked as a JavaScript developer with a team lead in my University group. Successfully created more than 5 web applications and coordinated a team with more than 20 participants.",
    bullets: [],
    tech: ["JavaScript", "HTML", "CSS"],
  },
  {
    title: "Freelance Developer",
    company: "Upwork · Worldwide",
    period: "2019 – 2021",
    isCurrent: false,
    description:
      "Worked on the development of websites for diverse international clients, gaining valuable experience in crafting online solutions that cater to a global audience.",
    bullets: [],
    tech: ["WordPress", "PHP", "JavaScript", "CSS"],
  },
];

const ExperienceSection = () => (
  <SectionWrapper id="experience">
    <h2 className="text-3xl md:text-4xl font-bold mb-12">
      Experience
    </h2>
    <div className="relative pl-8 border-l-2 border-border space-y-8">
      {experiences.map((exp) => (
        <div key={exp.title + exp.company} className="relative">
          <div className="absolute -left-[calc(2rem+11px)] top-0 w-5 h-5 rounded-full bg-primary border-4 border-background" />
          <div className="group p-6 rounded-xl border border-border bg-card hover:border-primary/50 hover:glow-card transition-all duration-300 hover:-translate-y-1">
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <Briefcase className="text-primary" size={20} />
              <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
              {exp.isCurrent && (
                <span className="text-xs font-mono px-2 py-1 rounded-full bg-primary/10 text-primary">
                  Current
                </span>
              )}
              {!exp.isCurrent && (
                <span className="text-xs font-mono text-muted-foreground">{exp.period}</span>
              )}
            </div>
            <p className="text-muted-foreground font-medium mb-1">{exp.company}</p>
            <p className="text-sm text-muted-foreground mb-4">{exp.description}</p>
            {exp.bullets.length > 0 && (
              <div className="space-y-2 mb-4">
                {exp.bullets.map((item) => (
                  <div key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            )}
            <div className="flex flex-wrap gap-2">
              {exp.tech.map((t) => (
                <span key={t} className="px-2 py-0.5 text-xs font-mono rounded bg-secondary text-muted-foreground">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  </SectionWrapper>
);

export default ExperienceSection;
