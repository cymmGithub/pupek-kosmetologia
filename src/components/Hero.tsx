import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		setIsLoaded(true);
	}, []);

	const scrollToServices = () => {
		const element = document.querySelector("#services");
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	// Split heading into two lines for elegant typography
	const headingLine1Words = ["Zadbaj", "o", "zdrowie"];
	const headingLine2Words = ["swojej", "skóry"];

	return (
		<section
			id='home'
			className='relative h-screen min-h-[600px] overflow-hidden'
		>
			{/* Video Background */}
			<div className='absolute inset-0'>
				<video
					autoPlay
					muted
					loop
					playsInline
					preload='metadata'
					poster='/hero-poster.jpg'
					className='w-full h-full object-cover scale-110'
				>
					<source
						src='/6153801-hd_1366_720_30fps.mp4'
						type='video/mp4'
					/>
				</video>

				{/* Multi-layered atmospheric overlay */}
				<div className='absolute inset-0 hero-overlay-enhanced' />
				<div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/20' />

				{/* Decorative gradient orbs for depth */}
				<div className='absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float-slow' />
				<div className='absolute bottom-1/4 -right-32 w-80 h-80 bg-accent/15 rounded-full blur-3xl animate-float-slower' />
			</div>

			{/* Grain texture overlay for luxury feel */}
			<div className='absolute inset-0 bg-noise opacity-[0.03] mix-blend-overlay pointer-events-none z-[5]' />

			{/* Content */}
			<div className='relative z-10 h-full flex flex-col items-center justify-center text-center px-4'>
				{/* Main Heading - Staggered word animation with two-line layout */}
				<div className='mb-2 overflow-hidden'>
					<h1 className='text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-light text-primary-foreground leading-tight tracking-tight'>
						{/* First line */}
						<div className='mb-2 italic'>
							{headingLine1Words.map((word, index) => (
								<span
									key={index}
									className={`inline-block mx-1 md:mx-2 transition-all duration-1000 ease-out ${
										isLoaded
											? "opacity-100 translate-y-0"
											: "opacity-0 translate-y-12"
									}`}
									style={{
										transitionDelay: `${300 + index * 150}ms`,
										textShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
									}}
								>
									{word}
								</span>
							))}
						</div>
						{/* Second line - italic */}
						<div className='italic mb-2'>
							{headingLine2Words.map((word, index) => (
								<span
									key={index}
									className={`inline-block mx-1 md:mx-2 transition-all duration-1000 ease-out ${
										isLoaded
											? "opacity-100 translate-y-0"
											: "opacity-0 translate-y-12"
									}`}
									style={{
										transitionDelay: `${300 + (headingLine1Words.length + index) * 150}ms`,
										textShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
									}}
								>
									{word}
								</span>
							))}
						</div>
					</h1>
				</div>

				{/* Decorative line accent */}
				<div
					className={`w-24 h-px bg-gradient-to-r from-transparent via-primary-foreground/60 to-transparent mb-8 transition-all duration-1000 ${
						isLoaded ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
					}`}
					style={{ transitionDelay: '1100ms' }}
				/>

				{/* Tagline with enhanced typography */}
				<p
					className={`font-sans text-primary-foreground/85 max-w-2xl text-sm sm:text-base md:text-lg lg:text-xl font-light leading-relaxed tracking-wide transition-all duration-1000 ${
						isLoaded ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-8 blur-sm"
					}`}
					style={{
						transitionDelay: '1200ms',
						textShadow: '0 2px 10px rgba(0, 0, 0, 0.2)'
					}}
				>
					Zacznij działać świadomie i wprowadzać zmiany, <br className='hidden sm:block' />
					które pozwolą Ci uzyskać realne rezultaty.
				</p>

				{/* CTA Button with enhanced styling */}
				<div
					className={`mt-12 transition-all duration-1000 ${
						isLoaded ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"
					}`}
					style={{ transitionDelay: '1400ms' }}
				>
					<Button
						variant='outline'
						size='lg'
						className='group relative bg-transparent border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:border-primary-foreground hover:scale-105 transition-all duration-300 text-sm tracking-[0.2em] px-8 py-6 overflow-hidden'
						onClick={scrollToServices}
					>
						{/* Button shine effect */}
						<span className='absolute inset-0 bg-gradient-to-r from-transparent via-primary-foreground/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000' />
						<span className='relative'>POZNAJ ZABIEGI</span>
					</Button>
				</div>
			</div>

			{/* Scroll Indicator with enhanced design */}
			<div
				className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-1000 ${
					isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
				}`}
				style={{ transitionDelay: '1600ms' }}
			>
				<button
					onClick={scrollToServices}
					className='group flex flex-col items-center text-primary-foreground/50 hover:text-primary-foreground transition-all duration-300'
					aria-label='Przewiń w dół'
				>
					<span className='text-[10px] tracking-[0.3em] mb-3 font-light uppercase'>Przewiń</span>
					<div className='relative'>
						<div className='absolute inset-0 bg-primary-foreground/10 rounded-full blur-md scale-150 group-hover:scale-200 transition-transform duration-500' />
						<ChevronDown className='relative h-5 w-5 animate-float' />
					</div>
				</button>
			</div>
		</section>
	);
};

export default Hero;
