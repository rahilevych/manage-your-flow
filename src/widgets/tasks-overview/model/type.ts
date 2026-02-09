export interface TaskOverviewData {
  id: string;
  taskTitle: string;
  projectName: string;
  daysLeft: number;
  priority: 'low' | 'medium' | 'high';
}
