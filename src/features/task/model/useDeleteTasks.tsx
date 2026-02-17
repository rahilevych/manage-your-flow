import { useMutation, useQueryClient } from '@tanstack/react-query';
import TasksService from '@/entities/task/api/TasksService';
import toast from 'react-hot-toast';

interface DeleteTasksArgs {
  workspaceId: string;
  projectId: string;
  taskIds: string[];
}
export const useDeleteTasks = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: DeleteTasksArgs) => TasksService.deleteMany(data),
    onSuccess: () => {
      toast.success('Tasks deleted successfully');
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
    },
    onError: () => {
      toast.error('Failed to delete tasks');
    },
  });
};
