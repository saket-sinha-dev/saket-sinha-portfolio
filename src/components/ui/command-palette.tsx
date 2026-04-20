"use client";

import { useEffect, useState } from "react";
import { Command } from "cmdk";
import { Search, Terminal, User, FileText, Moon, Sun, Monitor } from "lucide-react";
import { useTheme } from "next-themes";
import "@/app/cmdk.css";

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = (command: () => void) => {
    setOpen(false);
    command();
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-start justify-center pt-[15vh] bg-black/40 backdrop-blur-sm shadow-2xl transition-opacity">
      <div className="w-full max-w-xl mx-4 overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--background)] shadow-2xl">
        <Command
          className="w-full"
          autoFocus
          loop
          onKeyDown={(e) => {
            if (e.key === "Escape") setOpen(false);
          }}
        >
          <div className="flex items-center border-b border-[var(--border)] px-4">
            <Search className="w-5 h-5 text-[var(--muted-foreground)] mr-2" />
            <Command.Input 
              placeholder="Type a command or search..." 
              className="flex-1 w-full py-4 bg-transparent outline-none text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] border-0 focus:ring-0" 
            />
          </div>
          
          <Command.List className="max-h-[300px] overflow-y-auto p-2 outline-none">
            <Command.Empty className="py-6 text-center text-sm text-[var(--muted-foreground)]">
              No results found.
            </Command.Empty>

            <Command.Group heading="Navigation" className="px-2 py-1.5 text-xs font-semibold text-[var(--muted-foreground)]">
              <Command.Item 
                onSelect={() => runCommand(() => window.location.href = "/#experience")}
                className="flex items-center gap-2 px-2 py-3 rounded-md text-sm text-[var(--foreground)] aria-selected:bg-[var(--muted)] aria-selected:text-[var(--accent-orange)] cursor-pointer"
              >
                <User className="w-4 h-4" /> Experience & Trajectory
              </Command.Item>
              <Command.Item 
                onSelect={() => runCommand(() => window.location.href = "/#projects")}
                className="flex items-center gap-2 px-2 py-3 rounded-md text-sm text-[var(--foreground)] aria-selected:bg-[var(--muted)] aria-selected:text-[var(--accent-cyan)] cursor-pointer"
              >
                <Monitor className="w-4 h-4" /> Case Studies
              </Command.Item>
              <Command.Item 
                onSelect={() => runCommand(() => window.open("/data/Saket-Sinha-CV-V1.pdf", "_blank"))}
                className="flex items-center gap-2 px-2 py-3 rounded-md text-sm text-[var(--foreground)] aria-selected:bg-[var(--muted)] aria-selected:text-[var(--accent-violet)] cursor-pointer"
              >
                <FileText className="w-4 h-4" /> Download Resume
              </Command.Item>
            </Command.Group>

            <Command.Separator className="h-px bg-[var(--border)] my-1" />

            <Command.Group heading="Theme" className="px-2 py-1.5 text-xs font-semibold text-[var(--muted-foreground)]">
              <Command.Item 
                onSelect={() => runCommand(() => setTheme("light"))}
                className="flex items-center gap-2 px-2 py-3 rounded-md text-sm text-[var(--foreground)] aria-selected:bg-[var(--muted)] cursor-pointer"
              >
                <Sun className="w-4 h-4" /> Light Mode
              </Command.Item>
              <Command.Item 
                onSelect={() => runCommand(() => setTheme("dark"))}
                className="flex items-center gap-2 px-2 py-3 rounded-md text-sm text-[var(--foreground)] aria-selected:bg-[var(--muted)] cursor-pointer"
              >
                <Moon className="w-4 h-4" /> Dark Base
              </Command.Item>
            </Command.Group>
            
            <Command.Separator className="h-px bg-[var(--border)] my-1" />
            
            <Command.Group heading="Developer" className="px-2 py-1.5 text-xs font-semibold text-[var(--muted-foreground)]">
               <Command.Item 
                onSelect={() => runCommand(() => {
                  const event = new KeyboardEvent('keydown', { key: 'j', metaKey: true });
                  window.dispatchEvent(event);
                })}
                className="flex items-center gap-2 px-2 py-3 rounded-md text-sm text-[var(--foreground)] aria-selected:bg-[var(--muted)] cursor-pointer"
              >
                <Terminal className="w-4 h-4" /> Open Interactive Terminal 
              </Command.Item>
            </Command.Group>

          </Command.List>
        </Command>
      </div>
    </div>
  );
}
