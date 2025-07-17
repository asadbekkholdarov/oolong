import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Leaf, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    document.querySelector(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'Youtube' },
  ];

  const quickLinks = [
    { label: t('home'), href: '#home' },
    { label: t('products'), href: '#products' },
    { label: t('about'), href: '#about' },
    { label: t('contact'), href: '#contact' },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gold rounded-lg flex items-center justify-center">
                  <Leaf className="h-7 w-7 text-primary" />
                </div>
                <span className="text-2xl font-display font-bold">Oolong Tea</span>
              </div>
              
              <p className="text-primary-foreground/80 mb-6 leading-relaxed max-w-md">
                {t('footerDescription')}
              </p>

              {/* Contact Info */}
              <div className="space-y-2 text-primary-foreground/80">
                <p>📧 info@oolongtea.com</p>
                <p>📱 +998 (90) 123-45-67</p>
                <p>📍 Tashkent, Uzbekistan</p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">{t('quickLinks')}</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200 text-left"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-lg font-semibold mb-6">{t('followUs')}</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/20 transition-all duration-200"
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>

              {/* Quality Badges */}
              <div className="mt-8 space-y-2">
                <div className="flex items-center gap-2 text-sm text-primary-foreground/80">
                  <span className="w-2 h-2 bg-gold rounded-full"></span>
                  Premium Quality Certified
                </div>
                <div className="flex items-center gap-2 text-sm text-primary-foreground/80">
                  <span className="w-2 h-2 bg-gold rounded-full"></span>
                  Organic Tea Approved
                </div>
                <div className="flex items-center gap-2 text-sm text-primary-foreground/80">
                  <span className="w-2 h-2 bg-gold rounded-full"></span>
                  Worldwide Shipping
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-primary-foreground/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © 2024 Oolong Tea Company. All rights reserved.
            </p>
            
            <div className="flex gap-6 text-sm">
              <button className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                Privacy Policy
              </button>
              <button className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                Terms of Service
              </button>
              <button className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                Shipping Info
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;