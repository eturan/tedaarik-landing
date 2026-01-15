export interface BlogPostFrontmatter {
  title: string;
  description: string;
  keywords: string[];
  author: string;
  date: string;
  category: string;
  readTime: string;
  featuredImage?: string;
  featured?: boolean;
}

export interface BlogPost {
  slug: string;
  frontmatter: BlogPostFrontmatter;
  content: string;
}
