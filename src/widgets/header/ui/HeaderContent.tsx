import { SidebarTrigger } from '@/shared/ui/sidebar';
import { useLocation } from 'react-router-dom';
import { HEADER_DATA } from '../model/constants';

export const HeaderContent = () => {
  const { pathname } = useLocation();

  const meta = HEADER_DATA[pathname] || HEADER_DATA['/'];
  return (
    <header className=' flex items-start w-full mb-4'>
      <SidebarTrigger />
      <div className='ml-2 md:ml-6'>
        <h2 className='text-xl md:text-3xl font-bold tracking-tight'>
          {meta.title}
        </h2>{' '}
        <p className=' hidden sm:block mt-1 md:-2 text-sm md:text-base text-muted-foreground'>
          {meta.description}
        </p>
      </div>
    </header>
  );
};
