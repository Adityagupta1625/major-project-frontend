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
import { FormType } from '@/constants/all.enum';
import { deletePlacementForm } from '@/lib/placementForm/delete';
import { PlacementFormInterface } from '@/types/placementForm';
import { IconDots, IconPencil, IconTrash } from '@tabler/icons-react';
import { ColumnDef } from '@tanstack/react-table';
import { toast } from 'react-toastify';
import { Form } from './form';

export const columns: ColumnDef<PlacementFormInterface>[] = [
  {
    accessorKey: 'title',
    header: 'Title',
  },
  {
    accessorKey: 'courses',
    header: 'Courses',
  },
  {
    accessorKey: 'departments',
    header: 'Departments',
  },
  {
    accessorKey: 'deadline',
    header: 'Deadline',
    cell: ({ row }) => {
      return new Date(row.original.deadline).toLocaleString();
    },
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
              <div
                className="flex flex-row p-1 items-center cursor-pointer justify-start"
                onClick={() => {
                  if (typeof window !== 'undefined') {
                    window.open(
                      `https://docs.google.com/forms/d/${row.original.formId}/edit`,
                      '_blank'
                    );
                  }
                }}
              >
                <IconPencil className="h-4 w-4 mr-2" />
                <p className="text-sm">Edit Form</p>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Dialog>
                <DialogTrigger asChild>
                  <p className="flex flex-row p-1 items-center cursor-pointer justify-start">
                    <IconPencil className="h-4 w-4 mr-2" />
                    <p className="text-sm">View & Edit Table details</p>
                  </p>
                </DialogTrigger>
                <Form
                  type={FormType.UPDATE}
                  data={{
                    title: row.original.title,
                    departments: row.original.departments,
                    courses: row.original.courses,
                    deadline: row.original.deadline,
                    _id: row.original._id,
                    formId: row.original.formId,
                  }}
                />
              </Dialog>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <div className="flex flex-row p-1 cursor-pointer">
                <IconTrash className="h-4 w-4 mr-2" />
                <p
                  onClick={async (e) => {
                    try {
                      e.preventDefault();
                      await deletePlacementForm(row.original._id);
                      toast.success('Deleted Successfully!!');
                      window.location.reload();
                    } catch (e: any) {
                      toast.error(
                        e?.message ?? 'Error Occured! Please Try Again Later'
                      );
                    }
                  }}
                >
                  {' '}
                  Delete{' '}
                </p>
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
