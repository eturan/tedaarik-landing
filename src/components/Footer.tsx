import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Mail, Instagram, Facebook, Linkedin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import logoIcon from "@/assets/tedaarik-icon.png";

const Footer = () => {
  const { t } = useLanguage();

  const footerLinks = {
    product: {
      title: t.footer.product,
      links: [
        { label: t.footer.features, href: "/#features" },
        { label: t.footer.pricing, href: "/#pricing" },
        { label: t.footer.howItWorks, href: "/#how-it-works" },
        { label: t.footer.calculator, href: "/#calculator" },
      ],
    },
    company: {
      title: t.footer.company,
      links: [
        { label: t.footer.aboutUs, href: "/hakkimizda", isInternal: true },
        { label: t.footer.blog, href: "/blog", isInternal: true },
        { label: t.footer.contact, href: "mailto:info@tedaarik.com" },
      ],
    },
    legal: {
      title: t.footer.legal,
      links: [
        { label: t.footer.termsOfService, href: "/kullanim-sartlari", isInternal: true },
        { label: t.footer.distanceSales, href: "/mesafeli-satis-sozlesmesi", isInternal: true },
        { label: t.footer.deliveryReturns, href: "/teslimat-ve-iade", isInternal: true },
        { label: t.footer.privacyPolicy, href: "/gizlilik-politikasi", isInternal: true },
        { label: t.footer.preInformation, href: "/on-bilgilendirme", isInternal: true },
        { label: t.footer.acceptApproval, href: "/kabul-ve-onay", isInternal: true },
        { label: t.footer.cookiePolicy, href: "/cerez-politikasi", isInternal: true },
      ],
    },
  };

  return (
    <footer className="bg-white border-t border-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <img src={logoIcon} alt="Tedaarik" className="h-8 w-8" />
              <span className="font-semibold text-xl tracking-tight text-[#3B3B3B]">Tedaarik</span>
            </Link>
            <p className="text-sm text-[#3B3B3B]/60 leading-relaxed">
              {t.footer.description}
            </p>

            <div className="space-y-3 pt-2">
              <h4 className="font-semibold text-sm text-[#3B3B3B]">{t.footer.contact}</h4>
              <a
                href="mailto:info@tedaarik.com"
                className="flex items-center gap-2 text-sm text-[#3B3B3B]/60 hover:text-[#158F86] transition-colors"
              >
                <Mail className="h-4 w-4" />
                info@tedaarik.com
              </a>

              <div className="flex gap-3 pt-1">
                {[
                  { icon: Instagram, href: "https://www.instagram.com/tedaarik", label: "Instagram" },
                  { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61572430141707", label: "Facebook" },
                  { icon: Linkedin, href: "https://www.linkedin.com/company/tedaarik", label: "LinkedIn" },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#3B3B3B]/40 hover:text-[#158F86] transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.values(footerLinks).map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-[#3B3B3B] mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    {link.isInternal ? (
                      <Link
                        to={link.href}
                        className="text-sm text-[#3B3B3B]/60 hover:text-[#158F86] transition-colors"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="text-sm text-[#3B3B3B]/60 hover:text-[#158F86] transition-colors"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-100 text-center">
          <p className="text-sm text-[#3B3B3B]/40">
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
