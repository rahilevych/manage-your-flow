import { useGetWorkspace } from '@/features/workspace/model/useGetWorkspace';
import { DeleteWorkspaceButton } from '@/features/workspace/ui/delete-workspace/DeleteWorkspaceButton';
import { UpdateWorkspaceModal } from '@/features/workspace/ui/update-workspace/UpdateWorkspaceModal';

import { useParams } from 'react-router';

export const SettingsPage = () => {
  const { id } = useParams<{ id: string }>();
  const { data: workspace } = useGetWorkspace(id!);

  return (
    <div>
      <DeleteWorkspaceButton />
      <UpdateWorkspaceModal workspace={workspace}>
        <button>update</button>
      </UpdateWorkspaceModal>
    </div>
  );
};
