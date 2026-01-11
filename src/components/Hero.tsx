import { Button } from '@/components/ui/button';
import { Award, Clock, Shield } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();
  
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="home" className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 bg-gradient-2">
      <div className="container mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h1 className="text-headline-sm lg:text-headline text-foreground">
              {t.hero.title}
            </h1>
            <p className="text-body text-foreground/80 max-w-xl">
              {t.hero.subtitle}
            </p>
            <div>
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-180 text-base"
              >
                {t.hero.cta}
              </Button>
            </div>

            <div className="flex flex-wrap gap-8 pt-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Award className="text-primary" size={32} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{t.hero.certifiedDentists}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Clock className="text-primary" size={32} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{t.hero.yearsExperience}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Shield className="text-primary" size={32} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{t.hero.premiumCare}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://c.animaapp.com/mka9d48hGklxuE/img/ai_1.png"
              alt="Happy patient smiling"
              className="w-full h-auto rounded-lg"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
