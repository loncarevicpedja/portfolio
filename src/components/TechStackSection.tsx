import SectionWrapper from "./SectionWrapper";

const categories = [
  {
    label: "Backend",
    techs: ["C#", ".NET", "ASP.NET", "Entity Framework", "REST APIs"],
  },
  {
    label: "Frontend",
    techs: ["Angular", "TypeScript", "JavaScript", "HTML5", "CSS3", "Bootstrap"],
  },
  {
    label: "Database",
    techs: ["SQL Server", "T-SQL", "SSMS", "Database Design"],
  },
  {
    label: "Web / CMS",
    techs: ["WordPress", "WooCommerce", "Elementor", "PHP", "Custom Themes"],
  },
  {
    label: "Tools",
    techs: ["Git", "Azure DevOps", "Visual Studio", "VS Code", "Jira", "Postman"],
  },
];

const TechStackSection = () => (
  <SectionWrapper id="tech-stack">
    <h2 className="text-3xl md:text-4xl font-bold mb-12">
      Tech <span className="text-gradient">Stack</span>
    </h2>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {categories.map((cat) => (
        <div key={cat.label} className="p-5 rounded-xl border border-border bg-card">
          <h3 className="text-sm font-mono text-primary mb-4 tracking-wider uppercase">{cat.label}</h3>
          <div className="flex flex-wrap gap-2">
            {cat.techs.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 text-sm rounded-lg bg-secondary text-muted-foreground hover:bg-primary/10 hover:text-primary hover:border-primary/30 border border-transparent transition-all cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </SectionWrapper>
);

export default TechStackSection;
