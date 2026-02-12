import { Dialog, DialogContent, DialogTrigger } from '@/shared/ui/dialog';
import { useState } from 'react';
import {
  WorkspaceForm,
  type WorkspaceFormValues,
} from '../shared/WorkspaceForm';
import { useUpdateWorkspace } from '../../model/useUpdateWorkspace';
import type { Workspace } from '@/entities/workspace/model/types';

interface UpdateWorkspaceModalProps {
  children: React.ReactNode;
  workspace: Workspace;
}

export const UpdateWorkspaceModal = ({
  children,
  workspace,
}: UpdateWorkspaceModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { mutate, isPending } = useUpdateWorkspace();

  const handleupdateBtn = (data: WorkspaceFormValues) => {
    mutate(
      { id: workspace.id, dto: data },
      {
        onSuccess: () => {
          setIsOpen(false);
        },
      },
    );
  };
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className='sm:max-w-sm'>
        <WorkspaceForm
          isPending={isPending}
          onSubmit={handleupdateBtn}
          onCancel={() => setIsOpen(false)}
          submitText='Update'
          initialValues={{ name: workspace.name }}
        />
      </DialogContent>
    </Dialog>
  );
};
