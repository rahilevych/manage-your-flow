import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Calendar, ChevronLeft, Flag, Layout, User } from 'lucide-react';

import { Button } from '@/shared/ui/button';
import { Separator } from '@/shared/ui/separator';
import { Badge } from '@/shared/ui/badge';
import { Dialog, DialogContent } from '@/shared/ui/dialog';

import { useGetTask } from '@/features/task/model/useGetTask';
import { useUpdateTask } from '@/features/task/model/useUpdateTask';
import {
  TaskForm,
  type TaskFormValues,
} from '@/features/task/ui/shared/TaskForm';
import { Loader } from '@/shared/ui/Loader';
import { useDeleteTask } from '@/features/task/model/useDeleteTask';
import { DeleteConfirmButton } from '@/features/workspace/ui/delete-workspace/DeleteConfirmButton';

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
      <div className='min-h-screen '>
        <header className='  border-b'>
          <div className='w-full  h-16 flex items-center justify-between'>
            <Button variant='ghost' onClick={() => navigate(-1)}>
              <ChevronLeft className='h-4 w-4' />
              <span>Back</span>
            </Button>
            <div className='flex gap-2'>
              <Button
                variant='outline'
                size='sm'
                onClick={() => setIsModalOpen(true)}
              >
                Update
              </Button>
              <DeleteConfirmButton
                onConfirm={handleDelete}
                isPending={isDeleting}
                title={`Delete ${task?.title}?`}
                buttonText='Delete'
              />
            </div>
          </div>
        </header>

        <main className='w-full px-4 pt-8 space-y-10'>
          <section className='space-y-4'>
            <div className='flex flex-wrap gap-2'>
              <Badge
                variant='secondary'
                className='capitalize bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400 border-none'
              >
                {task.status.replace('_', ' ')}
              </Badge>
              <Badge variant='outline' className='gap-1.5'>
                <Flag
                  className={`h-3 w-3 ${task.priority === 'URGENT' ? 'text-red-500 fill-red-500' : 'text-zinc-400'}`}
                />
                {task.priority}
              </Badge>
            </div>
            <h1 className='text-4xl font-extrabold tracking-tight'>
              {task.title}
            </h1>
          </section>

          <section className='space-y-3'>
            <h3 className='text-sm font-bold uppercase tracking-widest text-muted-foreground'>
              Description
            </h3>
            <div className='text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed whitespace-pre-wrap'>
              {task.description || 'No description provided.'}
            </div>
          </section>

          <Separator />

          <section className='flex flex-col space-y-6 '>
            <div className='space-y-6'>
              <div className='flex items-center gap-4'>
                <div className='p-2 bg-zinc-100 dark:bg-zinc-800 rounded-lg'>
                  <User className='h-5 w-5 text-muted-foreground' />
                </div>
                <div>
                  <p className='text-xs font-bold text-muted-foreground uppercase'>
                    Assignee
                  </p>
                  <p className='font-semibold'>
                    {task.assignee?.name || 'Unassigned'}
                  </p>
                </div>
              </div>

              <div className='flex items-center gap-4'>
                <div className='p-2 bg-zinc-100 dark:bg-zinc-800 rounded-lg'>
                  <Calendar className='h-5 w-5 text-muted-foreground' />
                </div>
                <div>
                  <p className='text-xs font-bold text-muted-foreground uppercase'>
                    Due Date
                  </p>
                  <p className='font-semibold'>
                    {task.dueDate
                      ? new Date(task.dueDate).toLocaleDateString()
                      : 'Not set'}
                  </p>
                </div>
              </div>
            </div>

            <div className='space-y-6'>
              <div className='flex items-center gap-4'>
                <div className='p-2 bg-zinc-100 dark:bg-zinc-800 rounded-lg'>
                  <Layout className='h-5 w-5 text-muted-foreground' />
                </div>
                <div>
                  <p className='text-xs font-bold text-muted-foreground uppercase'>
                    Project
                  </p>
                  <p className='font-semibold text-blue-600 dark:text-blue-400 cursor-pointer hover:underline'>
                    {task.project?.name}
                  </p>
                </div>
              </div>
            </div>
          </section>
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
