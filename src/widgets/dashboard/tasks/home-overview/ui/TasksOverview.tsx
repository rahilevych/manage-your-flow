import { AddButton } from '@/shared/ui/custom/AddButton';
import { SectionHeader } from '@/shared/ui/custom/SectionHeader';
import { SeeAllButton } from '@/shared/ui/custom/SeeAllButton';
import { TaskOverviewItem } from '@/entities/task/ui/TaskOverviewItem';
import { TASKS_MOCK } from '../model/constants';
import { NoDataComponent } from '@/shared/ui/custom/NoDataComponent';
import { Inbox } from 'lucide-react';

export const TasksOverview = () => {
  const title = 'Tasks overview';
  const label = 'Add task';
  const link = '/dashboard/tasks';
  const label2 = 'See all tasks';
  const MAX_TASKS = 10;
  const displayTasks = TASKS_MOCK.slice(0, MAX_TASKS);
  const isHasMore = TASKS_MOCK.length > MAX_TASKS;
  const noDataTitle = 'No tasks yet';
  const noDataDescription = 'Tasks you create will appear here';
  const isEmpty = true;
  //TASKS_MOCK.length===0

  return (
    <div className=' h-auto flex flex-col border rounded-md p-2  '>
      <SectionHeader title={title}>
        <AddButton label={label} />
      </SectionHeader>
      <div className='p-2 flex flex-col gap-1'>
        {isEmpty ? (
          <NoDataComponent
            title={noDataTitle}
            description={noDataDescription}
            icon={<Inbox />}
          />
        ) : (
          displayTasks.map((task) => (
            <TaskOverviewItem key={task.id} task={task} />
          ))
        )}
      </div>
      {!isEmpty && isHasMore && <SeeAllButton to={link} label={label2} />}
    </div>
  );
};
