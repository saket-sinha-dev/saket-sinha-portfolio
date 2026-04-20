"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export function Contact({ data }: { data: any }) {
  return (
    <Section className="bg-[var(--background)] py-32" id="contact">
      <Container className="flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-4">
            {data.title.split(" ").slice(0, -1).join(" ")} <br/>
            <span className="text-[var(--accent-orange)] italic pr-4">
              {data.title.split(" ").slice(-1).join(" ")}
            </span>
          </h2>
          <p className="text-xl text-[var(--muted-foreground)] mb-12">
            {data.tagline}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href={`mailto:${data.email}`} 
              className="px-8 py-4 rounded-full bg-[var(--foreground)] text-[var(--background)] font-medium hover:scale-105 transition-transform duration-300 w-full sm:w-auto"
            >
              Start a Project
            </a>
            <a 
              href={data.resume} 
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 rounded-full border-2 border-[var(--border)] font-medium hover:border-[var(--foreground)] transition-colors duration-300 w-full sm:w-auto"
            >
              Download CV / Manifest
            </a>
          </div>
        </motion.div>
        
        {/* Giant background text similar to bottom of the screenshot */}
        <div className="mt-32 w-full overflow-hidden flex justify-center opacity-5 select-none pointer-events-none">
          <span className="text-[15vw] font-black tracking-tighter whitespace-nowrap leading-none">
            ARCHITECT
          </span>
        </div>
      </Container>
    </Section>
  );
}
