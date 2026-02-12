import { FEATURES } from '../model/constants';
import { FeatureCard } from '@/entities/landing/ui/FeatureCard';

export const FeaturesSection = () => {
  return (
    <section className='container mx-auto px-6 py-24 border-t'>
      <div className='grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3'>
        {FEATURES.map((feature) => (
          <FeatureCard key={feature.title} card={feature} />
        ))}
      </div>
    </section>
  );
};
