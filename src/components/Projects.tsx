"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, Calendar, CheckCircle, ArrowRight } from "lucide-react";
import { projects } from "@/data/personal";
import SectionHeading from "./ui/SectionHeading";
import AnimatedSection from "./ui/AnimatedSection";

const statusStyle: Record<string, string> = {
  "Published — IFES 2026": "badge-green",
  "Submitted to IEEE MERCon 2026": "badge-yellow",
  "Accepted — ICTICM 2026": "badge-blue",
  "Final Year Research": "badge-teal",
};

const categoryColor: Record<string, string> = {
  "Computer Science / AI": "text-cyan-DEFAULT",
  "AI / Systems Engineering": "text-blue-400",
  "Computational Chemistry": "text-indigo-400",
  "Analytical Chemistry": "text-teal-400",
};

export default function Projects() {
  const [selected, setSelected] = useState<(typeof projects)[0] | null>(null);

  return (
    <section id="projects" className="section-padding bg-navy-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Project Showcase"
          title="Key Research Projects"
          subtitle="From edge-AI hardware prototypes to computational chemistry — each project combines scientific rigor with engineering innovation."
        />

        {/* Project grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <AnimatedSection key={project.id} delay={0.08 * i}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                onClick={() => setSelected(project)}
                className="group glass rounded-2xl border border-white/6 hover:border-cyan-glow/25 overflow-hidden cursor-pointer transition-all duration-300 h-full"
              >
                {/* Image (only for Smart Eco-Bin) */}
                {project.image && (
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/50 to-transparent" />
                    {/* Featured badge */}
                    {project.featured && (
                      <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-bold bg-cyan-glow text-navy-950">
                        Featured
                      </div>
                    )}
                  </div>
                )}

                {/* Card body */}
                <div className={`p-5 sm:p-6 ${!project.image ? "pt-6" : ""}`}>
                  {/* Status + category */}
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${statusStyle[project.status] ?? "badge-blue"}`}>
                      {project.status}
                    </span>
                    <span className={`text-xs font-medium ${categoryColor[project.category] ?? "text-slate-400"}`}>
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold font-display text-white mb-1 group-hover:text-cyan-DEFAULT transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-400 mb-4">{project.subtitle}</p>

                  {/* Period */}
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-4">
                    <Calendar className="w-3.5 h-3.5" />
                    {project.period}
                  </div>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-xs font-medium bg-white/5 text-slate-300 border border-white/8"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 5 && (
                      <span className="px-2 py-0.5 rounded text-xs text-slate-500">
                        +{project.technologies.length - 5} more
                      </span>
                    )}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center gap-1 text-xs font-semibold text-cyan-glow group-hover:gap-2 transition-all">
                    View Details
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-md"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="glass border border-white/10 rounded-2xl w-full max-w-2xl max-h-[85vh] overflow-y-auto shadow-cyan-glow"
            >
              {/* Modal header */}
              <div className="sticky top-0 glass border-b border-white/6 p-5 flex items-start justify-between gap-4">
                <div>
                  <div className="flex flex-wrap gap-2 mb-2">
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${statusStyle[selected.status] ?? "badge-blue"}`}>
                      {selected.status}
                    </span>
                    <span className="text-xs text-slate-400 flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {selected.period}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold font-display text-white">{selected.title}</h2>
                  <p className="text-sm text-slate-400">{selected.subtitle}</p>
                </div>
                <button
                  onClick={() => setSelected(null)}
                  className="flex-shrink-0 w-8 h-8 rounded-lg glass border border-white/8 flex items-center justify-center text-slate-400 hover:text-white"
                  aria-label="Close"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Modal body */}
              <div className="p-5 sm:p-6 space-y-5">
                {selected.image && (
                  <div className="relative h-48 rounded-xl overflow-hidden">
                    <Image src={selected.image} alt={selected.title} fill className="object-cover object-center" sizes="672px" />
                  </div>
                )}

                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-2">Problem Statement</h4>
                  <p className="text-sm text-slate-300 leading-relaxed">{selected.problem}</p>
                </div>

                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-2">Solution & Approach</h4>
                  <p className="text-sm text-slate-300 leading-relaxed">{selected.solution}</p>
                </div>

                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selected.technologies.map((tech) => (
                      <span key={tech} className="px-2.5 py-1 rounded-full text-xs font-medium bg-cyan-glow/8 text-cyan-DEFAULT border border-cyan-glow/15">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-2">Outcomes</h4>
                  <ul className="space-y-2">
                    {selected.outcomes.map((outcome) => (
                      <li key={outcome} className="flex items-start gap-2 text-sm text-slate-300">
                        <CheckCircle className="w-4 h-4 text-cyan-glow flex-shrink-0 mt-0.5" />
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
