"use client";
import { motion } from "framer-motion";
import {
  FlaskConical,
  Atom,
  Brain,
  Code2,
  BarChart3,
  Cpu,
  Zap,
  Target,
} from "lucide-react";
import { skills } from "@/data/personal";
import SectionHeading from "./ui/SectionHeading";
import AnimatedSection from "./ui/AnimatedSection";

const iconMap: Record<string, React.ElementType> = {
  FlaskConical,
  Atom,
  Brain,
  Code2,
  BarChart3,
  Cpu,
  Zap,
  Target,
};

const colorMap: Record<string, { card: string; icon: string; pill: string; border: string }> = {
  cyan: {
    card: "hover:border-cyan-glow/40",
    icon: "bg-cyan-glow/10 border-cyan-glow/20 text-cyan-glow",
    pill: "bg-cyan-glow/10 text-cyan-DEFAULT border-cyan-glow/20",
    border: "group-hover:bg-cyan-glow",
  },
  blue: {
    card: "hover:border-blue-500/40",
    icon: "bg-blue-500/10 border-blue-500/20 text-blue-400",
    pill: "bg-blue-500/10 text-blue-300 border-blue-500/20",
    border: "group-hover:bg-blue-500",
  },
  indigo: {
    card: "hover:border-indigo-500/40",
    icon: "bg-indigo-500/10 border-indigo-500/20 text-indigo-400",
    pill: "bg-indigo-500/10 text-indigo-300 border-indigo-500/20",
    border: "group-hover:bg-indigo-500",
  },
  teal: {
    card: "hover:border-teal-500/40",
    icon: "bg-teal-500/10 border-teal-500/20 text-teal-400",
    pill: "bg-teal-500/10 text-teal-300 border-teal-500/20",
    border: "group-hover:bg-teal-500",
  },
};

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-navy-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Core Abilities"
          title="Skills & Expertise"
          subtitle="A comprehensive toolkit spanning laboratory instrumentation, computational chemistry, AI systems, and software engineering."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {skills.map((skill, i) => {
            const Icon = iconMap[skill.icon] || FlaskConical;
            const colors = colorMap[skill.color] || colorMap.cyan;

            return (
              <AnimatedSection key={skill.category} delay={0.05 * i}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className={`group glass rounded-2xl p-5 border border-white/6 transition-all duration-300 h-full ${colors.card}`}
                >
                  {/* Top accent bar */}
                  <div className={`h-0.5 w-0 rounded-full mb-4 transition-all duration-500 ${colors.border} group-hover:w-full`} />

                  {/* Icon + category */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-xl border flex items-center justify-center flex-shrink-0 ${colors.icon}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-display font-semibold text-sm text-white leading-tight">
                      {skill.category}
                    </h3>
                  </div>

                  {/* Skill pills */}
                  <div className="flex flex-wrap gap-1.5">
                    {skill.items.map((item, j) => (
                      <motion.span
                        key={item}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 + i * 0.03 + j * 0.04 }}
                        className={`px-2.5 py-1 rounded-full text-xs font-medium border transition-colors ${colors.pill}`}
                      >
                        {item}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* Bottom label */}
        <AnimatedSection delay={0.4}>
          <p className="text-center text-slate-500 text-sm mt-10">
            Skills developed through hands-on research, coursework, certifications, and independent projects.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
