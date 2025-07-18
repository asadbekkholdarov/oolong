import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const languages = [
    { code: 'en', name: 'English', flag: '/assets/united-states.png' },
    { code: 'ru', name: 'Русский', flag: '/assets/russia.png' },
    { code: 'uz', name: "O'zbek", flag: '/assets/uzbekistan.png' },
  ];

  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-1">
        {languages.map((lang) => (
          <Button
            key={lang.code}
            variant={language === lang.code ? 'default' : 'ghost'}
            size="sm"
            onClick={() => setLanguage(lang.code as any)}
            className="text-xs px-2 py-1 h-8"
          >
            <img src={lang.flag} alt={lang.name} className="w-4 h-4" />
          </Button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSelector;
