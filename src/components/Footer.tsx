import { Instagram, Facebook, MapPin, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { P } from "@/components/Text";

const Footer = () => {
	const currentYear = new Date().getFullYear();

	const footerServices = [
		{ title: "Konsultacja kosmetologiczna", slug: "konsultacja-kosmetologiczna" },
		{ title: "Terapia trądzikowa", slug: "terapia-tradzikowa" },
		{ title: "Terapia przebarwień", slug: "terapia-przebarwien" },
		{ title: "Terapia anti aging", slug: "terapia-anti-aging" },
		{ title: "Zabieg nawilżający/regenerujący", slug: "zabieg-nawilzajacy-regenerujacy" },
		{ title: "Zabieg relaksacyjny", slug: "zabieg-relaksacyjny" },
	];

	return (
		<footer className='bg-foreground text-primary-foreground'>
			<div className='container mx-auto px-4 lg:px-8 py-16'>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12'>
					{/* Brand */}
					<div className='lg:col-span-1'>
						<h1 className='text-2xl tracking-wider mb-4'>pupek kosmetologia</h1>
						<P className='text-primary-foreground/70 font-light text-sm leading-relaxed'>
							Zacznij działać świadomie i wprowadzać zmiany, które pozwolą Ci
							uzyskać realne rezultaty.
						</P>
					</div>

					{/* Quick Links */}
					<div>
						<h4 className='font-sans text-sm tracking-wider mb-6'>
							SZYBKIE LINKI
						</h4>
						<ul className='space-y-3'>
							<li>
								<Link
									to="/#stages"
									className='text-primary-foreground/70 hover:text-primary-foreground text-sm font-light transition-colors'
								>
									Etapy Współpracy
								</Link>
							</li>
							<li>
								<a
									href="/#services"
									className='text-primary-foreground/70 hover:text-primary-foreground text-sm font-light transition-colors'
								>
									Zabiegi
								</a>
							</li>
							<li>
								<a
									href="/#voucher"
									className='text-primary-foreground/70 hover:text-primary-foreground text-sm font-light transition-colors'
								>
									Vouchery
								</a>
							</li>
							<li>
								<a
									href="/#contact"
									className='text-primary-foreground/70 hover:text-primary-foreground text-sm font-light transition-colors'
								>
									Kontakt
								</a>
							</li>
						</ul>
					</div>

					{/* Services */}
					<div>
						<h4 className='font-sans text-sm tracking-wider mb-6'>ZABIEGI</h4>
						<ul className='space-y-3'>
							{footerServices.map((service) => (
								<li key={service.title}>
									{service.slug ? (
										<Link
											to={`/zabiegi/${service.slug}`}
											className='text-primary-foreground/70 hover:text-primary-foreground text-sm font-light transition-colors'
										>
											{service.title}
										</Link>
									) : (
										<a
											href='/#services'
											className='text-primary-foreground/70 hover:text-primary-foreground text-sm font-light transition-colors'
										>
											{service.title}
										</a>
									)}
								</li>
							))}
						</ul>
					</div>

					{/* Contact */}
					<div>
						<h4 className='font-sans text-sm tracking-wider mb-6'>KONTAKT</h4>
						<ul className='space-y-4'>
							<li className='flex items-center gap-3'>
								<Mail className='h-4 w-4 flex-shrink-0 text-primary-foreground/50' />
								<a
									href='mailto:pupek.kosmetologia@gmail.com'
									className='text-primary-foreground/70 hover:text-primary-foreground text-sm font-light transition-colors'
								>
									pupek.kosmetologia@gmail.com
								</a>
							</li>
							<li className='flex items-center gap-3'>
								<Phone className='h-4 w-4 flex-shrink-0 text-primary-foreground/50' />
								<a
									href='tel:+13105551234'
									className='text-primary-foreground/70 hover:text-primary-foreground text-sm font-light transition-colors'
								>
									+48 515-157-681
								</a>
							</li>
						</ul>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className='mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-center items-center gap-4'>
					<P className='text-primary-foreground/50 text-sm font-light'>
						© {currentYear} Pupek Kosmetologia Klinika Skóry. Wszelkie prawa
						zastrzeżone.
					</P>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
