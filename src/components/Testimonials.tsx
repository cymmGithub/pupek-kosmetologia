import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    treatment: 'Facial Rejuvenation',
    quote:
      'The results exceeded my expectations. My skin has never looked better, and the team made me feel completely at ease throughout the process.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face',
  },
  {
    name: 'Emily Chen',
    treatment: 'Hydrafacial',
    quote:
      'I was amazed by the immediate glow after my first session. The staff is incredibly knowledgeable and genuinely cares about your skin health.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
  },
  {
    name: 'Amanda Roberts',
    treatment: 'Anti-Aging Care',
    quote:
      'After trying many clinics, I finally found my home at Pupek Kosmetologia. The personalized approach and attention to detail is unmatched.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face',
  },
];

const Testimonials = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();
  const { ref: gridRef, isVisible: gridVisible } = useScrollReveal(0.05);

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="font-sans text-sm tracking-[0.3em] text-primary mb-4">TESTIMONIALS</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground font-light italic">
            Clients Love
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div
          ref={gridRef}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-700 delay-200 ${
            gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {testimonials.map((testimonial, index) => (
            <article
              key={testimonial.name}
              className="bg-card p-8 rounded-sm border border-border text-center card-hover"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Avatar */}
              <div className="mb-6 flex justify-center">
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-border">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Rating */}
              <div className="flex justify-center gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-muted-foreground font-light text-sm leading-relaxed mb-6">
                "{testimonial.quote}"
              </p>

              {/* Name */}
              <p className="font-serif text-lg text-foreground">{testimonial.name}</p>
              <p className="text-sm text-muted-foreground mt-1">{testimonial.treatment}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
