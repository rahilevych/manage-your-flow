import { Plus } from 'lucide-react';
import { Button } from '../button';

type AddButtonProps = React.ComponentProps<typeof Button> & {
  label: string;
};

export const AddButton = ({ label, ...props }: AddButtonProps) => {
  return (
    <Button variant='outline' size='sm' className='gap-2' {...props}>
      <span> {label}</span>
      <Plus size={16} />
    </Button>
  );
};
