"use client";

import React from "react";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-6 mix-blend-difference text-white pointer-events-none">
      <div className="text-sm font-bold tracking-widest uppercase pointer-events-auto">
        <a href="/" className="hover:text-[var(--accent-orange)] transition-colors">Saket Sinha</a>
      </div>
      <nav className="hidden md:flex gap-8 text-xs font-semibold tracking-widest uppercase pointer-events-auto">
        <a href="/#hero" className="hover:text-[var(--accent-orange)] transition-colors">Hero</a>
        <a href="/#projects" className="hover:text-[var(--accent-orange)] transition-colors">Case Studies</a>
        <a href="/#experience" className="hover:text-[var(--accent-orange)] transition-colors">Experience</a>
        <a href="/#contact" className="hover:text-[var(--accent-orange)] transition-colors">Contact</a>
      </nav>
      <button 
        onClick={() => {
          const event = new KeyboardEvent('keydown', { key: 'k', metaKey: true });
          document.dispatchEvent(event);
        }}
        className="md:hidden text-xs font-semibold tracking-widest uppercase pointer-events-auto hover:text-[var(--accent-orange)] transition-colors"
      >
        Menu / Search
      </button>
    </header>
  );
}
