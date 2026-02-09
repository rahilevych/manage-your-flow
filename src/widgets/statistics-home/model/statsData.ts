import type { StatsItem } from '@/entities/stats-card/model/types';
import { CheckCircle, ClockAlert, FolderRoot, LayoutList } from 'lucide-react';

export const PROJECTS_STATS: StatsItem[] = [
  {
    label: 'Total Projects',
    value: 5,
    icon: FolderRoot,
    color: 'text-blue-500',
  },
  {
    label: 'Total Tasks',
    value: 24,
    icon: LayoutList,
    color: 'text-gray-500',
  },
  {
    label: 'Completed',
    value: 18,
    icon: CheckCircle,
    color: 'text-green-500',
  },
  {
    label: 'Overdue',
    value: 2,
    icon: ClockAlert,
    color: 'text-red-500',
  },
];
