import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "What I Do", href: "#what-i-do" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Tech Stack", href: "#tech-stack" },
  { label: "Education", href: "#education" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => handleClick("#hero")}
          className="text-xl font-bold tracking-tight text-foreground hover:text-primary transition-colors"
        >
          PL<span className="text-primary">.</span>
        </button>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleClick(link.href)}
                className="px-3 py-2 text-sm text-muted-foreground hover:text-primary transition-colors rounded-md hover:bg-secondary/50"
              >
                {link.label}
              </button>
            </li>
          ))}
          <li>
            <a
              href="/CV_Predrag_Loncarevic.pdf"
              download
              className="ml-2 px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            >
              Download CV
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border overflow-hidden"
          >
            <ul className="px-6 py-4 space-y-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleClick(link.href)}
                    className="block w-full text-left px-3 py-2 text-muted-foreground hover:text-primary transition-colors rounded-md hover:bg-secondary/50"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <a
                  href="/CV_Predrag_Loncarevic.pdf"
                  download
                  className="block mt-2 px-4 py-2 text-sm font-medium text-center bg-primary text-primary-foreground rounded-md"
                >
                  Download CV
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
