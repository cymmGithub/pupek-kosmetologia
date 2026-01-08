import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const { ref: textRef, isVisible: textVisible } = useScrollReveal();
  const { ref: imageRef, isVisible: imageVisible } = useScrollReveal();

  return (
    <section id="contact" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Contact Text */}
          <div
            ref={textRef}
            className={`transition-all duration-700 lg:border-r lg:border-border lg:pr-16 lg:min-h-[600px] flex flex-col justify-center ${
              textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="font-serif text-5xl md:text-6xl text-foreground font-light mb-8">
              Skontaktuj się ze mną
            </h2>
            <p className="text-foreground leading-relaxed mb-6 max-w-md">
              Potrzebujesz wsparcia lub chcesz dowiedzieć się więcej o moich usługach?
              Wyślij mi wiadomość email lub umów się na konsultację.
            </p>
            <div className="mb-8">
              <a
                href="mailto:pupek.kosmetologia@gmail.com"
                className="text-foreground underline hover:text-primary transition-colors"
              >
                pupek.kosmetologia@gmail.com
              </a>
              <br />
              <a
                href="tel:+48515157681"
                className="text-foreground hover:text-primary transition-colors mt-2 inline-block"
              >
                +48 515-157-681
              </a>
            </div>
            <Button
              size="lg"
              className="px-8 py-6 tracking-wider"
              onClick={() => window.location.href = 'mailto:pupek.kosmetologia@gmail.com'}
            >
              UMÓW KONSULTACJĘ
            </Button>
          </div>

          {/* Contact Image */}
          <div
            ref={imageRef}
            className={`transition-all duration-700 delay-200 ${
              imageVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="relative w-full h-[500px] lg:h-[600px] overflow-hidden rounded-lg">
              <img
                src="/contact.jpg"
                alt="Contact"
                className="rounded-lg w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
