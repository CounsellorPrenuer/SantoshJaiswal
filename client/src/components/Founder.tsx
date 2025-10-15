import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Award, Users, BookOpen, ArrowRight } from 'lucide-react';
import founderImage from '@assets/Santosh - santosh jaiswal_1759735777095.jpg';

export default function Founder() {
  const certifications = [
    {
      icon: Award,
      title: 'Career Guidance Expert',
    },
    {
      icon: Users,
      title: 'Workshop & Seminar Facilitator',
    },
    {
      icon: BookOpen,
      title: 'Admission & Academic Planning Specialist',
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
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-orange/5"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Meet Your <span className="text-gradient-primary">Mentor</span>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="overflow-hidden card-hover-lift shadow-2xl border-2 border-transparent hover:border-primary/20" data-aos="fade-up">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0">
                <div className="p-8 md:p-12 flex items-center justify-center bg-gradient-to-br from-primary/10 to-orange/10 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-orange/5 opacity-50"></div>
                  <div className="text-center relative z-10">
                    <div className="relative inline-block mb-6">
                      <div className="absolute -inset-1 bg-gradient-to-br from-primary to-orange rounded-lg blur-sm opacity-50"></div>
                      <img
                        src={founderImage}
                        alt="Santosh S Jaiswal"
                        className="relative w-64 h-80 rounded-lg object-cover border-4 border-white/50 shadow-2xl"
                        data-testid="img-founder"
                      />
                    </div>
                    <h3 className="text-3xl font-bold text-gradient-primary mb-2">
                      Santosh S Jaiswal
                    </h3>
                    <p className="text-lg text-foreground font-bold">
                      Founder & Career Mentor
                    </p>
                  </div>
                </div>

                <div className="p-8 md:p-12 flex flex-col justify-center bg-gradient-card">
                  <p className="text-foreground mb-8 leading-relaxed text-lg">
                    With years of experience in career guidance, mentoring students, professionals,
                    and corporates, Santosh specializes in career clarity, workshops, and
                    actionable mentorship.
                  </p>

                  <div className="space-y-6 mb-8">
                    <h4 className="text-2xl font-bold text-foreground">
                      Certifications & Expertise
                    </h4>
                    {certifications.map((cert, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-4 group"
                        data-testid={`cert-${index}`}
                      >
                        <div className="w-12 h-12 bg-gradient-to-br from-primary to-orange rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <cert.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-bold text-foreground">{cert.title}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Button
                    size="lg"
                    onClick={scrollToContact}
                    className="bg-gradient-to-r from-orange to-orange/80 hover:from-orange/90 hover:to-orange/70 text-white w-full shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 ripple-effect"
                    data-testid="button-founder-cta"
                  >
                    Book a Free Call
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
