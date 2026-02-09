import { SidebarProvider } from '@/shared/ui/sidebar';
import { HeaderContent } from '@/widgets/header/ui/HeaderContent';
import { AppSidebar } from '@/widgets/sidebar/ui/AppSidebar';
import { Outlet } from 'react-router-dom';

export const DashboardLayout = () => {
  return (
    <SidebarProvider>
      <div className='flex h-screen w-full overflow-hidden'>
        <AppSidebar />
        <div className=' flex  flex-col flex-1  overflow-y-auto p-3 md:p-4'>
          <HeaderContent />
          <main className='w-full h-screen'>
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};
