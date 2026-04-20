import data from "@/data/db.json";
import { Hero } from "@/components/sections/hero";
import { Metrics } from "@/components/sections/metrics";
import { Philosophy } from "@/components/sections/philosophy";
import { Projects } from "@/components/sections/projects";
import { Blogs } from "@/components/sections/blogs";
import { Timeline } from "@/components/sections/timeline";
import { Recognitions } from "@/components/sections/recognitions";
import { Github } from "@/components/sections/github";
import { Contact } from "@/components/sections/contact";
import { Terminal } from "@/components/ui/terminal";
import { ThemeToggle } from "@/components/theme-toggle";
import { CommandPalette } from "@/components/ui/command-palette";
import { Header } from "@/components/ui/header";
import { getAllBlogs } from "@/lib/blogs";

export default function Home() {
  const allBlogs = getAllBlogs();
  const blogList = allBlogs.length > 0 ? allBlogs.map(b => ({ ...b, link: `/blog/${b.slug}` })) : data.blogs;

  return (
    <main className="flex flex-col min-h-screen bg-[var(--background)] relative">
      <Header />

      <Hero data={data.hero} />
      <Metrics data={data.metrics} />
      <Projects data={data.projects} />
      <Philosophy data={data.philosophy} skillsData={data.skills} />
      <Blogs data={blogList} />
      <Timeline data={data.experience} />
      <Recognitions data={data.recognitions} />
      <Github data={data.github} />
      <Contact data={data.contact} />
      
      {/* Interactive Floating Elements */}
      <CommandPalette />
      <ThemeToggle />
      <Terminal />
    </main>
  );
}
