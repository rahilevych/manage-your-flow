import WorkspaceService from '@/entities/workspace/api/WorkspaceService';
import { useQuery } from '@tanstack/react-query';

export const useGetWokspaces = () => {
  return useQuery({
    queryKey: ['workspaces'],
    queryFn: async () => {
      const data = await WorkspaceService.getAll();
      return data;
    },

    staleTime: 1000 * 60 * 5,
  });
};
