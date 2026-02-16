import { Inbox } from 'lucide-react';

import { NoDataComponent } from '@/shared/ui/custom/NoDataComponent';
// import { AddButton } from '@/shared/ui/custom/AddButton';
// import { useState } from 'react';

// interface ProjectTasksProps {
//   projectId: string;
// }

export const TasksTab = () => {
  const hasTasks = false;
  //   const label = 'Add tasks';
  //   const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className='flex flex-col space-y-4'>
      <div className='flex justify-between items-center'>
        <h3 className='font-semibold'>Project Tasks</h3>
        {/* <AddButton label={label} onClick={() => setIsModalOpen(true)} /> */}
      </div>

      {!hasTasks ? (
        <NoDataComponent
          title='No tasks yet'
          description='Get started by creating your first task for this project.'
          icon={<Inbox />}
        />
      ) : (
        <div className='grid gap-2'></div>
      )}
    </div>
  );
};
