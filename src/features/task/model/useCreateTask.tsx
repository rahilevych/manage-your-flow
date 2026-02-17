import TasksService from '@/entities/task/api/TasksService';
import type { CreateTaskDto } from '@/entities/task/model/type';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

interface CreateTaskArgs {
  dto: CreateTaskDto;
  workspaceId: string;
  projectId: string;
}
export const useCreateTask = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ dto, workspaceId, projectId }: CreateTaskArgs) =>
      TasksService.create(dto, workspaceId, projectId),
    onSuccess: (task) => {
      toast.success(`${task.title}  successfully created!`);
      queryClient.invalidateQueries({
        queryKey: ['tasks'],
      });
      queryClient.invalidateQueries({
        queryKey: ['workspace-stats', task.workspaceId],
      });
    },
  });
};
