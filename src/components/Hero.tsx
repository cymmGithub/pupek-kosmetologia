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

	const scrollToContact = () => {
		const element = document.querySelector("#contact");
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

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
					className='w-full h-full object-cover'
					poster='https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1920&q=80'
				>
					<source
						src='https://player.vimeo.com/external/434045526.hd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=174'
						type='video/mp4'
					/>
				</video>
				{/* Dark Overlay */}
				<div className='absolute inset-0 hero-overlay' />
			</div>

			{/* Content */}
			<div className='relative z-10 h-full flex flex-col items-center justify-center text-center px-4'>
				<h1
					className={`font-milven text-4xl md:text-6xl lg:text-7xl text-primary-foreground font-light leading-tight max-w-4xl transition-all duration-1000 delay-500 drop-shadow-lg ${
						isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
					}`}
				>
					Piekno zaczyna sie
					<span className='block italic mt-2'>Od Ciebie</span>
				</h1>

				<p
					className={`font-sans text-primary-foreground/80 mt-6 max-w-xl text-base md:text-lg font-light transition-all duration-1000 delay-700 ${
						isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
					}`}
				>
					Odkryj zabiegi skrojone na miarę Twoich potrzeb i poczuj się wyjątkowo
					we własnej skórze.
				</p>

				<div
					className={`mt-10 flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-900 ${
						isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
					}`}
				>
					<Button
						variant='outline'
						size='lg'
						className='bg-transparent border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 hover:border-primary-foreground px-8 py-6 text-sm tracking-wider'
						onClick={scrollToContact}
					>
						UMÓW KONSULTACJĘ
					</Button>
					<Button
						variant='ghost'
						size='lg'
						className='text-primary-foreground hover:bg-primary-foreground/10 px-8 py-6 text-sm tracking-wider'
						onClick={scrollToServices}
					>
						POZNAJ ZABIEGI
					</Button>
				</div>
			</div>

			{/* Scroll Indicator */}
			<div
				className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-1000 ${
					isLoaded ? "opacity-100" : "opacity-0"
				}`}
			>
				<button
					onClick={scrollToServices}
					className='flex flex-col items-center text-primary-foreground/60 hover:text-primary-foreground transition-colors'
					aria-label='Przewiń w dół'
				>
					<span className='text-xs tracking-widest mb-2'>PRZEWIŃ</span>
					<ChevronDown className='h-5 w-5 animate-bounce' />
				</button>
			</div>
		</section>
	);
};

export default Hero;
