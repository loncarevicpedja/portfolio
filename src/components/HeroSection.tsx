import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import { useEffect, useState } from "react";

const tagline = "I build reliable business systems and practical web solutions.";

const HeroSection = () => {
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < tagline.length) {
        setDisplayText(tagline.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
        setTimeout(() => setShowCursor(false), 2000);
      }
    }, 35);
    return () => clearInterval(interval);
  }, []);

  const scrollToWork = () => {
    document.querySelector("#what-i-do")?.scrollIntoView({ behavior: "smooth" });
  };

  const tags = [".NET", "Angular", "SQL Server", "WordPress"];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <div className="relative max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="order-2 md:order-1"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-primary font-mono text-sm mb-4 tracking-wider"
          >
            Hello, I'm
          </motion.p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-2">
            Predrag
            <br />
            <span className="text-gradient">Lončarević</span>
          </h1>
          <p className="text-xl text-muted-foreground mt-4 mb-4 font-medium">
            Full-Stack Software Engineer
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-mono rounded-full border border-border bg-secondary/50 text-muted-foreground hover:border-primary hover:text-primary transition-colors cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="text-muted-foreground h-12 mb-8 font-mono text-sm">
            {displayText}
            {showCursor && (
              <span className="animate-pulse text-primary">|</span>
            )}
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={scrollToWork}
              className="group px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-all flex items-center gap-2 hover:gap-3"
            >
              View My Work
              <ArrowDown size={16} className="group-hover:translate-y-0.5 transition-transform" />
            </button>
            <a
              href="/CV_Predrag_Loncarevic.pdf"
              download
              className="group px-6 py-3 border border-border text-foreground font-medium rounded-lg hover:border-primary hover:text-primary transition-all flex items-center gap-2"
            >
              <Download size={16} />
              Download CV
            </a>
          </div>
        </motion.div>

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="order-1 md:order-2 flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-transparent blur-2xl scale-110" />
            <img
              src="/photo.png"
              alt="Predrag Lončarević"
              className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl border-2 border-border glow-primary"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
