import { useGetMe } from '@/features/auth/model/useGetMe';
import { Loader } from '@/shared/ui/Loader';

import { Navigate, Outlet } from 'react-router-dom';

export const GuestRoute = () => {
  const { data: user, isPending } = useGetMe();
  const token = localStorage.getItem('accessToken');
  if (isPending && token) return <Loader />;
  if (user && token) {
    return <Navigate to='/welcome' replace />;
  }
  return <Outlet />;
};
