import ProjectService from '@/entities/project/api/ProjectService';
import type { ProjectDto } from '@/entities/project/types/types';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

interface CreateProjectArgs {
  dto: ProjectDto;
  workspaceId: string;
}
export const useCreateProject = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ dto, workspaceId }: CreateProjectArgs) =>
      ProjectService.create(dto, workspaceId),
    onSuccess: (project) => {
      toast.success(`${project.name}  successfully created!`);
    },
    onSettled: (variables) => {
      queryClient.invalidateQueries({ queryKey: ['projects'] });
      queryClient.invalidateQueries({
        queryKey: ['workspace-stats', variables?.workspaceId],
      });
    },
  });
};
