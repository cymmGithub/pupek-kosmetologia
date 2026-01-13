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
import { openTallyForm } from "@/lib/tally";

interface ServiceContent {
	title: string;
	subtitle: string;
	description: string | null;
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
			"https://images.pexels.com/photos/3762762/pexels-photo-3762762.jpeg?auto=compress&cs=tinysrgb&w=1920",
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
		description: null,
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
				],
			},
		],
	},
	"terapia-przebarwien": {
		title: "Terapia przebarwień",
		subtitle:
			"Specjalistyczny zabieg wyrównujący koloryt i redukujący przebarwienia",
		description: "",
		duration: "ok. 1h",
		price: "300-350zł",
		image:
			"https://images.pexels.com/photos/3762100/pexels-photo-3762100.jpeg?auto=compress&cs=tinysrgb&w=1920",
		sections: [
			{
				title: "Czym jest terapia przebarwień?",
				content: [
					"Terapia przebarwień polega na określeniu głębokości przebarwień, znalezieniu przyczyny ich występowania, niwelowaniu przebarwień istniejących oraz zapobieganiu tworzeniu nowych.",
					"Podczas pracy nad tym rodzajem problemu bardzo ważny jest właściwy dobór pielęgnacji domowej, aby podtrzymać efekty terapii gabinetowej i zapobiec powstawaniu nowych przebarwień.",
				],
			},
			{
				title: "Jak działają substancje zabiegowe?",
				content: [
					"Substancje z których korzystam podczas zabiegów gabinetowych działają poprzez różne mechanizmy, które wspólnie prowadzą do widocznej redukcji przebarwień:",
				],
				benefits: [
					"Hamowanie nadmiernej produkcji barwnika",
					"Blokowanie przemieszczania się barwnika do wyższych warstw naskórka",
					"Usuwanie już powstałych przebarwień",
					"Redukcję stanu zapalnego",
					"Działanie antyoksydacyjne",
				],
			},
		],
	},
	"terapia-anti-aging": {
		title: "Terapia anti aging",
		subtitle:
			"Zaawansowana terapia przeciwstarzeniowa redukująca widoczność zmarszczek",
		description: null,
		duration: "ok. 1h",
		price: "300-350zł",
		image:
			"https://images.pexels.com/photos/3762771/pexels-photo-3762771.jpeg?auto=compress&cs=tinysrgb&w=1920",
		sections: [
			{
				title: "Czym jest terapia anti-aging?",
				content: [
					"Terapia anti-aging jest kompleksową terapią przeciwstarzeniową, która łączy w sobie różne techniki i składniki aktywne, aby skutecznie redukować widoczność zmarszczek i poprawiać ogólną kondycję skóry.",
				],
			},
			{
				title: "Co obejmuje terapia?",
				content: [
					"Podczas terapii skupiamy się na kompleksowym podejściu do odmłodzenia skóry:",
				],
				benefits: [
					"Wyrównanie kolorytu skóry",
					"Przyspieszenie odnowy komórkowej",
					"Wygładzenie struktury naskórka",
					"Głębokie nawilżenie",
					"Stymulację produkcji kolagenu",
				],
			},
			{
				title: "Pielęgnacja domowa",
				content: [
					"W terapii domowej przeważają składniki chroniące przed fotostarzeniem, regenerujące, rozjaśniające i pogrubiające skórę właściwą. Właściwa pielęgnacja domowa jest kluczowa dla utrzymania efektów zabiegów gabinetowych.",
				],
			},
		],
	},
	"zabieg-nawilzajacy-regenerujacy": {
		title: "Zabieg nawilżający/regenerujący",
		subtitle:
			"Głębokie nawilżenie i regeneracja skóry",
		description: null,
		duration: "ok. 1h",
		price: "250-350zł",
		image:
			"https://images.pexels.com/photos/3762646/pexels-photo-3762646.jpeg?auto=compress&cs=tinysrgb&w=1920",
		sections: [
			{
				title: "Czym jest zabieg nawilżający/regenerujący?",
				content: [
					"Jest to zabieg od którego najczęściej rozpoczyna się pracę z jakimkolwiek problemem skórnym. Stanowi fundament skutecznej terapii kosmetologicznej.",
				],
			},
			{
				title: "Dlaczego przygotowanie skóry jest ważne?",
				content: [
					"Dzięki właściwemu przygotowaniu skóry przed bardziej agresywnymi terapiami:",
				],
				benefits: [
					"Redukujemy możliwość wystąpienia podrażnień po zabiegu",
					"Usprawniamy regenerację pozabiegową",
					"Minimalizujemy ryzyko wystąpienia powikłań",
				],
			},
			{
				title: "Dodatkowe korzyści",
				content: [
					"Często sam zabieg nawilżający/regenerujący potrafi przynieść istotne korzyści w redukcji trądziku, widoczności płytkich zmarszczek oraz poprawy kolorytu skóry.",
				],
			},
		],
	},
	"zabieg-relaksacyjny": {
		title: "Zabieg relaksacyjny",
		subtitle:
			"Relaksujący zabieg łączący pielęgnację skóry z chwilą odprężenia i spokoju",
		description: null,
		duration: "ok. 1,5h",
		price: "350-400zł",
		image:
			"https://images.pexels.com/photos/3762562/pexels-photo-3762562.jpeg?auto=compress&cs=tinysrgb&w=1920",
		sections: [
			{
				title: "Czym jest zabieg relaksacyjny?",
				content: [
					"Jest to delikatny zabieg odświeżający wygląd Twojej skóry ale też działający aktywnie na jej aktualne potrzeby. Obszar zabiegowy obejmuje twarz, szyję i dekolt, zapewniając kompleksową pielęgnację i głęboki relaks.",
				],
			},
			{
				title: "Co obejmuje zabieg?",
				content: ["Zabieg obejmuje pełen rytuał pielęgnacyjny:"],
				benefits: [
					"Demakijaż",
					"Oczyszczanie",
					"Część aktywną zabiegu",
					"Maskę (algową, w płachcie bądź kremie)",
					"Delikatny masaż skóry głowy, szyi i dekoltu",
					"Nałożenie pielęgnacji pozabiegowej",
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
	}, [slug]);

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
					<div className='absolute inset-0 bg-gradient-to-b from-hero-overlay/60 via-hero-overlay/70 to-hero-overlay/90' />

					{/* Vignette overlay - darkens edges naturally */}
					<div
						className='absolute inset-0'
						style={{
							background:
								"radial-gradient(ellipse at center bottom, transparent 20%, rgba(0, 0, 0, 0.3) 70%, rgba(0, 0, 0, 0.5) 100%)",
						}}
					/>

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
						<div className='overflow-hidden pb-4'>
							<h1
								className={`font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white font-light leading-tight transition-all duration-1000 ${
									heroVisible
										? "opacity-100 translate-y-0"
										: "opacity-0 translate-y-12"
								}`}
								style={{
									textShadow:
										"0 2px 4px rgba(0, 0, 0, 0.2), 0 4px 8px rgba(0, 0, 0, 0.15)",
								}}
							>
								{service.title}
							</h1>
						</div>

						{/* Subtitle */}
						<div className='overflow-hidden pb-4'>
							<p
								className={`text-white/90 text-lg md:text-xl font-light transition-all duration-1000 delay-200 ${
									heroVisible
										? "opacity-100 translate-y-0"
										: "opacity-0 translate-y-8"
								}`}
								style={{
									textShadow:
										"0 2px 4px rgba(0, 0, 0, 0.2), 0 4px 8px rgba(0, 0, 0, 0.35)",
								}}
							>
								{service.subtitle}
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Quick Info Bar */}
			<section className='relative -mt-16 mb-8'>
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
								<Button
									size='lg'
									className='bg-primary hover:bg-primary/90 text-primary-foreground font-light px-8'
									onClick={openTallyForm}
								>
									Umów Konsultację
								</Button>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Main Content */}
			<section className='py-12 md:py-16'>
				<div className='container mx-auto px-4 lg:px-8'>
					<div ref={contentRef} className='max-w-4xl mx-auto'>
						{/* Description */}
						{service.description ? (
							<div className='mb-16'>
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
								{/* Decorative line */}
								<div className='w-16 h-px bg-gradient-to-r from-primary/50 to-transparent mb-0 mt-12' />
							</div>
						) : null}

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
