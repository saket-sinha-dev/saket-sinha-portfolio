"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export function Metrics({ data }: { data: any[] }) {
  return (
    <Section className="bg-white border-y border-[var(--border)] py-12 md:py-20" id="metrics">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/3">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Measured Performance.
            </h2>
            <p className="text-[var(--muted-foreground)]">
              Optimizing for efficiency at unmatched scale. Every microsecond saved is millions in compute and operational costs.
            </p>
          </div>
          
          <div className="md:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-8">
            {data.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col border-l-2 border-[var(--accent-orange)] pl-4"
              >
                <span className="text-4xl md:text-5xl font-black text-[var(--foreground)] tracking-tighter mb-2">
                  {metric.value}
                </span>
                <span className="text-xs font-bold tracking-widest uppercase text-[var(--accent-violet)]">
                  {metric.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
