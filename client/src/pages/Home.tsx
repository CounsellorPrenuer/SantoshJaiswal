import { useEffect } from 'react';
import AOS from 'aos';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import WhyChoose from '@/components/WhyChoose';
import Services from '@/components/Services';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import Packages from '@/components/Packages';
import Founder from '@/components/Founder';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import BlogSection from '@/components/BlogSection';

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Stats />
      <WhyChoose />
      <Services />
      <HowItWorks />
      <Testimonials />
      <BlogSection />
      <Packages />
      <Founder />
      <Contact />
      <Footer />
    </div>
  );
}
