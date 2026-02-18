interface HeaderContentProps {
  title?: string;
  children?: React.ReactNode;
}
export const HeaderContent = ({ title, children }: HeaderContentProps) => {
  return (
    <header className='w-full flex  flex-col items-start justify-between'>
      <div className='w-full flex justify-between  mb-2'> {children}</div>

      <h2 className='text-xl md:text-3xl font-bold tracking-tight mt-3'>
        {title}
      </h2>
    </header>
  );
};
