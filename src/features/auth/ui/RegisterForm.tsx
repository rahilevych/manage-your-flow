import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/shared/ui/card';
import { Label } from '@/shared/ui/label';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link } from 'react-router-dom';

import { Spinner } from '@/shared/ui/spinner';
import { useRegister } from '../model/useRegister';

const registerSchema = z
  .object({
    name: z.string().min(2, 'Name is too short'),
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  });
export const RegisterForm = () => {
  const { mutate, isPending } = useRegister();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (data: z.infer<typeof registerSchema>) => {
    mutate(data);
  };

  return (
    <Card className='w-full max-w-sm'>
      <CardHeader>
        <CardTitle>Create an account</CardTitle>
        <CardDescription>Enter your details to get started</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
          <div className='grid gap-4'>
            <div className='grid gap-2'>
              <Label htmlFor='name'>Full Name</Label>
              <Input
                {...register('name')}
                id='name'
                placeholder='John Doe'
                className={
                  errors.name
                    ? 'border-destructive focus-visible:ring-destructive'
                    : ''
                }
              />
            </div>
            {errors.name && (
              <p className='text-xs text-destructive font-medium'>
                {errors.name.message}
              </p>
            )}
          </div>

          <div className='grid gap-2'>
            <Label htmlFor='email'>Email</Label>
            <Input
              {...register('email')}
              id='email'
              placeholder='m@example.com'
              type='email'
              className={
                errors.email
                  ? 'border-destructive focus-visible:ring-destructive'
                  : ''
              }
            />
          </div>

          {errors.email && (
            <p className='text-xs text-destructive'>{errors.email.message}</p>
          )}

          <div className='grid gap-2'>
            <Label htmlFor='password'>Password</Label>
            <Input
              {...register('password')}
              id='password'
              placeholder='••••••••'
              type='password'
              className={
                errors.password
                  ? 'border-destructive focus-visible:ring-destructive'
                  : ''
              }
            />
          </div>

          {errors.password && (
            <p className='text-xs text-destructive'>
              {errors.password.message}
            </p>
          )}

          <div className='grid gap-2'>
            <Label htmlFor='confirmPassword'>Confirm Password</Label>
            <Input
              {...register('confirmPassword')}
              id='confirmPassword'
              placeholder='••••••••'
              type='password'
              className={
                errors.confirmPassword
                  ? 'border-destructive focus-visible:ring-destructive'
                  : ''
              }
            />
          </div>

          {errors.confirmPassword && (
            <p className='text-xs text-destructive'>
              {errors.confirmPassword.message}
            </p>
          )}

          <div className='flex flex-col gap-2 pt-2'>
            {isPending ? (
              <Button variant='secondary' className='w-full' disabled>
                Create Account
                <Spinner data-icon='inline-start' />
              </Button>
            ) : (
              <Button className='w-full'>Create Account</Button>
            )}
            <Button variant='outline' type='button' className='w-full'>
              Login with Github
            </Button>
          </div>
        </form>
      </CardContent>
      <CardFooter className='justify-center border-t p-4'>
        <p className='text-sm text-muted-foreground'>
          Do you have already account?
          <Link to='/auth/login' className='font-bold p-0 h-auto'>
            Sign In
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
};
