import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

const SectionWrapper = ({ id, children, className }: SectionWrapperProps) => {
  const { ref, isInView } = useScrollReveal();

  return (
    <section id={id} className={cn("py-24 px-6", className)}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-6xl mx-auto"
      >
        {children}
      </motion.div>
    </section>
  );
};

export default SectionWrapper;
