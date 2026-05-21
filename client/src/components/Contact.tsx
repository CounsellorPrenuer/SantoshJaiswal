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
import { submitLead } from '@/lib/workerApi';
import { CONTACT_EMAIL, CONTACT_PHONE } from '@/lib/platform';
import { insertContactSchema, type InsertContact } from '@shared/schema';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: { name: '', email: '', phone: '', message: '' },
  });

  const onSubmit = async (data: InsertContact) => {
    setIsSubmitting(true);
    try {
      await submitLead(data as any);
      toast({ title: 'Message Sent', description: 'Your lead has been submitted successfully.' });
      form.reset();
    } catch (error: any) {
      const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(`Contact from ${data.name}`)}&body=${encodeURIComponent(`Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\n\nMessage:\n${data.message}`)}`;
      window.location.href = mailto;
      toast({ title: 'Email Draft Opened', description: error.message || 'Fallback to mail app has been triggered.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: Phone, label: 'Phone', value: CONTACT_PHONE, href: `tel:${CONTACT_PHONE}` },
    { icon: Mail, label: 'Email', value: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
    { icon: MapPin, label: 'Location', value: 'Mumbai, India', href: null },
    { icon: Clock, label: 'Office Hours', value: 'Mon-Fri, 9:00 AM - 6:00 PM', href: null },
  ];

  const socialLinks = [
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/santosh-s-jaiswal-india-202976234' },
    { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/santosh.jw' },
  ];

  return (
    <div id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 gradient-mesh opacity-40"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Get in <span className="text-gradient-shine">Touch</span></h2>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card><CardContent className="p-8"><h3 className="text-2xl font-bold mb-8">Contact Information</h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (<div key={index} className="flex items-start gap-4"><div className="w-14 h-14 bg-gradient-to-br from-primary to-orange rounded-xl flex items-center justify-center"><info.icon className="w-7 h-7 text-white" /></div><div><p className="text-sm text-muted-foreground mb-1">{info.label}</p>{info.href ? <a href={info.href} className="text-foreground font-medium hover:text-primary">{info.value}</a> : <p className="text-foreground font-medium">{info.value}</p>}</div></div>))}
            </div>
            <div className="mt-8 pt-8 border-t border-border"><p className="text-sm text-muted-foreground mb-4">Follow Us</p><div className="flex gap-4">{socialLinks.map((social, index) => (<a key={index} href={social.href} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-primary/10 hover:bg-primary hover:text-primary-foreground rounded-lg flex items-center justify-center"><social.icon className="w-6 h-6" /></a>))}</div></div>
          </CardContent></Card>

          <Card className="bg-gradient-to-br from-primary/10 via-orange/5 to-primary/10"><CardContent className="p-8">
            <h3 className="text-3xl font-bold text-gradient-primary mb-4">Send Us a Message</h3>
            <Form {...form}><form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField control={form.control} name="name" render={({ field }) => (<FormItem><FormLabel>Name</FormLabel><FormControl><Input placeholder="Your full name" {...field} /></FormControl><FormMessage /></FormItem>)} />
              <FormField control={form.control} name="email" render={({ field }) => (<FormItem><FormLabel>Email</FormLabel><FormControl><Input type="email" placeholder="your.email@example.com" {...field} /></FormControl><FormMessage /></FormItem>)} />
              <FormField control={form.control} name="phone" render={({ field }) => (<FormItem><FormLabel>Phone</FormLabel><FormControl><Input placeholder="+91 XXXXXXXXXX" {...field} /></FormControl><FormMessage /></FormItem>)} />
              <FormField control={form.control} name="message" render={({ field }) => (<FormItem><FormLabel>Message</FormLabel><FormControl><Textarea placeholder="Tell us about your career goals..." rows={4} {...field} /></FormControl><FormMessage /></FormItem>)} />
              <Button type="submit" className="w-full" disabled={isSubmitting}><Send className="mr-2 h-5 w-5" />{isSubmitting ? 'Sending...' : 'Send Message'}</Button>
            </form></Form>
          </CardContent></Card>
        </div>
      </div>
    </div>
  );
}
