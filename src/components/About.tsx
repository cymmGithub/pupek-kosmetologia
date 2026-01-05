import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Button } from '@/components/ui/button';
import parallaxBg from '@/assets/parallax-bg.jpg';

const About = () => {
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal();

  return (
    <section id="about" className="relative overflow-hidden">
      {/* Parallax Background */}
      <div
        className="parallax absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${parallaxBg})`,
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-primary/85 z-10" />

      {/* Content */}
      <div className="relative z-20 py-24 md:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div
            ref={contentRef}
            className={`max-w-3xl mx-auto text-center transition-all duration-700 ${
              contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="font-sans text-sm tracking-[0.3em] text-primary-foreground/70 mb-4">
              OUR PHILOSOPHY
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary-foreground font-light italic leading-tight">
              By Women, For Women
            </h2>
            <p className="mt-8 text-primary-foreground/85 font-light text-lg leading-relaxed">
              At Lumière, we believe that true beauty radiates from within. Our team of expert
              dermatologists and aestheticians combines cutting-edge technology with personalized
              care to help you achieve your skin goals. Every treatment is tailored to your unique
              needs, ensuring results that are as individual as you are.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 hover:border-primary-foreground px-8 py-6 text-sm tracking-wider"
              >
                OUR STORY
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 hover:border-primary-foreground px-8 py-6 text-sm tracking-wider"
              >
                MEET THE TEAM
              </Button>
            </div>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-3 gap-8 border-t border-primary-foreground/20 pt-12">
              <div>
                <p className="font-serif text-4xl md:text-5xl text-primary-foreground font-light">15+</p>
                <p className="text-primary-foreground/70 text-sm mt-2 tracking-wide">Years Experience</p>
              </div>
              <div>
                <p className="font-serif text-4xl md:text-5xl text-primary-foreground font-light">10k+</p>
                <p className="text-primary-foreground/70 text-sm mt-2 tracking-wide">Happy Clients</p>
              </div>
              <div>
                <p className="font-serif text-4xl md:text-5xl text-primary-foreground font-light">50+</p>
                <p className="text-primary-foreground/70 text-sm mt-2 tracking-wide">Treatments</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
