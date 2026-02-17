import { ProjectOverviewItem } from '@/entities/project/ui/ProjectOverviewItem';
import { AddButton } from '@/shared/ui/custom/AddButton';
import { SectionHeader } from '@/shared/ui/custom/SectionHeader';
import { SeeAllButton } from '@/shared/ui/custom/SeeAllButton';
import { FolderPlus } from 'lucide-react';
import { NoDataComponent } from '@/shared/ui/custom/NoDataComponent';
import { useCreateProject } from '@/features/projects/model/useCreateProject';
import {
  ProjectForm,
  type ProjectFormValues,
} from '@/features/projects/ui/shared/ProjectForm';
import { Link, useParams } from 'react-router';
import { useState } from 'react';
import { Dialog, DialogContent } from '@/shared/ui/dialog';
import { useGetAllProjects } from '@/features/projects/model/useGetAllProjects';
import { Loader } from '@/shared/ui/Loader';

export const ProjectsOverview = () => {
  const { id } = useParams<{ id: string }>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { mutate, isPending } = useCreateProject();
  const { data: projects, isPending: isPendingProjects } = useGetAllProjects(
    id!,
  );
  const title = 'Projects overview';
  const label = 'Add project';
  const MAX_PROJECTS = 3;

  const isEmpty = !projects || projects.length === 0;
  const displayProjects = projects?.slice(0, MAX_PROJECTS) || [];
  const isHasMore = (projects?.length || 0) > MAX_PROJECTS;

  const handleCreateProject = (data: ProjectFormValues) => {
    mutate(
      { dto: data, workspaceId: id! },
      {
        onSuccess: () => {
          setIsModalOpen(false);
        },
      },
    );
  };

  if (isPending || isPendingProjects) return <Loader />;

  return (
    <div className='h-full flex flex-col border rounded-md p-2'>
      <SectionHeader title={title}>
        <AddButton label={label} onClick={() => setIsModalOpen(true)} />
      </SectionHeader>

      <div className='p-2 flex flex-col gap-1 flex-grow'>
        {isEmpty ? (
          <NoDataComponent
            title='No projects yet'
            description='Projects you create will appear here'
            icon={<FolderPlus />}
          />
        ) : (
          displayProjects.map((project) => (
            <Link
              key={project.id}
              to={`/dashboard/${id}/projects/${project.id}`}
            >
              <ProjectOverviewItem key={project.id} project={project} />
            </Link>
          ))
        )}
      </div>
      {!isEmpty && isHasMore && (
        <SeeAllButton
          to={`/dashboard/${id}/projects`}
          label='See all projects'
        />
      )}

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent>
          <ProjectForm
            title='Create New Project'
            submitText='Create'
            isPending={isPending}
            onSubmit={handleCreateProject}
            onCancel={() => setIsModalOpen(false)}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};
