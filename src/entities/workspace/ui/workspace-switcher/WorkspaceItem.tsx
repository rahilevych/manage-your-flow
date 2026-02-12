interface WorkspaceItemProps {
  name: string;
  size?: 'sm' | 'md' | 'lg';
  suffix?: React.ReactNode;
}

export const WorkspaceItem = ({
  name,
  size = 'sm',
  suffix,
}: WorkspaceItemProps) => {
  const sizeClasses = {
    sm: 'size-6 rounded-sm text-xs',
    md: 'size-7 rounded-md text-sm',
    lg: 'size-8 rounded-lg text-sm',
  };

  return (
    <div className='flex items-center gap-2 overflow-hidden'>
      <div
        className={`flex shrink-0 items-center justify-center border bg-sidebar-primary text-sidebar-primary-foreground font-medium ${sizeClasses[size]}`}
      >
        {name.charAt(0).toUpperCase()}
      </div>
      <div className='grid flex-1 text-left leading-tight'>
        <span className='truncate font-semibold'>{name}</span>
        {suffix}
      </div>
    </div>
  );
};
