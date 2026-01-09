import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Sparkles, Droplets, Sun, Heart, Leaf, LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import willowBg from '/willow.png';

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  price: string;
  priceNote?: string;
}

const services: Service[] = [
  {
    icon: Sparkles,
    title: 'Konsultacja kosmetologiczna',
    description: 'Analiza skóry za pomocą urządzenia Observ520x + wywiad + zalecenia pielęgnacyjne',
    price: '250zł (1-1,5h)',
    priceNote: '*z zabiegiem 2-3h 500zł',
  },
  {
    icon: Droplets,
    title: 'Terapia trądzikowa',
    description: 'Terapia kosmetologiczna dostosowana do potrzeb Twojej skóry.',
    price: '250-350zł (ok. 1h)',
  },
  {
    icon: Sun,
    title: 'Terapia przebarwień',
    description: 'Specjalistyczny zabieg wyrównujący koloryt i redukujący przebarwienia.',
    price: '300-350zł (ok. 1h)',
  },
  {
    icon: Heart,
    title: 'Terapia anti aging',
    description: 'Zaawansowana terapia przeciwstarzeniowa redukująca widoczność zmarszczek.',
    price: '300-350zł (ok. 1h)',
  },
  {
    icon: Leaf,
    title: 'Zabieg nawilżający/regenerujący',
    description: 'Głębokie nawilżenie i regeneracja skóry dla przywrócenia jej naturalnej równowagi.',
    price: '250-350zł (ok. 1h)',
  },
  {
    icon: Sparkles,
    title: 'Zabieg relaksacyjny',
    description: 'Relaksujący zabieg łączący pielęgnację skóry z chwilą odprężenia i spokoju.',
    price: '350-400zł (ok. 1,5h)',
  },
];

const Services = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();
  const { ref: gridRef, isVisible: gridVisible } = useScrollReveal(0.05);

  return (
    <section id="services" className="relative py-24 md:py-32 bg-gradient-to-br from-background via-secondary/10 to-background overflow-hidden">
      {/* Atmospheric background elements */}
      <div className="absolute top-1/3 -left-40 w-96 h-96 bg-primary/8 rounded-full blur-3xl animate-float-slow" />
      <div className="absolute bottom-1/4 -right-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float-slower" />

      {/* Grain texture overlay */}
      <div className="absolute inset-0 bg-noise opacity-[0.015] mix-blend-overlay pointer-events-none" />

      {/* Decorative willow backgrounds */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src={willowBg}
          alt=""
          className="absolute top-0 left-10 w-56 md:w-72 opacity-[0.04] transform -rotate-6"
        />
        <img
          src={willowBg}
          alt=""
          className="absolute bottom-0 right-10 w-64 md:w-96 opacity-[0.05] transform rotate-6 scale-x-[-1]"
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Enhanced Section Header */}
        <div ref={titleRef} className="text-center mb-20 md:mb-28">
          <div className="overflow-hidden mb-6">
            <h2
              className={`font-serif text-4xl md:text-5xl lg:text-6xl text-foreground font-light transition-all duration-1000 ${
                titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
            >
              Zabiegi
            </h2>
          </div>

          {/* Decorative line */}
          <div
            className={`w-24 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent mx-auto mb-8 transition-all duration-1000 delay-200 ${
              titleVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
            }`}
          />

          <div className="overflow-hidden">
            <p
              className={`text-foreground/70 max-w-3xl mx-auto text-base md:text-lg font-light leading-relaxed transition-all duration-1000 delay-300 ${
                titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Każdy zabieg jest starannie dobrany, aby odpowiedzieć na aktualne potrzeby Twojej skóry.
            </p>
          </div>
        </div>

        {/* Enhanced Services Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {services.map((service, index) => (
            <article
              key={service.title}
              className={`group relative bg-card/50 backdrop-blur-sm p-8 rounded-xl border border-border/50 transition-all duration-700 hover:bg-card hover:border-primary/20 hover:-translate-y-2 hover:shadow-2xl ${
                gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-xl" />

              {/* Content wrapper */}
              <div className="relative">
                {/* Icon badge */}
                <div className="mb-6 inline-flex">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 group-hover:from-primary/25 group-hover:to-primary/10 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                    <service.icon className="h-7 w-7 text-primary stroke-[1.5]" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl md:text-2xl text-foreground mb-3 font-light leading-tight">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-foreground/60 font-light text-sm md:text-base leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Price section */}
                <div className="pt-4 border-t border-border/50 group-hover:border-primary/20 transition-colors duration-300">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex flex-col gap-1">
                      <span className="text-primary font-medium text-sm md:text-base">{service.price}</span>
                      {service.priceNote && (
                        <span className="text-foreground/50 text-xs italic">{service.priceNote}</span>
                      )}
                    </div>
                    <button className="text-xs md:text-sm text-foreground/70 hover:text-primary transition-colors self-start flex items-center gap-1 group/btn">
                      <span className="relative">
                        Dowiedz się więcej
                        <span className="absolute bottom-0 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover/btn:w-full" />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
