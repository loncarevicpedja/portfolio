import { CheckCircle2 } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const principles = [
  "Write clean, maintainable, well-structured code",
  "Understand the business problem before writing a single line",
  "Test thoroughly — reliability is non-negotiable",
  "Communicate clearly with teams and stakeholders",
  "Keep learning — technology never stands still",
];

const AboutSection = () => (
  <SectionWrapper id="about">
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          About Me
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          I'm a software developer based in Belgrade, Serbia, with a passion for building things that work well and last.
          My background spans enterprise .NET development, Angular frontends, and WordPress web solutions.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-6">
          I believe great software comes from understanding real problems, writing clean code,
          and caring about the details. Whether it's a complex business system or a client-facing website,
          I approach every project with the same mindset: make it reliable, make it clear, make it right.
        </p>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-4">How I Work</h3>
        <div className="space-y-3">
          {principles.map((p) => (
            <div
              key={p}
              className="flex items-start gap-3 group"
            >
              <CheckCircle2 className="text-primary mt-0.5 shrink-0 group-hover:scale-110 transition-transform" size={18} />
              <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{p}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </SectionWrapper>
);

export default AboutSection;
