import { useScrollReveal } from "@/hooks/useScrollReveal";
import parallaxBg from "@/assets/parallax-bg.jpg";
import voucherImage from "/voucher.jpg";

const Voucher = () => {
	const { ref: contentRef, isVisible: contentVisible } = useScrollReveal();

	return (
		<section id='voucher' className='relative overflow-hidden'>
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
						className={`max-w-6xl mx-auto transition-all duration-700 ${
							contentVisible
								? "opacity-100 translate-y-0"
								: "opacity-0 translate-y-8"
						}`}
					>
						<h2 className='font-serif text-4xl md:text-5xl lg:text-6xl text-primary-foreground font-light italic leading-tight text-center mb-12'>
							Vouchery Prezentowe
						</h2>

						<div className='flex flex-col lg:flex-row gap-8 lg:gap-12 items-center'>
							{/* Voucher Image */}
							<div className='w-full lg:w-1/2 flex justify-center lg:justify-end'>
								<img
									src={voucherImage}
									alt='Voucher prezentowy Pupek Kosmetologia'
									className='max-w-full h-auto rounded-lg shadow-2xl'
								/>
							</div>

							{/* Promotional Text */}
							<div className='w-full lg:w-1/2 space-y-6 text-center lg:text-left'>
								<p className='text-primary-foreground/90 font-light text-lg leading-relaxed'>
									Poszukujesz wyjątkowego prezentu dla bliskiej osoby?
								</p>
								<p className='text-primary-foreground/90 font-light text-lg leading-relaxed'>
									Oferuję vouchery o dowolnej wartości oraz na konkretne zabiegi. Każdy voucher jest elegancko zapakowany i gotowy do wręczenia. Skontaktuj się ze mną, aby zamówić voucher lub uzyskać więcej informacji.
								</p>
								<div className='pt-4'>
									<a
										href='#contact'
										onClick={(e) => {
											e.preventDefault();
											const element = document.querySelector('#contact');
											if (element) {
												element.scrollIntoView({ behavior: 'smooth' });
											}
										}}
										className='inline-block bg-accent hover:bg-accent/90 text-foreground px-8 py-3 rounded-md font-medium transition-colors'
									>
										Zamów Voucher
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
