import { AddButton } from '@/shared/ui/custom/AddButton';
import { SectionHeader } from '@/shared/ui/custom/SectionHeader';
import { SeeAllButton } from '@/shared/ui/custom/SeeAllButton';
import { TaskOverviewItem } from '@/entities/task/ui/TaskOverviewItem';
import { TASKS_MOCK } from '../model/constants';

export const TasksOverview = () => {
  const title = 'Tasks overview';
  const label = 'task';
  const link = '/dashboard/tasks';
  const label2 = 'See all tasks';

  return (
    <div className=' h-auto flex flex-col border rounded-md p-2  '>
      <SectionHeader title={title}>
        <AddButton label={label} />
      </SectionHeader>
      <div className='p-2 flex flex-col gap-1'>
        {TASKS_MOCK.map((task) => (
          <TaskOverviewItem key={task.id} task={task} />
        ))}
      </div>
      <SeeAllButton label={label2} to={link} />
    </div>
  );
};
