import { Card, CardContent } from '@/components/ui/card';
import { Target, Rocket, Users, CheckCircle } from 'lucide-react';

export default function WhyChoose() {
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
    <div id="why-choose" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Why 2500+ Professionals Chose{' '}
            <span className="text-primary">Mentoria - Maargadarshan</span>
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
              className="hover-elevate active-elevate-2 transition-all duration-300 hover:scale-105"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              data-testid={`card-pillar-${index}`}
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <pillar.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {pillar.title}
                </h3>
                <p className="text-sm text-muted-foreground">{pillar.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
