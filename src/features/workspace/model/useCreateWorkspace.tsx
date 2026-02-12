import WorkspaceService from '@/entities/workspace/api/WorkspaceService';
import type { WorkspaceDto } from '@/entities/workspace/model/types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

export const useCreateWorkspace = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (dto: WorkspaceDto) => WorkspaceService.create(dto),
    onMutate: async (newWorkspace) => {
      await queryClient.cancelQueries({ queryKey: ['workspaces'] });
      const prevWorkspaces = queryClient.getQueryData<WorkspaceDto[]>([
        'workspaces',
      ]);
      queryClient.setQueryData<WorkspaceDto[]>(['workspaces'], (prev) => [
        ...(prev || []),
        { ...newWorkspace, id: 'temp-id-' + Math.random() },
      ]);
      return { prevWorkspaces };
    },
    onSuccess: (newWorkspace) => {
      toast.success(`${newWorkspace.name} workspace successfully created!`);
    },
    onError: (error, _newWorkspace, context) => {
      if (context?.prevWorkspaces) {
        queryClient.setQueryData(['workspaces'], context.prevWorkspaces);
      }
      toast.error(error.message || 'Failed to create workspace');
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['workspaces'] });
    },
  });
};
