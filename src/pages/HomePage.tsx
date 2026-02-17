import { useGetAllProjects } from '@/features/projects/model/useGetAllProjects';
import { HeaderContent } from '@/widgets/dashboard/dashboard-header/ui/HeaderContent';
import { ProjectsOverview } from '@/widgets/dashboard/projects/home-overview/ui/ProjectsOverview';
import { HomeStats } from '@/shared/ui/custom/Stats';
import { HomeStatsNoProjects } from '@/widgets/dashboard/statistic/ui/HomeStatsNoProjects';
import { useParams } from 'react-router';
import { useGetWorkspaceStats } from '@/features/workspace/model/useGetWorkspaceStats';
import { Loader } from '@/shared/ui/Loader';

export const HomePage = () => {
  const { id: workspaceId } = useParams<{ id: string }>();
  const { data: stats } = useGetWorkspaceStats(workspaceId!);
  const { data: projects = [], isPending } = useGetAllProjects(workspaceId!);
  const isWorkspaceEmpty = !isPending && projects.length === 0;

  if (isPending) return <Loader />;

  return (
    <div className=' grid grid-cols-1 py-2 space-y-6'>
      <HeaderContent />
      {isWorkspaceEmpty ? (
        <HomeStatsNoProjects />
      ) : (
        stats && <HomeStats stats={stats} />
      )}
      <div className='grid grid-cols-1  gap-6 mt-5'>
        <section className='xl:col-span-2'>
          <ProjectsOverview />
        </section>
      </div>
    </div>
  );
};
