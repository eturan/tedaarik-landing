import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logoIcon from '@/assets/tedaarik-icon.png';

export function Navigation() {
  const { t, language, setLanguage } = useLanguage();
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    if (isHome) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = `/#${id}`;
    }
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { label: t.nav.solutions, href: '#pain-points', id: 'pain-points' },
    { label: t.nav.calculator, href: '#calculator', id: 'calculator' },
    { label: t.nav.features, href: '#features', id: 'features' },
    { label: t.nav.pricing, href: '#pricing', id: 'pricing' },
    { label: t.nav.faq, href: '#faq', id: 'faq' },
  ];

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/">
            <motion.div
              className="flex items-center gap-2"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <img src={logoIcon} alt="Tedaarik" className="h-8 w-8" />
              <span className="font-semibold text-xl tracking-tight text-[#3B3B3B]">Tedaarik</span>
            </motion.div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.id)}
                className="text-[#3B3B3B]/80 hover:text-[#158F86] font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
            <Link
              to="/blog"
              className="text-[#3B3B3B]/80 hover:text-[#158F86] font-medium transition-colors"
            >
              {t.nav.blog}
            </Link>

            <div className="flex items-center gap-1 bg-gray-100 p-1 rounded-lg">
              <button
                onClick={() => setLanguage('en')}
                className={`px-2 py-1 text-sm font-semibold rounded-md transition-all ${language === 'en' ? 'bg-white shadow-sm text-[#158F86]' : 'text-gray-500 hover:text-gray-700'}`}
              >
                🇬🇧 EN
              </button>
              <button
                onClick={() => setLanguage('tr')}
                className={`px-2 py-1 text-sm font-semibold rounded-md transition-all ${language === 'tr' ? 'bg-white shadow-sm text-[#158F86]' : 'text-gray-500 hover:text-gray-700'}`}
              >
                🇹🇷 TR
              </button>
            </div>

            <motion.a
              href={`https://app.tedaarik.com/signup?lang=${language}`}
              className="bg-[#158F86] text-white px-6 py-2.5 rounded-full hover:bg-[#117A71] transition-colors font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t.nav.startTrial}
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-[#3B3B3B]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.id)}
                  className="block text-[#3B3B3B]/80 hover:text-[#158F86] font-medium py-2"
                >
                  {link.label}
                </a>
              ))}
              <Link
                to="/blog"
                className="block text-[#3B3B3B]/80 hover:text-[#158F86] font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t.nav.blog}
              </Link>

              <div className="flex items-center gap-2 py-2">
                <div className="flex items-center gap-1 bg-gray-100 p-1 rounded-lg">
                  <button
                    onClick={() => setLanguage('en')}
                    className={`px-2 py-1 text-sm font-semibold rounded-md transition-all ${language === 'en' ? 'bg-white shadow-sm text-[#158F86]' : 'text-gray-500 hover:text-gray-700'}`}
                  >
                    EN
                  </button>
                  <button
                    onClick={() => setLanguage('tr')}
                    className={`px-2 py-1 text-sm font-semibold rounded-md transition-all ${language === 'tr' ? 'bg-white shadow-sm text-[#158F86]' : 'text-gray-500 hover:text-gray-700'}`}
                  >
                    TR
                  </button>
                </div>
              </div>

              <a
                href={`https://app.tedaarik.com/signup?lang=${language}`}
                className="block bg-[#158F86] text-white px-5 py-2.5 rounded-full text-center font-semibold"
              >
                {t.nav.startTrial}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navigation;
