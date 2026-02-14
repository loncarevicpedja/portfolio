import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const services = [
  {
    num: "01",
    title: "Full-Stack Development",
    description:
      "Building scalable enterprise applications with modern technologies across the full stack — from robust server-side APIs to responsive client interfaces.",
    skills: ["C# / .NET / ASP.NET", "Angular / TypeScript", "SQL Server / T-SQL"],
  },
  {
    num: "02",
    title: "Web & WordPress Solutions",
    description:
      "Creating modern websites, e-commerce platforms, and custom CMS solutions tailored to business needs with performance and usability in mind.",
    skills: ["WordPress / WooCommerce", "Custom Themes / PHP", "Responsive Design"],
  },
  {
    num: "03",
    title: "Problem-Solving & Architecture",
    description:
      "Translating complex business requirements into well-structured, maintainable technical solutions with clean architecture principles.",
    skills: ["Clean Architecture / SOLID", "Database Design / REST APIs", "Git / Azure DevOps"],
  },
];

const WhatIDoSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const hasAutoOpened = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAutoOpened.current) {
          hasAutoOpened.current = true;
          setOpenIndex(0);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const toggle = (i: number) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  return (
    <SectionWrapper id="what-i-do">
      <div ref={sectionRef}>
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tighter text-foreground">
            What I Do <span className="text-primary">/</span>
          </h2>
          <div className="md:max-w-sm">
            <span className="text-xs font-mono text-primary tracking-widest uppercase">(Services)</span>
            <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
              I specialize in building reliable business software and practical web solutions that solve real problems.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-border mb-2" />

        {/* Accordion Items */}
        <div>
          {services.map((item, i) => (
            <div key={item.num} className="border-b border-border">
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center gap-6 py-6 md:py-8 text-left group"
              >
                <span className="text-sm font-mono text-primary">{item.num}</span>
                <span className="text-xl md:text-2xl lg:text-3xl font-semibold text-foreground group-hover:text-primary transition-colors flex-1">
                  {item.title}
                </span>
                <motion.span
                  animate={{ rotate: openIndex === i ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-2xl text-primary"
                >
                  +
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="pb-8 pl-12 md:pl-16 grid md:grid-cols-2 gap-6">
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {item.description}
                      </p>
                      <div className="flex flex-col gap-2">
                        {item.skills.map((skill, si) => (
                          <motion.span
                            key={skill}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: si * 0.1, duration: 0.3 }}
                            className="text-sm font-mono text-foreground"
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default WhatIDoSection;
