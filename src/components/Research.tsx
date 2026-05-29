"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ExternalLink, BookOpen } from "lucide-react";
import { publications } from "@/data/personal";
import SectionHeading from "./ui/SectionHeading";
import AnimatedSection from "./ui/AnimatedSection";

const statusStyle: Record<string, string> = {
  Published: "badge-green",
  "Under Review": "badge-yellow",
  Accepted: "badge-blue",
};

export default function Research() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="research" className="section-padding particles-bg">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Research & Publications"
          title="Published Work"
          subtitle="Peer-reviewed conference papers, symposium contributions, and industry articles spanning chemistry, AI, and interdisciplinary innovation."
        />

        <div className="space-y-4">
          {publications.map((pub, i) => (
            <AnimatedSection key={pub.id} delay={0.08 * i}>
              <motion.div
                layout
                className="glass rounded-2xl border border-white/6 hover:border-cyan-glow/20 transition-all duration-300 overflow-hidden"
              >
                {/* Header */}
                <button
                  onClick={() => setExpanded(expanded === pub.id ? null : pub.id)}
                  className="w-full text-left p-5 sm:p-6"
                  aria-expanded={expanded === pub.id}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      {/* Category + status row */}
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                          [{i + 1}]
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-white/5 text-slate-400 border border-white/8">
                          {pub.category}
                        </span>
                        <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${statusStyle[pub.status] ?? "badge-blue"}`}>
                          {pub.status}
                        </span>
                        <span className="text-xs text-slate-500">{pub.year}</span>
                        {pub.volume && (
                          <span className="text-xs text-slate-500">· {pub.volume}</span>
                        )}
                      </div>

                      {/* Title */}
                      <h3 className="text-base font-semibold text-white leading-snug mb-2">
                        {pub.title}
                      </h3>

                      {/* Conference */}
                      <p className="text-sm text-slate-400 flex items-center gap-1.5">
                        <BookOpen className="w-3.5 h-3.5 flex-shrink-0 text-cyan-glow/70" />
                        {pub.conference}
                      </p>
                      <p className="text-xs text-slate-500 mt-1 ml-5">{pub.venue}</p>
                    </div>

                    {/* Expand chevron */}
                    <motion.div
                      animate={{ rotate: expanded === pub.id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0 w-8 h-8 rounded-lg glass border border-white/8 flex items-center justify-center text-slate-400"
                    >
                      <ChevronDown className="w-4 h-4" />
                    </motion.div>
                  </div>
                </button>

                {/* Expanded content */}
                <AnimatePresence>
                  {expanded === pub.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                    >
                      <div className="px-5 sm:px-6 pb-5 border-t border-white/5 pt-4">
                        <p className="text-sm text-slate-300 leading-relaxed mb-4">
                          {pub.abstract}
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {pub.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2.5 py-1 rounded-full text-xs font-medium bg-cyan-glow/8 text-cyan-DEFAULT border border-cyan-glow/15"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Stats row */}
        <AnimatedSection delay={0.4}>
          <div className="mt-12 grid grid-cols-3 gap-4">
            {[
              { value: "2", label: "Published" },
              { value: "1", label: "Under Review" },
              { value: "1", label: "Accepted" },
            ].map((s) => (
              <div key={s.label} className="glass rounded-xl p-4 text-center border border-white/6">
                <div className="text-2xl font-bold gradient-text mb-1">{s.value}</div>
                <div className="text-xs text-slate-400 uppercase tracking-wide">{s.label}</div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
