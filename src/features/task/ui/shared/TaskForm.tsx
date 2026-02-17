import { Priority, TaskStatus } from '@/entities/task/model/type';
import { Button } from '@/shared/ui/button';
import {
  DialogClose,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/shared/ui/dialog';
import { Field, FieldGroup } from '@/shared/ui/field';
import { Input } from '@/shared/ui/input';
import { Label } from '@/shared/ui/label';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import z from 'zod';
const taskSchema = z.object({
  title: z.string().min(3, 'Title is too short').max(100, 'Title is too long'),

  description: z.string().max(1000).nullable().optional().or(z.literal('')),

  status: z.nativeEnum(TaskStatus).optional(),

  priority: z.nativeEnum(Priority).optional(),

  // assigneeId: z
  //   .string()
  //   .uuid('Invalid user ID')
  //   .nullable()
  //   .optional()
  //   .or(z.literal('')),

  dueDate: z.string().nullable().optional().or(z.literal('')),
});

export type TaskFormValues = z.infer<typeof taskSchema>;

interface TaskFormProps {
  initialValues?: Partial<TaskFormValues>;
  onSubmit: (data: TaskFormValues) => void;
  onCancel?: () => void;
  isPending: boolean;
  submitText: string;
  title?: string;
  members?: { id: string; name: string }[];
}

export const TaskForm = ({
  onCancel,
  onSubmit,
  submitText,
  isPending,
  initialValues,
  // members = [],
  title = 'Create Task',
}: TaskFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TaskFormValues>({
    resolver: zodResolver(taskSchema),
    defaultValues: {
      status: TaskStatus.TODO,
      priority: Priority.MEDIUM,
      ...initialValues,
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <DialogHeader>
        <DialogTitle>{title}</DialogTitle>
      </DialogHeader>

      <FieldGroup className='py-4 space-y-4'>
        <Field>
          <Label htmlFor='title'>Title</Label>
          <Input
            {...register('title')}
            id='title'
            placeholder='What needs to be done?'
            className={errors.title ? 'border-destructive' : ''}
          />
          {errors.title && (
            <p className='text-xs text-destructive'>{errors.title.message}</p>
          )}
        </Field>
        <Field>
          <Label htmlFor='description'>Description</Label>
          <textarea
            {...register('description')}
            id='description'
            className='flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm'
          />
        </Field>

        <div className='grid grid-cols-2 gap-4'>
          <Field>
            <Label>Status</Label>
            <select
              {...register('status')}
              className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm'
            >
              {Object.values(TaskStatus).map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </Field>
          <Field>
            <Label>Priority</Label>
            <select
              {...register('priority')}
              className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm'
            >
              {Object.values(Priority).map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </select>
          </Field>
        </div>

        <div className='grid grid-cols-2 gap-4'>
          {/* <Field>
            <Label>Assignee</Label>
            <select
              {...register('assigneeId')}
              className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm'
            >
              <option value=''>Unassigned</option>
              {members.map((m) => (
                <option key={m.id} value={m.id}>
                  {m.name}
                </option>
              ))}
            </select>
          </Field> */}

          <Field>
            <Label htmlFor='dueDate'>Due Date</Label>
            <Input {...register('dueDate')} id='dueDate' type='date' />
          </Field>
        </div>
      </FieldGroup>

      <DialogFooter>
        <DialogClose asChild>
          <Button onClick={onCancel} variant='outline' type='button'>
            Cancel
          </Button>
        </DialogClose>
        <Button type='submit' disabled={isPending}>
          {isPending ? 'Processing...' : submitText}
        </Button>
      </DialogFooter>
    </form>
  );
};
