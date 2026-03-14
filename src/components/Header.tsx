import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { openTallyForm } from '@/lib/tally';

const navLinks = [
  { name: 'Etapy Współpracy', href: '#stages' },
  { name: 'Zabiegi', href: '#services' },
  { name: 'Vouchery', href: '#voucher' },
  { name: 'Kontakt', href: '#contact' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isOnHomePage = location.pathname === '/';
  const isOnPotwierdzeniePage = location.pathname === '/v1-dziekuje-za-wypelnienie-formularza';

  // Force dark styling on confirmation page (light background)
  const useDarkStyling = isScrolled || isOnPotwierdzeniePage;

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle scrolling to hash when navigating to home page with hash
  useEffect(() => {
    if (isOnHomePage && location.hash) {
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [isOnHomePage, location.hash]);

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);

    // If we're not on the home page, navigate to home page with hash
    if (!isOnHomePage) {
      navigate(`/${href}`);
      return;
    }

    // If we're on the home page, scroll to the section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        useDarkStyling
          ? 'bg-background/95 backdrop-blur-md shadow-sm py-3'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        {/* Title */}
        <div className={`flex justify-center pt-4 md:pt-0 mb-[-50px] md:mb-[-30px] transition-all duration-500 ${
          useDarkStyling ? 'lg:opacity-0 lg:invisible' : 'opacity-100 visible'
        }`}>
          <h1 className={`text-lg md:text-3xl transition-colors duration-500 ${
            useDarkStyling ? 'text-foreground' : 'text-primary-foreground'
          }`}>
            pupek kosmetologia
          </h1>
        </div>

        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              if (isOnHomePage) {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              } else {
                navigate('/');
              }
            }}
            className="flex items-center md:w-[239px] cursor-pointer"
          >
            <img
              src="/logo-no-text.png"
              alt="Pupek Kosmetologia"
              className={`w-auto transition-all duration-500 ${
                useDarkStyling ? 'h-16 invert' : 'h-16 md:h-36'
              }`}
            />
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
                  useDarkStyling
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
            <Button
              variant='outline'
              size='lg'
              className={`border-2 px-8 py-6 text-sm tracking-wider transition-all ${
                useDarkStyling
                  ? 'bg-transparent border-primary text-primary hover:bg-primary hover:text-primary-foreground'
                  : 'bg-accent/20 border-primary-foreground/20 text-primary-foreground hover:bg-accent hover:text-foreground'
              }`}
              onClick={openTallyForm}
            >
              UMÓW KONSULTACJĘ
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 transition-colors ${
              useDarkStyling ? 'text-foreground' : 'text-primary-foreground'
            }`}
            aria-label="Przełącz menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden mobile-menu-grid ${
            isMobileMenuOpen ? 'open mt-4' : ''
          }`}
        >
          <div>
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
            <Button variant="default" className="mt-2" onClick={openTallyForm}>
              UMÓW KONSULTACJĘ
            </Button>
          </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
