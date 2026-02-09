import type { ProjectOverviewData } from './types';

export const PROJECTS_OVERVIEW_MOCK: ProjectOverviewData[] = [
  {
    id: '1',
    title: 'Alpha CRM System',
    description:
      'Internal CRM development for the sales department with telephony integration.',
    participantsCount: 8,
    startDate: '2024-01-15',
  },
  {
    id: '2',
    title: 'Mobile App Redesign',
    description:
      'Updating UI/UX design for the core iOS and Android applications.',
    participantsCount: 3,
    startDate: '2024-02-01',
  },
  {
    id: '3',
    title: 'Landing Page SEO',
    description: 'Home page optimization to increase organic search traffic.',
    participantsCount: 2,
    startDate: '2024-02-10',
  },
  {
    id: '4',
    title: 'Security Audit',
    description:
      'Scheduled vulnerability testing and security protocol updates.',
    participantsCount: 5,
    startDate: '2023-12-20',
  },
];
