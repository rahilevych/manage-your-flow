import type { Task } from '@/entities/task/model/type';
import { Layout } from 'lucide-react';

export const TaskDescription = ({ task }: { task: Task }) => {
  return (
    <>
      <div className='space-y-1'>
        <h1 className='text-4xl font-medium tracking-tight lg:text-3xl text-zinc-900 dark:text-zinc-50 mb-5'>
          {task.title}
        </h1>
        <p className='text-sm text-muted-foreground flex items-center gap-2 '>
          <Layout className='h-4 w-4' />
          <span>Project: {task.project?.name || 'General'}</span>
        </p>
      </div>
      <div className='max-w-4xl space-y-4'>
        <div className='flex items-center gap-2'>
          <h2 className='text-sm font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400'>
            Description
          </h2>
          <div className='h-[1px] flex-1 bg-zinc-200 dark:bg-zinc-800' />
        </div>

        <div className='text-lg leading-relaxed text-zinc-700 dark:text-zinc-300 whitespace-pre-wrap font-normal italic drop-shadow-sm'>
          {task.description ? (
            task.description
          ) : (
            <span className='text-muted-foreground/50 italic'>
              No description provided for this task...
            </span>
          )}
        </div>
      </div>
    </>
  );
};
