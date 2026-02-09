import { Link } from 'react-router-dom';
import { Button } from '../button';

type SeeAllButtonProps = React.ComponentProps<typeof Button> & {
  to: string;
  label?: string;
};
export const SeeAllButton = ({
  to,
  label = 'See all',
  ...props
}: SeeAllButtonProps) => {
  return (
    <Button
      variant='ghost'
      size='sm'
      asChild
      className=' w-full  text-muted-foreground hover:text-primary gap-1 px-2 font-medium'
      {...props}
    >
      <Link to={to}>{label}</Link>
    </Button>
  );
};
