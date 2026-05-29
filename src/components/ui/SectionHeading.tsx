"use client";
import { ReactNode } from "react";
import AnimatedSection from "./AnimatedSection";

interface SectionHeadingProps {
  label: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  children?: ReactNode;
}

export default function SectionHeading({
  label,
  title,
  subtitle,
  align = "center",
  children,
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col ${alignClass} mb-16`}>
      <AnimatedSection delay={0}>
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase text-cyan-glow bg-cyan-glow/10 border border-cyan-glow/20 mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-glow animate-pulse" />
          {label}
        </span>
      </AnimatedSection>
      <AnimatedSection delay={0.1}>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display tracking-tight mb-4 gradient-text">
          {title}
        </h2>
      </AnimatedSection>
      {subtitle && (
        <AnimatedSection delay={0.2}>
          <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        </AnimatedSection>
      )}
      {children}
      <AnimatedSection delay={0.15}>
        <div className={`flex gap-1 mt-5 ${align === "center" ? "justify-center" : ""}`}>
          <div className="h-0.5 w-12 bg-cyan-glow rounded-full" />
          <div className="h-0.5 w-4 bg-cyan-glow/50 rounded-full" />
          <div className="h-0.5 w-2 bg-cyan-glow/25 rounded-full" />
        </div>
      </AnimatedSection>
    </div>
  );
}
