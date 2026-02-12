import { LayoutDashboard } from 'lucide-react';
import { Link } from 'react-router';

export const Logo = () => {
  return (
    <Link
      to={'/'}
      className='flex items-center gap-2 font-bold text-xl tracking-tight cursor-pointer'
    >
      <div className='bg-primary text-primary-foreground p-1.5 rounded-lg'>
        <LayoutDashboard size={22} />
      </div>
      <span>DevFlow</span>
    </Link>
  );
};
