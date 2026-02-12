import { GetStartedButton } from '@/entities/landing/ui/GetStartedButton';

export const Hero = () => {
  return (
    <section className='container mx-auto px-6 pt-24 pb-24 text-center lg:pt-32'>
      <h1 className='text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl mb-6'>
        Manage all your workspaces <br />
        <span className='text-primary'>in one powerful platform</span>
      </h1>

      <p className='mx-auto max-w-[750px] text-lg text-muted-foreground sm:text-xl mb-10 leading-relaxed'>
        Create projects, assign tasks, invite your team, and track progress -
        everything you need to stay organized and productive in a single, clean
        interface
      </p>

      <div className='flex justify-center'>
        <GetStartedButton />
      </div>
    </section>
  );
};
