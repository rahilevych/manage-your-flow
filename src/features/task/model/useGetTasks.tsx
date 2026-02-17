import TasksService from '@/entities/task/api/TasksService';
import { useQuery } from '@tanstack/react-query';

export const useGetTasks = (workspaceId: string, projectId: string) => {
  return useQuery({
    queryKey: ['tasks', projectId],
    queryFn: async () => {
      const data = await TasksService.getAll(workspaceId, projectId);
      return data;
    },
    enabled: !!projectId && !!workspaceId,
  });
};
