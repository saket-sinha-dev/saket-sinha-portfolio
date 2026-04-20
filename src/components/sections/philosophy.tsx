"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Database, Cpu, Network } from "lucide-react";

const iconMap = {
  Database: Database,
  Cpu: Cpu,
  Network: Network,
};

export function Philosophy({ data, skillsData }: { data: any; skillsData: any[] }) {
  return (
    <Section className="bg-[#1D1D1F] text-[#FCFBF8] border-y border-white/10" id="philosophy">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs font-bold tracking-widest uppercase text-[var(--accent-cyan)] block mb-6">
              Engineering Philosophy
            </span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
              <span>{data.title.split("the")[0]}</span>
              <span className="text-[var(--accent-orange)] block">the {data.title.split("the")[1]}</span>
            </h2>

            <div className="flex flex-col gap-8 mt-12">
              {data.points.map((point: any, index: number) => (
                <div key={index} className="flex flex-col gap-2">
                  <h3 className="text-xl font-bold border-b border-white/20 pb-2 inline-block w-fit">{point.title}</h3>
                  <p className="text-white/60 leading-relaxed text-sm max-w-sm">{point.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Abstract System Architecture Flow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="bg-black/40 rounded-3xl p-8 border border-white/10 relative overflow-hidden backdrop-blur-xl"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--accent-violet)]/20 rounded-full blur-[100px]" />
            <h3 className="text-2xl font-bold mb-12 text-center text-white/80">My Tech Stack as a System</h3>
            
            <div className="flex flex-col gap-6 relative">
              <div className="absolute left-8 top-16 bottom-16 w-0.5 bg-gradient-to-b from-[var(--accent-orange)] via-[var(--accent-violet)] to-[var(--accent-cyan)] opacity-50" />
              
              {skillsData.map((skill, index) => {
                const Icon = iconMap[skill.icon as keyof typeof iconMap] || Cpu;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="flex items-center gap-6 relative z-10"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center relative overflow-hidden group">
                      <div className="absolute inset-0 bg-gradient-to-tr from-white/0 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <Icon className="w-6 h-6 text-white/80" />
                      
                      {/* Flow Dot */}
                      <motion.div 
                        className="absolute -left-1 w-2 h-2 rounded-full bg-[var(--accent-cyan)]"
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                      />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white/90">{skill.title}</h4>
                      <p className="text-xs font-mono text-[var(--accent-cyan)] mt-1 opacity-80 uppercase tracking-widest">{skill.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
