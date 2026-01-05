import { useScrollReveal } from '@/hooks/useScrollReveal';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  const { ref: formRef, isVisible: formVisible } = useScrollReveal();
  const { ref: infoRef, isVisible: infoVisible } = useScrollReveal();

  return (
    <section id="contact" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div
            ref={formRef}
            className={`transition-all duration-700 ${
              formVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="font-sans text-sm tracking-[0.3em] text-primary mb-4">SKONTAKTUJ SIĘ</p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground font-light mb-8">
              Umów Swoją Konsultację
            </h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  placeholder="Imię"
                  className="bg-secondary border-border focus:border-primary py-6"
                />
                <Input
                  placeholder="Nazwisko"
                  className="bg-secondary border-border focus:border-primary py-6"
                />
              </div>
              <Input
                type="email"
                placeholder="Adres Email"
                className="bg-secondary border-border focus:border-primary py-6"
              />
              <Input
                type="tel"
                placeholder="Numer Telefonu"
                className="bg-secondary border-border focus:border-primary py-6"
              />
              <Textarea
                placeholder="Powiedz nam o swoich problemach ze skórą..."
                rows={5}
                className="bg-secondary border-border focus:border-primary resize-none"
              />
              <Button size="lg" className="w-full py-6 tracking-wider">
                UMÓW WIZYTĘ
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div
            ref={infoRef}
            className={`transition-all duration-700 delay-200 ${
              infoVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="font-sans text-sm tracking-[0.3em] text-primary mb-4">ODWIEDŹ NAS</p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground font-light mb-8">
              Nasza Lokalizacja
            </h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">Adres</p>
                  <p className="text-muted-foreground font-light">
                    123 Beauty Lane, Suite 400
                    <br />
                    Beverly Hills, CA 90210
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">Telefon</p>
                  <a
                    href="tel:+13105551234"
                    className="text-muted-foreground font-light hover:text-primary transition-colors"
                  >
                    +1 (310) 555-1234
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">Email</p>
                  <a
                    href="mailto:hello@lumiere.com"
                    className="text-muted-foreground font-light hover:text-primary transition-colors"
                  >
                    hello@lumiere.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">Godziny</p>
                  <p className="text-muted-foreground font-light">
                    Pon - Pt: 9:00 - 19:00
                    <br />
                    Sob: 10:00 - 17:00
                    <br />
                    Niedz: Zamknięte
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-10 pt-8 border-t border-border">
              <p className="text-sm tracking-wide text-muted-foreground mb-4">ŚLEDŹ NAS</p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="p-3 bg-secondary rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="p-3 bg-secondary rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
