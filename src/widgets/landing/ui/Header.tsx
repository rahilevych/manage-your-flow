import { GetStartedButton } from '@/entities/landing/ui/GetStartedButton';
import { Logo } from '@/shared/ui/custom/Logo';
import { Link } from 'react-router';

export const Header = () => {
  return (
    <header>
      <nav className='border-b bg-background/95 backdrop-blur sticky top-0 z-50'>
        <div className='container mx-auto flex h-16 items-center justify-between px-6'>
          <Logo />

          <div className='flex items-center gap-6'>
            <Link
              to={'/auth/login'}
              className='hidden sm:block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors'
            >
              Sign In
            </Link>
            <GetStartedButton />
          </div>
        </div>
      </nav>
    </header>
  );
};
