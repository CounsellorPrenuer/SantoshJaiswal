import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, MapPin, Clock, Linkedin, Instagram, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { apiRequest } from '@/lib/queryClient';
import { insertContactSchema, type InsertContact } from '@shared/schema';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
  });

  const onSubmit = async (data: InsertContact) => {
    setIsSubmitting(true);
    try {
      const response = await apiRequest<{ gmailUrl: string }>({
        method: 'POST',
        url: '/api/contact',
        data,
      });

      toast({
        title: 'Message Sent!',
        description: 'Your message has been submitted successfully. Redirecting to Gmail...',
      });

      form.reset();

      setTimeout(() => {
        window.open(response.gmailUrl, '_blank');
      }, 1000);
    } catch (error: any) {
      toast({
        title: 'Error',
        description: error.message || 'Failed to send message. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
      value: 'jaiswalsantoshmehr@gmail.com',
      href: 'mailto:jaiswalsantoshmehr@gmail.com',
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
                <CardContent className="p-8">
                  <h3 className="text-3xl font-bold text-gradient-primary mb-4">
                    Send Us a Message
                  </h3>
                  <p className="text-foreground mb-6 leading-relaxed">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>

                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground font-medium">Name</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Your full name" 
                                {...field} 
                                data-testid="input-contact-name"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground font-medium">Email</FormLabel>
                            <FormControl>
                              <Input 
                                type="email" 
                                placeholder="your.email@example.com" 
                                {...field} 
                                data-testid="input-contact-email"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground font-medium">Phone</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="+91 XXXXXXXXXX" 
                                {...field} 
                                data-testid="input-contact-phone"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground font-medium">Message</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Tell us about your career goals..." 
                                rows={4}
                                {...field} 
                                data-testid="input-contact-message"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-orange to-orange/80 hover:from-orange/90 hover:to-orange/70 text-white shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 ripple-effect"
                        disabled={isSubmitting}
                        data-testid="button-contact-submit"
                      >
                        <Send className="mr-2 h-5 w-5" />
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </Button>
                    </form>
                  </Form>

                  <div className="mt-6 p-4 bg-white/50 dark:bg-card/50 backdrop-blur-sm rounded-xl border border-primary/20">
                    <p className="text-xs text-center text-muted-foreground">
                      <span className="font-bold text-gradient-primary">2500+</span> professionals have already transformed their careers with us
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
