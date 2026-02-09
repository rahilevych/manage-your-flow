import { PROJECTS_STATS } from '../model/statsData';
import { StatsCard } from '@/entities/stats-card/ui/StatsCard';

export const HomeStats = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-2 w-full '>
      {PROJECTS_STATS.map((card) => (
        <StatsCard card={card} key={card.label} />
      ))}
    </div>
  );
};
