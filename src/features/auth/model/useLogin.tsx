import SessionService from '@/entities/session/api/SessionService';
import { useSessionStore } from '@/entities/session/model/SessionStore';
import type { LoginDto } from '@/entities/session/model/types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export const useLogin = () => {
  const navigate = useNavigate();
  const setIsAuth = useSessionStore((state) => state.setIsAuth);
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (dto: LoginDto) => SessionService.login(dto),
    onSuccess: (res) => {
      localStorage.setItem('accessToken', res.accessToken);
      queryClient.clear();
      queryClient.invalidateQueries({ queryKey: ['currentUser'] });
      setIsAuth(true);
      toast.success('Successfully logged in!');
      navigate('/welcome');
    },
    onError: (error) => {
      console.log(error);
      toast.error(error.message);
    },
  });
};
