import type { TaskOverviewData } from '@/widgets/tasks-overview/model/type';

interface TasksOverviewProps {
  task: TaskOverviewData;
}
export const TaskOverviewItem = ({ task }: TasksOverviewProps) => {
  return (
    <div className='flex items-center justify-between p-3 hover:bg-accent/50 rounded-md transition-colors border border-transparent hover:border-border group'>
      <div className='flex flex-col gap-0.5'>
        <span className='text-sm font-medium leading-none'>
          {task.taskTitle}
        </span>
        <span className='text-[11px] text-muted-foreground'>
          {task.projectName}
        </span>
      </div>

      <div className='text-right flex flex-col items-end gap-1'>
        <span className={`text-[11px] `}>{`${task.daysLeft}d left`}</span>

        <div className={`h-1 w-8 rounded-full `} />
      </div>
    </div>
  );
};
