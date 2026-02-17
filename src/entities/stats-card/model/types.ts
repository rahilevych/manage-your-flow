import type { LucideIcon } from 'lucide-react';

export interface StatsItem {
  label: string;
  value: number;
  icon: LucideIcon;
  color?: string;
}
