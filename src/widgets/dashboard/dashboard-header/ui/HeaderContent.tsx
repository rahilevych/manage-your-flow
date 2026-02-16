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
      </div>
    </header>
  );
};
