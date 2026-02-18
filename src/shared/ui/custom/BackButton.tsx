import { useNavigate } from 'react-router';
import { Button } from '../button';
import { ChevronLeft } from 'lucide-react';

export const BackButton = () => {
  const navigate = useNavigate();
  return (
    <Button
      className='self-start cursor-pointer '
      variant='ghost'
      size='lg'
      onClick={() => navigate(-1)}
    >
      <ChevronLeft className='h-4 w-4' />
      <span>Back</span>
    </Button>
  );
};
