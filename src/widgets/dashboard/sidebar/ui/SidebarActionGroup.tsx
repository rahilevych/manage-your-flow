import { ProjectItem } from '@/entities/project/ui/ProjectItem';
import { SeeAllButton } from '@/shared/ui/custom/SeeAllButton';
import {
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
} from '@/shared/ui/sidebar';
import { Plus } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const projects = [
  { name: 'Frontend App', url: '#', id: '1' },
  { name: 'Backend API', url: '#', id: '2' },
  { name: 'Mobile App', url: '#', id: '3' },
];

interface SidebarActionGroupProps {
  label: string;
  onItemClick?: () => void;
}

export const SidebarActionGroup = ({
  label,
  onItemClick,
}: SidebarActionGroupProps) => {
  const { pathname } = useLocation();

  const MAX_PROJECTS = 5;
  const displayedProjects = projects.slice(0, MAX_PROJECTS);
  const isHasMore = projects.length > MAX_PROJECTS;
  const isEmpty = true;
  if (isEmpty) return null;
  return (
    <SidebarGroup>
      <SidebarGroupLabel>{label}</SidebarGroupLabel>
      <SidebarGroupAction>
        <Plus />
      </SidebarGroupAction>
      <SidebarGroupContent>
        <SidebarMenu>
          {displayedProjects.map((project) => (
            <SidebarMenuItem key={project.id} onClick={onItemClick}>
              <ProjectItem
                name={project.name}
                url={project.url}
                isActive={pathname === project.url}
              />
            </SidebarMenuItem>
          ))}
          {isHasMore && (
            <SidebarMenuItem>
              <SeeAllButton to='/projects' label='See all projects' />
            </SidebarMenuItem>
          )}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};
