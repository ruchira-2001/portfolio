"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  ChevronDown,
  Download,
  Mail,
  ExternalLink,
  Atom,
  Cpu,
  FlaskConical,
  Brain,
  Microscope,
} from "lucide-react";
import { personal } from "@/data/personal";

const floatingIcons = [
  { Icon: Atom, x: "8%", y: "20%", size: 28, delay: 0 },
  { Icon: FlaskConical, x: "88%", y: "15%", size: 22, delay: 0.5 },
  { Icon: Cpu, x: "5%", y: "70%", size: 20, delay: 1 },
  { Icon: Brain, x: "90%", y: "65%", size: 24, delay: 0.8 },
  { Icon: Microscope, x: "75%", y: "82%", size: 18, delay: 1.2 },
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % personal.roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy-950">
      {/* Animated background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="orb w-[500px] h-[500px] bg-cyan-glow/8"
          style={{ top: "-10%", left: "-10%" }}
        />
        <div
          className="orb w-[400px] h-[400px] bg-blue-500/6"
          style={{ bottom: "-5%", right: "-8%", animationDelay: "2s" }}
        />
        <div
          className="orb w-[300px] h-[300px] bg-indigo-500/5"
          style={{ top: "40%", left: "60%", animationDelay: "4s" }}
        />

        {/* Grid lines */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(34,211,238,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Floating icons */}
      {floatingIcons.map(({ Icon, x, y, size, delay }, i) => (
        <motion.div
          key={i}
          className="absolute text-cyan-glow/15 pointer-events-none"
          style={{ left: x, top: y }}
          animate={{
            y: [0, -15, 0],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 5,
            delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Icon size={size} />
        </motion.div>
      ))}

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left: Text content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase text-cyan-glow bg-cyan-glow/10 border border-cyan-glow/20 mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-glow animate-pulse" />
              B.Sc. Applied Sciences — Chemistry & Computer Science
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-display tracking-tight mb-2"
            >
              <span className="text-white">Ruchira</span>
              <br />
              <span className="gradient-text">Perera</span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="text-xl sm:text-2xl font-display font-medium text-slate-300 mb-4"
            >
              {personal.tagline}
            </motion.p>

            {/* Animated role */}
            <div className="h-8 mb-4 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.p
                  key={roleIndex}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="text-base sm:text-lg text-cyan-glow font-medium"
                >
                  {personal.roles[roleIndex]}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Subtagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8"
            >
              {personal.subTagline}
            </motion.p>

            {/* Location badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="flex items-center gap-2 justify-center lg:justify-start mb-8 text-slate-500 text-sm"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              {personal.location} · Rajarata University of Sri Lanka
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-wrap gap-3 justify-center lg:justify-start"
            >
              <button
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm bg-gradient-to-r from-cyan-glow to-blue-500 text-navy-950 hover:opacity-90 hover:scale-105 transition-all duration-200 shadow-cyan-glow"
              >
                <ExternalLink className="w-4 h-4" />
                View Projects
              </button>
              <a
                href={personal.resumePdf}
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm glass border border-cyan-glow/30 text-cyan-DEFAULT hover:bg-cyan-glow/10 hover:border-cyan-glow/50 hover:scale-105 transition-all duration-200"
              >
                <Download className="w-4 h-4" />
                Download CV
              </a>
              <button
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm glass border border-white/10 text-slate-300 hover:text-white hover:bg-white/5 hover:scale-105 transition-all duration-200"
              >
                <Mail className="w-4 h-4" />
                Contact Me
              </button>
            </motion.div>
          </div>

          {/* Right: Profile image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex-shrink-0 relative"
          >
            {/* Outer glow ring */}
            <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-cyan-glow/30 via-blue-500/20 to-indigo-500/20 blur-xl animate-pulse-slow" />

            {/* Rotating border ring */}
            <div className="absolute -inset-2 rounded-full border-2 border-dashed border-cyan-glow/20 animate-spin-slow" />

            {/* Image container */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-2 border-cyan-glow/40 shadow-cyan-glow-lg">
              <Image
                src="/images/profile-formal.png"
                alt="Ruchira Perera — Interdisciplinary Researcher"
                fill
                className="object-cover object-top"
                priority
                sizes="(max-width: 640px) 256px, 320px"
              />
              {/* Subtle inner overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/30 via-transparent to-transparent" />
            </div>

            {/* Floating stat cards */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute -left-8 top-1/4 glass rounded-xl px-3 py-2 border border-cyan-glow/20 shadow-glass"
            >
              <div className="text-lg font-bold gradient-text-cyan">4</div>
              <div className="text-xs text-slate-400">Publications</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="absolute -right-8 bottom-1/4 glass rounded-xl px-3 py-2 border border-blue-500/20 shadow-glass"
            >
              <div className="text-lg font-bold text-blue-400">4+</div>
              <div className="text-xs text-slate-400">Projects</div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.button
          onClick={scrollToAbout}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-500 hover:text-cyan-DEFAULT transition-colors"
          aria-label="Scroll down"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
}
