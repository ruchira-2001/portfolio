"use client";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Microscope,
  BookOpen,
  School,
  Award,
  CheckCircle,
} from "lucide-react";
import { education, certifications } from "@/data/personal";
import SectionHeading from "./ui/SectionHeading";
import AnimatedSection from "./ui/AnimatedSection";

const iconMap: Record<string, React.ElementType> = {
  GraduationCap,
  Microscope,
  BookOpen,
  School,
};

const colorMap: Record<string, { icon: string; border: string; dot: string }> = {
  cyan: { icon: "bg-cyan-glow/10 border-cyan-glow/20 text-cyan-glow", border: "border-cyan-glow/30", dot: "bg-cyan-glow" },
  blue: { icon: "bg-blue-500/10 border-blue-500/20 text-blue-400", border: "border-blue-500/30", dot: "bg-blue-500" },
  indigo: { icon: "bg-indigo-500/10 border-indigo-500/20 text-indigo-400", border: "border-indigo-500/30", dot: "bg-indigo-500" },
  teal: { icon: "bg-teal-500/10 border-teal-500/20 text-teal-400", border: "border-teal-500/30", dot: "bg-teal-500" },
};

const certColorMap: Record<string, string> = {
  cyan: "border-cyan-glow/25 hover:border-cyan-glow/50",
  blue: "border-blue-500/25 hover:border-blue-500/50",
  indigo: "border-indigo-500/25 hover:border-indigo-500/50",
  teal: "border-teal-500/25 hover:border-teal-500/50",
};

export default function Education() {
  return (
    <section id="education" className="section-padding bg-navy-900/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Education"
          title="Academic Background"
          subtitle="Formal education and professional certifications spanning chemistry, computing, drug design, and leadership."
        />

        {/* Education timeline */}
        <div className="relative mb-16">
          {/* Vertical line */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px timeline-line" />

          <div className="space-y-8">
            {education.map((edu, i) => {
              const Icon = iconMap[edu.icon] || GraduationCap;
              const colors = colorMap[edu.color] || colorMap.cyan;

              return (
                <AnimatedSection key={edu.id} direction="left" delay={0.1 * i}>
                  <div className="flex gap-6 sm:gap-8">
                    {/* Icon dot */}
                    <div className="flex-shrink-0 relative z-10">
                      <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-2xl border flex items-center justify-center ${colors.icon}`}>
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 pb-2">
                      <div className={`glass rounded-2xl p-5 border border-white/6 hover:${colors.border} transition-all duration-300`}>
                        {/* Header */}
                        <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                          <div>
                            <h3 className="text-base font-bold text-white font-display">
                              {edu.institution}
                            </h3>
                            <p className="text-sm text-cyan-DEFAULT font-medium">{edu.degree}</p>
                            <p className="text-xs text-slate-400">{edu.field}</p>
                          </div>
                          <div className="text-right">
                            <div className="text-xs font-medium text-slate-400 mb-1">{edu.period}</div>
                            <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${
                              edu.status === "Awaiting Graduation" ? "badge-yellow" :
                              edu.status === "Completed" ? "badge-green" : "badge-blue"
                            }`}>
                              {edu.status}
                            </span>
                          </div>
                        </div>

                        {/* Details */}
                        <ul className="space-y-1">
                          {edu.details.map((detail) => (
                            <li key={detail} className="flex items-start gap-2 text-sm text-slate-400">
                              <CheckCircle className="w-3.5 h-3.5 text-cyan-glow/60 flex-shrink-0 mt-0.5" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>

        {/* Certifications */}
        <AnimatedSection delay={0.2}>
          <h3 className="text-xl font-bold font-display text-white text-center mb-6 flex items-center justify-center gap-2">
            <Award className="w-5 h-5 text-cyan-glow" />
            Professional Certifications
          </h3>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, i) => (
            <AnimatedSection key={cert.name} delay={0.06 * i}>
              <motion.div
                whileHover={{ y: -3, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={`glass rounded-xl p-4 border transition-all duration-300 ${certColorMap[cert.color] ?? certColorMap.cyan}`}
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-cyan-glow/10 border border-cyan-glow/20 flex items-center justify-center flex-shrink-0">
                    <Award className="w-4 h-4 text-cyan-glow" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-white leading-snug mb-1">
                      {cert.name}
                    </p>
                    <p className="text-xs text-slate-400">{cert.org}</p>
                    <p className="text-xs text-slate-500 mt-1">{cert.date}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
