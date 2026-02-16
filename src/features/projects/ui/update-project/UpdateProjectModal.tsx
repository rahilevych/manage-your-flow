import { useState } from 'react';
import { useParams } from 'react-router';
import { Dialog, DialogContent, DialogTrigger } from '@/shared/ui/dialog';
import { useUpdateProject } from '../../model/useUpdateProject';
import { ProjectForm, type ProjectFormValues } from '../shared/ProjectForm';

interface UpdateProjectModalProps {
  project: {
    id: string;
    name: string;
    key: string;
    description?: string | null;
  };
  children: React.ReactNode;
}

export const UpdateProjectModal = ({
  project,
  children,
}: UpdateProjectModalProps) => {
  const { id: workspaceId } = useParams<{ id: string }>();
  const [open, setOpen] = useState(false);
  const { mutate, isPending } = useUpdateProject();

  const handleUpdate = (values: ProjectFormValues) => {
    if (!workspaceId) return;

    mutate(
      {
        workspaceId,
        projectId: project.id,
        dto: values,
      },
      {
        onSuccess: () => {
          setOpen(false);
        },
      },
    );
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <ProjectForm
          title='Edit Project'
          submitText='Save Changes'
          isPending={isPending}
          onSubmit={handleUpdate}
          initialValues={{
            name: project.name,
            key: project.key,
            description: project.description ?? '',
          }}
          onCancel={() => setOpen(false)}
        />
      </DialogContent>
    </Dialog>
  );
};
