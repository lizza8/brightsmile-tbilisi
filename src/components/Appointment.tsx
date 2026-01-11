import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
}

const Appointment = () => {
  const { t } = useLanguage();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log('Form submitted:', { ...data, service: selectedService });
    setIsSubmitted(true);
    reset();
    setSelectedService('');
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const services = t.appointment.services;

  return (
    <section id="contact" className="py-24 lg:py-32 bg-neutral fade-in-section">
      <div className="container mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-headline-sm lg:text-headline text-foreground mb-4">{t.appointment.title}</h2>
          <p className="text-body text-foreground/80 max-w-2xl mx-auto">
            {t.appointment.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          <Card className="border-border bg-card">
            <CardContent className="p-12">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground">
                    {t.appointment.form.name} {t.appointment.form.required}
                  </Label>
                  <Input
                    id="name"
                    {...register('name', { required: t.appointment.form.errors.nameRequired })}
                    className="bg-background text-foreground border-border"
                    placeholder="John Doe"
                  />
                  {errors.name && <p className="text-sm text-destructive">{errors.name.message}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground">
                    {t.appointment.form.email} {t.appointment.form.required}
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    {...register('email', {
                      required: t.appointment.form.errors.emailRequired,
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: t.appointment.form.errors.emailInvalid,
                      },
                    })}
                    className="bg-background text-foreground border-border"
                    placeholder="john@example.com"
                  />
                  {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-foreground">
                    {t.appointment.form.phone} {t.appointment.form.required}
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    {...register('phone', { required: t.appointment.form.errors.phoneRequired })}
                    className="bg-background text-foreground border-border"
                    placeholder="+995 555 123 456"
                  />
                  {errors.phone && <p className="text-sm text-destructive">{errors.phone.message}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service" className="text-foreground">
                    {t.appointment.form.service} {t.appointment.form.required}
                  </Label>
                  <Select value={selectedService} onValueChange={setSelectedService}>
                    <SelectTrigger className="bg-background text-foreground border-border">
                      <SelectValue placeholder={t.appointment.form.selectService} />
                    </SelectTrigger>
                    <SelectContent className="bg-popover text-popover-foreground">
                      {services.map((service) => (
                        <SelectItem key={service} value={service}>
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {!selectedService && errors.service && (
                    <p className="text-sm text-destructive">{t.appointment.form.errors.serviceRequired}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="date" className="text-foreground">
                    {t.appointment.form.date} {t.appointment.form.required}
                  </Label>
                  <Input
                    id="date"
                    type="date"
                    {...register('date', { required: t.appointment.form.errors.dateRequired })}
                    className="bg-background text-foreground border-border"
                    min={new Date().toISOString().split('T')[0]}
                  />
                  {errors.date && <p className="text-sm text-destructive">{errors.date.message}</p>}
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-180"
                  disabled={isSubmitted}
                >
                  {t.appointment.form.submit}
                </Button>
              </form>

              <AnimatePresence>
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="mt-8 p-6 bg-success/10 rounded-lg flex items-center gap-4"
                  >
                    <CheckCircle2 className="text-success" size={32} strokeWidth={1.5} />
                    <div>
                      <p className="font-medium text-foreground">{t.appointment.success.title}</p>
                      <p className="text-sm text-foreground/70">{t.appointment.success.message}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-medium text-foreground mb-8">{t.appointment.contact.title}</h3>
              <div className="space-y-6 text-foreground/80">
                <div>
                  <p className="font-medium text-foreground mb-2">{t.appointment.contact.address}</p>
                  <p>{t.appointment.contact.addressLine1}</p>
                  <p>{t.appointment.contact.addressLine2}</p>
                </div>
                <div>
                  <p className="font-medium text-foreground mb-2">{t.appointment.contact.phone}</p>
                  <p>+995 555 123 456</p>
                </div>
                <div>
                  <p className="font-medium text-foreground mb-2">{t.appointment.contact.email}</p>
                  <p>info@brightsmile.ge</p>
                </div>
                <div>
                  <p className="font-medium text-foreground mb-2">{t.appointment.contact.hours}</p>
                  <p>{t.appointment.contact.hoursWeekday}</p>
                  <p>{t.appointment.contact.hoursSaturday}</p>
                  <p>{t.appointment.contact.hoursSunday}</p>
                </div>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2977.2396897834895!2d44.79379431542658!3d41.69411997923645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440cd7e64f626b%3A0x4f907964122d4ac2!2sRustaveli%20Avenue%2C%20Tbilisi%2C%20Georgia!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus&key=YOUR_API_KEY"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="BrightSmile Tbilisi Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
