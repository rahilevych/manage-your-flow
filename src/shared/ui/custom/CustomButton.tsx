import { Button } from '../button';

type AddButtonProps = React.ComponentProps<typeof Button> & {
  label?: string;
  children?: React.ReactNode;
};

export const CustomButton = ({ label, children, ...props }: AddButtonProps) => {
  return (
    <Button
      variant='outline'
      size='lg'
      className='flex items-center justify-between gap-2 cursor-pointer'
      {...props}
    >
      <span> {label}</span>
      {children}
    </Button>
  );
};
