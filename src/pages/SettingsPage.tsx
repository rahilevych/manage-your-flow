import { useParams } from 'react-router';
import { useGetWorkspace } from '@/features/workspace/model/useGetWorkspace';
import { useDeleteWorkspace } from '@/features/workspace/model/useDeleteWorkspace';
import { DeleteConfirmButton } from '@/features/workspace/ui/delete-workspace/DeleteConfirmButton';
import { UpdateWorkspaceModal } from '@/features/workspace/ui/update-workspace/UpdateWorkspaceModal';
import { Separator } from '@/shared/ui/separator';
import { Button } from '@/shared/ui/button';

export const SettingsPage = () => {
  const { id } = useParams<{ id: string }>();
  const { data: workspace, isPending: isWorkspaceLoading } = useGetWorkspace(
    id!,
  );
  const { mutate: deleteWorkspace, isPending: isDeleting } =
    useDeleteWorkspace();

  if (isWorkspaceLoading)
    return (
      <div className='p-8 text-center animate-pulse'>Loading settings...</div>
    );
  if (!workspace)
    return <div className='p-8 text-center'>Workspace not found</div>;

  const handleDelete = () => {
    if (id) deleteWorkspace(id);
  };

  return (
    <div className='flex flex-col min-h-screen bg-background'>
      <main className='w-full p-6 space-y-10'>
        <section className='space-y-4'>
          <div className='flex flex-col items-start sm:flex-row items-center justify-between gap-2'>
            <h1 className='text-3xl font-bold tracking-tight'>
              Workspace Settings
            </h1>
            <UpdateWorkspaceModal workspace={workspace}>
              <Button variant='outline' size='sm'>
                Edit Details
              </Button>
            </UpdateWorkspaceModal>
          </div>
          <p className='text-sm text-muted-foreground'>
            Manage your workspace name, icon and other general preferences.
          </p>

          <div className='border rounded-md p-6 bg-card space-y-4 '>
            <div className='flex items-center justify-between'>
              <div>
                <h2 className='font-medium text-xl'>General Details</h2>
                <p className='mt-5 text-md text-muted-foreground'>
                  Current name: <span>{workspace.name}</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        <Separator />

        <section className='space-y-4'>
          <div className='flex items-center gap-2 text-destructive'>
            <h2 className='text-lg font-semibold'>Danger Zone</h2>
          </div>

          <div className='border border-destructive/20 rounded-xl p-6 space-y-4'>
            <div className='flex flex-col gap-1'>
              <p className='text-sm font-semibold'>Delete this workspace</p>
              <p className='text-xs text-muted-foreground'>
                Once you delete a workspace, there is no going back
              </p>
            </div>

            <DeleteConfirmButton
              onConfirm={handleDelete}
              isPending={isDeleting}
              title={`Delete "${workspace?.name}"?`}
              description='This will permanently delete this workspace and all associated projects, tasks, and data.'
              buttonText='Permanently Delete'
            />
          </div>
        </section>
      </main>
    </div>
  );
};
