import { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { sanityClient } from '@/lib/sanity';

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const fallbackTestimonials = [
    {
      name: 'SP',
      role: 'Engineering Student',
      achievement: 'IT Analyst',
      quote:
        'Mentoria- MaargDarshan helped me identify my strengths and guided me toward the right career path.',
    },
    {
      name: 'RK',
      role: 'MBA Aspirant',
      achievement: 'Marketing Associate',
      quote:
        'The mentorship sessions helped me make informed decisions and secure my dream role.',
    },
    {
      name: 'AM',
      role: 'Working Professional',
      achievement: 'Team Lead',
      quote: 'I learned how to pivot in my career without losing momentum.',
    },
  ];
  const { data } = useQuery({
    queryKey: ['sanity-testimonials'],
    queryFn: async () =>
      sanityClient.fetch(`*[_type == "testimonials"] | order(order asc){name,role,achievement,quote}`),
  });
  const testimonials = data?.length ? data : fallbackTestimonials;

  return (
    <div className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Success <span className="text-primary">Stories</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Real transformations from our mentees
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto" data-aos="fade-up">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] min-w-0 px-4"
                  data-testid={`testimonial-${index}`}
                >
                  <Card className="border-2">
                    <CardContent className="p-8 md:p-12">
                      <Quote className="w-12 h-12 text-primary/20 mb-6" />
                      <p className="text-xl md:text-2xl text-foreground mb-8 leading-relaxed">
                        {testimonial.quote}
                      </p>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                          <span className="text-xl font-bold text-primary">
                            {testimonial.name}
                          </span>
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">
                            {testimonial.role} → {testimonial.achievement}
                          </p>
                          <p className="text-sm text-muted-foreground">Mentoria Success Story</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={scrollPrev}
              className="rounded-full hover-elevate"
              data-testid="button-testimonial-prev"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={scrollNext}
              className="rounded-full hover-elevate"
              data-testid="button-testimonial-next"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
