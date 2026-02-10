import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhatIDoSection from "@/components/WhatIDoSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import TechStackSection from "@/components/TechStackSection";
import EducationSection from "@/components/EducationSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <WhatIDoSection />
      <ExperienceSection />
      <ProjectsSection />
      <TechStackSection />
      <EducationSection />
      <AboutSection />
      <ContactSection />
      <footer className="py-8 text-center text-xs text-muted-foreground border-t border-border">
        © {new Date().getFullYear()} Predrag Lončarević. All rights reserved.
      </footer>
    </div>
  );
};

export default Index;
