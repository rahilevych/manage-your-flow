import { useMatches } from 'react-router-dom';

export const HeaderContent = () => {
  const matches = useMatches();
  const currentMatch = [...matches].reverse().find((m) => m.handle);
  const meta = currentMatch?.handle as { title: string; description?: string };

  return (
    <header className=' flex items-start w-full mb-4'>
      <div>
        <h2 className='text-xl md:text-3xl font-bold tracking-tight'>
          {meta.title}
        </h2>{' '}
        <p className=' hidden sm:block mt-1 md:-2 text-sm md:text-base text-muted-foreground'>
          {meta.description}
        </p>
      </div>
    </header>
  );
};
