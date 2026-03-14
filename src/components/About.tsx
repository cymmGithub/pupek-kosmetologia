import { useScrollReveal } from "@/hooks/useScrollReveal";
import { P } from "@/components/Text";
import parallaxBg from "@/assets/parallax-bg.jpg";

const About = () => {
	const { ref: contentRef, isVisible: contentVisible } = useScrollReveal();

	return (
		<section id='about' className='relative overflow-hidden'>
			{/* Parallax Background */}
			<div
				className='parallax absolute inset-0 z-0'
				style={{
					backgroundImage: `url(${parallaxBg})`,
				}}
			/>
			{/* Overlay */}
			<div className='absolute inset-0 bg-primary/85 z-10' />

			{/* Content */}
			<div className='relative z-20 py-24 md:py-32'>
				<div className='container mx-auto px-4 lg:px-8'>
					<div
						ref={contentRef}
						className='max-w-3xl mx-auto text-center'
					>

						<h2 className={`font-serif text-4xl md:text-5xl lg:text-6xl text-primary-foreground font-light italic leading-tight transition-all duration-1000 ${
							contentVisible
								? "opacity-100 translate-y-0"
								: "opacity-0 translate-y-12"
						}`}
						style={{ transitionTimingFunction: 'var(--ease-out-expo)' }}
						>
							Od Kobiety, dla Kobiet
						</h2>

						{/* Decorative line */}
						<div
							className={`w-20 h-px bg-gradient-to-r from-transparent via-primary-foreground/40 to-transparent mx-auto mt-8 mb-8 transition-all duration-1000 delay-200 ${
								contentVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
							}`}
						/>

						<P className={`text-primary-foreground/85 font-light text-lg leading-relaxed transition-all duration-1000 delay-300 ${
							contentVisible
								? "opacity-100 translate-y-0"
								: "opacity-0 translate-y-8"
						}`}
						style={{ transitionTimingFunction: 'var(--ease-out-quart)' }}
						>
							Wierzę, że dbanie o siebie to coś więcej niż tylko zabiegi – to czas na oddech i odkrycie swojego naturalnego blasku. Stworzyłam to kameralne miejsce z czystej pasji do kosmetologii, aby zaoferować Ci to, czego często brakuje w dużych klinikach: stuprocentową uwagę i pełne zaangażowanie.
						</P>
						<P className={`mt-8 text-primary-foreground/85 font-light text-lg leading-relaxed transition-all duration-1000 delay-500 ${
							contentVisible
								? "opacity-100 translate-y-0"
								: "opacity-0 translate-y-8"
						}`}
						style={{ transitionTimingFunction: 'var(--ease-out-quart)' }}
						>
							Każde spotkanie traktuję indywidualnie, łącząc świeżą wiedzę z uważnością na Twoje potrzeby. Moim celem nie jest zmiana Twoich rysów, ale wydobycie tego, co w Tobie najpiękniejsze, w atmosferze pełnego relaksu i zaufania.
						</P>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
