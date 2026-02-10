import { Code2, Globe, Lightbulb } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const cards = [
  {
    icon: Code2,
    title: "Enterprise Software Development",
    description:
      "Building scalable business systems with .NET, Angular, and SQL Server. Focused on clean architecture, reliable data handling, and maintainable code.",
  },
  {
    icon: Globe,
    title: "Web & WordPress Solutions",
    description:
      "Creating modern websites and e-commerce platforms. Custom WordPress themes, WooCommerce stores, and responsive web applications.",
  },
  {
    icon: Lightbulb,
    title: "Problem-Solving Mindset",
    description:
      "Translating complex business requirements into practical, well-structured technical solutions. Always learning, always improving.",
  },
];

const WhatIDoSection = () => (
  <SectionWrapper id="what-i-do">
    <h2 className="text-3xl md:text-4xl font-bold mb-4">
      What I <span className="text-gradient">Do</span>
    </h2>
    <p className="text-muted-foreground mb-12 max-w-2xl">
      I specialize in building reliable business software and practical web solutions that solve real problems.
    </p>
    <div className="grid md:grid-cols-3 gap-6">
      {cards.map((card) => (
        <div
          key={card.title}
          className="group p-6 rounded-xl border border-border bg-card hover:border-primary/50 hover:glow-card transition-all duration-300 hover:-translate-y-1"
        >
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
            <card.icon className="text-primary" size={24} />
          </div>
          <h3 className="text-lg font-semibold mb-2 text-foreground">{card.title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{card.description}</p>
        </div>
      ))}
    </div>
  </SectionWrapper>
);

export default WhatIDoSection;
