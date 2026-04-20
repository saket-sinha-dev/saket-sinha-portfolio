import fs from "fs";
import path from "path";
import matter from "gray-matter";

const blogsDirectory = path.join(process.cwd(), "src/content/blogs");

export interface BlogMeta {
  slug: string;
  title: string;
  date: string;
  summary: string;
  tags: string[];
  readTime: string;
}

export function getAllBlogs(): BlogMeta[] {
  if (!fs.existsSync(blogsDirectory)) return [];

  const fileNames = fs.readdirSync(blogsDirectory);
  const allBlogs = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join(blogsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      const { data } = matter(fileContents);

      return {
        slug,
        title: data.title || "Untitled",
        date: data.date || "Unknown date",
        summary: data.summary || "",
        tags: data.tags || [],
        readTime: data.readTime || "5 min read",
      };
    });

  return allBlogs.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getBlogBySlug(slug: string) {
  try {
    const fullPath = path.join(blogsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      meta: {
        slug,
        title: data.title || "Untitled",
        date: data.date || "Unknown date",
        summary: data.summary || "",
        tags: data.tags || [],
        readTime: data.readTime || "5 min read",
      },
      content,
    };
  } catch (e) {
    return null;
  }
}
