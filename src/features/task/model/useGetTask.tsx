import TasksService from '@/entities/task/api/TasksService';
import { useQuery } from '@tanstack/react-query';

export const useGetTask = (
  workspaceId: string,
  projectId: string,
  taskId: string,
) => {
  return useQuery({
    queryKey: ['tasks', projectId, taskId],
    queryFn: () => TasksService.get(workspaceId, projectId, taskId),
    enabled: !!projectId,

    staleTime: 1000 * 60 * 5,
  });
};
