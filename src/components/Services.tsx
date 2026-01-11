import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Sparkles, Smile, Zap, Stethoscope } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface Service {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  details: string;
}

const Services = () => {
  const { t } = useLanguage();
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const services: Service[] = [
    {
      id: 'whitening',
      icon: <Sparkles size={48} strokeWidth={1.5} className="text-primary" />,
      title: t.services.whitening.title,
      description: t.services.whitening.description,
      details: t.services.whitening.details,
    },
    {
      id: 'implants',
      icon: <Smile size={48} strokeWidth={1.5} className="text-primary" />,
      title: t.services.implants.title,
      description: t.services.implants.description,
      details: t.services.implants.details,
    },
    {
      id: 'braces',
      icon: <Zap size={48} strokeWidth={1.5} className="text-primary" />,
      title: t.services.braces.title,
      description: t.services.braces.description,
      details: t.services.braces.details,
    },
    {
      id: 'checkups',
      icon: <Stethoscope size={48} strokeWidth={1.5} className="text-primary" />,
      title: t.services.checkups.title,
      description: t.services.checkups.description,
      details: t.services.checkups.details,
    },
  ];

  return (
    <section id="services" className="py-24 lg:py-32 bg-background fade-in-section">
      <div className="container mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-headline-sm lg:text-headline text-foreground mb-4">{t.services.title}</h2>
          <p className="text-body text-foreground/80 max-w-2xl mx-auto">
            {t.services.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <Card
              key={service.id}
              className="cursor-pointer transition-all duration-180 hover:-translate-y-1 border-border bg-card"
              onClick={() => setSelectedService(service)}
            >
              <CardHeader>
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-foreground/70">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
        <DialogContent className="bg-card text-card-foreground">
          <DialogHeader>
            <DialogTitle className="text-foreground">{selectedService?.title}</DialogTitle>
            <DialogDescription className="text-foreground/70">{selectedService?.details}</DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Services;
