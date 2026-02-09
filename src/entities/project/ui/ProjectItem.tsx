import { SidebarMenuButton } from '@/shared/ui/sidebar';
import { Link } from 'react-router-dom';

interface ProjectItemProps {
  name: string;
  url: string;
  isActive: boolean;
}

export const ProjectItem = ({ name, url, isActive }: ProjectItemProps) => {
  return (
    <SidebarMenuButton asChild isActive={isActive}>
      <Link to={url} className='flex items-center gap-3'>
        <div
          className='flex aspect-square size-5 items-center justify-center rounded-md bg-background text-[9px] font-medium
                         uppercase shadow-sm'
        >
          {name.charAt(0)}
        </div>
        <span className='truncate'>{name}</span>
      </Link>
    </SidebarMenuButton>
  );
};
