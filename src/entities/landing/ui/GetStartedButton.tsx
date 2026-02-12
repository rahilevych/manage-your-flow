import { cn } from '@/shared/lib/utils';
import { buttonVariants } from '@/shared/ui/button';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router';

export const GetStartedButton = () => {
  return (
    <Link
      className={cn(
        buttonVariants({ variant: 'default', size: 'default' }),
        'rounded-full  px-5 py-5   md:w-40',
      )}
      to={'/auth/register'}
    >
      Get Started
      <ChevronRight />
    </Link>
  );
};
