import { ProjectOverviewItem } from '@/entities/project/ui/ProjectOverviewItem';
import { useGetAllProjects } from '@/features/projects/model/useGetAllProjects';
import { NoDataComponent } from '@/shared/ui/custom/NoDataComponent';
import { Loader } from '@/shared/ui/Loader';
import { HeaderContent } from '@/widgets/dashboard/dashboard-header/ui/HeaderContent';
import { FolderPlus } from 'lucide-react';
import { useParams } from 'react-router';
import { Link } from 'react-router';

export const ProjectsPage = () => {
  const title = 'Projects';
  const { id: workspaceId } = useParams<{ id: string }>();
  const { data: projects, isPending } = useGetAllProjects(workspaceId!);

  if (isPending) {
    return <Loader />;
  }

  return (
    <div className='w-full flex flex-col'>
      <HeaderContent title={title} />
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {projects?.map((project) => (
          <Link
            key={project.id}
            to={`/dashboard/${workspaceId}/projects/${project.id}`}
            className='transition-transform active:scale-[0.98]'
          >
            <div className='border rounded-xl bg-card text-card-foreground shadow-sm'>
              <ProjectOverviewItem project={project} />
            </div>
          </Link>
        ))}
      </div>

      {projects?.length === 0 && (
        <NoDataComponent
          title='No projects yet'
          description='Projects you create will appear here'
          icon={<FolderPlus />}
        />
      )}
    </div>
  );
};
