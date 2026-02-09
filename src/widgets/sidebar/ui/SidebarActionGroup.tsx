import { ProjectItem } from '@/entities/project/ui/ProjectItem';
import {
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/shared/ui/sidebar';
import { Plus } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const projects = [
  { name: 'Frontend App', url: '#', id: '1' },
  { name: 'Backend API', url: '#', id: '2' },
  { name: 'Mobile App', url: '#', id: '3' },
];

export const SidebarActionGroup = ({ label }: { label: string }) => {
  const { pathname } = useLocation();

  const MAX_PROJECTS = 5;
  const displayedProjects = projects.slice(0, MAX_PROJECTS);
  const isHasMore = projects.length > MAX_PROJECTS;
  return (
    <SidebarGroup>
      <SidebarGroupLabel>{label}</SidebarGroupLabel>
      <SidebarGroupAction>
        <Plus />
      </SidebarGroupAction>
      <SidebarGroupContent>
        <SidebarMenu>
          {displayedProjects.map((project) => (
            <SidebarMenuItem key={project.id}>
              <ProjectItem
                name={project.name}
                url={project.url}
                isActive={pathname === project.url}
              />
            </SidebarMenuItem>
          ))}
          {isHasMore && (
            <SidebarMenuItem>
              <SidebarMenuButton
                asChild
                className='text-muted-foreground hover:text-foreground'
              >
                <Link to='/projects'>
                  <span className='text-xs ml-9'>See all projects</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          )}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};
