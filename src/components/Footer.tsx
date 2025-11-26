import { Mail, Instagram, Facebook, Linkedin } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    product: {
      title: "Ürün",
      links: ["Özellikler", "Fiyatlandırma", "Nasıl Çalışır?", "Sıkça Sorulan Sorular"],
    },
    company: {
      title: "Şirket",
      links: ["Hakkımızda", "Blog", "Kariyer", "İletişim"],
    },
    legal: {
      title: "Yasal",
      links: ["Gizlilik Politikası", "Kullanım Şartları", "Çerez Politikası", "KVKK"],
    },
  };

  return (
    <footer className="bg-white/50 backdrop-blur-lg border-t border-border py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg text-foreground">Tedaarik</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Yiyecek ve içecek işletmeleri için yapay zekâ destekli tedarik ve maliyet zekâ katmanı.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 pt-2">
              <h4 className="font-semibold text-sm">İletişim</h4>
              <a 
                href="mailto:info@tedaarik.com.tr"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="h-4 w-4" />
                info@tedaarik.com.tr
              </a>
              
              {/* Social Media Icons */}
              <div className="flex gap-3 pt-1">
                <a
                  href="https://www.instagram.com/tedaarik"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61572430141707"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/company/tedaarik"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.values(footerLinks).map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground/60">
            © 2025 Tedaarik. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
