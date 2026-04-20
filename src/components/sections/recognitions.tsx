"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Award, ShieldCheck } from "lucide-react";

export function Recognitions({ data }: { data: any }) {
  // Combine awards and certifications into a single array for the marquee
  const items = [
    ...data.awards.map((a: string) => ({ type: "award", text: a })),
    ...data.certifications.map((c: string) => ({ type: "cert", text: c }))
  ];

  // Duplicate for seamless marquee
  const duplicatedItems = [...items, ...items];

  return (
    <Section className="bg-[var(--foreground)] text-[var(--background)] py-16 overflow-hidden border-y border-white/10" id="recognitions">
      <Container className="mb-12">
        <div className="flex flex-col items-center text-center">
          <span className="text-sm font-bold tracking-widest uppercase text-[var(--accent-orange)] block mb-4">
            Continuous Evolution
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-4">
            Honors & Certifications
          </h2>
          <p className="text-white/60 max-w-2xl text-lg">
            A commitment to excellence, modern standards, and leading through innovation.
          </p>
        </div>
      </Container>

      <div className="relative w-full overflow-hidden flex whitespace-nowrap">
        {/* Left/Right Gradients for smooth fade */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[var(--foreground)] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[var(--foreground)] to-transparent z-10" />

        <motion.div
          className="flex gap-8 px-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, ease: "linear", repeat: Infinity }}
        >
          {duplicatedItems.map((item, index) => (
            <div 
              key={index} 
              className="flex items-center gap-4 bg-white/5 border border-white/10 px-8 py-4 rounded-full backdrop-blur-sm hover:bg-white/10 transition-colors"
            >
              {item.type === "award" ? (
                <Award className="w-5 h-5 text-[var(--accent-orange)]" />
              ) : (
                <ShieldCheck className="w-5 h-5 text-[var(--accent-cyan)]" />
              )}
              <span className="text-sm md:text-base font-medium text-white/90">
                {item.text}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
