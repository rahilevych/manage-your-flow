import ProjectService from '@/entities/project/api/ProjectService';

import { useQuery } from '@tanstack/react-query';

export const useGetAllProjects = (workspaceId: string) => {
  return useQuery({
    queryKey: ['projects', workspaceId],
    queryFn: async () => {
      const data = await ProjectService.getAll(workspaceId);
      return data;
    },

    staleTime: 1000 * 60 * 5,
  });
};
