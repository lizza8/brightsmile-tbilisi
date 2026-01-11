import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const BeforeAfter = () => {
  const { t } = useLanguage();
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX: number) => {
    const container = document.getElementById('comparison-container');
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging && e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  return (
    <section className="py-24 lg:py-32 bg-neutral fade-in-section">
      <div className="container mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-headline-sm lg:text-headline text-foreground mb-4">{t.beforeAfter.title}</h2>
          <p className="text-body text-foreground/80 max-w-2xl mx-auto">
            {t.beforeAfter.subtitle}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div
            id="comparison-container"
            className="relative w-full aspect-[16/9] overflow-hidden rounded-lg cursor-ew-resize select-none"
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchStart={() => setIsDragging(true)}
            onTouchEnd={() => setIsDragging(false)}
            onTouchMove={handleTouchMove}
          >
            <img
              src="https://c.animaapp.com/mka9d48hGklxuE/img/ai_2.png"
              alt="Before and after dental result"
              className="absolute inset-0 w-full h-full object-cover"
              draggable={false}
            />

            <div
              className="absolute inset-0 w-full h-full overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <img
                src="https://c.animaapp.com/mka9d48hGklxuE/img/ai_2.png"
                alt="Before and after dental result"
                className="absolute inset-0 w-full h-full object-cover brightness-110"
                draggable={false}
              />
            </div>

            <motion.div
              className="absolute top-0 bottom-0 w-1 bg-background"
              style={{ left: `${sliderPosition}%` }}
              animate={{ scale: isDragging ? 1.1 : 1 }}
              transition={{ duration: 0.18 }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-background rounded-full flex items-center justify-center">
                <div className="flex gap-1">
                  <div className="w-1 h-4 bg-primary rounded-full"></div>
                  <div className="w-1 h-4 bg-primary rounded-full"></div>
                </div>
              </div>
            </motion.div>

            <div className="absolute bottom-8 left-8 bg-background/90 backdrop-blur-sm px-4 py-2 rounded-lg">
              <p className="text-sm font-medium text-foreground">{t.beforeAfter.before}</p>
            </div>
            <div className="absolute bottom-8 right-8 bg-background/90 backdrop-blur-sm px-4 py-2 rounded-lg">
              <p className="text-sm font-medium text-foreground">{t.beforeAfter.after}</p>
            </div>
          </div>

          <p className="text-center mt-8 text-foreground/70">
            {t.beforeAfter.caption}
          </p>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
