import { useState } from 'react';
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  type ColumnDef,
  type SortingState,
} from '@tanstack/react-table';

import { Button } from '@/shared/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/shared/ui/table';
import { Input } from '@/shared/ui/input';
import { DeleteConfirmButton } from '@/features/workspace/ui/delete-workspace/DeleteConfirmButton';
import type { Task } from '@/entities/task/model/type';
import { useDeleteTasks } from '@/features/task/model/useDeleteTasks';
import { useNavigate, useParams } from 'react-router';

interface TasksTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function TasksTable<TData, TValue>({
  columns,
  data,
}: TasksTableProps<TData, TValue>) {
  const { id: workspaceId, projectId } = useParams<{
    id: string;
    projectId: string;
  }>();
  const { mutate: deleteTasks, isPending: isDeleting } = useDeleteTasks();
  const navigate = useNavigate();
  const [sorting, setSorting] = useState<SortingState>([
    { id: 'dueDate', desc: false },
  ]);
  const [globalFilter, setGlobalFilter] = useState('');
  const [rowSelection, setRowSelection] = useState({});
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onGlobalFilterChange: setGlobalFilter,
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      globalFilter,
      rowSelection,
    },
  });
  const selectedRows = table.getFilteredSelectedRowModel().rows;
  const handleDelete = () => {
    const ids = selectedRows.map((r) => (r.original as Task).id);

    if (workspaceId && projectId && ids.length > 0) {
      deleteTasks(
        { workspaceId, projectId, taskIds: ids },
        {
          onSuccess: () => {
            setRowSelection({});
          },
        },
      );
    }
  };
  return (
    <div className='space-y-4'>
      <div className='flex flex-col gap-5  sm:flex-row items-center justify-between py-5'>
        <Input
          placeholder='Search tasks...'
          value={globalFilter ?? ''}
          onChange={(event) => setGlobalFilter(event.target.value)}
          className='max-w md:w-3xl'
        />
        <div className=' flex  sm:mt-0 items-center justify-center gap-2'>
          {selectedRows.length > 0 && (
            <DeleteConfirmButton
              onConfirm={handleDelete}
              buttonText={
                isDeleting
                  ? 'Deleting tasks...'
                  : `Delete tasks (${selectedRows.length})`
              }
            />
          )}
        </div>
      </div>
      <div className='overflow-hidden rounded-md border'>
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                  className='cursor-pointer hover:bg-muted/50'
                  onClick={() => {
                    const task = row.original as Task;
                    navigate(
                      `/dashboard/${workspaceId}/projects/${projectId}/tasks/${task.id}`,
                    );
                  }}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell
                      key={cell.id}
                      onClick={(e) => {
                        if (cell.column.id === 'select') {
                          e.stopPropagation();
                        }
                      }}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className='h-24 text-center'
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <div className='flex items-center justify-end space-x-2'>
        <div className='flex-1 text-sm text-muted-foreground'>
          Page {table.getState().pagination.pageIndex + 1} of{' '}
          {table.getPageCount()}
        </div>
        <Button
          variant='outline'
          size='sm'
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <Button
          variant='outline'
          size='sm'
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
