import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '../contexts/LanguageContext';

interface Review {
  id: string;
  name: string;
  rating: number;
  text: string;
  initials: string;
}

const Reviews = () => {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const reviews: Review[] = t.reviews.items.map((item, index) => ({
    id: String(index + 1),
    name: item.name,
    rating: 5,
    text: item.text,
    initials: item.name.split(' ').map(n => n[0]).join(''),
  }));

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, reviews.length]);

  const handlePrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  return (
    <section id="reviews" className="py-24 lg:py-32 bg-neutral fade-in-section">
      <div className="container mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-headline-sm lg:text-headline text-foreground mb-4">{t.reviews.title}</h2>
          <p className="text-body text-foreground/80 max-w-2xl mx-auto">
            {t.reviews.subtitle}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {reviews.map((review) => (
                  <div key={review.id} className="w-full flex-shrink-0 px-4">
                    <Card className="border-border bg-card">
                      <CardContent className="p-12">
                        <div className="flex items-center gap-4 mb-8">
                          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                            <span className="text-xl font-medium text-primary">{review.initials}</span>
                          </div>
                          <div>
                            <h3 className="font-medium text-foreground">{review.name}</h3>
                            <div className="flex gap-1 mt-1">
                              {Array.from({ length: review.rating }).map((_, i) => (
                                <Star key={i} size={20} className="fill-warning text-warning" strokeWidth={0} />
                              ))}
                            </div>
                          </div>
                        </div>
                        <p className="text-body-sm text-foreground/80 font-serif italic">{review.text}</p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center items-center gap-4 mt-12">
              <Button
                variant="outline"
                size="icon"
                onClick={handlePrevious}
                className="bg-background text-foreground border-border hover:bg-accent hover:text-accent-foreground"
                aria-label="Previous review"
              >
                <ChevronLeft size={32} strokeWidth={1.5} />
              </Button>

              <div className="flex gap-2">
                {reviews.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setIsAutoPlaying(false);
                      setCurrentIndex(index);
                    }}
                    className={`w-3 h-3 rounded-full transition-all duration-180 ${
                      index === currentIndex ? 'bg-primary w-8' : 'bg-border'
                    }`}
                    aria-label={`Go to review ${index + 1}`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={handleNext}
                className="bg-background text-foreground border-border hover:bg-accent hover:text-accent-foreground"
                aria-label="Next review"
              >
                <ChevronRight size={32} strokeWidth={1.5} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
