import { Linkedin, Instagram } from 'lucide-react';
import logoImage from '@assets/logo - santosh jaiswal_1759735777096.jpeg';

export default function Footer() {
  const quickLinks = [
    { label: 'About', id: 'why-choose' },
    { label: 'Services', id: 'services' },
    { label: 'Contact', id: 'contact' },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/santosh-s-jaiswal-india-202976234',
      label: 'LinkedIn',
    },
    {
      icon: Instagram,
      href: 'https://www.instagram.com/santosh.jw',
      label: 'Instagram',
    },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src={logoImage}
                alt="Mentoria Logo"
                className="h-12 w-12 rounded-md object-cover"
              />
              <div>
                <h3 className="text-lg font-bold text-foreground">Mentoria</h3>
                <p className="text-xs text-muted-foreground">Maargadarshan</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              From Confusion to Clarity. From Goals to Growth.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    data-testid={`footer-link-${link.id}`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Connect With Us</h4>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary/10 hover:bg-primary hover:text-primary-foreground rounded-lg flex items-center justify-center transition-all hover-elevate active-elevate-2"
                  aria-label={social.label}
                  data-testid={`footer-social-${index}`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Mentoria – Maargadarshan. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Mentorship Platform Powered by Mentoria
          </p>
        </div>
      </div>
    </footer>
  );
}
