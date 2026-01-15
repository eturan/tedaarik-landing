import { motion } from "framer-motion";
import { BlogCard } from "./BlogCard";
import { getRelatedPosts, getAllPosts } from "@/lib/blog";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/animated-section";

interface RelatedPostsProps {
  currentSlug: string;
  category: string;
}

export const RelatedPosts = ({ currentSlug, category }: RelatedPostsProps) => {
  // Get related posts from same category first
  let relatedPosts = getRelatedPosts(currentSlug, category, 3);

  // If not enough posts in same category, fill with other posts
  if (relatedPosts.length < 3) {
    const allPosts = getAllPosts();
    const otherPosts = allPosts.filter(
      (post) =>
        post.slug !== currentSlug &&
        !relatedPosts.some((rp) => rp.slug === post.slug)
    );
    relatedPosts = [...relatedPosts, ...otherPosts].slice(0, 3);
  }

  if (relatedPosts.length === 0) return null;

  return (
    <section className="mt-16 pt-16 border-t border-border/50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
          İlgili Yazılar
        </h2>
        <p className="text-muted-foreground">
          Bu konuyla ilgili diğer içeriklerimizi keşfedin
        </p>
      </motion.div>

      <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {relatedPosts.map((post) => (
          <StaggerItem key={post.slug}>
            <BlogCard post={post} />
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
};

export default RelatedPosts;
