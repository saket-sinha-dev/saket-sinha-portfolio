import fs from "fs";
import path from "path";
import matter from "gray-matter";

const caseStudiesDirectory = path.join(process.cwd(), "src/content/case-studies");

export interface CaseStudyMeta {
  slug: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
}

export function getAllCaseStudies(): CaseStudyMeta[] {
  if (!fs.existsSync(caseStudiesDirectory)) return [];

  const fileNames = fs.readdirSync(caseStudiesDirectory);
  const allCaseStudies = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join(caseStudiesDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      const { data } = matter(fileContents);

      return {
        slug,
        title: data.title || "Untitled",
        category: data.category || "General",
        description: data.description || "",
        tags: data.tags || [],
      };
    });

  return allCaseStudies;
}

export function getCaseStudyBySlug(slug: string) {
  try {
    const fullPath = path.join(caseStudiesDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      meta: {
        slug,
        title: data.title || "Untitled",
        category: data.category || "General",
        description: data.description || "",
        tags: data.tags || [],
      },
      content,
    };
  } catch (e) {
    return null;
  }
}
