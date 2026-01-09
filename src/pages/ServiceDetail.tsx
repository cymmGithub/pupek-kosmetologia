import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
	ArrowLeft,
	Clock,
	Sparkles,
	CheckCircle2,
	AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface ServiceContent {
	title: string;
	subtitle: string;
	description: string;
	duration: string;
	price: string;
	priceNote?: string;
	image: string;
	sections: {
		title: string;
		content: string[];
		benefits?: string[];
	}[];
	importantNote?: {
		title: string;
		content: string[];
	};
	benefits?: string[];
}

const servicesContent: Record<string, ServiceContent> = {
	"konsultacja-kosmetologiczna": {
		title: "Konsultacja kosmetologiczna",
		subtitle: "Poznaj potrzeby swojej skóry",
		description:
			"Analiza skóry za pomocą urządzenia Observ520x + wywiad + zalecenia pielęgnacyjne",
		duration: "1-1,5h",
		price: "250zł",
		priceNote: "*z zabiegiem 2-3h 500zł",
		image:
			"https://images.pexels.com/photos/6663361/pexels-photo-6663361.jpeg?auto=compress&cs=tinysrgb&w=1920",
		sections: [
			{
				title: "Czym jest konsultacja kosmetologiczna?",
				content: [
					"Konsultacja kosmetologiczna odbywa się stacjonarnie w gabinecie. Podczas konsultacji zadaję pytania oraz wykonuję analizę skóry. Kroki te są niezbędne do przeprowadzenia efektywnej terapii zabiegowej, wykluczenia ewentualnych przyczyn problemu skórnego i ułożenia właściwej pielęgnacji domowej.",
					"Konsultacja może być osobną usługą, bądź być połączona z zabiegiem podczas jednej wizyty.",
				],
			},
			{
				title: "Jak przebiega wizyta?",
				content: [
					"Podczas spotkania przeprowadzam szczegółowy wywiad dotyczący stanu Twojej skóry, stosowanej pielęgnacji oraz stylu życia. Następnie wykorzystuję zaawansowane urządzenie Observ520x do profesjonalnej analizy skóry.",
					"Na podstawie zebranych informacji i analizy, opracowuję indywidualny plan pielęgnacyjny oraz proponuję odpowiednie zabiegi terapeutyczne.",
				],
			},
		],
		benefits: [
			"Profesjonalna analiza skóry przy użyciu urządzenia Observ520x",
			"Indywidualnie dobrane zalecenia pielęgnacyjne",
			"Identyfikacja problemów skórnych i ich przyczyn",
			"Plan działania i rekomendacje zabiegowe",
			"Możliwość połączenia z zabiegiem podczas jednej wizyty",
		],
	},
	"terapia-tradzikowa": {
		title: "Terapia trądzikowa",
		subtitle: "Skuteczne rozwiązanie problemu trądziku",
		description: "Terapia kosmetologiczna dostosowana do potrzeb Twojej skóry.",
		duration: "ok. 1h",
		price: "250-350zł",
		image:
			"https://images.pexels.com/photos/3373721/pexels-photo-3373721.jpeg?auto=compress&cs=tinysrgb&w=1920",
		sections: [
			{
				title: "Czym jest terapia trądzikowa?",
				content: [
					"Podczas terapii trądziku głównym celem jest określenie przyczyny jego występowania, ułożenie odpowiedniej terapii gabinetowej oraz dobranie pielęgnacji domowej wspierającej zabiegi gabinetowe.",
					"Zabiegi nie są dobierane z góry. Podczas każdej wizyty określam potrzeby skóry i dopasowuję zabieg dobrany do aktualnej kondycji skóry.",
				],
			},
			{
				title: "Jak przebiega terapia?",
				content: [
					"W zależności od stanu skóry i stopnia zaawansowania trądziku podczas terapii korzystam z wybranych składników o działaniu:",
				],
				benefits: [
					"Odbudowującym barierę hydrolipidową",
					"Regenerującym",
					"Zmniejszającym stan zapalny",
					"Złuszczającym naskórek",
					"Rozjaśniającym przebarwienia pozapalne",
					"Indywidualnie dostosowanym do aktualnej kondycji skóry",
				],
			},
		],
	},
};

const ServiceDetail = () => {
	const { slug } = useParams<{ slug: string }>();
	const service = slug ? servicesContent[slug] : null;

	const { ref: heroRef, isVisible: heroVisible } = useScrollReveal();
	const { ref: contentRef, isVisible: contentVisible } = useScrollReveal(0.1);
	const { ref: benefitsRef, isVisible: benefitsVisible } = useScrollReveal(0.1);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	if (!service) {
		return (
			<div className='min-h-screen flex items-center justify-center'>
				<div className='text-center'>
					<h1 className='text-4xl font-serif mb-4'>
						Usługa nie została znaleziona
					</h1>
					<Link to='/'>
						<Button>Powrót do strony głównej</Button>
					</Link>
				</div>
			</div>
		);
	}

	return (
		<div className='min-h-screen bg-background'>
			<Header />

			{/* Hero Section with Image */}
			<section className='relative h-[60vh] md:h-[70vh] overflow-hidden'>
				{/* Background Image */}
				<div className='absolute inset-0'>
					<img
						src={service.image}
						alt={service.title}
						className='w-full h-full object-cover'
					/>
					{/* Overlay with sophisticated gradient */}
					<div className='absolute inset-0 bg-gradient-to-b from-hero-overlay/70 via-hero-overlay/50 to-background' />

					{/* Grain texture */}
					<div className='absolute inset-0 bg-noise opacity-[0.03] mix-blend-overlay' />
				</div>

				{/* Hero Content */}
				<div className='relative h-full container mx-auto px-4 lg:px-8 flex items-end pb-16 md:pb-24'>
					<div ref={heroRef} className='max-w-3xl'>
						{/* Back button */}
						<Link
							to='/#services'
							className={`inline-flex items-center gap-2 text-white/80 hover:text-white transition-all duration-500 mb-8 group ${
								heroVisible
									? "opacity-100 translate-y-0"
									: "opacity-0 translate-y-4"
							}`}
						>
							<ArrowLeft className='w-4 h-4 transition-transform group-hover:-translate-x-1' />
							<span className='text-sm font-bold'>Powrót do zabiegów</span>
						</Link>

						{/* Title */}
						<div className='overflow-hidden mb-4'>
							<h1
								className={`font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white font-light leading-tight transition-all duration-1000 ${
									heroVisible
										? "opacity-100 translate-y-0"
										: "opacity-0 translate-y-12"
								}`}
							>
								{service.title}
							</h1>
						</div>

						{/* Subtitle */}
						<div className='overflow-hidden'>
							<p
								className={`text-white/90 text-lg md:text-xl font-light transition-all duration-1000 delay-200 ${
									heroVisible
										? "opacity-100 translate-y-0"
										: "opacity-0 translate-y-8"
								}`}
							>
								{service.subtitle}
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Quick Info Bar */}
			<section className='relative -mt-16 mb-24'>
				<div className='container mx-auto px-4 lg:px-8'>
					<div
						className={`bg-card/95 backdrop-blur-xl border border-border/50 rounded-2xl p-6 md:p-8 max-w-4xl mx-auto shadow-2xl transition-all duration-1000 ${
							heroVisible
								? "opacity-100 translate-y-0"
								: "opacity-0 translate-y-12"
						}`}
						style={{ transitionDelay: "400ms" }}
					>
						<div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
							{/* Duration */}
							<div className='flex items-start gap-4 p-4 rounded-xl bg-secondary/30 transition-colors hover:bg-secondary/50'>
								<div className='p-2 rounded-lg bg-primary/15'>
									<Clock className='w-5 h-5 text-primary' />
								</div>
								<div>
									<p className='text-sm text-foreground/60 mb-1'>
										Czas trwania
									</p>
									<p className='font-medium text-foreground'>
										{service.duration}
									</p>
								</div>
							</div>

							{/* Price */}
							<div className='flex items-start gap-4 p-4 rounded-xl bg-secondary/30 transition-colors hover:bg-secondary/50'>
								<div className='p-2 rounded-lg bg-primary/15'>
									<Sparkles className='w-5 h-5 text-primary' />
								</div>
								<div>
									<p className='text-sm text-foreground/60 mb-1'>Cena</p>
									<p className='font-medium text-foreground'>{service.price}</p>
									{service.priceNote && (
										<p className='font-bold text-xs text-foreground/50 italic mt-1'>
											{service.priceNote}
										</p>
									)}
								</div>
							</div>

							{/* CTA */}
							<div className='flex items-center justify-center md:justify-end'>
								<Link to='/#contact'>
									<Button
										size='lg'
										className='bg-primary hover:bg-primary/90 text-primary-foreground font-light px-8'
									>
										Umów wizytę
									</Button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Main Content */}
			<section className='py-12 md:py-16'>
				<div className='container mx-auto px-4 lg:px-8'>
					<div className='max-w-4xl mx-auto'>
						{/* Description */}
						<div ref={contentRef} className='mb-16'>
							<div
								className={`prose prose-lg max-w-none transition-all duration-1000 ${
									contentVisible
										? "opacity-100 translate-y-0"
										: "opacity-0 translate-y-12"
								}`}
							>
								<p className='text-xl md:text-2xl text-foreground/70 font-light leading-relaxed'>
									{service.description}
								</p>
							</div>
						</div>

						{/* Content Sections */}
						{service.sections.map((section, index) => (
							<div
								key={section.title}
								className={`mb-16 transition-all duration-1000 ${
									contentVisible
										? "opacity-100 translate-y-0"
										: "opacity-0 translate-y-12"
								}`}
								style={{ transitionDelay: `${(index + 1) * 150}ms` }}
							>
								{/* Decorative line */}
								<div className='w-16 h-px bg-gradient-to-r from-primary/50 to-transparent mb-6' />

								<h2 className='font-serif text-3xl md:text-4xl text-foreground mb-6 font-light'>
									{section.title}
								</h2>

								<div className='space-y-4'>
									{section.content.map((paragraph, pIndex) => (
										<p
											key={pIndex}
											className='text-foreground/70 text-base md:text-lg leading-relaxed font-light'
										>
											{paragraph}
										</p>
									))}
								</div>

								{/* Benefits list within section if it exists */}
								{section.benefits && (
									<ul className='mt-6 space-y-3'>
										{section.benefits.map((benefit, bIndex) => (
											<li
												key={bIndex}
												className='flex items-start gap-3 text-foreground/70 text-base md:text-lg leading-relaxed font-light'
											>
												<CheckCircle2 className='w-5 h-5 text-primary flex-shrink-0 mt-1' />
												<span>{benefit}</span>
											</li>
										))}
									</ul>
								)}
							</div>
						))}

						{/* Important Note Section - Emphasized */}
						{service.importantNote && (
							<div
								className={`mb-16 relative transition-all duration-1000 ${
									contentVisible
										? "opacity-100 translate-y-0"
										: "opacity-0 translate-y-12"
								}`}
								style={{
									transitionDelay: `${(service.sections.length + 1) * 150}ms`,
								}}
							>
								<div className='relative border-2 border-primary/30 bg-gradient-to-br from-primary/5 via-primary/3 to-accent/5 rounded-2xl p-8 md:p-10 overflow-hidden'>
									{/* Decorative corner accent */}
									<div className='absolute top-0 left-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl' />
									<div className='absolute bottom-0 right-0 w-40 h-40 bg-primary/8 rounded-full blur-3xl' />

									{/* Content */}
									<div className='relative'>
										{/* Title with icon */}
										<div className='flex items-start gap-4 mb-6'>
											<div className='p-3 rounded-xl bg-primary/15 flex-shrink-0'>
												<AlertCircle className='w-7 h-7 text-primary' />
											</div>
											<h2 className='font-serif text-3xl md:text-4xl text-foreground font-light leading-tight pt-1'>
												{service.importantNote.title}
											</h2>
										</div>

										{/* Content */}
										<div className='space-y-4 ml-0 md:ml-16'>
											{service.importantNote.content.map(
												(paragraph, pIndex) => (
													<p
														key={pIndex}
														className='text-foreground/80 text-base md:text-lg leading-relaxed font-normal'
													>
														{paragraph}
													</p>
												)
											)}
										</div>
									</div>
								</div>
							</div>
						)}

						{/* Benefits Section */}
						{service.benefits ? (
							<div
								ref={benefitsRef}
								className={`bg-gradient-to-br from-secondary/30 via-secondary/20 to-accent/20 rounded-2xl p-8 md:p-12 border border-border/50 relative overflow-hidden transition-all duration-1000 ${
									benefitsVisible
										? "opacity-100 translate-y-0"
										: "opacity-0 translate-y-12"
								}`}
							>
								{/* Background decoration */}
								<div className='absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl' />

								<div className='relative'>
									<div className='flex items-center gap-3 mb-8'>
										<div className='p-2 rounded-lg bg-primary/15'>
											<Sparkles className='w-6 h-6 text-primary' />
										</div>
										<h2 className='font-serif text-2xl md:text-3xl text-foreground font-light'>
											Co zyskujesz?
										</h2>
									</div>

									<ul className='space-y-4'>
										{service.benefits.map((benefit, index) => (
											<li
												key={index}
												className={`flex items-start gap-4 transition-all duration-700 ${
													benefitsVisible
														? "opacity-100 translate-x-0"
														: "opacity-0 -translate-x-4"
												}`}
												style={{ transitionDelay: `${index * 100 + 200}ms` }}
											>
												<CheckCircle2 className='w-5 h-5 text-primary flex-shrink-0 mt-1' />
												<span className='text-foreground/80 font-light leading-relaxed'>
													{benefit}
												</span>
											</li>
										))}
									</ul>
								</div>
							</div>
						) : null}
					</div>
				</div>
			</section>

			<Footer />
		</div>
	);
};

export default ServiceDetail;
