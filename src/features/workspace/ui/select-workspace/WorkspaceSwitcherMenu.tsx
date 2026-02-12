import type { Workspace } from '@/entities/workspace/model/types';
import { WorkspaceItem } from '@/entities/workspace/ui/workspace-switcher/WorkspaceItem';
import { CreateWorkspaceModal } from '@/features/workspace/ui/create-workspace/CreateWorkspaceModal';
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from '@/shared/ui/dropdown-menu';
import { Plus } from 'lucide-react';
import { Link } from 'react-router';

interface WorkspaceSwitcherMenuProps {
  workspaces?: Workspace[];
}

export const WorkspaceSwitcherMenu = ({
  workspaces,
}: WorkspaceSwitcherMenuProps) => {
  return (
    <DropdownMenuContent
      className='w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg'
      align='start'
      side='bottom'
      sideOffset={4}
    >
      <DropdownMenuLabel className='text-xs text-muted-foreground'>
        Workspaces
      </DropdownMenuLabel>
      {workspaces &&
        workspaces.map((workspace) => (
          <Link key={workspace.id} to={`/dashboard/${workspace.id}`}>
            <DropdownMenuItem key={workspace.id} className='gap-2 p-2'>
              <WorkspaceItem name={workspace.name} size='sm' />
            </DropdownMenuItem>
          </Link>
        ))}
      <DropdownMenuSeparator />
      <CreateWorkspaceModal>
        <DropdownMenuItem
          className='gap-2 p-2 cursor-pointer'
          onSelect={(e) => e.preventDefault()}
        >
          <div className='flex size-6 items-center justify-center rounded-md border bg-background'>
            <Plus className='size-4' />
          </div>
          <div className='font-medium text-muted-foreground text-xs'>
            Add workspace
          </div>
        </DropdownMenuItem>
      </CreateWorkspaceModal>
    </DropdownMenuContent>
  );
};
