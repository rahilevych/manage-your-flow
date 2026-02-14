interface NoDataComponentProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}
export const NoDataComponent = ({
  title,
  description,
  icon,
}: NoDataComponentProps) => {
  return (
    <div className='flex flex-col items-center justify-center h-full text-center opacity-60 mt-2 mb-2'>
      <div className='bg-none  mb-1'>{icon}</div>
      <p className='text-sm font-medium'>{title}</p>
      <p className='text-xs text-muted-foreground'>{description}</p>
    </div>
  );
};
