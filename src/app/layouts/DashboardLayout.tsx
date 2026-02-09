import { SidebarProvider, SidebarTrigger } from '@/shared/ui/sidebar';
import { AppSidebar } from '@/widgets/sidebar/ui/AppSidebar';
import { Outlet } from 'react-router-dom';

export const DashboardLayout = () => {
  return (
    <SidebarProvider>
      <div className='flex h-screen w-full overflow-hidden'>
        <AppSidebar />
        <main className=' flex flex-1 items-start overflow-y-auto p-3 md:p-4'>
          <SidebarTrigger />

          <Outlet />
        </main>
      </div>
    </SidebarProvider>
  );
};
