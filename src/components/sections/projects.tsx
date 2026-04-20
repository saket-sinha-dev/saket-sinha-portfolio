"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { ArrowUpRight } from "lucide-react";

export function Projects({ data }: { data: any[] }) {
  return (
    <Section className="bg-[var(--background)]" id="projects">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24"
        >
          <span className="text-sm font-bold tracking-widest uppercase text-[var(--muted-foreground)] block mb-4">
            Case Studies
          </span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight">
            Engineering Artifacts
          </h2>
        </motion.div>

        <div className="flex flex-col gap-20 md:gap-32">
          {data.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col max-md:gap-8 gap-16 items-center ${
                index % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"
              }`}
            >
              <div className="w-full md:w-1/2 group relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-[var(--accent-orange)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                <div className="w-full aspect-[4/3] bg-[var(--muted)] rounded-2xl overflow-hidden shadow-lg border border-[var(--border)] group-hover:shadow-xl transition-all duration-500 relative flex items-center justify-center">
                  <div className="absolute inset-0 opacity-20 group-hover:scale-105 transition-transform duration-700 bg-[linear-gradient(45deg,var(--accent-violet)_0%,var(--accent-cyan)_100%)]"/>
                  {/* Abstract representations for projects based on index */}
                  {index === 0 && (
                    <svg viewBox="0 0 100 100" className="w-32 h-32 text-[var(--foreground)] opacity-50">
                      <rect x="20" y="20" width="60" height="60" rx="4" fill="currentColor" fillOpacity="0.2"/>
                      <circle cx="50" cy="50" r="10" fill="currentColor" />
                      <line x1="20" y1="50" x2="40" y2="50" stroke="currentColor" strokeWidth="2"/>
                      <line x1="60" y1="50" x2="80" y2="50" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  )}
                  {index === 1 && (
                    <svg viewBox="0 0 100 100" className="w-32 h-32 text-[var(--foreground)] opacity-50">
                      <path d="M10,90 L30,60 L50,75 L80,20 L90,30" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                  {index === 2 && (
                    <svg viewBox="0 0 100 100" className="w-32 h-32 text-[var(--foreground)] opacity-50">
                      <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="10 5" className="animate-[spin_20s_linear_infinite]" />
                      <circle cx="50" cy="50" r="20" fill="currentColor" fillOpacity="0.2"/>
                    </svg>
                  )}
                </div>
              </div>

              <div className="w-full md:w-1/2 flex flex-col items-start">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-xs font-bold tracking-widest uppercase text-[var(--accent-violet)]">
                    {project.category}
                  </span>
                  <span className="w-8 h-px bg-[var(--border)]" />
                </div>
                <h3 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                  {project.title}
                </h3>
                <p className="text-lg text-[var(--muted-foreground)] mb-8 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-10">
                  {project.tags.map((tag: string) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium bg-[var(--muted)] border border-[var(--border)] rounded-full text-[var(--foreground)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--foreground)] text-[var(--background)] font-medium hover:bg-[var(--accent-orange)] transition-colors duration-300 group"
                  onClick={(e) => {
                    if (project.link === "#") {
                      e.preventDefault();
                      const event = new KeyboardEvent('keydown', { key: 'j', metaKey: true });
                      window.dispatchEvent(event);
                    }
                  }}
                >
                  {project.link === "#" ? "Explore Architecture ⌘" : "Explore Architecture"}
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
