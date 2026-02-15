import ProjectService from '@/entities/project/api/ProjectService';
import type { UpdateProject } from '@/entities/project/types/types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

export const useUpdateProject = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: {
      workspaceId: string;
      projectId: string;
      dto: UpdateProject;
    }) => ProjectService.update(data),
    onSuccess: (project) => {
      queryClient.invalidateQueries({
        queryKey: ['projects', project.workspaceId],
      });
      queryClient.invalidateQueries({
        queryKey: ['projects', project.id],
      });
      toast.success('Project info updated');
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
