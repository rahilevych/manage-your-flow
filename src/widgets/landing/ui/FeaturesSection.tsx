import { FEATURES } from '../model/constants';
import { FeatureCard } from '@/entities/landing/ui/FeatureCard';
import { container } from '@/shared/lib/animation';
import { motion } from 'motion/react';
export const FeaturesSection = () => {
  return (
    <motion.section className='container mx-auto px-6 py-24 border-t'>
      <motion.div
        variants={container}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.2 }}
        className='grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3'
      >
        {FEATURES.map((feature) => (
          <FeatureCard key={feature.title} card={feature} />
        ))}
      </motion.div>
    </motion.section>
  );
};
