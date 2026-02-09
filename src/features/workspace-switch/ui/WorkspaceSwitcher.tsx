import { WorkspaceItem } from '@/entities/workspace/ui/WorkspaceItem';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/shared/ui/dropdown-menu';
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/shared/ui/sidebar';
import { ChevronsUpDown, Plus } from 'lucide-react';
import { useState } from 'react';

const workspaces = [
  { name: 'Design Team', id: '1' },
  { name: 'Development', id: '2' },
  { name: 'Marketing', id: '3' },
];

export const WorkspaceSwitcher = () => {
  const [activeWorkspace, setActiveWorkspace] = useState(workspaces[0]);
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size='lg'
              className='data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground'
            >
              <WorkspaceItem
                name={activeWorkspace.name}
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
          <DropdownMenuContent
            className='w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg'
            align='start'
            side='bottom'
            sideOffset={4}
          >
            <DropdownMenuLabel className='text-xs text-muted-foreground'>
              Workspaces
            </DropdownMenuLabel>
            {workspaces.map((workspace) => (
              <DropdownMenuItem
                key={workspace.id}
                onClick={() => setActiveWorkspace(workspace)}
                className='gap-2 p-2'
              >
                <WorkspaceItem name={workspace.name} size='sm' />
              </DropdownMenuItem>
            ))}
            <DropdownMenuSeparator />
            <DropdownMenuItem className='gap-2 p-2 cursor-pointer'>
              <div className='flex size-6 items-center justify-center rounded-md border bg-background'>
                <Plus className='size-4' />
              </div>
              <div className='font-medium text-muted-foreground text-xs'>
                Add workspace
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
};
