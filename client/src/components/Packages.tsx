import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

export default function Packages() {
  const packages = [
    {
      name: 'Student Package',
      subtitle: 'Career Kickstart',
      price: '₹5,999',
      note: '*',
      features: [
        'Personalized Career Counselling',
        'Psychometric Assessment',
        '1:1 Mentorship Session',
        'Access to Online Resources',
      ],
      popular: false,
    },
    {
      name: 'Professional Package',
      subtitle: 'Career Growth',
      price: '₹9,999',
      note: '*',
      features: [
        'Career & Skills Assessment',
        '3 Mentorship Sessions',
        'Resume & LinkedIn Guidance',
        'Workshops Access',
      ],
      popular: true,
    },
    {
      name: 'Corporate Package',
      subtitle: 'Employee Wellbeing',
      price: '₹15,999',
      note: '*',
      features: [
        'Corporate Workshops & Seminars',
        'Employee Mentorship',
        'Career Pathing & Guidance',
        'Ongoing Support',
      ],
      popular: false,
    },
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Choose Your <span className="text-primary">Package</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Flexible pricing for every stage of your career journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {packages.map((pkg, index) => (
            <Card
              key={index}
              className={`hover-elevate active-elevate-2 transition-all duration-300 hover:scale-105 ${
                pkg.popular ? 'border-2 border-primary shadow-xl' : ''
              }`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              data-testid={`card-package-${index}`}
            >
              {pkg.popular && (
                <div className="bg-primary text-primary-foreground text-center py-2 text-sm font-semibold rounded-t-lg">
                  Most Popular
                </div>
              )}
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl text-foreground">{pkg.name}</CardTitle>
                <p className="text-sm text-muted-foreground">{pkg.subtitle}</p>
                <div className="mt-6">
                  <span className="text-5xl font-bold text-foreground">{pkg.price}</span>
                  <span className="text-sm text-muted-foreground align-super">{pkg.note}</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className={`w-full ${
                    pkg.popular
                      ? 'bg-orange hover:bg-orange/90 text-orange-foreground'
                      : 'bg-primary hover:bg-primary/90 text-primary-foreground'
                  } hover-elevate active-elevate-2 ripple-effect`}
                  onClick={scrollToContact}
                  data-testid={`button-package-${index}`}
                >
                  Get Started
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground" data-aos="fade-up">
          *Prices subject to final consultation
        </p>
      </div>
    </div>
  );
}
