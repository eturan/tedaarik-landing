import type { BlogPost, BlogPostFrontmatter } from "@/types/blog";

// Load all markdown files from content/blog directory
const postFiles = import.meta.glob("../content/blog/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

// Simple browser-compatible frontmatter parser
function parseFrontmatter(content: string): {
  data: Record<string, unknown>;
  content: string;
} {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
  const match = content.match(frontmatterRegex);

  if (!match) {
    return { data: {}, content };
  }

  const [, frontmatterStr, markdownContent] = match;
  const data: Record<string, unknown> = {};

  // Parse YAML-like frontmatter
  const lines = frontmatterStr.split("\n");
  let currentKey = "";
  let isArray = false;
  let arrayValue: string[] = [];

  for (const line of lines) {
    // Check for array items (lines starting with -)
    if (line.trim().startsWith("- ") && currentKey) {
      const value = line.trim().slice(2).replace(/^["']|["']$/g, "");
      arrayValue.push(value);
      continue;
    }

    // If we were collecting an array, save it
    if (isArray && arrayValue.length > 0) {
      data[currentKey] = arrayValue;
      arrayValue = [];
      isArray = false;
    }

    // Parse key: value pairs
    const colonIndex = line.indexOf(":");
    if (colonIndex > 0) {
      currentKey = line.slice(0, colonIndex).trim();
      let value = line.slice(colonIndex + 1).trim();

      // Check if this starts an array
      if (value === "" || value.startsWith("[")) {
        if (value.startsWith("[") && value.endsWith("]")) {
          // Inline array like ["item1", "item2"]
          const arrayContent = value.slice(1, -1);
          data[currentKey] = arrayContent
            .split(",")
            .map((item) => item.trim().replace(/^["']|["']$/g, ""));
        } else {
          isArray = true;
          arrayValue = [];
        }
      } else {
        // Remove quotes from value
        value = value.replace(/^["']|["']$/g, "");
        data[currentKey] = value;
      }
    }
  }

  // Handle last array if any
  if (isArray && arrayValue.length > 0) {
    data[currentKey] = arrayValue;
  }

  return { data, content: markdownContent };
}

function parsePost(path: string, content: string): BlogPost {
  const slug = path.split("/").pop()?.replace(".md", "") || "";
  const { data, content: markdownContent } = parseFrontmatter(content);

  return {
    slug,
    frontmatter: data as BlogPostFrontmatter,
    content: markdownContent,
  };
}

function sortPostsByDate(posts: BlogPost[]): BlogPost[] {
  return posts.sort((a, b) => {
    const dateA = new Date(a.frontmatter.date);
    const dateB = new Date(b.frontmatter.date);
    return dateB.getTime() - dateA.getTime();
  });
}

export function getAllPosts(): BlogPost[] {
  const posts = Object.entries(postFiles).map(([path, content]) =>
    parsePost(path, content)
  );
  return sortPostsByDate(posts);
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  const posts = getAllPosts();
  return posts.find((post) => post.slug === slug);
}

export function getRelatedPosts(
  currentSlug: string,
  category: string,
  limit: number = 3
): BlogPost[] {
  const posts = getAllPosts();
  return posts
    .filter(
      (post) =>
        post.slug !== currentSlug && post.frontmatter.category === category
    )
    .slice(0, limit);
}

export function getPostsByCategory(category: string): BlogPost[] {
  const posts = getAllPosts();
  return posts.filter((post) => post.frontmatter.category === category);
}

export function getAllCategories(): string[] {
  const posts = getAllPosts();
  const categories = new Set(posts.map((post) => post.frontmatter.category));
  return Array.from(categories);
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("tr-TR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
