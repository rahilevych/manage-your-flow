import { WorkspaceItem } from '@/entities/workspace/ui/workspace-switcher/WorkspaceItem';
import { DropdownMenu, DropdownMenuTrigger } from '@/shared/ui/dropdown-menu';
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/shared/ui/sidebar';
import { ChevronsUpDown, Loader } from 'lucide-react';

import { useGetWokspaces } from '../../model/useGetWokspaces';
import { useParams } from 'react-router';
import { useGetWorkspace } from '../../model/useGetWorkspace';
import { WorkspaceSwitcherMenu } from './WorkspaceSwitcherMenu';

export const WorkspaceSwitcher = () => {
  const { id } = useParams();
  const { data: workspace, isPending: isWorkspacePending } = useGetWorkspace(
    id!,
  );
  const { data: workspaces = [], isPending: isListPending } = useGetWokspaces();

  if (!id || isWorkspacePending || isListPending) {
    return (
      <div className='h-12 w-full animate-pulse bg-sidebar-accent rounded-lg flex items-center px-2'>
        <Loader className='size-4 animate-spin text-muted-foreground' />
      </div>
    );
  }

  const otherWorkspaces = workspaces.filter((workspace) => workspace.id !== id);
  return (
    workspace && (
      <SidebarMenu>
        <SidebarMenuItem>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <SidebarMenuButton
                size='lg'
                className='data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground'
              >
                <WorkspaceItem
                  name={workspace?.name}
                  size='lg'
                  suffix={
                    <span className='truncate text-xs text-muted-foreground text-left'>
                      Workspace
                    </span>
                  }
                />
                <ChevronsUpDown className='ml-auto size-4 opacity-50' />
              </SidebarMenuButton>
            </DropdownMenuTrigger>
            <WorkspaceSwitcherMenu workspaces={otherWorkspaces} />
          </DropdownMenu>
        </SidebarMenuItem>
      </SidebarMenu>
    )
  );
};
