import { AddButton } from '@/shared/ui/custom/AddButton';

export const HomeStatsNoProjects = () => {
  return (
    <section className=' border rounded-md  p-8 text-center'>
      <h2 className='text-2xl font-medium mb-2'>
        Welcome to your new Workspace
      </h2>
      <p className='text-muted-foreground mb-6'>
        Let's create your first project!
      </p>
      <AddButton label='Create your first project' className='mx-auto' />
    </section>
  );
};
