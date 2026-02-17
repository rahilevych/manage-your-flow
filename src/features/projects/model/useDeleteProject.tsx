import ProjectService from '@/entities/project/api/ProjectService';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

export const useDeleteProject = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: { workspaceId: string; projectId: string }) =>
      ProjectService.delete(data),
    onSuccess: (project) => {
      queryClient.invalidateQueries({
        queryKey: ['projects', project.workspaceId],
      });
      queryClient.invalidateQueries({
        queryKey: ['workspace-stats', project.workspaceId],
      });
      toast.success('Project deleted');
    },
    onError: () => {
      toast.error('Smth went wrong');
    },
  });
};
