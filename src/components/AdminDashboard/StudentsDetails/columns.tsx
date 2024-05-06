'use client';
import { Button } from '@/components/ui/button';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { UserProfileInput } from '@/types/userProfile';
import { IconDots, IconPencil } from '@tabler/icons-react';
import { ColumnDef } from '@tanstack/react-table';
import { UpdateStudentDetailsForm } from './form';

export const columns: ColumnDef<UserProfileInput>[] = [
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'department',
    header: 'Department',
  },
  {
    accessorKey: 'batch',
    header: 'Batch',
  },
  {
    accessorKey: 'course',
    header: 'Course',
  },
  {
    accessorKey: 'rollNo',
    header: 'Roll No',
  },
  {
    accessorKey: 'Resume',
    header: 'Resume',
    cell: ({ row }) => {
      return (
        <a
          href={`${row.getValue('Resume')}`}
          target="_blank"
          className="text-blue-500 font-medium "
        >
          View
        </a>
      );
    },
  },
  {
    accessorKey: 'marks10',
    header: 'Marks 10th',
  },
  {
    accessorKey: 'marks12',
    header: 'Marks 12th',
  },
  {
    accessorKey: 'cgpa',
    header: 'CGPA',
  },
  {
    accessorKey: 'mobileNo',
    header: 'Mobile No',
  },
  {
    accessorKey: 'personalEmail',
    header: 'Personal Email',
  },
  {
    accessorKey: 'actions',
    header: '',
    enableHiding: false,
    cell: ({ row }) => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <IconDots className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Dialog>
                <DialogTrigger asChild>
                  <p className="flex flex-row p-1 items-center cursor-pointer justify-start">
                    <IconPencil className="h-4 w-4 mr-2" />
                    <p className="text-sm">View Details & Edit</p>
                  </p>
                </DialogTrigger>
                <UpdateStudentDetailsForm data={row.original} />
              </Dialog>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
