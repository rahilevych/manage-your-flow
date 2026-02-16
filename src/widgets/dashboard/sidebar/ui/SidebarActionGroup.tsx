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
import { useLocation, useParams } from 'react-router-dom';
import { useGetAllProjects } from '@/features/projects/model/useGetAllProjects';
import { Dialog, DialogContent } from '@/shared/ui/dialog';
import {
  ProjectForm,
  type ProjectFormValues,
} from '@/features/projects/ui/shared/ProjectForm';
import { useState } from 'react';
import { useCreateProject } from '@/features/projects/model/useCreateProject';

interface SidebarActionGroupProps {
  label: string;
  onItemClick?: () => void;
}

export const SidebarActionGroup = ({
  label,
  onItemClick,
}: SidebarActionGroupProps) => {
  const { pathname } = useLocation();
  const { id: workspaceId } = useParams<{ id: string }>();
  const { data: projects = [], isPending } = useGetAllProjects(workspaceId!);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { mutate } = useCreateProject();
  const MAX_PROJECTS = 5;
  const displayedProjects = projects.slice(0, MAX_PROJECTS);
  const isHasMore = projects.length > MAX_PROJECTS;

  if (isPending && projects.length === 0) return null;
  const handleCreateProject = (data: ProjectFormValues) => {
    mutate(
      { dto: data, workspaceId: workspaceId! },
      {
        onSuccess: () => {
          setIsModalOpen(false);
        },
      },
    );
  };
  return (
    <SidebarGroup>
      <SidebarGroupLabel>{label}</SidebarGroupLabel>

      <SidebarGroupAction title='Create Project'>
        <Plus size={16} onClick={() => setIsModalOpen(true)} />
      </SidebarGroupAction>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent>
          <ProjectForm
            title='Create New Project'
            submitText='Create'
            isPending={isPending}
            onSubmit={handleCreateProject}
            onCancel={() => setIsModalOpen(false)}
          />
        </DialogContent>
      </Dialog>

      <SidebarGroupContent>
        <SidebarMenu>
          {displayedProjects.map((project) => {
            const projectUrl = `/dashboard/${workspaceId}/projects/${project.id}`;

            return (
              <SidebarMenuItem key={project.id} onClick={onItemClick}>
                <ProjectItem
                  name={project.name}
                  url={projectUrl}
                  isActive={pathname === projectUrl}
                />
              </SidebarMenuItem>
            );
          })}

          {isHasMore && (
            <SidebarMenuItem>
              <SeeAllButton
                to={`/dashboard/${workspaceId}/projects`}
                label='See all projects'
              />
            </SidebarMenuItem>
          )}

          {!isPending && projects.length === 0 && (
            <p className='px-4 py-2 text-xs text-muted-foreground'>
              No projects yet
            </p>
          )}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};
