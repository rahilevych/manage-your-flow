import { useDeleteProject } from '@/features/projects/model/useDeleteProject';
import { useGetProject } from '@/features/projects/model/useGetProject';
import { UpdateProjectModal } from '@/features/projects/ui/update-project/UpdateProjectModal';
import { DeleteConfirmButton } from '@/features/workspace/ui/delete-workspace/DeleteConfirmButton';
import { BackButton } from '@/shared/ui/custom/BackButton';

import { CustomButton } from '@/shared/ui/custom/CustomButton';
import { Loader } from '@/shared/ui/Loader';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/ui/tabs';
import { HeaderContent } from '@/widgets/dashboard/dashboard-header/ui/HeaderContent';

import { MembersTab } from '@/widgets/dashboard/projects/project-page/MembersTab';
import { TasksTab } from '@/widgets/dashboard/projects/project-page/ui/TasksTab';
import { Settings2, ListTodo, Users2 } from 'lucide-react';
import { useParams, useNavigate } from 'react-router';

export const ProjectPage = () => {
  const { id, projectId } = useParams<{ id: string; projectId: string }>();

  const navigate = useNavigate();
  const { data: project, isPending: isProjectPending } = useGetProject(
    id!,
    projectId!,
  );
  const { mutate: deleteProject, isPending: isDeleting } = useDeleteProject();
  const handleDelete = () => {
    if (id && projectId) {
      deleteProject(
        { workspaceId: id, projectId },
        { onSuccess: () => navigate(`/dashboard/${id}/projects`) },
      );
    }
  };

  if (isProjectPending) return <Loader />;
  if (!project) return null;

  return (
    <div className='flex flex-col h-full bg-background'>
      <div className='mt-2 bg-card/50'>
        <HeaderContent>
          <UpdateProjectModal project={project}>
            <div className='w-full  flex flex-col sm:flex-row items-center justify-between'>
              <BackButton />
              <div className='flex items-center gap-5'>
                <CustomButton variant='outline' size='lg' className='gap-2'>
                  <Settings2 className='w-4 h-4' />
                  Update
                </CustomButton>
                <DeleteConfirmButton
                  onConfirm={handleDelete}
                  isPending={isDeleting}
                  title={`Delete ${project.name}?`}
                  buttonText='Delete project '
                />
              </div>
            </div>
          </UpdateProjectModal>
        </HeaderContent>
        <div className='space-y-1'>
          <h1 className='text-4xl font-medium tracking-tight lg:text-3xl text-zinc-900 dark:text-zinc-50 mb-5'>
            {project.name}
          </h1>
        </div>

        <div className='w-full space-y-4'>
          <div className='flex items-center gap-2'>
            <h2 className='text-sm font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400'>
              Description
            </h2>
            <div className='h-[1px] flex-1 bg-zinc-200 dark:bg-zinc-800' />
          </div>

          <div className='text-lg leading-relaxed text-zinc-700 dark:text-zinc-300 whitespace-pre-wrap font-normal italic drop-shadow-sm'>
            {project.description ? (
              project.description
            ) : (
              <span className='text-muted-foreground/50 italic'>
                No description provided for this task...
              </span>
            )}
          </div>
        </div>
      </div>

      <div className='flex-1 mt-10'>
        <Tabs defaultValue='tasks' className='w-full h-full space-y-6'>
          <TabsList className='grid w-full max-w-[400px] grid-cols-2'>
            <TabsTrigger value='tasks' className='gap-2'>
              <ListTodo className='w-4 h-4' />
              Tasks
            </TabsTrigger>
            <TabsTrigger value='members' className='gap-2'>
              <Users2 className='w-4 h-4' />
              Members
            </TabsTrigger>
          </TabsList>

          <TabsContent
            value='tasks'
            className='border rounded-md p-6 bg-card/20'
          >
            <TasksTab />
          </TabsContent>

          <TabsContent
            value='members'
            className='border rounded-md p-6  bg-card/20'
          >
            <MembersTab members={project.members} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};
