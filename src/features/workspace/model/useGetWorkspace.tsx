import WorkspaceService from '@/entities/workspace/api/WorkspaceService';
import { useQuery } from '@tanstack/react-query';

export const useGetWorkspace = (id: string) => {
  return useQuery({
    queryKey: ['workspaces', id],
    queryFn: () => WorkspaceService.get(id),
    enabled: !!id,

    staleTime: 1000 * 60 * 5,
  });
};
