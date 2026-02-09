import type { HeaderData } from './types';

export const HEADER_DATA: Record<string, HeaderData> = {
  '/': {
    title: 'Home',
    description:
      'Welcome back! Here’s what’s happening with your projects today',
  },
  '/tasks': {
    title: 'Tasks',
    description: 'Manage, filter, and track your team’s tasks and progress',
  },
  '/settings': {
    title: 'Settings',
    description:
      'Manage your account settings, security preferences, and configurations',
  },
  '/members': {
    title: 'Members',
    description: 'View and manage team members, roles, and permissions',
  },
};
