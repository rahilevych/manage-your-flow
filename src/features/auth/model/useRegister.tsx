import SessionService from '@/entities/session/api/SessionService';
import { useSessionStore } from '@/entities/session/model/SessionStore';
import type { RegisterDto } from '@/entities/session/model/types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export const useRegister = () => {
  const navigate = useNavigate();
  const setIsAuth = useSessionStore((state) => state.setIsAuth);
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (dto: RegisterDto) => SessionService.register(dto),
    onSuccess: (data) => {
      localStorage.setItem('accessToken', data.accessToken);
      queryClient.clear();
      queryClient.invalidateQueries({ queryKey: ['currentUser'] });
      setIsAuth(true);
      toast.success('Successfully registerd!');
      navigate('/welcome');
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
