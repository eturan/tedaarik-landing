import { type ReactNode } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ScrollProgress } from "@/components/ui/scroll-progress";

interface LegalPageProps {
  title: string;
  lastUpdated: string;
  children: ReactNode;
}

const LegalPage = ({ title, lastUpdated, children }: LegalPageProps) => {
  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <Header />

      <main className="pt-24 lg:pt-32 pb-16">
        <article className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold text-foreground mb-8">
              {title}
            </h1>
            <p className="text-muted-foreground mb-8">
              Son güncelleme: {lastUpdated}
            </p>

            <div className="prose prose-lg max-w-none text-foreground/90 space-y-8">
              {children}
            </div>
          </motion.div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default LegalPage;
