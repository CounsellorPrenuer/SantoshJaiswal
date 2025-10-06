import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const floatingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current || !floatingRef.current) return;

    gsap.to(floatingRef.current.children, {
      y: -20,
      duration: 2,
      stagger: 0.2,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
    });

    const tl = gsap.timeline();
    tl.from('.hero-title', { opacity: 0, y: 30, duration: 0.8, ease: 'power3.out' })
      .from('.hero-subtitle', { opacity: 0, y: 30, duration: 0.8, ease: 'power3.out' }, '-=0.6')
      .from('.hero-description', { opacity: 0, y: 30, duration: 0.8, ease: 'power3.out' }, '-=0.6')
      .from('.hero-buttons', { opacity: 0, y: 30, duration: 0.8, ease: 'power3.out' }, '-=0.6');
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/5 via-background to-orange/5 pt-20"
    >
      <div
        ref={floatingRef}
        className="absolute inset-0 overflow-hidden pointer-events-none"
      >
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
            <Sparkles className="w-4 h-4" />
            <span>From Confusion to Clarity. From Goals to Growth.</span>
          </div>

          <h1 className="hero-title text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
            Future-proof your career with{' '}
            <span className="text-primary">expert guidance</span>
          </h1>

          <h2 className="hero-subtitle text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground/90">
            Redefining Career Trajectory with Confidence
          </h2>

          <p className="hero-description text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            For Students, Parents, Working Professionals, and Corporates in Education, IT, FMCG,
            and Services sectors. Gain mentorship, clarity, and actionable guidance to accelerate
            your career journey.
          </p>

          <div className="hero-buttons flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="bg-orange hover:bg-orange/90 text-orange-foreground text-lg px-8 py-6 hover-elevate active-elevate-2"
              data-testid="button-hero-book-call"
            >
              Book A Free Call
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('services')}
              className="text-lg px-8 py-6 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              data-testid="button-hero-discover"
            >
              Discover Your Path
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
