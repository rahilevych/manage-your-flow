import { Button } from '@/shared/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/shared/ui/card';
import { Input } from '@/shared/ui/input';
import { Label } from '@/shared/ui/label';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import z from 'zod';

import { Spinner } from '@/shared/ui/spinner';
import { useLogin } from '../model/useLogin';

const loginSchema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});
export const LoginForm = () => {
  const { mutate, isPending } = useLogin();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: z.infer<typeof loginSchema>) => {
    mutate(data);
  };

  return (
    <Card className='w-full max-w-sm'>
      <CardHeader>
        <CardTitle>Login to your account</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
          <div className='grid gap-4'>
            <div className='grid gap-2'>
              <Label htmlFor='email'>Email</Label>
              <Input
                {...register('email')}
                id='email'
                type='email'
                placeholder='m@example.com'
                className={
                  errors.email
                    ? 'border-destructive focus-visible:ring-destructive'
                    : ''
                }
              />
              {errors.email && (
                <p className='text-xs text-destructive font-medium'>
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className='grid gap-2'>
              <Label htmlFor='password'>Password</Label>
              <Input
                {...register('password')}
                id='password'
                type='password'
                className={
                  errors.password
                    ? 'border-destructive focus-visible:ring-destructive'
                    : ''
                }
              />
              {errors.password && (
                <p className='text-xs text-destructive font-medium'>
                  {errors.password.message}
                </p>
              )}
            </div>
          </div>

          <div className='flex flex-col gap-2 pt-2'>
            {isPending ? (
              <Button variant='secondary' className='w-full' disabled>
                Login
                <Spinner data-icon='inline-start' />
              </Button>
            ) : (
              <Button className='w-full'>Login</Button>
            )}

            <Button variant='outline' type='button' className='w-full'>
              Login with Github
            </Button>
          </div>
        </form>
      </CardContent>

      <CardFooter className='justify-center border-t p-4'>
        <p className='text-sm text-muted-foreground'>
          Don&apos;t have an account?
          <Link to='/auth/register' className='p-0 h-auto font-bold'>
            Sign Up
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
};
