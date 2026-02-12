import SessionService from '@/entities/session/api/SessionService';
import { useSessionStore } from '@/entities/session/model/SessionStore';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export const useLogout = () => {
  const setIsAuth = useSessionStore((state) => state.setIsAuth);
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  return useMutation({
    mutationFn: () => SessionService.logout(),
    onSuccess: () => {
      localStorage.removeItem('accessToken');
      queryClient.clear();
      toast.success('Successfully logged out!');
      navigate('/', { replace: true });
    },
    onError: () => {
      localStorage.removeItem('accessToken');
      queryClient.clear();
      setIsAuth(false);
      navigate('/', { replace: true });
    },
  });
};
