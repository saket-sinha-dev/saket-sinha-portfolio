"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { BookOpen } from "lucide-react";

export function Blogs({ data }: { data: any[] }) {
  return (
    <Section className="bg-[var(--background)]" id="blogs">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Thought Leadership</h2>
            <p className="text-[var(--muted-foreground)] mt-4 max-w-lg">Writing about system design, performance engineering, and AI/LLM architectures.</p>
          </motion.div>
          
          <motion.a 
            href="#"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-sm font-bold text-[var(--accent-violet)] hover:text-[var(--foreground)] transition-colors"
          >
            View All Posts
            <span className="w-6 h-px bg-current" />
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.map((blog, index) => (
            <motion.a
              href={blog.link}
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group block p-8 rounded-3xl bg-[var(--card)] border border-[var(--border)] hover:border-[var(--accent-violet)] transition-colors relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-violet)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex justify-between items-start mb-6 relative z-10">
                <div className="flex flex-wrap gap-2">
                  {blog.tags.map((tag: string) => (
                    <span key={tag} className="px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-[var(--muted)] text-[var(--muted-foreground)] rounded-full group-hover:bg-white group-hover:text-[var(--accent-violet)] transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="text-xs font-mono text-[var(--muted-foreground)] flex items-center gap-1">
                  <BookOpen className="w-3 h-3" />
                  {blog.readTime}
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-[var(--accent-violet)] transition-colors relative z-10">{blog.title}</h3>
              <p className="text-[var(--muted-foreground)] relative z-10">{blog.summary}</p>
            </motion.a>
          ))}
        </div>
      </Container>
    </Section>
  );
}
