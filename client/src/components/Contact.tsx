import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, MapPin, Clock, Linkedin, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Contact() {
  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 7977410005',
      href: 'tel:+917977410005',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'santosh.jw@gmail.com',
      href: 'mailto:santosh.jw@gmail.com',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Mumbai, India',
      href: null,
    },
    {
      icon: Clock,
      label: 'Office Hours',
      value: 'Mon-Fri, 9:00 AM – 6:00 PM',
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/santosh-s-jaiswal-india-202976234',
    },
    {
      icon: Instagram,
      label: 'Instagram',
      href: 'https://www.instagram.com/santosh.jw',
    },
  ];

  return (
    <div id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 gradient-mesh opacity-40"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Get in <span className="text-gradient-shine">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your career? Book your free consultation today
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div data-aos="fade-right">
              <Card className="h-full card-hover-lift shadow-xl border-2 border-transparent hover:border-primary/20">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-8">Contact Information</h3>
                  <div className="space-y-6">
                    {contactInfo.map((info, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-4"
                        data-testid={`contact-${index}`}
                      >
                        <div className="w-14 h-14 bg-gradient-to-br from-primary to-orange rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                          <info.icon className="w-7 h-7 text-white" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                          {info.href ? (
                            <a
                              href={info.href}
                              className="text-foreground font-medium hover:text-primary transition-colors"
                              data-testid={`link-${info.label.toLowerCase()}`}
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-foreground font-medium">{info.value}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 pt-8 border-t border-border">
                    <p className="text-sm text-muted-foreground mb-4">Follow Us</p>
                    <div className="flex gap-4">
                      {socialLinks.map((social, index) => (
                        <a
                          key={index}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 bg-primary/10 hover:bg-primary hover:text-primary-foreground rounded-lg flex items-center justify-center transition-all hover-elevate active-elevate-2"
                          aria-label={social.label}
                          data-testid={`link-contact-social-${social.label.toLowerCase()}`}
                        >
                          <social.icon className="w-6 h-6" />
                        </a>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div data-aos="fade-left">
              <Card className="h-full bg-gradient-to-br from-primary/10 via-orange/5 to-primary/10 card-hover-lift shadow-xl border-2 border-transparent hover:border-orange/20">
                <CardContent className="p-8 flex flex-col justify-center h-full">
                  <h3 className="text-3xl font-bold text-gradient-primary mb-4">
                    Ready to Start Your Journey?
                  </h3>
                  <p className="text-foreground mb-8 leading-relaxed text-lg">
                    Book your free career clarity call today and take the first step towards
                    achieving your professional goals. Our expert mentors are ready to guide you
                    from confusion to clarity.
                  </p>

                  <div className="space-y-4">
                    <Button
                      size="lg"
                      className="w-full bg-gradient-to-r from-orange to-orange/80 hover:from-orange/90 hover:to-orange/70 text-white shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 ripple-effect"
                      asChild
                      data-testid="button-contact-call"
                    >
                      <a href="tel:+917977410005">
                        <Phone className="mr-2 h-5 w-5" />
                        Book A Free Call
                      </a>
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full border-2 border-primary hover:bg-primary hover:text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                      asChild
                      data-testid="button-contact-email"
                    >
                      <a href="mailto:santosh.jw@gmail.com">
                        <Mail className="mr-2 h-5 w-5" />
                        Send an Email
                      </a>
                    </Button>
                  </div>

                  <div className="mt-8 p-6 bg-white/50 dark:bg-card/50 backdrop-blur-sm rounded-xl border border-primary/20 shadow-lg">
                    <p className="text-sm text-center text-foreground font-medium">
                      <span className="font-bold text-2xl text-gradient-primary">2500+</span> professionals have
                      already transformed their careers with us
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
