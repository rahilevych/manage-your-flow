import WorkspaceService from '@/entities/workspace/api/WorkspaceService';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';

export const useDeleteWorkspace = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (id: string) => WorkspaceService.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['workspaces'] });
      toast.success('Worksp deleted');
      navigate('/welcome');
    },
    onError: () => {
      toast.error('err dleting');
    },
  });
};
