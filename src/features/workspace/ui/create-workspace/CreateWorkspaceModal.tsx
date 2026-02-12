import { Dialog, DialogContent, DialogTrigger } from '@/shared/ui/dialog';
import { useState } from 'react';
import { useCreateWorkspace } from '../../model/useCreateWorkspace';
import { useNavigate } from 'react-router-dom';
import {
  WorkspaceForm,
  type WorkspaceFormValues,
} from '../shared/WorkspaceForm';

interface CreateWorkspaceModalProps {
  children: React.ReactNode;
}

export const CreateWorkspaceModal = ({
  children,
}: CreateWorkspaceModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { mutate, isPending } = useCreateWorkspace();

  const handleCreateBtn = (data: WorkspaceFormValues) => {
    mutate(data, {
      onSuccess: (newWorkspace) => {
        setIsOpen(false);
        navigate(`/dashboard/${newWorkspace.id}`);
      },
    });
  };
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className='sm:max-w-sm'>
        <WorkspaceForm
          isPending={isPending}
          onSubmit={handleCreateBtn}
          onCancel={() => setIsOpen(false)}
          submitText='Create'
        />
      </DialogContent>
    </Dialog>
  );
};
