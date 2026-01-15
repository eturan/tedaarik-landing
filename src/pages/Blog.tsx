import { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { BlogCard } from "@/components/blog/BlogCard";
import { getAllPosts } from "@/lib/blog";
import { EarlyAccessForm } from "@/components/EarlyAccessForm";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/animated-section";

const Blog = () => {
  const posts = getAllPosts();
  const [isEarlyAccessOpen, setIsEarlyAccessOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <Header />

      <main className="pt-24 lg:pt-32 pb-16">
        {/* Hero Section */}
        <section className="container mx-auto px-4 mb-16">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block text-accent font-medium mb-4"
            >
              TEDAARIK Blog
            </motion.span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Restoran Yönetimi{" "}
              <span className="text-accent">Rehberleri</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Maliyet kontrolü, tedarik yönetimi ve restoran operasyonları
              hakkında pratik bilgiler ve stratejiler.
            </p>
          </AnimatedSection>
        </section>

        {/* Blog Grid */}
        <section className="container mx-auto px-4">
          <StaggerContainer
            staggerDelay={0.1}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {posts.map((post) => (
              <StaggerItem key={post.slug}>
                <BlogCard post={post} />
              </StaggerItem>
            ))}
          </StaggerContainer>

          {posts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground">
                Henüz blog yazısı bulunmuyor.
              </p>
            </div>
          )}
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 mt-20">
          <AnimatedSection>
            <div className="glass-card-strong rounded-3xl p-8 md:p-12 text-center max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Maliyetlerinizi Kontrol Altına Alın
              </h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                TEDAARIK ile restoran maliyetlerinizi otomatik takip edin,
                karlılığınızı artırın.
              </p>
              <button
                onClick={() => setIsEarlyAccessOpen(true)}
                className="glow-button bg-accent px-8 py-3 rounded-full font-semibold text-white"
              >
                Erken Erişim Talep Et
              </button>
            </div>
          </AnimatedSection>
        </section>
      </main>

      <Footer />

      <EarlyAccessForm
        open={isEarlyAccessOpen}
        onOpenChange={setIsEarlyAccessOpen}
      />
    </div>
  );
};

export default Blog;
