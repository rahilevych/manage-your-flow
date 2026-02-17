import { Inbox } from 'lucide-react';

import { NoDataComponent } from '@/shared/ui/custom/NoDataComponent';
import { AddButton } from '@/shared/ui/custom/AddButton';
import { useParams } from 'react-router';

import { Loader } from '@/shared/ui/Loader';
import { Dialog, DialogContent } from '@/shared/ui/dialog';
import {
  TaskForm,
  type TaskFormValues,
} from '@/features/task/ui/shared/TaskForm';
import { useCreateTask } from '@/features/task/model/useCreateTask';
import { useGetTasks } from '@/features/task/model/useGetTasks';
import { useState } from 'react';
import { TasksTable } from '@/widgets/dashboard/tasks/tasks-table/TasksTable';
import { columns } from '@/widgets/dashboard/tasks/tasks-table/Columns';

export const TasksTab = () => {
  const { id, projectId } = useParams<{ id: string; projectId: string }>();

  const { mutate: createTask, isPending: isCreating } = useCreateTask();
  const { data: tasks } = useGetTasks(id!, projectId!);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const tasksArray = Array.isArray(tasks) ? tasks : [];
  const isEmpty = tasksArray.length === 0;
  console.log('tasks', tasks);
  const handleCreateTask = (data: TaskFormValues) => {
    const dto = {
      ...data,
      projectId: projectId!,
      // assigneeId: data.assigneeId || null,
      dueDate: data.dueDate || null,
    };
    createTask(
      {
        dto,
        workspaceId: id!,
        projectId: projectId!,
      },

      {
        onSuccess: () => {
          setIsModalOpen(false);
        },
      },
    );
  };
  if (isCreating) return <Loader />;
  return (
    <div className='flex flex-col '>
      <div className='flex justify-between items-center'>
        <h3 className='font-semibold'> Tasks</h3>
        <AddButton label='Add task' onClick={() => setIsModalOpen(true)} />
      </div>

      {isEmpty ? (
        <NoDataComponent
          title='No tasks yet'
          description='Get started by creating your first task for this project.'
          icon={<Inbox />}
        />
      ) : (
        <div className='container mx-auto '>
          <TasksTable columns={columns} data={tasks ?? []} />
        </div>
      )}

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent>
          <TaskForm
            title='Create New Project'
            submitText='Create'
            isPending={isCreating}
            onSubmit={handleCreateTask}
            onCancel={() => setIsModalOpen(false)}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};
