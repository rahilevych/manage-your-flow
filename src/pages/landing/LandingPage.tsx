import { Header } from '@/widgets/landing/ui/Header';
import { Hero } from '@/widgets/landing/ui/Hero';
import { Footer } from '@/widgets/landing/ui/Footer';
import { FeaturesSection } from '@/widgets/landing/ui/FeaturesSection';

export const LandingPage = () => {
  return (
    <div className='min-h-screen  selection:bg-primary/10'>
      <Header />
      <main>
        <Hero />
        <FeaturesSection />
      </main>
      <Footer />
    </div>
  );
};
