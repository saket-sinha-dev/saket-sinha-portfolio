"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export function Timeline({ data }: { data: any[] }) {
  return (
    <Section className="bg-[var(--background)] py-24" id="experience">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <span className="text-sm font-bold tracking-widest uppercase text-[var(--accent-orange)] block mb-4">
            Trajectory
          </span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight">
            Experience & Impact
          </h2>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line connecting timeline elements */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[var(--border)] to-transparent" />

          {data.map((item, index) => (
            <div key={index} className="relative flex flex-col md:flex-row items-start md:justify-between mb-16 group">
              {/* Central Timeline Dot */}
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="absolute left-4 md:left-1/2 -ml-1.5 md:-ml-[0.4375rem] top-2 w-3 md:w-3.5 h-3 md:h-3.5 rounded-full bg-[var(--background)] border-2 border-[var(--accent-cyan)] group-hover:bg-[var(--accent-cyan)] transition-colors duration-300 z-10 shadow-[0_0_10px_var(--accent-cyan)]" 
              />
              
              {/* Left Column (Time & Role) */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="w-full md:w-[45%] pl-12 md:pl-0 md:text-right md:pr-12"
              >
                <div className="text-sm font-bold tracking-widest uppercase mb-2 text-[var(--muted-foreground)]">
                  {item.period}
                </div>
                <h3 className="text-2xl font-bold mb-1 text-[var(--foreground)]">{item.role}</h3>
                <h4 className="text-lg font-medium text-[var(--accent-violet)]">{item.company}</h4>
              </motion.div>

              {/* Right Column (Description & Impact) */}
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="w-full md:w-[45%] pl-12 md:pl-12 mt-4 md:mt-0"
              >
                <p className="text-[var(--muted-foreground)] leading-relaxed mb-4">
                  {item.description}
                </p>
                <div className="p-4 rounded-xl bg-[var(--muted)] border border-[var(--border)] border-l-2 border-l-[var(--accent-orange)] relative overflow-hidden group-hover:border-l-[var(--accent-cyan)] transition-colors">
                   <div className="absolute inset-0 bg-[var(--accent-orange)]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                   <p className="text-sm font-medium relative z-10 text-[var(--foreground)]">
                     <span className="font-bold text-[var(--accent-orange)] block mb-1">Impact Delivered:</span>
                     {item.impact}
                   </p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
