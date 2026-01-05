import { useScrollReveal } from '@/hooks/useScrollReveal';
import { FileText, Stethoscope, Mail, Sparkles } from 'lucide-react';
import stagesBeforeVisit from '@/assets/stages-before-visit.jpg';
import stagesConsultation from '@/assets/stages-consultation.jpg';
import stagesSummary from '@/assets/stages-summary.jpg';
import stagesTreatments from '@/assets/stages-treatments.jpg';

const stages = [
  {
    number: '01',
    title: 'Before Your Visit',
    subtitle: 'Preparation Phase',
    icon: FileText,
    image: stagesBeforeVisit,
    description: 'Once you book your consultation, we send you a detailed PDF guide via email with preparation instructions. This includes photographing your current skincare routine, recalling previous treatments, and properly preparing your skin before the consultation.',
  },
  {
    number: '02',
    title: 'In-Person Consultation',
    subtitle: 'Three-Part Assessment',
    icon: Stethoscope,
    image: stagesConsultation,
    description: 'Your consultation consists of three parts: a comprehensive cosmetic interview about your skin condition and health, advanced skin diagnostics using the Observ 520x device with 8 diagnostic modules, and a hands-on palpation assessment of skin quality, density, and firmness.',
  },
  {
    number: '03',
    title: 'Consultation Summary',
    subtitle: 'Personalized Report',
    icon: Mail,
    image: stagesSummary,
    description: 'Within a week, you receive a detailed email containing: Observ 520x photos with descriptions, interview summary with care recommendations, tailored skincare routine for face, body and hair, plus universal skincare tips for your skin type.',
  },
  {
    number: '04',
    title: 'Treatment Sessions',
    subtitle: 'Customized Care',
    icon: Sparkles,
    image: stagesTreatments,
    description: 'Following consultation (or after a necessary waiting period for sensitive skin), we begin treatments tailored specifically to your skin\'s needs. Sessions are scheduled every 3-4 weeks for optimal results.',
  },
];

const StageCard = ({ stage, index }: { stage: typeof stages[0]; index: number }) => {
  const stageRef = useScrollReveal();
  const isEven = index % 2 === 0;

  return (
    <div
      ref={stageRef.ref}
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
  const titleRef = useScrollReveal();

  return (
    <section id="stages" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div ref={titleRef.ref} className="text-center mb-16 md:mb-20">
          <span className="text-primary/80 tracking-[0.3em] uppercase text-sm font-medium">
            Your Journey
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-foreground mt-4 mb-6">
            Stages of Cooperation
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A structured approach to achieving your skin goals, from initial consultation to ongoing treatments.
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
