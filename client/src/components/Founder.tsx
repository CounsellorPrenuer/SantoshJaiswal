import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Award, Users, BookOpen, ArrowRight } from 'lucide-react';
import founderImage from '@assets/Santosh - santosh jaiswal_1759735777095.jfif';

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
    <div className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Meet Your <span className="text-primary">Mentor</span>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="overflow-hidden" data-aos="fade-up">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0">
                <div className="p-8 md:p-12 flex items-center justify-center bg-primary/5">
                  <div className="text-center">
                    <img
                      src={founderImage}
                      alt="Santosh S Jaiswal"
                      className="w-64 h-80 rounded-md object-cover mx-auto mb-6 border-4 border-primary/20 shadow-xl"
                      data-testid="img-founder"
                    />
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      Santosh S Jaiswal
                    </h3>
                    <p className="text-lg text-primary font-semibold">
                      Founder & Career Mentor
                    </p>
                  </div>
                </div>

                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <p className="text-foreground mb-8 leading-relaxed">
                    With years of experience in career guidance, mentoring students, professionals,
                    and corporates, Santosh specializes in career clarity, workshops, and
                    actionable mentorship.
                  </p>

                  <div className="space-y-6 mb-8">
                    <h4 className="text-xl font-semibold text-foreground">
                      Certifications & Expertise
                    </h4>
                    {certifications.map((cert, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-4"
                        data-testid={`cert-${index}`}
                      >
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <cert.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">{cert.title}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Button
                    size="lg"
                    onClick={scrollToContact}
                    className="bg-orange hover:bg-orange/90 text-orange-foreground w-full hover-elevate active-elevate-2 ripple-effect"
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
