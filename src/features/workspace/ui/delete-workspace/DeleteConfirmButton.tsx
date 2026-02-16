import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/shared/ui/alert-dialog';
import { Button } from '@/shared/ui/button';
import { Trash2Icon } from 'lucide-react';

interface DeleteConfirmButtonProps {
  onConfirm: () => void;
  title?: string;
  description?: string;
  buttonText?: string;
  confirmText?: string;
  isPending?: boolean;
  icon?: React.ReactNode;
}

export const DeleteConfirmButton = ({
  onConfirm,
  title = 'Are you sure?',
  description = 'This action cannot be undone.',
  buttonText = 'Delete',
  confirmText = 'Delete',
  isPending = false,
  icon = <Trash2Icon />,
}: DeleteConfirmButtonProps) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant='destructive' disabled={isPending}>
          {buttonText}
        </Button>
      </AlertDialogTrigger>

      <AlertDialogContent size='sm'>
        <AlertDialogHeader>
          <AlertDialogMedia className='bg-destructive/10 text-destructive dark:bg-destructive/20 dark:text-destructive'>
            {icon}
          </AlertDialogMedia>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel variant='outline'>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={onConfirm}
            variant='destructive'
            disabled={isPending}
          >
            {isPending ? 'Deleting...' : confirmText}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
