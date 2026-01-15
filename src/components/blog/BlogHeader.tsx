import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Clock, Calendar, User, ArrowLeft } from "lucide-react";
import type { BlogPostFrontmatter } from "@/types/blog";
import { formatDate } from "@/lib/blog";

interface BlogHeaderProps {
  frontmatter: BlogPostFrontmatter;
}

export const BlogHeader = ({ frontmatter }: BlogHeaderProps) => {
  const { title, description, category, readTime, date, author } = frontmatter;

  return (
    <header className="mb-12">
      {/* Breadcrumb */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-8"
      >
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Tüm Yazılar</span>
        </Link>
      </motion.div>

      {/* Category Badge */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="mb-4"
      >
        <Badge
          variant="secondary"
          className="bg-accent/10 text-accent border-accent/30"
        >
          {category}
        </Badge>
      </motion.div>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight"
      >
        {title}
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed"
      >
        {description}
      </motion.p>

      {/* Meta Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex flex-wrap items-center gap-4 md:gap-6 text-sm text-muted-foreground pb-8 border-b border-border/50"
      >
        <div className="flex items-center gap-2">
          <User className="w-4 h-4 text-accent" />
          <span>{author}</span>
        </div>
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 text-accent" />
          <span>{formatDate(date)}</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-accent" />
          <span>{readTime}</span>
        </div>
      </motion.div>
    </header>
  );
};

export default BlogHeader;
