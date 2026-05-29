"use client";
import { motion } from "framer-motion";
import {
  BookOpen,
  Layers,
  Award,
  Users,
  MapPin,
  Lightbulb,
  Target,
} from "lucide-react";
import { personal } from "@/data/personal";
import SectionHeading from "./ui/SectionHeading";
import AnimatedSection from "./ui/AnimatedSection";
import GlassCard from "./ui/GlassCard";

const iconMap: Record<string, React.ElementType> = {
  BookOpen,
  Layers,
  Award,
  Users,
};

export default function About() {
  return (
    <section id="about" className="section-padding particles-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="About Me"
          title="Researcher. Developer. Innovator."
          subtitle="An interdisciplinary undergraduate researcher at the intersection of chemistry, computation, and artificial intelligence."
        />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Bio */}
          <div>
            <AnimatedSection direction="left" delay={0.1}>
              <div className="space-y-4 text-slate-300 leading-relaxed text-base mb-8">
                {personal.bio.split("\n\n").map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </AnimatedSection>

            {/* Philosophy quote */}
            <AnimatedSection direction="left" delay={0.2}>
              <div className="relative pl-5 border-l-2 border-cyan-glow/50 mb-8">
                <Lightbulb className="w-4 h-4 text-cyan-glow mb-2" />
                <blockquote className="text-slate-300 italic text-sm leading-relaxed">
                  "{personal.philosophy}"
                </blockquote>
              </div>
            </AnimatedSection>

            {/* Location / University */}
            <AnimatedSection direction="left" delay={0.25}>
              <div className="flex flex-wrap gap-4 text-sm text-slate-400">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-cyan-glow" />
                  {personal.location}
                </span>
                <span className="flex items-center gap-1.5">
                  <Target className="w-4 h-4 text-cyan-glow" />
                  {personal.university}
                </span>
              </div>
            </AnimatedSection>

            {/* Interests */}
            <AnimatedSection direction="left" delay={0.3}>
              <div className="mt-8">
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-3">
                  Research Interests
                </p>
                <div className="flex flex-wrap gap-2">
                  {personal.interests.map((interest, i) => (
                    <motion.span
                      key={interest}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.35 + i * 0.05 }}
                      className="px-3 py-1.5 rounded-full text-xs font-medium glass border border-white/8 text-slate-300 hover:border-cyan-glow/30 hover:text-cyan-DEFAULT transition-colors"
                    >
                      {interest}
                    </motion.span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Right: Stats grid */}
          <div>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {personal.stats.map((stat, i) => {
                const Icon = iconMap[stat.icon] || BookOpen;
                return (
                  <AnimatedSection key={stat.label} direction="right" delay={0.1 + i * 0.08}>
                    <GlassCard className="text-center" glow={i === 0}>
                      <div className="flex justify-center mb-3">
                        <div className="w-10 h-10 rounded-xl bg-cyan-glow/10 border border-cyan-glow/20 flex items-center justify-center">
                          <Icon className="w-5 h-5 text-cyan-glow" />
                        </div>
                      </div>
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                        className="text-3xl font-bold font-display gradient-text mb-1"
                      >
                        {stat.value}
                      </motion.div>
                      <div className="text-xs text-slate-400 font-medium uppercase tracking-wide">
                        {stat.label}
                      </div>
                    </GlassCard>
                  </AnimatedSection>
                );
              })}
            </div>

            {/* Mission statement card */}
            <AnimatedSection direction="right" delay={0.4}>
              <div className="gradient-border p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-cyan-glow mb-3">
                  Mission
                </p>
                <p className="text-slate-300 text-sm leading-relaxed">
                  To bridge the gap between laboratory science and intelligent computing — developing
                  tools, methods, and frameworks that advance food safety, environmental chemistry,
                  disaster resilience, and AI-integrated scientific discovery.
                </p>
                <div className="mt-4 flex items-center gap-2 text-xs text-slate-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-glow animate-pulse" />
                  Currently based at Rajarata University of Sri Lanka
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
