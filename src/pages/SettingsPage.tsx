import { useGetWorkspace } from '@/features/workspace/model/useGetWorkspace';
import { DeleteConfirmButton } from '@/features/workspace/ui/delete-workspace/DeleteConfirmButton';
import { UpdateWorkspaceModal } from '@/features/workspace/ui/update-workspace/UpdateWorkspaceModal';
import { useDeleteWorkspace } from '@/features/workspace/model/useDeleteWorkspace'; // Импортируем хук удаления

import { useParams } from 'react-router';

export const SettingsPage = () => {
  const { id } = useParams<{ id: string }>();
  const { data: workspace, isPending: isWorkspaceLoading } = useGetWorkspace(
    id!,
  );

  const { mutate: deleteWorkspace, isPending: isDeleting } =
    useDeleteWorkspace();

  if (isWorkspaceLoading) return null;

  const handleDelete = () => {
    if (id) {
      deleteWorkspace(id);
    }
  };

  return (
    <div className='p-6 space-y-6'>
      <h1 className='text-2xl font-bold'>Workspace Settings</h1>

      <div className='flex flex-col gap-4 border p-4 rounded-lg bg-card'>
        <h2 className='text-lg font-semibold'>Danger Zone</h2>
        <p className='text-sm text-muted-foreground'>
          Deleting a workspace is permanent and cannot be undone.
        </p>

        <DeleteConfirmButton
          onConfirm={handleDelete}
          isPending={isDeleting}
          title={`Delete ${workspace?.name}?`}
          description='This will permanently delete this workspace and all projects associated with it.'
          buttonText='Delete Workspace'
        />
      </div>

      {workspace && (
        <UpdateWorkspaceModal workspace={workspace}>
          <button className='px-4 py-2 bg-primary text-primary-foreground rounded-md'>
            Update Workspace Details
          </button>
        </UpdateWorkspaceModal>
      )}
    </div>
  );
};
