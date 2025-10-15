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
    <div className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-orange/5 via-transparent to-primary/5"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Choose Your <span className="text-gradient-primary">Package</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Flexible pricing for every stage of your career journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {packages.map((pkg, index) => (
            <Card
              key={index}
              className={`card-hover-lift overflow-hidden group relative ${
                pkg.popular ? 'border-2 border-primary/50 shadow-2xl scale-105' : 'border-2 border-transparent shadow-xl'
              }`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              data-testid={`card-package-${index}`}
            >
              {pkg.popular && (
                <div className="bg-gradient-to-r from-primary to-orange text-white text-center py-2 text-sm font-bold rounded-t-lg">
                  ⭐ Most Popular
                </div>
              )}
              <div className={`absolute inset-0 bg-gradient-to-br ${pkg.popular ? 'from-primary/5 to-orange/5' : 'from-primary/3 to-orange/3'} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              <CardHeader className="text-center pb-4 relative z-10">
                <CardTitle className="text-2xl text-foreground font-bold">{pkg.name}</CardTitle>
                <p className="text-sm text-muted-foreground font-medium">{pkg.subtitle}</p>
                <div className="mt-6">
                  <span className="text-6xl font-bold text-gradient-primary">{pkg.price}</span>
                  <span className="text-sm text-muted-foreground align-super">{pkg.note}</span>
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <ul className="space-y-4">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-orange flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-sm text-foreground font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="relative z-10">
                <Button
                  className={`w-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ${
                    pkg.popular
                      ? 'bg-gradient-to-r from-orange to-orange/80 hover:from-orange/90 hover:to-orange/70 text-white'
                      : 'bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white'
                  } ripple-effect`}
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
