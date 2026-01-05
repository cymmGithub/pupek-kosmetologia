import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Sparkles, Droplets, Sun, Heart, Leaf, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Sparkles,
    title: 'Facial Rejuvenation',
    description: 'Advanced treatments to restore youthful radiance and reduce signs of aging.',
    price: 'From $150',
  },
  {
    icon: Droplets,
    title: 'Hydrafacial',
    description: 'Deep cleansing and hydration for instantly glowing, healthier-looking skin.',
    price: 'From $180',
  },
  {
    icon: Sun,
    title: 'Laser Therapy',
    description: 'Precision treatments for skin resurfacing, pigmentation, and texture improvement.',
    price: 'From $250',
  },
  {
    icon: Heart,
    title: 'Anti-Aging Care',
    description: 'Comprehensive programs combining the latest in anti-aging technology.',
    price: 'From $200',
  },
  {
    icon: Leaf,
    title: 'Organic Facials',
    description: 'Natural, plant-based treatments for sensitive and eco-conscious clients.',
    price: 'From $120',
  },
  {
    icon: Zap,
    title: 'Microneedling',
    description: 'Stimulate collagen production for firmer, smoother, more youthful skin.',
    price: 'From $220',
  },
];

const Services = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();
  const { ref: gridRef, isVisible: gridVisible } = useScrollReveal(0.05);

  return (
    <section id="services" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="font-sans text-sm tracking-[0.3em] text-primary mb-4">OUR EXPERTISE</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground font-light">
            Signature Treatments
          </h2>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto font-light">
            Each treatment is carefully curated to address your unique skin concerns with the latest technology and techniques.
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
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <span className="text-primary font-medium text-sm">{service.price}</span>
                <button className="text-sm text-foreground link-underline hover:text-primary transition-colors">
                  Learn More
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button variant="outline" size="lg" className="px-10 py-6 tracking-wider">
            VIEW ALL TREATMENTS
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
