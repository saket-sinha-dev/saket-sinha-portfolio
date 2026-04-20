"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export function Hero({ data }: { data: any }) {
  return (
    <Section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden" id="hero">
      {/* Background gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 bg-[var(--background)]">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-[var(--accent-orange)]/10 blur-[120px]" />
        <div className="absolute top-[20%] -right-[10%] w-[40%] h-[60%] rounded-full bg-[var(--accent-violet)]/10 blur-[120px]" />
      </div>

      <Container className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--border)] bg-[var(--card)] backdrop-blur-md w-fit shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent-orange)] animate-pulse" />
            <span className="text-sm font-bold tracking-widest uppercase text-[var(--foreground)]">Backend Engineer & Architect</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.1]">
            <span className="text-[var(--foreground)]">I build scalable systems that </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-orange)] via-[var(--accent-violet)] to-[var(--accent-cyan)] animate-gradient-x">
              handle millions of events.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-[var(--muted-foreground)] max-w-xl leading-relaxed font-medium">
            {data.subtitle}
          </p>
          <div className="flex flex-wrap gap-4 mt-6">
            <a href="#projects" className="px-8 py-4 rounded-full bg-[var(--foreground)] text-[var(--background)] font-bold hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl shadow-[var(--accent-orange)]/10">
              View Case Studies
            </a>
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                const event = new KeyboardEvent('keydown', { key: 'j', metaKey: true });
                window.dispatchEvent(event);
              }}
              className="px-8 py-4 rounded-full border-2 border-[var(--border)] bg-transparent font-bold hover:border-[var(--accent-cyan)] transition-colors duration-300 flex items-center gap-2"
            >
              Open Terminal <span className="font-mono text-xs opacity-50">⌘J</span>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="relative lg:ml-auto w-full max-w-lg aspect-square mt-12 lg:mt-0"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-[var(--accent-violet)]/30 to-[var(--accent-cyan)]/30 rounded-3xl transform rotate-3 scale-105 transition-transform duration-700 hover:rotate-6 blur-[2px]" />
          <div className="absolute inset-0 bg-[var(--card)] backdrop-blur-xl border border-[var(--glass-border)] rounded-3xl shadow-2xl overflow-hidden flex items-center justify-center">
            {/* Represent abstract system diagram */}
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-90 drop-shadow-2xl p-8 dark:mix-blend-screen mix-blend-multiply">
              <path fill="var(--accent-cyan)" d="M47.7,-57.2C59.5,-45.3,65.3,-27.1,65.5,-10.1C65.8,6.8,60.5,22.6,50.7,35.1C41,47.6,26.8,56.8,10.6,60.6C-5.6,64.4,-23.8,62.8,-38.3,53.8C-52.8,44.8,-63.5,28.4,-67.2,10.6C-70.9,-7.2,-67.6,-26.4,-56.3,-40.4C-45,-54.4,-25.6,-63.2,-7.1,-65.2C11.4,-67.2,35.9,-69.1,47.7,-57.2Z" transform="translate(100 100)" />
              <circle cx="100" cy="100" r="30" fill="none" stroke="var(--accent-orange)" strokeWidth="3" strokeDasharray="4 4" className="animate-[spin_10s_linear_infinite]" />
              <circle cx="100" cy="100" r="45" fill="none" stroke="var(--accent-violet)" strokeWidth="2" strokeDasharray="2 6" className="animate-[spin_15s_linear_infinite_reverse]" />
            </svg>
          </div>
          
          <motion.div 
            animate={{ y: [0, -10, 0] }} 
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-12 -left-6 bg-[var(--background)] p-4 rounded-xl shadow-2xl flex items-center gap-3 border border-[var(--border)]"
          >
            <div className="w-10 h-10 rounded-full bg-[var(--accent-orange)]/20 flex items-center justify-center text-[var(--accent-orange)]">
              ⚡
            </div>
            <div>
              <p className="text-xs text-[var(--muted-foreground)] font-bold uppercase tracking-wider">Throughput</p>
              <p className="text-sm font-black text-[var(--foreground)]">1M+ / Day</p>
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 10, 0] }} 
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-12 -right-6 bg-[var(--background)] p-4 rounded-xl shadow-2xl flex items-center gap-3 border border-[var(--border)]"
          >
            <div className="w-10 h-10 rounded-full bg-[var(--accent-violet)]/20 flex items-center justify-center text-[var(--accent-violet)]">
              ☁️
            </div>
            <div>
              <p className="text-xs text-[var(--muted-foreground)] font-bold uppercase tracking-wider">Uptime</p>
              <p className="text-sm font-black text-[var(--foreground)]">99.99%</p>
            </div>
          </motion.div>

        </motion.div>
      </Container>
    </Section>
  );
}
