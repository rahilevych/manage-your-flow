import type { ProjectOverviewData } from '@/widgets/projects-overview/model/types';
import { Calendar, Users } from 'lucide-react';
interface ProjectOverviewItemProps {
  project: ProjectOverviewData;
}

export const ProjectOverviewItem = ({ project }: ProjectOverviewItemProps) => {
  return (
    <div className='flex flex-col gap-2 hover:bg-accent/50 rounded-md transition-colors border border-transparent hover:border-border p-5'>
      <div className='flex justify-between items-center'>
        <h3 className='font-medium text-sm'>{project.title}</h3>
        <div className='flex items-center gap-1 text-xs text-muted-foreground'>
          <Calendar size={14} />
          <span>{project.startDate}</span>
        </div>
      </div>

      <p className='text-xs text-muted-foreground line-clamp-2'>
        {project.description}
      </p>

      <div className='flex items-center gap-2 mt-1'>
        <div className='flex items-center gap-1   py-0.5 rounded text-[10px] font-medium'>
          <Users size={12} />
          <span>{project.participantsCount} members</span>
        </div>
      </div>
    </div>
  );
};
