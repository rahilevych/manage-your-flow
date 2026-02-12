import type { Workspace } from '../../model/types';

interface WorkspaceCardProps {
  workspace: Workspace;
}

export const WorkspaceCard = ({ workspace }: WorkspaceCardProps) => {
  return (
    <div className='group flex flex-col items-center gap-3 transition-all duration-300 transform hover:-translate-y-1'>
      <div className='flex h-20 w-20 items-center justify-center rounded-[1.5rem] bg-gradient-to-br from-slate-800 to-black text-2xl font-bold text-white shadow-md transition-all group-hover:shadow-xl group-hover:rounded-2xl group-hover:scale-105'>
        {workspace.name.charAt(0).toUpperCase()}
      </div>
      <div className='flex flex-col items-center overflow-hidden w-full'>
        <span className='text-sm font-bold text-slate-700 truncate w-full text-center'>
          {workspace.name}
        </span>
        <span className='text-[10px] uppercase tracking-wider text-slate-400 font-bold'>
          Workspace
        </span>
      </div>
    </div>
  );
};
