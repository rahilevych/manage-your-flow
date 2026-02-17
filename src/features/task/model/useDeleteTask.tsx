import TasksService from '@/entities/task/api/TasksService';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

export const useDeleteTask = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: {
      workspaceId: string;
      projectId: string;
      taskId: string;
    }) => TasksService.delete(data),
    onSuccess: (_data, variables) => {
      queryClient.invalidateQueries({
        queryKey: ['tasks', variables.projectId],
      });
      queryClient.invalidateQueries({
        queryKey: ['workspace-stats', variables.workspaceId],
      });
      queryClient.removeQueries({
        queryKey: ['tasks', variables.projectId, variables.taskId],
      });
      toast.success('Task deleted');
    },
    onError: () => {
      toast.error('Smth went wrong');
    },
  });
};
