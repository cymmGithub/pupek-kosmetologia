import { Instagram, Facebook, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="font-serif text-2xl tracking-wider mb-4">LUMIÈRE</h3>
            <p className="text-primary-foreground/70 font-light text-sm leading-relaxed">
              Gdzie nauka spotyka naturalną urodę. Doświadcz transformacyjnej pielęgnacji skóry w naszej luksusowej klinice.
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href="#"
                className="p-2 border border-primary-foreground/20 rounded-full hover:bg-primary-foreground/10 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="p-2 border border-primary-foreground/20 rounded-full hover:bg-primary-foreground/10 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-sans text-sm tracking-wider mb-6">SZYBKIE LINKI</h4>
            <ul className="space-y-3">
              {['Strona główna', 'Zabiegi', 'O nas', 'Kontakt'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(' ', '-')}`}
                    className="text-primary-foreground/70 hover:text-primary-foreground text-sm font-light transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-sans text-sm tracking-wider mb-6">ZABIEGI</h4>
            <ul className="space-y-3">
              {['Odmładzanie twarzy', 'Hydrafacial', 'Terapia laserowa', 'Pielęgnacja anti-aging', 'Mikronakłuwanie'].map(
                (service) => (
                  <li key={service}>
                    <a
                      href="#services"
                      className="text-primary-foreground/70 hover:text-primary-foreground text-sm font-light transition-colors"
                    >
                      {service}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans text-sm tracking-wider mb-6">KONTAKT</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0 text-primary-foreground/50" />
                <span className="text-primary-foreground/70 text-sm font-light">
                  123 Beauty Lane, Suite 400
                  <br />
                  Beverly Hills, CA 90210
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 flex-shrink-0 text-primary-foreground/50" />
                <a
                  href="tel:+13105551234"
                  className="text-primary-foreground/70 hover:text-primary-foreground text-sm font-light transition-colors"
                >
                  +1 (310) 555-1234
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 flex-shrink-0 text-primary-foreground/50" />
                <a
                  href="mailto:hello@lumiere.com"
                  className="text-primary-foreground/70 hover:text-primary-foreground text-sm font-light transition-colors"
                >
                  hello@lumiere.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/50 text-sm font-light">
            © {currentYear} Lumière Klinika Skóry. Wszelkie prawa zastrzeżone.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-primary-foreground/50 hover:text-primary-foreground text-sm font-light transition-colors"
            >
              Polityka prywatności
            </a>
            <a
              href="#"
              className="text-primary-foreground/50 hover:text-primary-foreground text-sm font-light transition-colors"
            >
              Regulamin
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
