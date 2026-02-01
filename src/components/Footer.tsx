import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Mail, Instagram, Facebook, Linkedin } from "lucide-react";

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const footerLinks = {
    product: {
      title: "Ürün",
      links: [
        { label: "Özellikler", href: "#" },
        { label: "Fiyatlandırma", href: "#" },
        { label: "Nasıl Çalışır?", href: "#" },
        { label: "Sıkça Sorulan Sorular", href: "#" },
      ],
    },
    company: {
      title: "Şirket",
      links: [
        { label: "Hakkımızda", href: "/hakkimizda", isInternal: true },
        { label: "Blog", href: "/blog", isInternal: true },
        { label: "Kariyer", href: "#" },
        { label: "İletişim", href: "#" },
      ],
    },
    legal: {
      title: "Yasal",
      links: [
        { label: "Gizlilik Politikası", href: "/gizlilik-politikasi", isInternal: true },
        { label: "Kullanım Şartları", href: "/kullanim-sartlari", isInternal: true },
        { label: "Çerez Politikası", href: "/cerez-politikasi", isInternal: true },
        { label: "KVKK", href: "/gizlilik-politikasi", isInternal: true },
      ],
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const socialVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
      },
    },
  };

  return (
    <motion.footer
      ref={ref}
      className="bg-white/50 backdrop-blur-lg border-t border-border py-16"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <motion.div className="space-y-4" variants={itemVariants}>
            <motion.h3
              className="font-bold text-lg text-foreground"
              whileHover={{ x: 2 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              Tedaarik
            </motion.h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Yiyecek ve içecek işletmeleri için yapay zekâ destekli tedarik ve maliyet zekâ katmanı.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 pt-2">
              <h4 className="font-semibold text-sm">İletişim</h4>
              <motion.a
                href="mailto:info@tedaarik.com"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Mail className="h-4 w-4" />
                info@tedaarik.com
              </motion.a>

              {/* Social Media Icons */}
              <motion.div
                className="flex gap-3 pt-1"
                variants={containerVariants}
              >
                {[
                  { icon: Instagram, href: "https://www.instagram.com/tedaarik", label: "Instagram" },
                  { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61572430141707", label: "Facebook" },
                  { icon: Linkedin, href: "https://www.linkedin.com/company/tedaarik", label: "LinkedIn" },
                ].map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-accent transition-colors"
                    aria-label={social.label}
                    variants={socialVariants}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <social.icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Links */}
          {Object.values(footerLinks).map((section, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
            >
              <motion.h3
                className="font-semibold mb-4"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                {section.title}
              </motion.h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <motion.li
                    key={linkIndex}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ delay: 0.4 + index * 0.1 + linkIndex * 0.05 }}
                  >
                    {link.isInternal ? (
                      <Link
                        to={link.href}
                        className="text-sm text-muted-foreground hover:text-accent transition-colors inline-block"
                      >
                        <motion.span
                          className="inline-block"
                          whileHover={{ x: 4 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                          {link.label}
                        </motion.span>
                      </Link>
                    ) : (
                      <motion.a
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-accent transition-colors"
                        whileHover={{ x: 4 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      >
                        {link.label}
                      </motion.a>
                    )}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="pt-8 border-t border-border text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <p className="text-sm text-muted-foreground/60">
            © 2025 Tedaarik. Tüm hakları saklıdır.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
