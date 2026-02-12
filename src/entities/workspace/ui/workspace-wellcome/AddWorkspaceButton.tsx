import { CreateWorkspaceModal } from '@/features/workspace/ui/create-workspace/CreateWorkspaceModal';
import { Plus } from 'lucide-react';
import React from 'react';

type AddWorkspaceButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;
export const AddWorkspaceButton = ({ ...props }: AddWorkspaceButtonProps) => {
  return (
    <CreateWorkspaceModal>
      <button {...props} className='group flex flex-col items-center gap-3'>
        <div className='cursor-pointer flex h-20 w-20 items-center justify-center rounded-2xl border-2 border-dashed border-slate-200 bg-transparent  transition-all'>
          <Plus className='h-8 w-8 text-slate-400 group-hover:text-primary' />
        </div>
        <span className='text-sm font-medium text-slate-500 group-hover:text-primary'>
          Add New
        </span>
      </button>
    </CreateWorkspaceModal>
  );
};
