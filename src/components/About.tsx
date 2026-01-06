import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Button } from "@/components/ui/button";
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
						className={`max-w-3xl mx-auto text-center transition-all duration-700 ${
							contentVisible
								? "opacity-100 translate-y-0"
								: "opacity-0 translate-y-8"
						}`}
					>

						<h2 className='font-serif text-4xl md:text-5xl lg:text-6xl text-primary-foreground font-light italic leading-tight'>
							Od Kobiety, dla Kobiet
						</h2>
						<p className='mt-8 text-primary-foreground/85 font-light text-lg leading-relaxed'>
							Wierzę, że dbanie o siebie to coś więcej niż tylko zabiegi – to czas na oddech i odkrycie swojego naturalnego blasku. Stworzyłam to kameralne miejsce z czystej pasji do kosmetologii, aby zaoferować Ci to, czego często brakuje w dużych klinikach: stuprocentową uwagę i pełne zaangażowanie.
						</p>
						<p className='mt-8 text-primary-foreground/85 font-light text-lg leading-relaxed'>
							Każde spotkanie traktuję indywidualnie, łącząc świeżą wiedzę z uważnością na Twoje potrzeby. Moim celem nie jest zmiana Twoich rysów, ale wydobycie tego, co w Tobie najpiękniejsze, w atmosferze pełnego relaksu i zaufania.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
