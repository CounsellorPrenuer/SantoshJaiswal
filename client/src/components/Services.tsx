import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { GraduationCap, Briefcase, Building2, ArrowRight } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { sanityClient } from '@/lib/sanity';

export default function Services() {
  const fallbackServices = [
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

  const { data } = useQuery({
    queryKey: ['sanity-services'],
    queryFn: async () =>
      sanityClient.fetch(`*[_type == "services"] | order(order asc){title,subtitle,features}`),
  });
  const services = data?.length ? data.map((s: any) => ({ ...s, icon: GraduationCap, color: 'primary' })) : fallbackServices;

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="services" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 gradient-mesh opacity-30"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Career Transformation <span className="text-gradient-primary">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Tailored guidance and mentorship for every stage of your career journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card
              key={index}
              className="card-hover-lift border-2 border-transparent hover:border-primary/30 bg-gradient-card shadow-xl overflow-hidden group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              data-testid={`card-service-${index}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="text-center relative z-10">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-primary to-orange rounded-2xl flex items-center justify-center shadow-xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <service.icon className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-2xl text-foreground font-bold">{service.title}</CardTitle>
                <p className="text-sm text-muted-foreground mt-2 font-medium">{service.subtitle}</p>
              </CardHeader>
              <CardContent className="relative z-10">
                <ul className="space-y-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <ArrowRight className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-sm text-foreground font-medium">{feature}</span>
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
            className="bg-gradient-to-r from-orange to-orange/80 hover:from-orange/90 hover:to-orange/70 text-white shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 ripple-effect"
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
