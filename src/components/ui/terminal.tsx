"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal as TerminalIcon, X } from "lucide-react";

export function Terminal() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<{ command: string; output: string | React.ReactNode }[]>([
    {
      command: "uptime",
      output: "up 420 days, 13:37,  1 user,  load average: 0.01, 0.05, 0.15",
    },
    {
      command: "echo 'Type help for commands'",
      output: "Type help for commands",
    }
  ]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "j") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      // Close on ESC
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const cmd = input.trim().toLowerCase();
    let output: string | React.ReactNode = "";

    switch (cmd) {
      case "help":
        output = (
          <div className="flex flex-col gap-1 text-[var(--muted-foreground)]">
            <span><strong className="text-[var(--accent-cyan)]">whoami</strong>   - Display profile summary</span>
            <span><strong className="text-[var(--accent-orange)]">metrics</strong>  - Show performance impact</span>
            <span><strong className="text-[var(--accent-violet)]">contact</strong>  - Get in touch</span>
            <span><strong className="text-white">clear</strong>    - Clear terminal window</span>
          </div>
        );
        break;
      case "whoami":
        output = "Saket Sinha, Backend Engineer specializing in Java Spring Boot microservices, distributed system design, and AI/LLM integration.";
        break;
      case "metrics":
        output = "Events/Day: 1M+\nCost Reduction: 60%\nThroughput Improvement: 30%\nExperience: 9+ Years";
        break;
      case "contact":
        output = "Mobile: 9955332426\nEmail: dev.saketsinha@gmail.com\nLinkedIn: linkedin.com/in/saket-dev";
        break;
      case "clear":
        setHistory([]);
        setInput("");
        return;
      default:
        output = `command not found: ${cmd}`;
    }

    setHistory((prev) => [...prev, { command: input, output }]);
    setInput("");
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 w-[90vw] max-w-lg z-[100] shadow-2xl rounded-xl overflow-hidden border border-[var(--glass-border)] bg-zinc-950/90 backdrop-blur-xl font-mono text-sm shadow-black/50"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-2 bg-zinc-900 border-b border-zinc-800">
              <div className="flex items-center gap-2 text-zinc-400 text-xs">
                <TerminalIcon className="w-4 h-4" />
                <span>system_architect — -zsh — 80x24</span>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-zinc-500 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Terminal Body */}
            <div className="p-4 h-64 overflow-y-auto text-zinc-300 flex flex-col gap-2">
              {history.map((entry, i) => (
                <div key={i} className="flex flex-col gap-1">
                  <div className="flex gap-2">
                    <span className="text-[var(--accent-cyan)] font-bold">~</span>
                    <span className="text-zinc-500">$</span>
                    <span className="text-white">{entry.command}</span>
                  </div>
                  <div className="whitespace-pre-wrap">{entry.output}</div>
                </div>
              ))}
              <form onSubmit={handleCommand} className="flex gap-2 mt-2">
                <span className="text-[var(--accent-cyan)] font-bold">~</span>
                <span className="text-zinc-500">$</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="bg-transparent outline-none flex-1 text-white border-0 focus:ring-0 p-0"
                  spellCheck={false}
                  autoComplete="off"
                />
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-[var(--foreground)] text-[var(--background)] shadow-xl hover:scale-110 active:scale-95 transition-transform group"
          title="Open Terminal (Cmd+J)"
        >
          <TerminalIcon className="w-6 h-6 group-hover:animate-pulse" />
        </button>
      )}
    </>
  );
}
