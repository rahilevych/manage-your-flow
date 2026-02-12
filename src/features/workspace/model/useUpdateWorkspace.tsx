import WorkspaceService from '@/entities/workspace/api/WorkspaceService';
import type { UpdateWorkspace } from '@/entities/workspace/model/types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

export const useUpdateWorkspace = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: { id: string; dto: UpdateWorkspace }) =>
      WorkspaceService.update(data),
    onSuccess: (workspace) => {
      queryClient.invalidateQueries({ queryKey: ['workspaces', workspace.id] });
      toast.success('Worksp updated');
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
