import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Rocket, Users, CheckCircle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function WhyChoose() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.from(sectionRef.current.querySelectorAll('[data-pillar-card]'), {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 70%',
        toggleActions: 'play none none none',
      },
      y: 60,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out',
    });
  }, []);
  const pillars = [
    {
      icon: Target,
      title: 'Expert Guidance',
      description: '20+ years of experience in career counseling and mentorship',
    },
    {
      icon: Rocket,
      title: 'Future-ready Skills',
      description: 'Specialized training in Education, IT, FMCG, and Services sectors',
    },
    {
      icon: Users,
      title: 'Tailored Career Mentorship',
      description: 'Personalized guidance for students, professionals, and corporates',
    },
    {
      icon: CheckCircle,
      title: 'Trusted by 2500+ Professionals',
      description: '92% success rate in achieving career clarity and growth',
    },
  ];

  return (
    <div id="why-choose" className="py-24 relative overflow-hidden" ref={sectionRef}>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-orange/5"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Why 2500+ Professionals Chose{' '}
            <span className="text-gradient-shine">Mentoria - Maargadarshan</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We provide personalized mentorship and career guidance for students, working
            professionals, and corporates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => (
            <Card
              key={index}
              className="card-hover-lift border-2 border-transparent hover:border-primary/20 shadow-lg"
              data-pillar-card
              data-testid={`card-pillar-${index}`}
            >
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-primary to-orange rounded-2xl flex items-center justify-center shadow-xl rotate-3 hover:rotate-0 transition-transform duration-500">
                  <pillar.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {pillar.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{pillar.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
