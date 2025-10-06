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
    <div className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            How <span className="text-primary">Mentoria Maargadarshan</span> Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A proven 4-step process to transform your career trajectory
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="relative hover-elevate active-elevate-2 transition-all duration-300 hover:scale-105"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              data-testid={`card-step-${index}`}
            >
              <CardContent className="p-6">
                <div className="absolute -top-4 left-6 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                  {step.step}
                </div>
                <div className="w-16 h-16 mx-auto mt-4 mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3 text-center">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground text-center">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
