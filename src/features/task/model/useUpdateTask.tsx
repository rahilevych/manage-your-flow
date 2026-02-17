import TasksService from '@/entities/task/api/TasksService';
import type { UpdateTaskDto } from '@/entities/task/model/type';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

export const useUpdateTask = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: {
      workspaceId: string;
      projectId: string;
      taskId: string;
      dto: UpdateTaskDto;
    }) => TasksService.update(data),
    onSuccess: (task) => {
      queryClient.invalidateQueries({
        queryKey: ['tasks', task.projectId],
      });

      queryClient.invalidateQueries({
        queryKey: ['tasks', task.id],
      });
      queryClient.invalidateQueries({
        queryKey: ['workspace-stats', task.workspaceId],
      });
      toast.success('Task info updated');
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
