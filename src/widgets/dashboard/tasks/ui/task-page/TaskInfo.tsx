import type { Task } from '@/entities/task/model/type';
import { Badge } from '@/shared/ui/badge';
import { Calendar, Flag, User } from 'lucide-react';

export const TaskInfo = ({ task }: { task: Task }) => {
  return (
    <section className='w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-4 p-5 rounded-md border bg-card/50 shadow-sm'>
      <div className='flex flex-col gap-2 border-l md:border-l-0 md:pl-0 pl-4 border-zinc-200 dark:border-zinc-800'>
        <span className='text-[10px] font-bold text-muted-foreground uppercase tracking-wider'>
          Status
        </span>
        <Badge
          variant='secondary'
          className='w-fit capitalize font-semibold bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 border-none'
        >
          {task.status.replace('_', ' ')}
        </Badge>
      </div>

      <div className='flex flex-col gap-2 border-l pl-4 border-zinc-200 dark:border-zinc-800'>
        <span className='text-[10px] font-bold text-muted-foreground uppercase tracking-wider'>
          Priority
        </span>
        <div className='flex items-center gap-2'>
          <Flag
            className={`h-3.5 w-3.5 ${task.priority === 'URGENT' ? 'text-red-500 fill-red-500' : 'text-zinc-400'}`}
          />
          <span className='text-sm font-bold'>{task.priority}</span>
        </div>
      </div>

      <div className='flex flex-col gap-2 border-l pl-4 border-zinc-200 dark:border-zinc-800'>
        <span className='text-[10px] font-bold text-muted-foreground uppercase tracking-wider'>
          Assignee
        </span>
        <div className='flex items-center gap-2'>
          <div className='h-6 w-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-[10px] font-bold'>
            {task.assignee?.name?.[0] || <User className='h-3 w-3' />}
          </div>
          <span className='text-sm font-bold'>
            {task.assignee?.name || 'Unassigned'}
          </span>
        </div>
      </div>

      <div className='flex flex-col gap-2 border-l pl-4 border-zinc-200 dark:border-zinc-800'>
        <span className='text-[10px] font-bold text-muted-foreground uppercase tracking-wider'>
          Due Date
        </span>
        <div className='flex items-center gap-2 text-sm font-bold'>
          <Calendar className='h-3.5 w-3.5 text-muted-foreground' />
          <span>
            {task.dueDate
              ? new Date(task.dueDate).toLocaleDateString()
              : 'Not set'}
          </span>
        </div>
      </div>
    </section>
  );
};
