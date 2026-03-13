import { useLanguage } from '@/contexts/LanguageContext';

const logos = [
  { name: 'Coldfusion' },
  { name: 'Müjü House' },
  { name: 'DAGS Coffee' },
  { name: 'Lezzet Durağı' },
  { name: 'Anadolu Mutfağı' },
];

function LogoItem({ name }: { name: string }) {
  const slug = name.toLowerCase().replace(/\s+/g, '-').replace(/ü/g, 'u').replace(/ğ/g, 'g').replace(/ı/g, 'i');

  return (
    <div className="flex-shrink-0 flex items-center justify-center px-10 md:px-14">
      <img
        src={`/images/logos/${slug}.png`}
        alt={name}
        className="h-8 w-auto object-contain opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
        onError={(e) => {
          const img = e.currentTarget;
          img.style.display = 'none';
          (img.nextElementSibling as HTMLElement).style.display = 'block';
        }}
      />
      <span
        style={{ display: 'none' }}
        className="text-lg font-bold tracking-wide text-gray-300 whitespace-nowrap select-none"
      >
        {name}
      </span>
    </div>
  );
}

export function LogoBelt() {
  const { t } = useLanguage();
  const repeated = [...logos, ...logos];

  return (
    <section className="py-8 bg-gray-50/80 border-y border-gray-100 overflow-hidden">
      <p className="text-center text-xs font-medium text-gray-400 uppercase tracking-[0.2em] mb-6">
        {t.logoBelt.title}
      </p>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-scroll-left hover:[animation-play-state:paused]">
          {repeated.map((logo, i) => (
            <LogoItem key={`${logo.name}-${i}`} name={logo.name} />
          ))}
        </div>
      </div>
    </section>
  );
}
