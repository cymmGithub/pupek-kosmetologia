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
    <section id="services" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src={willowBg}
          alt=""
          className="absolute top-0 left-10 w-56 md:w-72 opacity-[0.07] transform -rotate-6"
        />
        <img
          src={willowBg}
          alt=""
          className="absolute bottom-0 right-10 w-64 md:w-96 opacity-[0.09] transform rotate-6 scale-x-[-1]"
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground font-light">
            Zabiegi
          </h2>
          <p className="mt-6 text-muted-foreground max-w-3xl mx-auto font-light">
            Każdy zabieg jest starannie dobrany, aby odpowiedzieć na aktualne potrzeby Twojej skóry.
          </p>
        </div>

        {/* Services Grid */}
        <div
          ref={gridRef}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-700 delay-200 ${
            gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {services.map((service, index) => (
            <article
              key={service.title}
              className="group bg-card p-8 rounded-sm border border-border card-hover"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="mb-6">
                <service.icon className="h-8 w-8 text-primary stroke-[1.5]" />
              </div>
              <h3 className="font-serif text-2xl text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground font-light text-sm leading-relaxed mb-4">
                {service.description}
              </p>
              <div className="pt-4 border-t border-border">
                <div className="flex items-start justify-between">
                  <div className="flex flex-col gap-1">
                    <span className="text-primary font-medium text-sm">{service.price}</span>
                    {service.priceNote && (
                      <span className="text-muted-foreground text-xs font-bold italic">{service.priceNote}</span>
                    )}
                  </div>
                  <button className="text-sm text-foreground link-underline hover:text-primary transition-colors self-start">
                    Dowiedz się więcej
                  </button>
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
