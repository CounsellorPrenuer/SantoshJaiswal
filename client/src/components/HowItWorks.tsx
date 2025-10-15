import { Card, CardContent } from '@/components/ui/card';
import { Search, Map, Target, HeartHandshake } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: Search,
      step: 1,
      title: 'Audit Your Goals',
      description: 'Comprehensive assessment of your career or academic goals and current situation',
    },
    {
      icon: Map,
      step: 2,
      title: 'Map Skills & Opportunities',
      description: 'Identify your strengths, interests, and potential growth opportunities',
    },
    {
      icon: Target,
      step: 3,
      title: 'Personalized Guidance',
      description: 'Receive customized strategies for growth and successful career transition',
    },
    {
      icon: HeartHandshake,
      step: 4,
      title: 'Ongoing Support',
      description: 'Continuous mentorship and support throughout your career journey',
    },
  ];

  return (
    <div className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 gradient-mesh opacity-30"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            How <span className="text-gradient-shine">Mentoria Maargadarshan</span> Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A proven 4-step process to transform your career trajectory
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="relative card-hover-lift shadow-xl border-2 border-transparent hover:border-primary/20 bg-gradient-card overflow-hidden group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              data-testid={`card-step-${index}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 relative z-10">
                <div className="absolute -top-5 left-6 w-14 h-14 bg-gradient-to-br from-primary to-orange text-white rounded-full flex items-center justify-center font-bold text-2xl shadow-xl">
                  {step.step}
                </div>
                <div className="w-20 h-20 mx-auto mt-6 mb-6 bg-gradient-to-br from-primary/20 to-orange/20 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                  <step.icon className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4 text-center">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground text-center leading-relaxed">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
