import { ProjectOverviewItem } from '@/entities/project/ui/ProjectOverviewItem';
import { AddButton } from '@/shared/ui/custom/AddButton';

import { SectionHeader } from '@/shared/ui/custom/SectionHeader';
import { PROJECTS_OVERVIEW_MOCK } from '../model/projectsOverviewData';
import { SeeAllButton } from '@/shared/ui/custom/SeeAllButton';
import { FolderPlus } from 'lucide-react';
import { NoDataComponent } from '@/shared/ui/custom/NoDataComponent';

export const ProjectsOverview = () => {
  const title = 'Projects overview';
  const label = 'Add project';
  const link = '/dashboard/projects';
  const MAX_PROJECTS = 3;
  const displayProjects = PROJECTS_OVERVIEW_MOCK.slice(0, MAX_PROJECTS);
  const isHasMore = PROJECTS_OVERVIEW_MOCK.length > MAX_PROJECTS;

  const noDataTitle = 'No projects yet';
  const noDataDescription = 'Projects you create will appear here';
  const isEmpty = true;
  //PROJECTS_OVERVIEW_MOCK.length === 0;

  return (
    <div className=' h-full flex flex-col border rounded-md p-2 '>
      <SectionHeader title={title}>
        <AddButton label={label} />
      </SectionHeader>
      <div className='p-2 flex flex-col gap-1 flex-grow'>
        {isEmpty ? (
          <NoDataComponent
            title={noDataTitle}
            description={noDataDescription}
            icon={<FolderPlus />}
          />
        ) : (
          displayProjects.map((project) => (
            <ProjectOverviewItem key={project.id} project={project} />
          ))
        )}
      </div>
      {!isEmpty && isHasMore && (
        <SeeAllButton to={link} label='See all projects' />
      )}
    </div>
  );
};
