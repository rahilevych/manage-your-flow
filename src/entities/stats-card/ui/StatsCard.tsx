import type { StatsItem } from '../model/types';

interface StatsCardProp {
  card: StatsItem;
}
export const StatsCard = ({ card }: StatsCardProp) => {
  return (
    <div className=' w-full flex items-center justify-between gap-4 px-5 py-3 border rounded-md'>
      <div className='flex flex-col gap-1'>
        <span className='text-sm font-medium text-muted-foreground leading-none'>
          {card.label}
        </span>
        <span className='text-2xl font-bold tracking-tight'>{card.value}</span>
      </div>{' '}
      <card.icon className={`w-5 h-5 ${card.color}`} />
    </div>
  );
};
