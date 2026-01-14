import { useEffect } from 'react';
import { CheckCircle2, MessageCircleMore, Mail, Calendar } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { P } from '@/components/Text';
import willowBg from '/willow.png';

const Potwierdzenie = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollReveal();
  const { ref: stepsRef, isVisible: stepsVisible } = useScrollReveal(0.1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const nextSteps = [
    {
      icon: Mail,
      title: 'Potwierdzenie',
      description: 'W przeciągu trzech dni skontaktuję się z Tobą w celu umówienia terminu konsultacji.',},
    {
      icon: Calendar,
      title: 'Przygotuj się do konsultacji',
      description: 'Przygotuj się do konsultacji według wysłanej przeze mnie instrukcji PDF i przygotuj listę pytań dotyczących Twojej skóry.',
    },
    {
      icon: MessageCircleMore,
      title: 'Spotkajmy się w gabinecie',
      description: 'Podczas konsultacji przeprowadzę szczegółową analizę skóry i opracuję indywidualny plan pielęgnacyjny dostosowany do Twoich potrzeb.',
    },
  ];

  return (
    <div className='min-h-screen bg-background'>
      <Header />

      {/* Hero Section */}
      <section className='relative min-h-[35vh] flex items-center justify-center overflow-hidden pt-32 mt-20'>
        {/* Background elements */}
        <div className='absolute inset-0 bg-gradient-to-b from-accent/10 via-background to-background' />

        {/* Grain texture */}
        <div className='absolute inset-0 bg-noise opacity-[0.015] mix-blend-overlay pointer-events-none' />

        {/* Decorative willow backgrounds */}
        <div className='absolute inset-0 pointer-events-none'>
          <img
            src={willowBg}
            alt=''
            className='absolute top-20 right-0 md:right-20 lg:right-60 xl:right-80 w-32 md:w-48 opacity-[0.14] transform rotate-12'
          />
          <img
            src={willowBg}
            alt=''
            className='absolute top-20 left-0 md:left-20 lg:left-60 xl:left-80 w-32 md:w-48 opacity-[0.14] transform -rotate-12 scale-x-[-1]'
          />
        </div>

        {/* Content */}
        <div className='container mx-auto px-4 lg:px-8 relative z-10'>
          <div ref={heroRef} className='max-w-3xl mx-auto text-center'>
            {/* Success Icon */}
            <div
              className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 mb-6 transition-all duration-1000 ${
                heroVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
              }`}
            >
              <CheckCircle2 className='w-8 h-8 text-primary' />
            </div>

            {/* Title */}
            <div className='overflow-hidden pb-6 mb-4'>
              <h1
                className={`font-serif text-4xl md:text-5xl lg:text-6xl text-foreground font-light leading-tight transition-all duration-1000 delay-200 ${
                  heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
              >
                Dziękuję za
                <span className='block italic mt-2'>Kontakt!</span>
              </h1>
            </div>

            {/* Decorative line */}
            <div
              className={`w-24 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent mx-auto mb-0 transition-all duration-1000 delay-300 ${
                heroVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
              }`}
            />

          </div>
        </div>
      </section>

      {/* Next Steps Section */}
      <section className='relative py-12 md:pb-20'>
        <div className='container mx-auto px-4 lg:px-8'>
          <div className='max-w-4xl mx-auto'>
            {/* Section Title */}
            <div ref={stepsRef} className='text-center mb-12'>
              <span
                className={`inline-block text-primary/70 tracking-[0.3em] uppercase text-xs font-medium mb-4 transition-all duration-1000 ${
                  stepsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                Co dalej?
              </span>
              <h2
                className={`font-serif text-3xl md:text-4xl lg:text-5xl text-foreground font-light transition-all duration-1000 delay-200 ${
                  stepsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
              >
                Następne Kroki
              </h2>
            </div>

            {/* Steps */}
            <div className='space-y-6 md:space-y-10'>
              {nextSteps.map((step, index) => (
                <div
                  key={step.title}
                  className={`flex flex-col md:flex-row gap-6 items-start transition-all duration-1000 ${
                    stepsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                  style={{ transitionDelay: `${(index + 1) * 150}ms` }}
                >
                  {/* Icon */}
                  <div className='flex-shrink-0'>
                    <div className='w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center'>
                      <step.icon className='w-8 h-8 text-primary' />
                    </div>
                  </div>

                  {/* Content */}
                  <div className='flex-1'>
                    <h3 className='font-serif text-2xl md:text-3xl text-foreground font-light mb-3'>
                      {step.title}
                    </h3>
                    <P className='text-foreground/70 text-base md:text-lg leading-relaxed'>
                      {step.description}
                    </P>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Potwierdzenie;
