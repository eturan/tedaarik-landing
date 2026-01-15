import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Clock, Calendar } from "lucide-react";
import type { BlogPost } from "@/types/blog";
import { formatDate } from "@/lib/blog";

interface BlogCardProps {
  post: BlogPost;
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const BlogCard = ({ post }: BlogCardProps) => {
  const { slug, frontmatter } = post;
  const { title, description, category, readTime, date } = frontmatter;

  return (
    <Link to={`/blog/${slug}`}>
      <motion.article
        variants={cardVariants}
        whileHover={{
          scale: 1.02,
          y: -4,
          transition: { type: "spring", stiffness: 400, damping: 17 },
        }}
        className="glass-card-strong rounded-2xl overflow-hidden cursor-pointer group h-full flex flex-col"
      >
        {/* Gradient Header */}
        <div className="h-32 bg-gradient-to-br from-accent/20 via-accent/10 to-transparent relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          <div className="absolute bottom-4 left-4">
            <Badge
              variant="secondary"
              className="bg-accent/20 text-accent border-accent/30 backdrop-blur-sm"
            >
              {category}
            </Badge>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
          <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2 group-hover:text-accent transition-colors">
            {title}
          </h3>

          <p className="text-muted-foreground text-sm mb-4 line-clamp-3 flex-1">
            {description}
          </p>

          <div className="flex items-center gap-4 text-xs text-muted-foreground pt-4 border-t border-border/50">
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              <span>{readTime}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              <span>{formatDate(date)}</span>
            </div>
          </div>
        </div>
      </motion.article>
    </Link>
  );
};

export default BlogCard;
