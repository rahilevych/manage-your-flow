import { ProjectsOverview } from '@/widgets/dashboard/projects/home-overview/ui/ProjectsOverview';
import { HomeStats } from '@/widgets/dashboard/statistic/ui/HomeStats';
import { TasksOverview } from '@/widgets/dashboard/tasks/home-overview/ui/TasksOverview';

export const HomePage = () => {
  return (
    <div className=' grid grid-cols-1 py-2 space-y-6'>
      <HomeStats />
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
