import { SidebarProvider, SidebarTrigger } from '@/shared/ui/sidebar';
import { AppSidebar } from '@/widgets/dashboard/sidebar/ui/AppSidebar';
import { Outlet } from 'react-router-dom';

export const DashboardLayout = () => {
  return (
    <SidebarProvider>
      <div className='flex h-screen w-full overflow-hidden bg-background'>
        <AppSidebar />
        <div className='flex flex-col flex-1 overflow-y-auto'>
          <SidebarTrigger />
          <div className='w-full max-w-[1440px] mx-auto p-3 '>
            <main className='mt-1'>
              <Outlet />
            </main>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
};
