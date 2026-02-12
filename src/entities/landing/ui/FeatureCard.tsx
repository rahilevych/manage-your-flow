import type { Feature } from '@/widgets/landing/model/constants';
interface FeatureCardProps {
  card: Feature;
}
export const FeatureCard = ({ card }: FeatureCardProps) => {
  return (
    <div className='group flex flex-col p-8 bg-card rounded-2xl border transition-all hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1'>
      <div className='mb-6 w-12 h-12 flex items-center justify-center bg-primary/10 text-primary rounded-xl group-hover:bg-primary group-hover:text-primary-foreground transition-colors'>
        {card.icon}
      </div>
      <h3 className='text-xl font-bold mb-3 tracking-tight'>{card.title}</h3>
      <p className='text-muted-foreground leading-relaxed'>
        {card.description}
      </p>
    </div>
  );
};
