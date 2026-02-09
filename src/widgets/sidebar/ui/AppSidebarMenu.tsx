import { DASHBOARD_NAV } from '@/shared/config/navigation';
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/shared/ui/sidebar';
import { Link, useLocation } from 'react-router-dom';

export const AppSidebarMenu = () => {
  const { pathname } = useLocation();
  return (
    <SidebarGroup>
      <SidebarGroupContent>
        <SidebarMenu>
          {DASHBOARD_NAV.map((navItem) => (
            <SidebarMenuItem key={navItem.title}>
              <SidebarMenuButton asChild isActive={pathname === navItem.url}>
                <Link to={navItem.url}>
                  <navItem.icon />
                  <span>{navItem.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};
