import { ExternalLink } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const projects = [
  {
    title: "Orbis Optika",
    subtitle: "E-Commerce Platform",
    description:
      "A full-featured e-commerce site for an optical store — product catalog, shopping cart, online ordering, and responsive design.",
    tech: ["WordPress", "WooCommerce", "Custom Theme", "PHP", "CSS"],
    features: ["Product catalog with filters", "Shopping cart & checkout", "Mobile-responsive design", "SEO optimized"],
    link: "https://www.orbisoptika.rs",
  },
  {
    title: "Kinex",
    subtitle: "Corporate Website",
    description:
      "A modern corporate website showcasing company services, team, and portfolio with a clean, professional design.",
    tech: ["WordPress", "Custom Theme", "PHP", "JavaScript", "CSS"],
    features: ["Service showcase pages", "Team & portfolio sections", "Contact integration", "Performance optimized"],
    link: "https://www.kinex.rs",
  },
];

const ProjectsSection = () => (
  <SectionWrapper id="projects">
    <h2 className="text-3xl md:text-4xl font-bold mb-4">
      Projects
    </h2>
    <p className="text-muted-foreground mb-12 max-w-2xl">
      A selection of live websites I've built and deployed for real clients.
    </p>
    <div className="grid md:grid-cols-2 gap-6">
      {projects.map((project) => (
        <div
          key={project.title}
          className="group p-6 rounded-xl border border-border bg-card hover:border-primary/50 hover:glow-card transition-all duration-300 hover:-translate-y-1"
        >
          <div className="flex items-center justify-between mb-3">
            <div>
              <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
              <p className="text-sm text-primary font-mono">{project.subtitle}</p>
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-secondary text-muted-foreground hover:text-primary transition-colors"
            >
              <ExternalLink size={18} />
            </a>
          </div>
          <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
          <div className="space-y-1.5 mb-4">
            {project.features.map((f) => (
              <div key={f} className="flex items-center gap-2 text-xs text-muted-foreground">
                <span className="w-1 h-1 rounded-full bg-primary" />
                {f}
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-2 py-0.5 text-xs font-mono rounded bg-secondary text-muted-foreground group-hover:text-foreground transition-colors"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
    <p className="text-sm text-muted-foreground mt-8 text-center">
      + Various internal tools, scripts, and side projects built for practical problem-solving.
    </p>
  </SectionWrapper>
);

export default ProjectsSection;
