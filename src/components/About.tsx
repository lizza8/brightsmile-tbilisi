import { useLanguage } from '../contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();
  return (
    <section className="py-24 lg:py-32 bg-background fade-in-section">
      <div className="container mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <img
              src="https://c.animaapp.com/mka9d48hGklxuE/img/ai_4.png"
              alt="Dental tools on counter"
              className="w-full h-auto rounded-lg"
              loading="lazy"
            />
          </div>

          <div className="space-y-8">
            <h2 className="text-headline-sm lg:text-headline text-foreground">{t.about.title}</h2>
            <div className="space-y-6 text-body-sm text-foreground/80">
              <p>
                {t.about.paragraph1}
              </p>
              <p>
                {t.about.paragraph2}
              </p>
              <p className="font-medium text-foreground">
                {t.about.paragraph3}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-8">
              <div>
                <p className="text-4xl font-medium text-primary mb-2">10+</p>
                <p className="text-foreground/70">{t.about.yearsOfExcellence}</p>
              </div>
              <div>
                <p className="text-4xl font-medium text-primary mb-2">5000+</p>
                <p className="text-foreground/70">{t.about.happyPatients}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
