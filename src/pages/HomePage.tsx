import { PROJECTS_OVERVIEW_MOCK } from '@/widgets/dashboard/projects/home-overview/model/projectsOverviewData';
import { ProjectsOverview } from '@/widgets/dashboard/projects/home-overview/ui/ProjectsOverview';
import { HomeStats } from '@/widgets/dashboard/statistic/ui/HomeStats';
import { HomeStatsNoProjects } from '@/widgets/dashboard/statistic/ui/HomeStatsNoProjects';
import { TasksOverview } from '@/widgets/dashboard/tasks/home-overview/ui/TasksOverview';

export const HomePage = () => {
  const isWorkspaceEmpty = true;
  //PROJECTS_OVERVIEW_MOCK.length === 0;
  return (
    <div className=' grid grid-cols-1 py-2 space-y-6'>
      {isWorkspaceEmpty ? <HomeStatsNoProjects /> : <HomeStats />}
      <div className='grid grid-cols-1 xl:grid-cols-3 gap-6 mt-5'>
        <section className='xl:col-span-2'>
          <ProjectsOverview />
        </section>
        <section className='space-y-6'>
          <TasksOverview />
        </section>
      </div>
    </div>
  );
};
