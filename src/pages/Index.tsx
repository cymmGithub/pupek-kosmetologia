import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Voucher from '@/components/Voucher';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Stages from '@/components/Stages';

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Stages />
      <Services />
      <Voucher />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
