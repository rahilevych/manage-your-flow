import { ProjectOverviewItem } from '@/entities/project/ui/ProjectOverviewItem';
import { AddButton } from '@/shared/ui/custom/AddButton';

import { SectionHeader } from '@/shared/ui/custom/SectionHeader';
import { PROJECTS_OVERVIEW_MOCK } from '../model/projectsOverviewData';
import { SeeAllButton } from '@/shared/ui/custom/SeeAllButton';

export const ProjectsOverview = () => {
  const title = 'Projects overview';
  const label = 'project';
  const link = '/projects';
  const MAX_PROJECTS = 3;
  const displayProjects = PROJECTS_OVERVIEW_MOCK.slice(0, MAX_PROJECTS);
  const isHasMore = PROJECTS_OVERVIEW_MOCK.length > MAX_PROJECTS;

  return (
    <div className=' h-full flex flex-col border rounded-md p-2 '>
      <SectionHeader title={title}>
        <AddButton label={label} />
      </SectionHeader>
      <div className='p-2 flex flex-col gap-1'>
        {displayProjects.map((project) => (
          <ProjectOverviewItem key={project.id} project={project} />
        ))}
      </div>
      {isHasMore && <SeeAllButton to={link} label='See all projects' />}
    </div>
  );
};
