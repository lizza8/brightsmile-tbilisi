import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ka' : 'en');
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleLanguage}
      className="flex items-center gap-2 bg-background text-foreground border-border hover:bg-accent hover:text-accent-foreground"
      aria-label="Switch language"
    >
      <Globe size={18} strokeWidth={1.5} />
      <span className="font-medium">{language === 'en' ? 'ქარ' : 'ENG'}</span>
    </Button>
  );
};

export default LanguageSwitcher;
