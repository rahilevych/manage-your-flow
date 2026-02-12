import { Plus } from 'lucide-react';
import React from 'react';
import { CreateWorkspaceModal } from './CreateWorkspaceModal';

type AddWorkspaceButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;
export const AddWorkspaceButton = ({ ...props }: AddWorkspaceButtonProps) => {
  return (
    <CreateWorkspaceModal>
      <button {...props} className='group flex flex-col items-center gap-3'>
        <div className='flex h-20 w-20 items-center justify-center rounded-2xl border-2 border-dashed border-slate-200 bg-transparent group-hover:border-primary group-hover:bg-primary/5 transition-all'>
          <Plus className='h-8 w-8 text-slate-400 group-hover:text-primary' />
        </div>
        <span className='text-sm font-medium text-slate-500 group-hover:text-primary'>
          Add New
        </span>
      </button>
    </CreateWorkspaceModal>
  );
};
