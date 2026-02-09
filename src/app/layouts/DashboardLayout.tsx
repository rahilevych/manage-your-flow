import { SidebarProvider, SidebarTrigger } from '@/shared/ui/sidebar';
import { HeaderContent } from '@/widgets/header/ui/HeaderContent';
import { AppSidebar } from '@/widgets/sidebar/ui/AppSidebar';
import { Outlet } from 'react-router-dom';

export const DashboardLayout = () => {
  return (
    <SidebarProvider>
      <div className='flex h-screen w-full overflow-hidden bg-background'>
        <AppSidebar />
        <div className='flex flex-col flex-1 overflow-y-auto'>
          <SidebarTrigger />
          <div className='w-full max-w-[1440px] mx-auto p-3 md:p-6'>
            <HeaderContent />
            <main className='mt-6'>
              <Outlet />
            </main>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
};
