import { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { BlogHeader } from "@/components/blog/BlogHeader";
import { MarkdownRenderer } from "@/components/blog/MarkdownRenderer";
import { RelatedPosts } from "@/components/blog/RelatedPosts";
import { EarlyAccessForm } from "@/components/EarlyAccessForm";
import { getPostBySlug } from "@/lib/blog";
import { trackBlogPostViewed } from "@/lib/posthog";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;
  const [isEarlyAccessOpen, setIsEarlyAccessOpen] = useState(false);

  // Track blog post view and set document title
  useEffect(() => {
    if (post && slug) {
      trackBlogPostViewed({
        slug,
        title: post.frontmatter.title,
        category: post.frontmatter.category,
      });
      document.title = `${post.frontmatter.title} | Tedaarik Blog`;
    }
  }, [slug, post]);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const { frontmatter, content } = post;

  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <Header />

      <main className="pt-24 lg:pt-32 pb-16">
        <article className="container mx-auto px-4 max-w-4xl">
          <BlogHeader frontmatter={frontmatter} />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <MarkdownRenderer content={content} />
          </motion.div>

          {/* CTA Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-12 glass-card-strong rounded-2xl p-8 text-center"
          >
            <h3 className="text-xl font-bold text-foreground mb-3">
              TEDAARIK ile Maliyet Kontrolü
            </h3>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
              Faturalarınızı yükleyin, tariflerinizi tanımlayın, maliyetleriniz
              otomatik hesaplansın.
            </p>
            <button
              onClick={() => setIsEarlyAccessOpen(true)}
              className="glow-button bg-accent px-6 py-2.5 rounded-full font-semibold text-white text-sm"
            >
              Erken Erişim Talep Et
            </button>
          </motion.div>

          <RelatedPosts
            currentSlug={slug!}
            category={frontmatter.category}
          />
        </article>
      </main>

      <Footer />

      <EarlyAccessForm
        open={isEarlyAccessOpen}
        onOpenChange={setIsEarlyAccessOpen}
        source="blog_post"
      />
    </div>
  );
};

export default BlogPost;
