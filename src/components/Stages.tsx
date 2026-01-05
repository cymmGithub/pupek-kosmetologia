import { useScrollReveal } from '@/hooks/useScrollReveal';
import { FileText, Stethoscope, Mail, Sparkles } from 'lucide-react';
import stagesBeforeVisit from '@/assets/stages-before-visit.jpg';
import stagesConsultation from '@/assets/stages-consultation.jpg';
import stagesSummary from '@/assets/stages-summary.jpg';
import stagesTreatments from '@/assets/stages-treatments.jpg';
import willowBg from '/willow.png';

const stages = [
  {
    number: '01',
    title: 'Przed Twoją Wizytą',
    subtitle: 'Faza Przygotowania',
    icon: FileText,
    image: stagesBeforeVisit,
    description: 'Po zarezerwowaniu konsultacji wysyłamy Ci szczegółowy przewodnik PDF e-mailem z instrukcjami przygotowania. Obejmuje to zrobienie zdjęć Twojej obecnej pielęgnacji skóry, przypomnienie poprzednich zabiegów i właściwe przygotowanie skóry przed konsultacją.',
  },
  {
    number: '02',
    title: 'Konsultacja Osobista',
    subtitle: 'Trójczęściowa Ocena',
    icon: Stethoscope,
    image: stagesConsultation,
    description: 'Twoja konsultacja składa się z trzech części: kompleksowego wywiadu kosmetycznego dotyczącego stanu i zdrowia Twojej skóry, zaawansowanej diagnostyki skóry przy użyciu urządzenia Observ 520x z 8 modułami diagnostycznymi oraz praktycznej oceny palpacyjnej jakości, gęstości i jędrności skóry.',
  },
  {
    number: '03',
    title: 'Podsumowanie Konsultacji',
    subtitle: 'Spersonalizowany Raport',
    icon: Mail,
    image: stagesSummary,
    description: 'W ciągu tygodnia otrzymujesz szczegółową wiadomość e-mail zawierającą: zdjęcia z Observ 520x z opisami, podsumowanie wywiadu z zaleceniami pielęgnacyjnymi, spersonalizowaną rutynę pielęgnacji twarzy, ciała i włosów, oraz uniwersalne wskazówki pielęgnacyjne dla Twojego typu skóry.',
  },
  {
    number: '04',
    title: 'Sesje Zabiegowe',
    subtitle: 'Spersonalizowana Opieka',
    icon: Sparkles,
    image: stagesTreatments,
    description: 'Po konsultacji (lub po niezbędnym okresie oczekiwania w przypadku wrażliwej skóry) rozpoczynamy zabiegi dostosowane specjalnie do potrzeb Twojej skóry. Sesje są planowane co 3-4 tygodnie dla optymalnych rezultatów.',
  },
];

const StageCard = ({ stage, index }: { stage: typeof stages[0]; index: number }) => {
  const { ref: stageRef } = useScrollReveal();
  const isEven = index % 2 === 0;

  return (
    <div
      ref={stageRef}
      className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-16 items-center`}
    >
      {/* Image */}
      <div className="w-full lg:w-1/2">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
          <img
            src={stage.image}
            alt={stage.title}
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />
          <div className="absolute top-6 left-6 bg-primary/90 text-primary-foreground px-4 py-2 rounded-full font-serif text-2xl">
            {stage.number}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="w-full lg:w-1/2 space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
            <stage.icon className="w-6 h-6 text-primary" />
          </div>
          <span className="text-primary/80 tracking-wider uppercase text-sm font-medium">
            {stage.subtitle}
          </span>
        </div>
        <h3 className="font-serif text-2xl md:text-4xl text-foreground">
          {stage.title}
        </h3>
        <p className="text-muted-foreground text-lg leading-relaxed">
          {stage.description}
        </p>
      </div>
    </div>
  );
};

const Stages = () => {
  const { ref: titleRef } = useScrollReveal();

  return (
    <section id="stages" className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src={willowBg}
          alt=""
          className="absolute top-10 right-0 w-64 md:w-96 opacity-[0.08] transform rotate-12"
        />
        <img
          src={willowBg}
          alt=""
          className="absolute bottom-20 left-0 w-48 md:w-80 opacity-[0.06] transform -rotate-12 scale-x-[-1]"
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div ref={titleRef} className="text-center mb-16 md:mb-20">
          <span className="text-primary/80 tracking-[0.3em] uppercase text-sm font-medium">
            Rozpocznij zmianę
          </span>
          <h2 className="text-3xl md:text-5xl text-foreground mt-4 mb-6">
            Etapy Współpracy
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Ustrukturyzowane podejście do osiągania celów dotyczących Twojej skóry, od pierwszej konsultacji do bieżących zabiegów.
          </p>
        </div>

        <div className="space-y-16 md:space-y-24">
          {stages.map((stage, index) => (
            <StageCard key={stage.number} stage={stage} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stages;
