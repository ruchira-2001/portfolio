"use client";
import { motion } from "framer-motion";
import { CheckCircle2, Circle, Target, Clock, TrendingUp, Star, Compass } from "lucide-react";
import { smartGoals } from "@/data/personal";
import SectionHeading from "./ui/SectionHeading";
import AnimatedSection from "./ui/AnimatedSection";

const pillarColors: Record<string, { bg: string; border: string; text: string; letter: string }> = {
  cyan: { bg: "bg-cyan-glow/10", border: "border-cyan-glow/30", text: "text-cyan-DEFAULT", letter: "bg-cyan-glow text-navy-950" },
  blue: { bg: "bg-blue-500/10", border: "border-blue-500/30", text: "text-blue-400", letter: "bg-blue-500 text-white" },
  indigo: { bg: "bg-indigo-500/10", border: "border-indigo-500/30", text: "text-indigo-400", letter: "bg-indigo-500 text-white" },
  teal: { bg: "bg-teal-500/10", border: "border-teal-500/30", text: "text-teal-400", letter: "bg-teal-500 text-white" },
};

const pillarIcons: Record<string, React.ElementType> = {
  S: Target,
  M: TrendingUp,
  A: Star,
  R: Compass,
  T: Clock,
};

export default function SmartGoals() {
  return (
    <section id="goals" className="section-padding particles-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Career Development"
          title="SMART Goals Framework"
          subtitle="A structured, ambitious, and achievable roadmap for becoming an interdisciplinary scientific leader."
        />

        {/* Main goal statement */}
        <AnimatedSection delay={0.1}>
          <div className="gradient-border p-6 sm:p-8 mb-12 text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 rounded-2xl bg-cyan-glow/15 border border-cyan-glow/30 flex items-center justify-center">
                <Target className="w-6 h-6 text-cyan-glow" />
              </div>
            </div>
            <p className="text-xs font-semibold uppercase tracking-widest text-cyan-glow mb-3">
              Main Career Objective
            </p>
            <p className="text-lg sm:text-xl text-white font-display font-medium leading-relaxed">
              "{smartGoals.mainGoal}"
            </p>
          </div>
        </AnimatedSection>

        {/* SMART pillars */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-14">
          {smartGoals.pillars.map((pillar, i) => {
            const colors = pillarColors[pillar.color] || pillarColors.cyan;
            const Icon = pillarIcons[pillar.letter];
            return (
              <AnimatedSection key={pillar.letter} delay={0.08 * i}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className={`glass rounded-2xl p-5 border h-full flex flex-col ${colors.border} ${colors.bg}`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-sm font-display ${colors.letter}`}>
                      {pillar.letter}
                    </div>
                    <div>
                      <div className={`text-xs font-bold uppercase tracking-widest ${colors.text}`}>
                        {pillar.label}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed flex-1">
                    {pillar.content}
                  </p>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* Roadmap timeline */}
        <AnimatedSection delay={0.2}>
          <h3 className="text-xl font-bold font-display text-white text-center mb-8">
            Career Roadmap
          </h3>
        </AnimatedSection>

        <div className="relative">
          {/* Vertical line (desktop) */}
          <div className="hidden lg:block absolute left-1/2 -translate-x-px top-0 bottom-0 w-px timeline-line" />

          <div className="space-y-8">
            {smartGoals.milestones.map((milestone, i) => {
              const isLeft = i % 2 === 0;
              return (
                <AnimatedSection
                  key={milestone.year}
                  direction={isLeft ? "left" : "right"}
                  delay={0.1 * i}
                >
                  <div className={`flex flex-col lg:flex-row items-start gap-6 ${isLeft ? "lg:flex-row" : "lg:flex-row-reverse"}`}>
                    {/* Content card */}
                    <div className="flex-1 max-w-xl mx-auto lg:mx-0">
                      <div className="glass rounded-2xl p-5 border border-white/6 hover:border-cyan-glow/20 transition-all duration-300">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-2xl font-bold font-display gradient-text">
                            {milestone.year}
                          </span>
                          <span className="h-px flex-1 bg-gradient-to-r from-cyan-glow/30 to-transparent" />
                          {milestone.done ? (
                            <CheckCircle2 className="w-5 h-5 text-green-400" />
                          ) : (
                            <Circle className="w-5 h-5 text-slate-600" />
                          )}
                        </div>
                        <h4 className="text-base font-semibold text-white mb-3">
                          {milestone.title}
                        </h4>
                        <ul className="space-y-1.5">
                          {milestone.items.map((item) => (
                            <li key={item} className="flex items-start gap-2 text-sm text-slate-400">
                              <span className="w-1 h-1 rounded-full bg-cyan-glow/60 mt-2 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Center dot (desktop) */}
                    <div className="hidden lg:flex flex-shrink-0 items-start pt-5">
                      <div className="w-4 h-4 rounded-full border-2 border-cyan-glow bg-navy-950 relative">
                        <div className="absolute inset-1 rounded-full bg-cyan-glow animate-pulse" />
                      </div>
                    </div>

                    {/* Spacer for alternating layout */}
                    <div className="hidden lg:block flex-1" />
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
