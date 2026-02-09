import type { TaskOverviewData } from './type';

export const TASKS_MOCK: TaskOverviewData[] = [
  {
    id: 't-1',
    taskTitle: 'Fix navigation bug',
    projectName: 'Alpha CRM System',
    daysLeft: 2,
    priority: 'high',
  },
  {
    id: 't-2',
    taskTitle: 'Design system update',
    projectName: 'Mobile App Redesign',
    daysLeft: 5,
    priority: 'medium',
  },
  {
    id: 't-3',
    taskTitle: 'Meta tags optimization',
    projectName: 'Landing Page SEO',
    daysLeft: 0,
    priority: 'medium',
  },
  {
    id: 't-4',
    taskTitle: 'Security protocol review',
    projectName: 'Security Audit',
    daysLeft: 12,
    priority: 'low',
  },
  {
    id: 't-5',
    taskTitle: 'API Documentation',
    projectName: 'Backend API',
    daysLeft: 1,
    priority: 'high',
  },
];
