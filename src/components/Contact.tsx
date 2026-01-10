import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Mail, Phone, AlertCircle } from 'lucide-react';

const Contact = () => {
  const { ref: textRef, isVisible: textVisible } = useScrollReveal();
  const { ref: imageRef, isVisible: imageVisible } = useScrollReveal();

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-gradient-to-br from-background via-secondary/20 to-background overflow-hidden">
      {/* Decorative gradient orbs for atmospheric depth */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-primary/8 rounded-full blur-3xl animate-float-slow" />
      <div className="absolute bottom-1/3 -right-48 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float-slower" />

      {/* Subtle grain texture */}
      <div className="absolute inset-0 bg-noise opacity-[0.015] mix-blend-overlay pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Contact Text */}
          <div
            ref={textRef}
            className="lg:border-r lg:border-border lg:pr-16 lg:min-h-[600px] flex flex-col justify-center"
          >
            {/* Heading with staggered reveal */}
            <div className="mb-8 overflow-hidden">
              <h2
                className={`font-serif text-4xl md:text-5xl lg:text-6xl text-foreground font-light transition-all duration-1000 ${
                  textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
              >
                Skontaktuj się ze mną
              </h2>
            </div>

            {/* Description with delay */}
            <p
              className={`text-foreground/80 text-base md:text-lg leading-relaxed mb-8 max-w-md transition-all duration-1000 delay-200 ${
                textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Potrzebujesz wsparcia lub chcesz dowiedzieć się więcej o moich usługach?
              Wyślij mi wiadomość email lub umów się na konsultację.
            </p>

            {/* Contact links with icons and staggered animation */}
            <div
              className={`mb-10 space-y-4 transition-all duration-1000 delay-300 ${
                textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <a
                href="mailto:pupek.kosmetologia@gmail.com"
                className="group flex items-center gap-3 text-foreground hover:text-primary transition-all duration-300"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-all duration-300">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-base md:text-lg relative">
                  pupek.kosmetologia@gmail.com
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
                </span>
              </a>

              <a
                href="tel:+48515157681"
                className="group flex items-center gap-3 text-foreground hover:text-primary transition-all duration-300"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-all duration-300">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="text-base md:text-lg relative">
                  +48 515-157-681
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
                </span>
              </a>
            </div>

            {/* Important Notice - Emphasized */}
            <div
              className={`transition-all duration-1000 delay-500 max-w-2xl ${
                textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="relative border-2 border-primary/30 bg-gradient-to-br from-primary/5 via-primary/3 to-accent/5 rounded-xl p-6 md:p-8 overflow-hidden">
                {/* Decorative corner accents */}
                <div className="absolute top-0 left-0 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-primary/8 rounded-full blur-3xl" />

                {/* Content */}
                <div className="relative">
                  {/* Icon */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-2.5 rounded-lg bg-primary/15 flex-shrink-0">
                      <AlertCircle className="w-6 h-6 text-primary" />
                    </div>

                    {/* Important message */}
                    <div className="space-y-3 flex-1">
                      <p className="text-foreground/80 text-sm md:text-base leading-relaxed font-normal">
                        Konsultacja kosmetologiczna jest obowiązkowym elementem podjęcia naszej współpracy.
                        Nie wykonuję zabiegów bez wcześniej odbytej konsultacji.
                      </p>
                      <p className="text-foreground/70 text-sm md:text-base leading-relaxed">
                        Aby zapewnić bezpieczeństwo podczas terapii zabiegowych muszę zapoznać się z Twoją aktualną pielęgnacją, stylem życia oraz ogólnym stanem zdrowia. Podczas konsultacji omawiamy wszystkie te kwestie, dzięki czemu zwiększamy szanse na najlepsze rezultaty zabiegowe oraz minimalizujemy ryzyko ewentualnych powikłań.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Image with enhanced styling */}
          <div
            ref={imageRef}
            className={`transition-all duration-1000 delay-300 ${
              imageVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <div className="relative w-full h-[500px] lg:h-[600px] group">
              {/* Decorative border frame */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-accent/20 to-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700" />

              {/* Image container */}
              <div className="relative w-full h-full overflow-hidden rounded-xl shadow-2xl">
                <img
                  src="/contact.jpg"
                  alt="Contact"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Subtle overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>

              {/* Decorative corner accents */}
              <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-primary/30 rounded-tl-xl transition-all duration-500 group-hover:w-24 group-hover:h-24" />
              <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-primary/30 rounded-br-xl transition-all duration-500 group-hover:w-24 group-hover:h-24" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
