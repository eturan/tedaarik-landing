import { useEffect } from 'react';
import { Navigation } from '@/components/Navigation';
import Footer from '@/components/Footer';
import { trackExperiment } from '@/lib/experiment';

const IndexB = () => {
  useEffect(() => {
    trackExperiment();
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="flex items-center justify-center min-h-[60vh] px-4">
        <div className="text-center space-y-4 max-w-lg">
          <h1 className="text-3xl font-bold text-gray-900">
            Variant B
          </h1>
          <p className="text-gray-500">
            Replace this placeholder with the new landing page design.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default IndexB;
