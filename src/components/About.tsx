import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Leaf, Award, Users, Globe } from 'lucide-react';

const About: React.FC = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Leaf,
      title: t('premiumQuality'),
      description: t('aboutText1'),
    },
    {
      icon: Award,
      title: t('expertSelection'),
      description: t('aboutText2'),
    },
    {
      icon: Users,
      title: t('familyHeritage'),
      description: t('aboutText3'),
    },
    {
      icon: Globe,
      title: t('globalReach'),
      description: t('aboutText4'),
    },
  ];

  return (
    <>
      <section id="about" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
                  {t('aboutTitle')}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t('aboutDescription')}
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <Card
                    key={index}
                    className="border-border/50 hover:border-primary/20 transition-colors"
                  >
                    <CardContent className="p-6">
                      <feature.icon className="h-10 w-10 text-primary mb-4" />
                      <h3 className="font-semibold text-foreground mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    25+
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {t('yearsExperience')}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    50+
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {t('countriesServed')}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    100K+
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {t('happyCustomers')}
                  </div>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-warm">
                <img
                  src="/assets/mainlogo.jpg"
                  alt="Tea Ceremony"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-gold/20 rounded-full blur-xl animate-float"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent-tea/20 rounded-full blur-xl animate-float delay-1000"></div>
            </div>
          </div>
        </div>
      </section>
 
    </>
  );
};

export default About;
