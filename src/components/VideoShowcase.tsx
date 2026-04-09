import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { LazyYouTube } from '@/components/LazyYouTube';
import { trackVideoPlayed, trackCtaClicked } from '@/lib/posthog';

const VIDEOS = [
  { id: 'd-Elwu_IUbg', key: 'v1' as const },
  { id: 'ZpI--PCy-rQ', key: 'v2' as const },
  { id: 'wfJ5q-NdAyI', key: 'v3' as const },
];

export function VideoShowcase() {
  const { t } = useLanguage();

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-[#3B3B3B] mb-4">
            {t.videoShowcase.title}
          </h2>
          <p className="text-xl text-[#3B3B3B]/80 max-w-3xl mx-auto">
            {t.videoShowcase.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {VIDEOS.map((video, index) => {
            const content = t.videoShowcase[video.key];
            return (
              <motion.div
                key={video.id}
                className="bg-white rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-200 overflow-hidden cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <LazyYouTube
                  videoId={video.id}
                  title={content.title}
                  className="rounded-none"
                  onPlay={() =>
                    trackVideoPlayed({
                      videoId: video.id,
                      title: content.title,
                      location: 'video-showcase',
                      variant: 'a',
                    })
                  }
                />
                <div className="p-4">
                  <h3 className="font-semibold text-[#3B3B3B] mb-1">
                    {content.title}
                  </h3>
                  <p className="text-sm text-[#3B3B3B]/70">
                    {content.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.button
            onClick={() => {
              trackCtaClicked('video-showcase-cta', 'video-showcase');
              document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 bg-[#158F86] text-white px-6 py-3 rounded-xl hover:bg-[#127a72] transition-colors shadow-lg hover:shadow-[#158F86]/25 font-semibold cursor-pointer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {t.videoShowcase.cta}
            <ArrowRight className="h-5 w-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
