import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { name: 'Etapy Współpracy', href: '#stages' },
  { name: 'Zabiegi', href: '#services' },
  { name: 'O nas', href: '#about' },
  { name: 'Kontakt', href: '#contact' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-sm py-3'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#home');
            }}
            className="font-serif text-2xl md:text-3xl tracking-wider"
          >
            <span className={isScrolled ? 'text-foreground' : 'text-primary-foreground'}>
              LUMIÈRE
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className={`text-sm font-sans font-medium tracking-wide link-underline transition-colors ${
                  isScrolled
                    ? 'text-foreground hover:text-primary'
                    : 'text-primary-foreground/90 hover:text-primary-foreground'
                }`}
              >
                {link.name.toUpperCase()}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+1234567890"
              className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                isScrolled ? 'text-foreground' : 'text-primary-foreground'
              }`}
            >
              <Phone className="h-4 w-4" />
              <span>+48 515-157-681</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 transition-colors ${
              isScrolled ? 'text-foreground' : 'text-primary-foreground'
            }`}
            aria-label="Przełącz menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? 'max-h-96 mt-4' : 'max-h-0'
          }`}
        >
          <nav className="flex flex-col gap-4 py-4 bg-background/95 backdrop-blur-md rounded-lg px-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="text-foreground font-medium py-2 hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
            <Button variant="default" className="mt-2">
              <Phone className="h-4 w-4 mr-2" />
              Umów wizytę
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
