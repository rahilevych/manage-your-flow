import {
  LayoutDashboard,
  Users2,
  Trello,
  Settings2,
  ShieldCheck,
  Zap,
} from 'lucide-react';

export interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const FEATURES: Feature[] = [
  {
    icon: <LayoutDashboard size={24} />,
    title: 'Multi-Workspace Management',
    description:
      'Create and manage multiple workspaces inside one application. Keep teams or personal projects organized and separated',
  },
  {
    icon: <Users2 size={24} />,
    title: 'Member Management & Invite Links',
    description:
      'Invite members with a simple link, manage roles, and control access levels ',
  },
  {
    icon: <Trello size={24} />,
    title: 'Project Creation',
    description:
      'Create structured projects in your workspace and keep everything clearly organized',
  },
  {
    icon: <Settings2 size={24} />,
    title: 'Task Management',
    description: 'Create tasks, assign them to members and update statuses',
  },
  {
    icon: <Zap size={24} />,
    title: 'Workspace Statistics',
    description:
      'Monitor tasks completion, team activity, and overall workspace performance through clear statistics',
  },
  {
    icon: <ShieldCheck size={24} />,
    title: 'Clean & Intuitive Interface',
    description: 'Enjoy a simple interface designed for your needs ',
  },
];
