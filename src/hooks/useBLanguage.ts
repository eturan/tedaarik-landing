import { useLanguage } from '@/contexts/LanguageContext';
import { translationsB } from '@/i18n';

export function useBLanguage() {
  const { language, setLanguage } = useLanguage();
  return {
    language,
    setLanguage,
    t: translationsB[language],
  };
}
