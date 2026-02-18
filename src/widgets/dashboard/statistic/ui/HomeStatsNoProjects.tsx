import { useCreateProject } from '@/features/projects/model/useCreateProject';
import {
  ProjectForm,
  type ProjectFormValues,
} from '@/features/projects/ui/shared/ProjectForm';
import { CustomButton } from '@/shared/ui/custom/CustomButton';
import { Dialog, DialogContent } from '@/shared/ui/dialog';
import { useState } from 'react';
import { useParams } from 'react-router';

export const HomeStatsNoProjects = () => {
  const { id } = useParams<{ id: string }>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { mutate, isPending } = useCreateProject();
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
  return (
    <section className=' border rounded-md  p-8 text-center'>
      <h2 className='text-2xl font-medium mb-2'>
        Welcome to your new Workspace
      </h2>
      <p className='text-muted-foreground mb-6'>
        Let's create your first project!
      </p>

      <CustomButton
        onClick={() => setIsModalOpen(true)}
        label='Create your first project'
        className='mx-auto'
      />

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
    </section>
  );
};
