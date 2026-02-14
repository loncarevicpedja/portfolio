import { Mail, Linkedin, Download } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const ContactSection = () =>
<SectionWrapper id="contact" className="pb-16">
    <div className="text-center">
      <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tighter mb-4 text-foreground">
        Let's Make It <span className="text-primary">Happen</span>
      </h2>
      <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
        Interested in working together or just want to say hello? Reach out anytime.
      </p>
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        <a
        href="mailto:predragloncarevic@outlook.com"
        className="group flex items-center gap-2 px-6 py-3 rounded-lg border border-border bg-card hover:border-primary hover:glow-card transition-all duration-300 hover:-translate-y-0.5">

          <Mail className="text-primary group-hover:scale-110 transition-transform" size={18} />
          <span className="text-sm text-foreground">loncarevicpedja2000@gmail.com</span>
        </a>
        <a
        href="https://www.linkedin.com/in/predrag-loncarevic"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2 px-6 py-3 rounded-lg border border-border bg-card hover:border-primary hover:glow-card transition-all duration-300 hover:-translate-y-0.5">

          <Linkedin className="text-primary group-hover:scale-110 transition-transform" size={18} />
          <span className="text-sm text-foreground">LinkedIn</span>
        </a>
        <a
        href="/CV_Predrag_Loncarevic.pdf"
        download
        className="group flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:-translate-y-0.5">

          <Download className="group-hover:scale-110 transition-transform" size={18} />
          <span className="text-sm font-medium">Download CV</span>
        </a>
      </div>
      <p className="text-muted-foreground font-mono text-sm">
        "Let's build something reliable and well-structured."
      </p>
    </div>
  </SectionWrapper>;


export default ContactSection;