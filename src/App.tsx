import { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import BeforeAfter from './components/BeforeAfter';
import Team from './components/Team';
import Reviews from './components/Reviews';
import About from './components/About';
import Appointment from './components/Appointment';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    const sections = document.querySelectorAll('.fade-in-section');
    
    sections.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    });
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <Services />
          <BeforeAfter />
          <Team />
          <Reviews />
          <About />
          <Appointment />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
