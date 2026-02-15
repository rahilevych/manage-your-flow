import ProjectService from '@/entities/project/api/ProjectService';

import { useQuery } from '@tanstack/react-query';

export const useGetProject = (workspaceId: string, projectId: string) => {
  return useQuery({
    queryKey: ['projects', projectId],
    queryFn: () => ProjectService.get(workspaceId, projectId),
    enabled: !!projectId,

    staleTime: 1000 * 60 * 5,
  });
};
