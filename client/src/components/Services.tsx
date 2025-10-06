import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { GraduationCap, Briefcase, Building2, ArrowRight } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: GraduationCap,
      title: 'For Students',
      subtitle: 'Strategic academic & career foundation',
      features: [
        'Career Counselling & Admission Guidance',
        'Psychometric Assessment',
        'Strategic Academic Planning',
        '1:1 Mentorship Sessions',
      ],
      color: 'primary',
    },
    {
      icon: Briefcase,
      title: 'For Working Professionals',
      subtitle: 'Career growth and upskilling',
      features: [
        'Career & Skills Assessment',
        'Resume & LinkedIn Guidance',
        'Professional Mentorship',
        'Career Transition Support',
      ],
      color: 'primary',
    },
    {
      icon: Building2,
      title: 'For Corporates',
      subtitle: 'Employee wellbeing and career workshops',
      features: [
        'Corporate Workshops & Seminars',
        'Employee Mentorship Programs',
        'Career Pathing & Guidance',
        'Team Development',
      ],
      color: 'primary',
    },
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="services" className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Career Transformation <span className="text-primary">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Tailored guidance and mentorship for every stage of your career journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card
              key={index}
              className="hover-elevate active-elevate-2 transition-all duration-300 hover:scale-105"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              data-testid={`card-service-${index}`}
            >
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl text-foreground">{service.title}</CardTitle>
                <p className="text-sm text-muted-foreground mt-2">{service.subtitle}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <ArrowRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center" data-aos="fade-up">
          <Button
            size="lg"
            onClick={scrollToContact}
            className="bg-orange hover:bg-orange/90 text-orange-foreground hover-elevate active-elevate-2 ripple-effect"
            data-testid="button-services-cta"
          >
            Free Career Clarity Call
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
