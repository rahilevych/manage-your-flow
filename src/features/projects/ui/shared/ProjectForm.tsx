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

const projectSchema = z.object({
  name: z
    .string()
    .min(3, 'Project name must be at least 3 characters')
    .max(50, 'Name is too long'),
  key: z
    .string()
    .min(2, 'Key must be at least 2 characters')
    .max(10, 'Key is too long')
    .regex(/^[A-Z0-9]+$/, 'Key must be uppercase letters and numbers only'),
  description: z
    .string()
    .max(255, 'Description is too long')
    .optional()
    .or(z.literal('')),
});

export type ProjectFormValues = z.infer<typeof projectSchema>;

interface ProjectFormProps {
  initialValues?: ProjectFormValues;
  onCancel?: () => void;
  onSubmit: (data: ProjectFormValues) => void;
  isPending: boolean;
  submitText: string;
  title?: string;
}

export const ProjectForm = ({
  onCancel,
  onSubmit,
  submitText,
  isPending,
  initialValues,
  title = 'Project',
}: ProjectFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProjectFormValues>({
    resolver: zodResolver(projectSchema),
    defaultValues: initialValues,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <DialogHeader>
        <DialogTitle>{title}</DialogTitle>
        <DialogDescription>
          Specify the project details. The key is used as a prefix for tasks.
        </DialogDescription>
      </DialogHeader>

      <FieldGroup className='py-4 space-y-4'>
        <Field>
          <Label htmlFor='name'>Project Name</Label>
          <Input
            {...register('name')}
            id='name'
            placeholder='E.g., Marketing Campaign'
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
        <Field>
          <Label htmlFor='description'>Description</Label>
          <textarea
            {...register('description')}
            id='description'
            placeholder='What is this project about?'
            className='flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
          />
          {errors.description && (
            <p className='text-xs text-destructive font-medium'>
              {errors.description.message}
            </p>
          )}
        </Field>

        <Field>
          <Label htmlFor='key'>Project Key</Label>
          <Input
            {...register('key')}
            id='key'
            placeholder='E.g., MKT'
            className={
              errors.key
                ? 'border-destructive focus-visible:ring-destructive'
                : ''
            }
          />
          <p className='text-[10px] text-muted-foreground uppercase'>
            Visible in task IDs (e.g., {initialValues?.key || 'KEY'}-101)
          </p>
          {errors.key && (
            <p className='text-xs text-destructive font-medium'>
              {errors.key.message}
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
          {isPending ? 'Processing...' : submitText}
        </Button>
      </DialogFooter>
    </form>
  );
};
