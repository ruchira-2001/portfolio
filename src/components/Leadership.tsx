"use client";
import { motion } from "framer-motion";
import {
  Crown,
  Trophy,
  Medal,
  Flame,
  Award,
  Leaf,
  Footprints,
} from "lucide-react";
import { leadership } from "@/data/personal";
import SectionHeading from "./ui/SectionHeading";
import AnimatedSection from "./ui/AnimatedSection";

const iconMap: Record<string, React.ElementType> = {
  Crown,
  Trophy,
  Medal,
  Flame,
  Award,
  Leaf,
  Footprints,
};

const colorConfig: Record<string, { icon: string; border: string; category: string }> = {
  cyan:   { icon: "bg-cyan-glow/10 border-cyan-glow/20 text-cyan-glow",     border: "hover:border-cyan-glow/30",   category: "text-cyan-DEFAULT" },
  yellow: { icon: "bg-yellow-500/10 border-yellow-500/20 text-yellow-400",  border: "hover:border-yellow-500/30",  category: "text-yellow-400" },
  teal:   { icon: "bg-teal-500/10 border-teal-500/20 text-teal-400",        border: "hover:border-teal-500/30",    category: "text-teal-400" },
  orange: { icon: "bg-orange-500/10 border-orange-500/20 text-orange-400",  border: "hover:border-orange-500/30",  category: "text-orange-400" },
  blue:   { icon: "bg-blue-500/10 border-blue-500/20 text-blue-400",        border: "hover:border-blue-500/30",    category: "text-blue-400" },
  indigo: { icon: "bg-indigo-500/10 border-indigo-500/20 text-indigo-400",  border: "hover:border-indigo-500/30",  category: "text-indigo-400" },
  green:  { icon: "bg-green-500/10 border-green-500/20 text-green-400",     border: "hover:border-green-500/30",   category: "text-green-400" },
};

// Group leadership items by category
const categories = [
  "Academic Leadership",
  "Academic Competition",
  "Scouting",
  "Sports Leadership",
  "Athletics",
  "Team Sports",
  "Volunteering",
];

export default function Leadership() {
  return (
    <section id="leadership" className="section-padding particles-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Leadership & Achievements"
          title="Beyond the Lab"
          subtitle="Academic leadership, national competitions, scouting honours, athletic achievements, and community service."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {leadership.map((item, i) => {
            const Icon = iconMap[item.icon] || Award;
            const colors = colorConfig[item.color] || colorConfig.cyan;

            return (
              <AnimatedSection key={item.title} delay={0.07 * i}>
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className={`glass rounded-2xl p-5 border border-white/6 transition-all duration-300 h-full flex flex-col ${colors.border}`}
                >
                  {/* Icon + category */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-xl border flex items-center justify-center flex-shrink-0 ${colors.icon}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className={`text-xs font-semibold uppercase tracking-wider ${colors.category}`}>
                        {item.category}
                      </span>
                    </div>
                  </div>

                  {/* Title + org */}
                  <h3 className="text-sm font-bold text-white mb-1 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 mb-1">{item.org}</p>
                  <p className="text-xs text-slate-500 mb-4">{item.period}</p>

                  {/* Details */}
                  <ul className="space-y-1.5 flex-1">
                    {item.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-2 text-xs text-slate-400 leading-relaxed">
                        <span className="w-1 h-1 rounded-full bg-current mt-1.5 flex-shrink-0 opacity-60" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
