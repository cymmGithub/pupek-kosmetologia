import { useScrollReveal } from "@/hooks/useScrollReveal";
import parallaxBg from "@/assets/parallax-bg.jpg";
import voucherImage from "/voucher.jpg";

const Voucher = () => {
	const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();
	const { ref: imageRef, isVisible: imageVisible } = useScrollReveal();
	const { ref: textRef, isVisible: textVisible } = useScrollReveal();

	return (
		<section id='voucher' className='relative overflow-hidden'>
			{/* Parallax Background */}
			<div
				className='parallax absolute inset-0 z-0'
				style={{
					backgroundImage: `url(${parallaxBg})`,
				}}
			/>
			{/* Enhanced Overlay with gradient */}
			<div className='absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/85 to-primary/80 z-10' />

			{/* Content */}
			<div className='relative z-20 py-24 md:py-32'>
				<div className='container mx-auto px-4 lg:px-8'>
					<div className='max-w-6xl mx-auto'>
						{/* Enhanced Title */}
						<div ref={titleRef} className='text-center mb-16 md:mb-20'>
							<div className='overflow-hidden mb-6'>
								<h2
									className={`font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-primary-foreground font-light italic leading-tight transition-all duration-1000 ${
										titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
									}`}
								>
									Vouchery Prezentowe
								</h2>
							</div>

							{/* Decorative line */}
							<div
								className={`w-24 h-px bg-gradient-to-r from-transparent via-primary-foreground/50 to-transparent mx-auto transition-all duration-1000 delay-200 ${
									titleVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
								}`}
							/>
						</div>

						<div className='flex flex-col lg:flex-row gap-12 lg:gap-16 items-center'>
							{/* Enhanced Voucher Image */}
							<div
								ref={imageRef}
								className={`w-full lg:w-1/2 flex justify-center lg:justify-end transition-all duration-1000 delay-300 ${
									imageVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
								}`}
							>
								<div className='relative group'>
									{/* Decorative glow */}
									<div className='absolute -inset-4 bg-gradient-to-br from-primary-foreground/20 via-accent/20 to-primary-foreground/20 rounded-2xl blur-2xl opacity-50 group-hover:opacity-100 transition-all duration-700' />

									{/* Image container */}
									<div className='relative overflow-hidden rounded-xl shadow-2xl'>
										<img
											src={voucherImage}
											alt='Voucher prezentowy Pupek Kosmetologia'
											className='max-w-full h-auto transition-transform duration-700 group-hover:scale-105'
										/>
										{/* Subtle overlay on hover */}
										<div className='absolute inset-0 bg-gradient-to-t from-primary-foreground/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700' />
									</div>
								</div>
							</div>

							{/* Enhanced Promotional Text */}
							<div
								ref={textRef}
								className='w-full lg:w-1/2 space-y-6 text-center lg:text-left'
							>
								<p
									className={`text-primary-foreground/90 font-light text-lg md:text-xl leading-relaxed transition-all duration-1000 delay-400 ${
										textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
									}`}
								>
									Poszukujesz wyjątkowego prezentu dla bliskiej osoby?
								</p>
								<p
									className={`text-primary-foreground/85 font-light text-base md:text-lg leading-relaxed transition-all duration-1000 delay-500 ${
										textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
									}`}
								>
									Oferuję vouchery o dowolnej wartości oraz na konkretne zabiegi. Każdy voucher jest elegancko zapakowany i gotowy do wręczenia. Skontaktuj się ze mną, aby zamówić voucher lub uzyskać więcej informacji.
								</p>
								<div
									className={`pt-6 transition-all duration-1000 delay-600 ${
										textVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
									}`}
								>
									<a
										href='#contact'
										onClick={(e) => {
											e.preventDefault();
											const element = document.querySelector('#contact');
											if (element) {
												element.scrollIntoView({ behavior: 'smooth' });
											}
										}}
										className='group inline-block relative bg-accent hover:bg-accent/90 text-foreground px-10 py-4 rounded-lg font-medium tracking-wide shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden'
									>
										{/* Button shine effect */}
										<span className='absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000' />
										<span className='relative'>Zamów Voucher</span>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Voucher;
