import { Sidebar, SidebarContent, SidebarHeader } from '@/shared/ui/sidebar';
import { SidebarActionGroup } from './SidebarActionGroup';
import { AppSidebarFooter } from './AppSidebarFooter';
import { AppSidebarMenu } from './AppSidebarMenu';
import { WorkspaceSwitcher } from '@/features/workspace-switch/ui/WorkspaceSwitcher';

export const AppSidebar = () => {
  return (
    <Sidebar>
      <SidebarHeader>
        <WorkspaceSwitcher />
      </SidebarHeader>
      <SidebarContent>
        <AppSidebarMenu />
        <SidebarActionGroup label='Projects' />
      </SidebarContent>
      <AppSidebarFooter username='username' />
    </Sidebar>
  );
};
