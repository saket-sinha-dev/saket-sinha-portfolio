"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Code as GithubIcon, Star, GitFork } from "lucide-react";

export function Github({ data }: { data: any }) {
  return (
    <Section className="bg-[var(--muted)] border-y border-[var(--border)]" id="opensource">
      <Container>
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-16 h-16 bg-[var(--background)] rounded-full flex items-center justify-center shadow-sm border border-[var(--border)] mb-6 text-[var(--foreground)]"
          >
            <GithubIcon className="w-8 h-8" />
          </motion.div>
          <div className="flex items-center gap-4 mb-4">
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold tracking-tight"
            >
              Open Source
            </motion.h2>
            <div className="flex items-center gap-2 px-3 py-1 bg-[var(--card)] border border-[var(--border)] rounded-full text-xs font-mono text-[var(--accent-cyan)] shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[var(--accent-cyan)] animate-pulse" />
              Live Feed
            </div>
          </div>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[var(--muted-foreground)] max-w-2xl"
          >
            {data.summary}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {data.repositories.map((repo: any, index: number) => (
            <motion.a
              href={repo.link}
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[var(--background)] p-6 rounded-2xl border border-[var(--border)] hover:shadow-md transition-shadow group flex flex-col"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold group-hover:text-[var(--accent-orange)] transition-colors flex items-center gap-2">
                  <GitFork className="w-5 h-5 text-[var(--muted-foreground)]" />
                  {repo.name}
                </h3>
              </div>
              <p className="text-sm text-[var(--muted-foreground)] mb-6 flex-grow">{repo.description}</p>
              
              <div className="flex items-center gap-4 text-sm font-medium">
                <span className="flex items-center gap-1.5 text-[var(--accent-cyan)]">
                  <span className="w-2.5 h-2.5 rounded-full bg-current" />
                  {repo.tech}
                </span>
                <span className="flex items-center gap-1 text-[var(--muted-foreground)]">
                  <Star className="w-4 h-4" />
                  {repo.stars}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <motion.a 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            href="https://github.com" 
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[var(--background)] border border-[var(--border)] text-sm font-semibold hover:bg-[var(--muted-foreground)] hover:text-white transition-colors"
          >
            View GitHub Profile
          </motion.a>
        </div>
      </Container>
    </Section>
  );
}
