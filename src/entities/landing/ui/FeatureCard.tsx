import { item } from '@/shared/lib/animation';
import type { Feature } from '@/widgets/landing/model/constants';
import { motion } from 'motion/react';

interface FeatureCardProps {
  card: Feature;
}
export const FeatureCard = ({ card }: FeatureCardProps) => {
  return (
    <motion.div
      variants={item}
      className='group flex flex-col p-8 bg-card rounded-2xl border  hover:shadow-xl hover:shadow-primary/5 '
    >
      <div className='mb-6 w-12 h-12 flex items-center justify-center bg-primary/10 text-primary rounded-xl group-hover:bg-primary group-hover:text-primary-foreground transition-colors'>
        {card.icon}
      </div>
      <h3 className='text-xl font-bold mb-3 tracking-tight'>{card.title}</h3>
      <p className='text-muted-foreground leading-relaxed'>
        {card.description}
      </p>
    </motion.div>
  );
};
