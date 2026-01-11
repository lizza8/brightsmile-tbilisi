import { Facebook, Instagram, Linkedin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
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
    <footer className="bg-gray-900 text-background py-16">
      <div className="container mx-auto px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-xl font-medium mb-6">BrightSmile Tbilisi</h3>
            <p className="text-background/70 mb-6">
              {t.footer.description}
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors duration-180"
                aria-label="Visit our Facebook page"
              >
                <Facebook size={24} strokeWidth={1.5} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors duration-180"
                aria-label="Visit our Instagram page"
              >
                <Instagram size={24} strokeWidth={1.5} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors duration-180"
                aria-label="Visit our LinkedIn page"
              >
                <Linkedin size={24} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-6">{t.footer.quickLinks}</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-background/70 hover:text-background transition-colors duration-180 cursor-pointer"
                >
                  {t.nav.home}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-background/70 hover:text-background transition-colors duration-180 cursor-pointer"
                >
                  {t.nav.services}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('team')}
                  className="text-background/70 hover:text-background transition-colors duration-180 cursor-pointer"
                >
                  {t.nav.team}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('reviews')}
                  className="text-background/70 hover:text-background transition-colors duration-180 cursor-pointer"
                >
                  {t.nav.reviews}
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-6">{t.footer.services}</h4>
            <ul className="space-y-3 text-background/70">
              <li>{t.services.whitening.title}</li>
              <li>{t.services.implants.title}</li>
              <li>{t.services.braces.title}</li>
              <li>{t.services.checkups.title}</li>
              <li>{t.appointment.services[4]}</li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-6">{t.footer.contactInfo}</h4>
            <ul className="space-y-3 text-background/70">
              <li>{t.appointment.contact.addressLine1}</li>
              <li>{t.appointment.contact.addressLine2}</li>
              <li className="pt-3">+995 555 123 456</li>
              <li>info@brightsmile.ge</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/70 text-sm">
              © {currentYear} {t.footer.copyright}
            </p>
            <div className="flex gap-8 text-sm">
              <a href="#" className="text-background/70 hover:text-background transition-colors duration-180">
                {t.footer.privacy}
              </a>
              <a href="#" className="text-background/70 hover:text-background transition-colors duration-180">
                {t.footer.terms}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
