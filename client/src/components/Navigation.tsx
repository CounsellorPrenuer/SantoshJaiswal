import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logoImage from '@assets/logo - santosh jaiswal_1759735777096.jpeg';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { label: 'Why Mentoria', id: 'why-choose', key: 'why-mentoria' },
    { label: 'Career Guidance', id: 'services', key: 'career-guidance' },
    { label: 'Workshops & Seminars', id: 'services', key: 'workshops' },
    { label: 'Admission Support', id: 'services', key: 'admission' },
    { label: 'Contact Us', id: 'contact', key: 'contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white/90 dark:bg-card/90 backdrop-blur-xl shadow-xl border-b border-primary/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <img
              src={logoImage}
              alt="Mentoria Logo"
              className="h-12 w-12 rounded-md object-cover"
              data-testid="img-logo"
            />
            <div>
              <h1 className="text-xl font-bold text-foreground">Mentoria</h1>
              <p className="text-xs text-muted-foreground">Maargadarshan</p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.key}
                onClick={() => scrollToSection(link.id)}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                data-testid={`link-${link.key}`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="hidden md:block">
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-orange to-orange/80 hover:from-orange/90 hover:to-orange/70 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 ripple-effect"
              data-testid="button-nav-book-call"
            >
              Book A Free Call
            </Button>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-card border-t border-border">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.key}
                onClick={() => scrollToSection(link.id)}
                className="block w-full text-left text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
                data-testid={`link-mobile-${link.key}`}
              >
                {link.label}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection('contact')}
              className="w-full bg-orange hover:bg-orange/90 text-orange-foreground ripple-effect"
              data-testid="button-nav-mobile-book-call"
            >
              Book A Free Call
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
