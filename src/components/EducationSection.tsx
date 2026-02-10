import { GraduationCap, Award, Building2, Laptop } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const items = [
  {
    icon: GraduationCap,
    title: "Faculty of Information Technology and Engineering",
    subtitle: "University Union — Belgrade",
    detail: "Degree in Information Technology, building a strong foundation in software engineering principles.",
  },
  {
    icon: Award,
    title: "IT Camp & Bootcamps",
    subtitle: "Intensive Training",
    detail: "Participated in structured IT training programs focused on practical development skills and modern technologies.",
  },
  {
    icon: Building2,
    title: "Enterprise Experience",
    subtitle: "Insicon, Belgrade",
    detail: "Hands-on experience developing business-critical software in a professional team environment.",
  },
  {
    icon: Laptop,
    title: "Freelance & Side Projects",
    subtitle: "Independent Work",
    detail: "Building websites, e-commerce stores, and custom solutions for clients — from concept to deployment.",
  },
];

const EducationSection = () => (
  <SectionWrapper id="education">
    <h2 className="text-3xl md:text-4xl font-bold mb-12">
      Education & <span className="text-gradient">Certifications</span>
    </h2>
    <div className="grid sm:grid-cols-2 gap-6">
      {items.map((item) => (
        <div
          key={item.title}
          className="group p-6 rounded-xl border border-border bg-card hover:border-primary/50 hover:glow-card transition-all duration-300 hover:-translate-y-1"
        >
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
            <item.icon className="text-primary" size={20} />
          </div>
          <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
          <p className="text-sm text-primary font-mono mb-2">{item.subtitle}</p>
          <p className="text-sm text-muted-foreground leading-relaxed">{item.detail}</p>
        </div>
      ))}
    </div>
  </SectionWrapper>
);

export default EducationSection;
