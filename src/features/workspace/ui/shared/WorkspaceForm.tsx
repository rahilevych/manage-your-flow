import { Button } from '@/shared/ui/button';
import {
  DialogClose,
  DialogDescription,
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
interface WorkspaceFormProps {
  initialValues?: WorkspaceFormValues;
  onCancel?: () => void;
  onSubmit: (data: WorkspaceFormValues) => void;
  isPending: boolean;
  submitText: string;
}

const workspaceSchema = z.object({
  name: z
    .string()
    .min(3, 'Workspace name must be at least 3 characters ')
    .max(30, 'Name is too long')
    .regex(
      /^[a-zA-Z0-9\sа-яА-Я]+$/,
      'Name can only contain letters, numbers and spaces',
    ),
});
export type WorkspaceFormValues = z.infer<typeof workspaceSchema>;
export const WorkspaceForm = ({
  onCancel,
  onSubmit,
  submitText,
  isPending,
  initialValues,
}: WorkspaceFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<WorkspaceFormValues>({
    resolver: zodResolver(workspaceSchema),
    defaultValues: initialValues,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <DialogHeader>
        <DialogTitle>Create Workspace</DialogTitle>
        <DialogDescription>
          Enter a name for your new workspace.
        </DialogDescription>
      </DialogHeader>

      <FieldGroup className='py-4'>
        <Field>
          <Label htmlFor='name'>Name</Label>
          <Input
            {...register('name')}
            id='name'
            name='name'
            placeholder='My workspace'
            className={
              errors.name
                ? 'border-destructive focus-visible:ring-destructive'
                : ''
            }
          />
          {errors.name && (
            <p className='text-xs text-destructive font-medium'>
              {errors.name.message}
            </p>
          )}
        </Field>
      </FieldGroup>

      <DialogFooter>
        <DialogClose asChild>
          <Button onClick={onCancel} variant='outline' type='button'>
            Cancel
          </Button>
        </DialogClose>

        <Button type='submit' disabled={isPending}>
          {isPending ? 'Save...' : submitText}
        </Button>
      </DialogFooter>
    </form>
  );
};
