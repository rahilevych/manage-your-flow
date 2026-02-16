import type { Member } from '@/entities/member/types/types';

interface ProjectMembersProps {
  members: Member[];
}

export const MembersTab = ({ members }: ProjectMembersProps) => {
  return (
    <div className='flex flex-col space-y-4'>
      <div className='mb-4'>
        <h3 className='font-semibold'>Project Members</h3>
      </div>

      <div className='space-y-3'>
        {members?.map((member) => (
          <div
            key={member.id}
            className='flex items-center justify-between p-2 border-b last:border-0 hover:bg-accent/50 transition-colors rounded-lg'
          >
            <div className='flex items-center gap-2'>
              <div className='w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-xs font-medium'>
                {member.user?.name?.charAt(0) || 'U'}
              </div>
              <span className='text-sm font-medium'>
                {member.user?.name || member.userId}
              </span>
            </div>
            <span className='text-[10px] px-2 py-0.5 bg-muted text-muted-foreground font-bold rounded uppercase'>
              {member.role}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
