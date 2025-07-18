import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star } from 'lucide-react';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  const scrollToProducts = () => {
    document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <video
          src="/assets/backgroundvideo.mp4"
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/assets/hero-tea.jpg"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-2xl">
          {/* Premium Badge */}
          <div className="inline-flex items-center gap-2 bg-gold-light/20 backdrop-blur-sm border border-gold/30 rounded-full px-4 py-2 mb-6">
            <Star className="h-4 w-4 text-gold" />
            <span className="text-primary-foreground font-medium text-sm">
              {t('starTitle')}
            </span>
          </div>

          {/* Main Content */}
          <h1 className="text-5xl md:text-7xl font-display font-bold text-primary-foreground mb-6 leading-tight">
            {t('heroTitle')}
          </h1>

          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-4 font-light">
            {t('heroSubtitle')}
          </p>

          <p className="text-lg text-primary-foreground/80 mb-8 leading-relaxed">
            {t('heroDescription')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              onClick={scrollToProducts}
              size="lg"
              className="bg-gold hover:bg-gold/90 text-primary font-semibold px-8 py-4 rounded-full shadow-gold transition-all duration-300 hover:shadow-lg"
            >
              {t('shopNow')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Floating Animation Elements */}
      <div className="absolute top-20 right-20 w-20 h-20 bg-gold/20 rounded-full animate-float hidden lg:block"></div>
      <div className="absolute bottom-40 left-10 w-16 h-16 bg-accent-tea/30 rounded-full animate-float delay-1000 hidden lg:block"></div>
    </section>
  );
};

export default Hero;
