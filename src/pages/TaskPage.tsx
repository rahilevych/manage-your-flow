import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Dialog, DialogContent } from '@/shared/ui/dialog';
import { useGetTask } from '@/features/task/model/useGetTask';
import { useUpdateTask } from '@/features/task/model/useUpdateTask';
import {
  TaskForm,
  type TaskFormValues,
} from '@/features/task/ui/shared/TaskForm';
import { Loader } from '@/shared/ui/Loader';
import { useDeleteTask } from '@/features/task/model/useDeleteTask';
import { BackButton } from '@/shared/ui/custom/BackButton';
import { CustomButton } from '@/shared/ui/custom/CustomButton';
import { DeleteConfirmButton } from '@/features/workspace/ui/delete-workspace/DeleteConfirmButton';
import { TaskInfo } from '@/widgets/dashboard/tasks/ui/task-page/TaskInfo';
import { TaskDescription } from '@/widgets/dashboard/tasks/ui/task-page/TaskDescription';

export const TaskPage = () => {
  const { id, projectId, taskId } = useParams<{
    id: string;
    projectId: string;
    taskId: string;
  }>();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data: task, isLoading } = useGetTask(id!, projectId!, taskId!);
  const { mutate: updateTask, isPending: isUpdating } = useUpdateTask();
  const { mutate: deleteTask, isPending: isDeleting } = useDeleteTask();

  if (isLoading) return <Loader />;

  const handleUpdate = (data: TaskFormValues) => {
    if (!taskId || !id || !projectId) return;
    updateTask(
      { workspaceId: id, projectId, taskId, dto: data },
      { onSuccess: () => setIsModalOpen(false) },
    );
  };
  const handleDelete = () => {
    if (!id || !projectId || !taskId) return;

    if (confirm('Are you sure you want to delete this task?')) {
      deleteTask(
        { workspaceId: id, projectId, taskId },
        {
          onSuccess: () => {
            navigate(`/workspaces/${id}/projects/${projectId}`);
          },
        },
      );
    }
  };

  return (
    task && (
      <div className=' flex flex-col items-start min-h-screen '>
        <BackButton />

        <main className='w-full flex flex-col  pt-8 space-y-10'>
          <div className='flex self-end gap-2'>
            <CustomButton onClick={() => setIsModalOpen(true)}>
              Update
            </CustomButton>
            <DeleteConfirmButton
              onConfirm={handleDelete}
              isPending={isDeleting}
              title={`Delete "${task.title}"?`}
              buttonText='Delete task'
            />
          </div>
          <TaskDescription task={task} />
          <TaskInfo task={task} />
        </main>
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className='sm:max-w-[500px]'>
            <TaskForm
              title='Update Task'
              submitText='Update'
              isPending={isUpdating}
              onSubmit={handleUpdate}
              onCancel={() => setIsModalOpen(false)}
              initialValues={{
                title: task.title,
                description: task.description || '',
                status: task.status,
                priority: task.priority,
                dueDate: task.dueDate ? task.dueDate.split('T')[0] : '',
                // assigneeId: task.assigneeId || '',
              }}
            />
          </DialogContent>
        </Dialog>
      </div>
    )
  );
};
