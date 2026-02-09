import React from 'react';

interface SectionHeaderProps {
  title: string;

  children: React.ReactNode;
}
export const SectionHeader = ({ title, children }: SectionHeaderProps) => {
  return (
    <div className='flex items-center justify-between p-4 border-b'>
      <h2 className='text-lg font-semibold traking-tight'>{title}</h2>
      {children && <div className='flex items-center gap-2'>{children}</div>}
    </div>
  );
};
