"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Download,
  Send,
  Phone,
  CheckCircle,
  ExternalLink,
} from "lucide-react";
import { personal } from "@/data/personal";
import SectionHeading from "./ui/SectionHeading";
import AnimatedSection from "./ui/AnimatedSection";

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

const socialLinks = [
  {
    Icon: Mail,
    label: "Email",
    value: personal.email,
    href: `mailto:${personal.email}`,
    color: "hover:border-cyan-glow/50 hover:text-cyan-DEFAULT",
  },
  {
    Icon: LinkedInIcon,
    label: "LinkedIn",
    value: "ruchira-perera-80a200280",
    href: personal.linkedin,
    color: "hover:border-blue-500/50 hover:text-blue-400",
  },
  {
    Icon: GitHubIcon,
    label: "GitHub",
    value: "ruchira-2001",
    href: personal.github,
    color: "hover:border-slate-400/50 hover:text-slate-300",
  },
  {
    Icon: Phone,
    label: "Phone",
    value: personal.phone,
    href: `tel:${personal.phone}`,
    color: "hover:border-teal-500/50 hover:text-teal-400",
  },
  {
    Icon: MapPin,
    label: "Location",
    value: personal.location,
    href: "#",
    color: "hover:border-indigo-500/50 hover:text-indigo-400",
  },
];

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Build mailto link as a simple non-backend solution
    const mailto = `mailto:${personal.email}?subject=${encodeURIComponent(
      formState.subject || "Portfolio Inquiry"
    )}&body=${encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\n${formState.message}`
    )}`;
    window.location.href = mailto;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="section-padding bg-navy-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Get In Touch"
          title="Let's Connect"
          subtitle="Open to research collaborations, MSc enquiries, industry partnerships, and academic networking."
        />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Contact info */}
          <div>
            <AnimatedSection direction="left" delay={0.1}>
              <p className="text-slate-300 text-base leading-relaxed mb-8">
                Whether you're a researcher, academic reviewer, potential employer, or fellow student — I'd love to connect. My work spans analytical chemistry, AI systems, and computational science, and I'm always open to meaningful conversations and collaborations.
              </p>
            </AnimatedSection>

            {/* Social links */}
            <div className="space-y-3 mb-8">
              {socialLinks.map((link, i) => (
                <AnimatedSection key={link.label} direction="left" delay={0.12 + i * 0.06}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className={`flex items-center gap-4 p-3.5 glass rounded-xl border border-white/6 text-slate-400 transition-all duration-200 group ${link.color}`}
                  >
                    <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center flex-shrink-0 group-hover:bg-white/10 transition-colors">
                      <link.Icon className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs uppercase tracking-widest text-slate-500 mb-0.5">{link.label}</div>
                      <div className="text-sm font-medium truncate">{link.value}</div>
                    </div>
                  </a>
                </AnimatedSection>
              ))}
            </div>

            {/* Download CV button */}
            <AnimatedSection direction="left" delay={0.5}>
              <a
                href={personal.resumePdf}
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm bg-gradient-to-r from-cyan-glow to-blue-500 text-navy-950 hover:opacity-90 hover:scale-105 transition-all duration-200 shadow-cyan-glow"
              >
                <Download className="w-4 h-4" />
                Download Full CV
              </a>
            </AnimatedSection>
          </div>

          {/* Right: Contact form */}
          <AnimatedSection direction="right" delay={0.15}>
            <form
              onSubmit={handleSubmit}
              className="glass rounded-2xl p-6 sm:p-8 border border-white/6 space-y-4"
            >
              <h3 className="text-lg font-bold font-display text-white mb-2">Send a Message</h3>
              <p className="text-xs text-slate-500 mb-4">This will open your email client.</p>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1.5" htmlFor="contact-name">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="Your name"
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-glow/50 focus:bg-white/8 transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1.5" htmlFor="contact-email">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="your@email.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-glow/50 focus:bg-white/8 transition-all duration-200"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1.5" htmlFor="contact-subject">
                  Subject
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  placeholder="Research collaboration / Inquiry..."
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-glow/50 focus:bg-white/8 transition-all duration-200"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1.5" htmlFor="contact-message">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Tell me about your research / opportunity / collaboration idea..."
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-glow/50 focus:bg-white/8 transition-all duration-200 resize-none"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm bg-gradient-to-r from-cyan-glow to-blue-500 text-navy-950 hover:opacity-90 transition-all duration-200 shadow-cyan-glow"
              >
                {submitted ? (
                  <>
                    <CheckCircle className="w-4 h-4" />
                    Email client opened!
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
