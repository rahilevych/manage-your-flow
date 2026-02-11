import { Button } from '@/shared/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/shared/ui/dialog';
import { Field, FieldGroup } from '@/shared/ui/field';
import { Input } from '@/shared/ui/input';
import { Label } from '@/shared/ui/label';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import z from 'zod';
import { useCreateWorkspace } from '../model/useCreateWorkspace';

interface CreateWorkspaceModalProps {
  children: React.ReactNode;
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
export const CreateWorkspaceModal = ({
  children,
}: CreateWorkspaceModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { mutate } = useCreateWorkspace();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<z.infer<typeof workspaceSchema>>({
    resolver: zodResolver(workspaceSchema),
  });
  const onSubmit = (data: z.infer<typeof workspaceSchema>) => {
    mutate(data);
    console.log(data);
    setIsOpen(false);
    reset();
  };
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent className='sm:max-w-sm'>
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
              <Button variant='outline' type='button'>
                Cancel
              </Button>
            </DialogClose>

            <Button>Create</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
