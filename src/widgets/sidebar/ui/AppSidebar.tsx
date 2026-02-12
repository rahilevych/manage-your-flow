import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  useSidebar,
} from '@/shared/ui/sidebar';
import { SidebarActionGroup } from './SidebarActionGroup';
import { AppSidebarFooter } from './AppSidebarFooter';
import { AppSidebarMenu } from './AppSidebarMenu';
import { WorkspaceSwitcher } from '@/features/workspace/ui/select-workspace/WorkspaceSwitcher';

export const AppSidebar = () => {
  const { isMobile, setOpenMobile } = useSidebar();
  const handleLinkClick = () => {
    if (isMobile) {
      setOpenMobile(false);
    }
  };

  return (
    <Sidebar>
      <SidebarHeader>
        <WorkspaceSwitcher />
      </SidebarHeader>
      <SidebarContent>
        <AppSidebarMenu onItemClick={handleLinkClick} />
        <SidebarActionGroup label='Projects' onItemClick={handleLinkClick} />
      </SidebarContent>
      <AppSidebarFooter username='username' />
    </Sidebar>
  );
};
