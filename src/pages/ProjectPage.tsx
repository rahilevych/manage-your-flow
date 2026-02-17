import { useDeleteProject } from '@/features/projects/model/useDeleteProject';
import { useGetProject } from '@/features/projects/model/useGetProject';
import { UpdateProjectModal } from '@/features/projects/ui/update-project/UpdateProjectModal';
import { DeleteConfirmButton } from '@/features/workspace/ui/delete-workspace/DeleteConfirmButton';
import { Button } from '@/shared/ui/button';
import { Loader } from '@/shared/ui/Loader';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/ui/tabs';

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
      <div className='mt-2 border-b bg-card/50'>
        <div className='flex justify-between items-start mb-4'>
          <div>
            <div className='flex items-center gap-3'>
              <h1 className='text-2xl font-medium tracking-tight'>
                {project.name}
              </h1>
              <span className='px-2 py-0.5 bg-secondary text-secondary-foreground text-xs font-bold rounded uppercase'>
                {project.key}
              </span>
            </div>
          </div>

          <div className='flex items-center gap-2'>
            <UpdateProjectModal project={project}>
              <Button variant='outline' size='sm' className='gap-2'>
                <Settings2 className='w-4 h-4' />
                Update
              </Button>
            </UpdateProjectModal>

            <DeleteConfirmButton
              onConfirm={handleDelete}
              isPending={isDeleting}
              title={`Delete ${project.name}?`}
              buttonText='Delete'
            />
          </div>
        </div>

        <div className='max-w-3xl'>
          <p className='text-muted-foreground text-sm leading-relaxed'>
            {project.description || 'No description provided for this project.'}
          </p>
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
