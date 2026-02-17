import { StatsCard } from '@/entities/stats-card/ui/StatsCard';
import { AlertCircle, CheckSquare, FolderKanban, Users } from 'lucide-react';

export interface WorkspaceStats {
  projectsCount: number;
  tasksCount: number;
  membersCount: number;
  highPriorityCount: number;
  completionRate: number;
}
export const HomeStats = ({ stats }: { stats: WorkspaceStats }) => {
  if (!stats) return null;
  const statsConfig = [
    {
      label: 'Total Projects',
      value: stats.projectsCount,
      icon: FolderKanban,
      color: 'text-blue-500',
    },
    {
      label: 'Total Tasks',
      value: stats.tasksCount,
      icon: CheckSquare,
      color: 'text-emerald-500',
    },
    {
      label: 'High Priority',
      value: stats.highPriorityCount,
      icon: AlertCircle,
      color: 'text-rose-500',
    },
    {
      label: 'Workspace Members',
      value: stats.membersCount,
      icon: Users,
      color: 'text-amber-500',
    },
  ];
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-2 w-full '>
      {statsConfig.map((card) => (
        <StatsCard card={card} key={card.label} />
      ))}
    </div>
  );
};
