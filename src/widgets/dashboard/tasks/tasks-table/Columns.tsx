import type { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown } from 'lucide-react';
import type { Task } from '@/entities/task/model/type';
import { Button } from '@/shared/ui/button';

import { Checkbox } from '@/shared/ui/checkbox';

export const columns: ColumnDef<Task>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label='Select all'
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label='Select row'
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'title',
    header: 'Task name',
  },
  {
    accessorKey: 'project.name',
    header: ({ column }) => (
      <Button
        variant='ghost'
        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
      >
        Project
        <ArrowUpDown className='ml-2 h-4 w-4' />
      </Button>
    ),
    cell: ({ row }) => {
      const projectName = row.original.project?.name || 'No Project';
      return (
        <div className='flex items-center gap-2'>
          <div className='flex h-6 w-6 items-center justify-center rounded bg-primary text-[10px] font-medium text-primary-foreground uppercase'>
            {projectName.charAt(0)}
          </div>
          <span className='truncate max-w-[120px]'>{projectName}</span>
        </div>
      );
    },
  },
  {
    accessorKey: 'assignee.name',
    header: ({ column }) => (
      <Button
        variant='ghost'
        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
      >
        Assignee
        <ArrowUpDown className='ml-2 h-4 w-4' />
      </Button>
    ),
    cell: ({ row }) => {
      const projectName = row.original.assignee?.name ?? 'Unassigned';
      return (
        <div className='flex items-center gap-2'>
          <div className='flex h-6 w-6 items-center justify-center rounded-full bg-primary/20 text-[10px] font-medium text-primary-foreground uppercase'>
            {projectName.charAt(0)}
          </div>
          <span className='truncate max-w-[120px]'>{projectName}</span>
        </div>
      );
    },
  },
  {
    accessorKey: 'dueDate',
    header: ({ column }) => (
      <Button
        variant='ghost'
        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
      >
        Due Date
        <ArrowUpDown className='ml-2 h-4 w-4' />
      </Button>
    ),
    cell: ({ row }) => {
      const date = row.getValue('dueDate') as string;
      return date ? new Date(date).toLocaleDateString() : '-';
    },
  },
  {
    accessorKey: 'status',
    header: ({ column }) => (
      <Button
        variant='ghost'
        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
      >
        Status
        <ArrowUpDown className='ml-2 h-4 w-4' />
      </Button>
    ),
  },
];
