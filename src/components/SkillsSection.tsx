import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const skillCategories = [
  {
    label: "Languages & Tools",
    items: ["C#", "TypeScript", "JavaScript", "HTML5", "CSS3", "PHP", "SQL", "Git", "Postman"],
  },
  {
    label: "Frameworks & Libraries",
    items: [".NET", "ASP.NET", "Angular", "Entity Framework", "Bootstrap", "WordPress", "WooCommerce"],
  },
  {
    label: "Core Concepts",
    items: ["REST APIs", "Database Design", "Clean Architecture", "OOP", "Agile", "Azure DevOps"],
  },
];

const SkillsSection = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <SectionWrapper id="tech-stack">
      <div ref={ref} className="grid lg:grid-cols-2 gap-12 lg:gap-20">
        {/* Left — Large stacked text */}
        <div className="flex flex-col justify-center">
          {["Developer", "Engineer", "Creator/"].map((word, i) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, x: -40 }}
              animate={visible ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tighter text-foreground leading-[0.9]"
            >
              {word}
            </motion.span>
          ))}
        </div>

        {/* Right — Skill columns */}
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-8">Skills</h3>
          <div className="grid sm:grid-cols-3 gap-8">
            {skillCategories.map((cat, ci) => (
              <div key={cat.label}>
                <h4 className="text-xs font-mono text-primary tracking-widest uppercase mb-4">
                  {cat.label}
                </h4>
                <ul className="space-y-2">
                  {cat.items.map((item, ii) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, y: 10 }}
                      animate={visible ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: ci * 0.1 + ii * 0.05, duration: 0.3 }}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-default"
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default SkillsSection;
