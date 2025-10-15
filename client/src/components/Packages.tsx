import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, ShoppingCart } from 'lucide-react';
import { type Package, type PackageCategory, packageCategories } from '@shared/schema';

export default function Packages() {
  const [selectedCategory, setSelectedCategory] = useState<PackageCategory | null>(null);

  const { data: packages = [], isLoading } = useQuery<Package[]>({
    queryKey: ['/api/packages', selectedCategory],
    queryFn: async () => {
      const url = selectedCategory 
        ? `/api/packages?category=${encodeURIComponent(selectedCategory)}`
        : '/api/packages';
      const res = await fetch(url);
      if (!res.ok) throw new Error('Failed to fetch packages');
      return res.json();
    },
  });

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
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Flexible pricing for every stage of your career journey
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button
              variant={selectedCategory === null ? "default" : "outline"}
              onClick={() => setSelectedCategory(null)}
              className={selectedCategory === null ? "bg-gradient-to-r from-primary to-orange text-white shadow-lg" : ""}
              data-testid="button-category-all"
            >
              All Packages
            </Button>
            {packageCategories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? "bg-gradient-to-r from-primary to-orange text-white shadow-lg" : ""}
                data-testid={`button-category-${category.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {isLoading ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Loading packages...</p>
          </div>
        ) : packages.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No packages available{selectedCategory && ` for ${selectedCategory}`}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {packages.map((pkg, index) => (
              <Card
                key={pkg.id}
                className="card-hover-lift overflow-hidden group relative border-2 border-transparent hover:border-primary/20 shadow-xl"
                data-aos="fade-up"
                data-aos-delay={index * 100}
                data-testid={`card-package-${pkg.id}`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/3 to-orange/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="text-center pb-4 relative z-10">
                  <Badge className="mb-3 mx-auto bg-gradient-to-r from-primary to-orange text-white">
                    {pkg.category}
                  </Badge>
                  <CardTitle className="text-2xl text-foreground font-bold">{pkg.title}</CardTitle>
                  <p className="text-sm text-muted-foreground font-medium mt-2">{pkg.description}</p>
                  <div className="mt-6">
                    <span className="text-6xl font-bold text-gradient-primary">₹{pkg.price.toLocaleString()}</span>
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
                <CardFooter className="relative z-10 flex gap-2">
                  <Button
                    className="flex-1 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ripple-effect"
                    onClick={scrollToContact}
                    data-testid={`button-contact-${pkg.id}`}
                  >
                    Contact Us
                  </Button>
                  <Button
                    className="flex-1 bg-gradient-to-r from-orange to-orange/80 hover:from-orange/90 hover:to-orange/70 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ripple-effect"
                    data-testid={`button-buy-${pkg.id}`}
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Buy Now
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}

        <p className="text-center text-sm text-muted-foreground" data-aos="fade-up">
          *Prices subject to final consultation
        </p>
      </div>
    </div>
  );
}
