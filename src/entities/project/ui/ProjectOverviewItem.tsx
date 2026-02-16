import { Calendar, Users } from 'lucide-react';
import type { Project } from '../types/types';

interface ProjectOverviewItemProps {
  project: Project;
}

export const ProjectOverviewItem = ({ project }: ProjectOverviewItemProps) => {
  const firstLetter = project.name.charAt(0).toUpperCase();

  return (
    <div className='flex items-center gap-4 hover:bg-accent/50 rounded-md transition-colors border border-transparent hover:border-border p-3'>
      <div className='flex-shrink-0 w-10 h-10 rounded-lg bg-primary text-white flex items-center justify-center font-medium text-md border border-primary/20 c'>
        {firstLetter}
      </div>

      <div className='flex flex-col gap-1 flex-1 min-w-0'>
        <div className='flex justify-between items-center gap-2'>
          <h3 className='font-semibold text-sm truncate'>{project.name}</h3>
          <div className='flex items-center gap-1 text-[10px] text-muted-foreground whitespace-nowrap'>
            <Calendar size={12} />
            <span>{new Date(project.createdAt).toLocaleDateString()}</span>
          </div>
        </div>

        <p className='text-xs text-muted-foreground line-clamp-1'>
          {project.description || 'No description'}
        </p>

        <div className='flex items-center gap-3 mt-1'>
          <div className='flex items-center gap-1 text-[10px] font-medium text-muted-foreground'>
            <Users size={12} />
            <span>{project.members?.length || 0} members</span>
          </div>
          <div className='px-1.5 py-0.5 rounded bg-secondary text-secondary-foreground text-[10px] font-bold'>
            {project.key}
          </div>
        </div>
      </div>
    </div>
  );
};
