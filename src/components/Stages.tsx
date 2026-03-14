import { useScrollReveal } from '@/hooks/useScrollReveal';
import { FileText, Stethoscope, Mail, Sparkles } from 'lucide-react';
import { P } from '@/components/Text';
import stagesBeforeVisit from '@/assets/stages-before-visit.jpg';
import stagesConsultation from '@/assets/stages-consultation.jpg';
import stagesSummary from '@/assets/stages-summary.jpg';
import stagesTreatments from '@/assets/stages-treatments.jpg';
import willowBg from '/willow.png';

const stages = [
  {
    number: '01',
    title: 'Przed Wizytą Stacjonarną',
    subtitle: 'Faza Przygotowania',
    icon: FileText,
    image: stagesBeforeVisit,
    description: 'Po zarezerwowaniu konsultacji wysyłam Ci szczegółowy przewodnik PDF e-mailem z instrukcjami przygotowania. Obejmuje on między innymi zrobienie zdjęć Twojej obecnej pielęgnacji, przypomnienie poprzednich zabiegów i właściwe przygotowanie skóry przed konsultacją.',
  },
  {
    number: '02',
    title: 'Konsultacja Osobista',
    subtitle: 'Trzyczęściowa Ocena',
    icon: Stethoscope,
    image: stagesConsultation,
    description: 'Twoja konsultacja składa się z trzech części: kompleksowego wywiadu kosmetologicznego dotyczącego ogólnego stanu zdrowia i skóry, zaawansowanej diagnostyki skóry przy użyciu urządzenia Observ 520x z 8 modułami diagnostycznymi oraz praktycznej palpacyjnej oceny jakości, gęstości i jędrności skóry.',
  },
  {
    number: '03',
    title: 'Podsumowanie Konsultacji',
    subtitle: 'Spersonalizowany Raport',
    icon: Mail,
    image: stagesSummary,
    description: 'W ciągu tygodnia otrzymasz szczegółową wiadomość e-mail zawierającą: zinterpretowane przeze mnie zdjęcia, podsumowanie wywiadu, zalecenia pielęgnacyjne ciała i włosów oraz uniwersalne wskazówki pielęgnacyjne dla Twojego typu skóry.',
  },
  {
    number: '04',
    title: 'Sesje Zabiegowe',
    subtitle: 'Spersonalizowana Opieka',
    icon: Sparkles,
    image: stagesTreatments,
    description: 'Bezpośrednio po konsultacji (lub po niezbędnym okresie od wprowadzenia odpowiedniej pielęgnacji domowej) rozpoczynamy zabiegi dostosowane do potrzeb Twojej skóry. Zabiegi wykonywane są co 3-4 tygodnie.',
  },
];

const StageCard = ({ stage, index }: { stage: typeof stages[0]; index: number }) => {
  const { ref: stageRef, isVisible } = useScrollReveal();
  const isEven = index % 2 === 0;

  return (
    <div
      ref={stageRef}
      className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-16 items-center transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionTimingFunction: 'var(--ease-out-expo)' }}
    >
      {/* Image */}
      <div className="w-full lg:w-1/2">
        <div className="relative aspect-[4/3]">
          <div className={`relative overflow-hidden rounded-xl shadow-xl image-reveal ${
            isVisible ? 'active' : ''
          }`}>
            <img
              src={stage.image}
              alt={stage.title}
              className="w-full h-full object-cover"
            />

            {/* Enhanced number badge */}
            <div className="absolute top-6 left-6 bg-gradient-to-br from-primary via-primary to-primary/80 text-primary-foreground px-5 py-2.5 rounded-full font-serif text-2xl shadow-lg backdrop-blur-sm">
              {stage.number}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="w-full lg:w-1/2 space-y-5">
        {/* Icon and subtitle */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center">
            <stage.icon className="w-6 h-6 text-primary" />
          </div>
          <span className="text-primary/70 tracking-[0.25em] uppercase text-xs font-medium">
            {stage.subtitle}
          </span>
        </div>

        {/* Title with enhanced typography */}
        <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground font-light leading-tight">
          {stage.title}
        </h3>

        {/* Decorative line accent */}
        <div className="w-16 h-px bg-gradient-to-r from-primary/50 to-transparent" />

        {/* Description with better spacing */}
        <P className="text-foreground/70 text-base md:text-lg leading-relaxed">
          {stage.description}
        </P>
      </div>
    </div>
  );
};

const Stages = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();

  return (
    <section id="stages" className="relative py-24 md:py-32 bg-gradient-to-b from-background via-accent/5 to-background overflow-hidden">
      {/* Decorative willow backgrounds */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top right */}
        <img
          src={willowBg}
          alt=""
          loading="lazy"
          className="absolute top-10 right-0 w-64 md:w-96 opacity-[0.04] transform rotate-12"
        />
        {/* Top left */}
        <img
          src={willowBg}
          alt=""
          loading="lazy"
          className="absolute top-32 left-10 w-40 md:w-56 opacity-[0.04] transform -rotate-6 scale-x-[-1]"
        />
        {/* Middle right */}
        <img
          src={willowBg}
          alt=""
          loading="lazy"
          className="absolute top-1/2 right-20 w-48 md:w-64 opacity-[0.04] transform rotate-45"
        />
        {/* Middle left */}
        <img
          src={willowBg}
          alt=""
          loading="lazy"
          className="absolute top-1/2 left-5 w-56 md:w-72 opacity-[0.04] transform -rotate-20 scale-x-[-1]"
        />
        {/* Bottom right */}
        <img
          src={willowBg}
          alt=""
          loading="lazy"
          className="absolute bottom-32 right-10 w-52 md:w-72 opacity-[0.04] transform rotate-6"
        />
        {/* Bottom left */}
        <img
          src={willowBg}
          alt=""
          loading="lazy"
          className="absolute bottom-20 left-0 w-48 md:w-80 opacity-[0.04] transform -rotate-12 scale-x-[-1]"
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Enhanced title section */}
        <div ref={titleRef} className="text-center mb-20 md:mb-28">
          <div className="overflow-hidden">
            <span
              className={`inline-block text-primary/70 tracking-[0.3em] uppercase text-xs font-medium transition-all duration-1000 ${
                titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Umów Konsultację
            </span>
          </div>

          <div className="overflow-hidden mt-4 mb-6 pb-2">
            <h2
              className={`font-serif text-4xl md:text-5xl lg:text-6xl text-foreground font-light transition-all duration-1000 delay-200 ${
                titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
            >
              Etapy
              <span className="block italic mt-1">Współpracy</span>
            </h2>
          </div>

          {/* Decorative line */}
          <div
            className={`w-24 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent mx-auto mb-8 transition-all duration-1000 delay-300 ${
              titleVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
            }`}
          />

          <div className="overflow-hidden">
            <P
              className={`text-foreground/70 max-w-2xl mx-auto text-base md:text-lg leading-relaxed transition-all duration-1000 delay-500 ${
                titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Poszczególne etapy są nieodłącznym elementem podczas każdej współpracy. Zapewniają one możliwość uzyskania najlepszych efektów terapii oraz wykluczenie przeciwskazań zabiegowych.
            </P>
          </div>
        </div>

        {/* Stage cards with increased spacing */}
        <div className="space-y-20 md:space-y-32">
          {stages.map((stage, index) => (
            <StageCard key={stage.number} stage={stage} index={index} />
          ))}
        </div>
      </div>
      			{/* Decorative line */}
			<div
				className={`w-96 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent mx-auto mt-20 transition-all duration-1000 delay-300 ${
					titleVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
				}`}
			/>
    </section>
  );
};

export default Stages;
