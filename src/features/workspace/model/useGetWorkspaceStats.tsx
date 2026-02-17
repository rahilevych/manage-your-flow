import WorkspaceService from '@/entities/workspace/api/WorkspaceService';
import { useQuery } from '@tanstack/react-query';

export const useGetWorkspaceStats = (workspaceId: string) => {
  return useQuery({
    queryKey: ['workspace-stats', workspaceId],
    queryFn: () => WorkspaceService.getStats(workspaceId),
    enabled: !!workspaceId,
  });
};
