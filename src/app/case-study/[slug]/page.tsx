import { getCaseStudyBySlug, getAllCaseStudies } from "@/lib/case-studies";
import { notFound } from "next/navigation";
import { Header } from "@/components/ui/header";
import { ThemeToggle } from "@/components/theme-toggle";
import { CommandPalette } from "@/components/ui/command-palette";
import { CustomCursor } from "@/components/ui/custom-cursor";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export async function generateStaticParams() {
  const caseStudies = getAllCaseStudies();
  return caseStudies.map((cs) => ({
    slug: cs.slug,
  }));
}

export default async function CaseStudy({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const caseStudy = getCaseStudyBySlug(resolvedParams.slug);

  if (!caseStudy) {
    return notFound();
  }

  return (
    <main className="flex flex-col min-h-screen bg-[var(--background)] text-[var(--foreground)] relative">
      <Header />
      <div className="pt-32 pb-20 px-6 md:px-12 max-w-4xl mx-auto w-full">
        <a href="/#projects" className="text-sm font-bold tracking-widest uppercase text-[var(--accent-orange)] hover:text-[var(--accent-violet)] transition-colors mb-8 block">
          ← Back to Portfolio
        </a>
        
        <header className="mb-12">
          <div className="flex items-center gap-4 text-[var(--muted-foreground)] text-xs font-bold uppercase tracking-widest mb-6">
            <span className="text-[var(--accent-violet)]">{caseStudy.meta.category}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-8">
            {caseStudy.meta.title}
          </h1>
          <div className="flex flex-wrap gap-2 mb-10">
            {caseStudy.meta.tags.map((tag: string) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-medium bg-[var(--muted)] border border-[var(--border)] rounded-full text-[var(--foreground)]"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        <article className="prose prose-lg dark:prose-invert prose-zinc max-w-none prose-headings:font-black prose-a:text-[var(--accent-orange)] prose-code:text-[var(--accent-cyan)] prose-pre:bg-[#0d1117] prose-pre:border-white/10 prose-pre:border">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {caseStudy.content}
          </ReactMarkdown>
        </article>
      </div>

      <CommandPalette />
      <ThemeToggle />
      <CustomCursor />
    </main>
  );
}
