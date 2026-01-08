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
					playsInline
					preload='auto'
					className='w-full h-full object-cover'
				>
					<source
						src='/6153801-hd_1366_720_30fps.mp4'
						type='video/mp4'
					/>
				</video>
				{/* Dark Overlay */}
				<div className='absolute inset-0 hero-overlay' />
			</div>

			{/* Content */}
			<div className='relative z-10 h-full flex flex-col items-center justify-center text-center px-4'>
				<h1
					className={`font-the-seasons-regular text-4xl md:text-6xl lg:text-7xl text-primary-foreground font-light leading-tight max-w-4xl transition-all duration-1000 delay-500 drop-shadow-lg ${
						isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
					}`}
				>
					Zadbaj o zdrowie
					<span className='block italic mt-2'>swojej skóry</span>
				</h1>

				<div
					className={`mt-10 transition-all duration-1000 delay-900 ${
						isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
					}`}
				>
					<Button
						variant='outline'
						size='lg'
						className='bg-transparent border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 hover:border-primary-foreground'
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
