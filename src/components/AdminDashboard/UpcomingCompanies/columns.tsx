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
import { deleteUpcomingCompanies } from '@/lib/upcomingCompanies/delete';
import { UpcomingCompaniesDTO } from '@/types/upcomingCompanies';
import { IconDots, IconPencil, IconTrash } from '@tabler/icons-react';
import { ColumnDef } from '@tanstack/react-table';
import { toast } from 'react-toastify';
import { UpcomingCompaniesForm } from './form';

export const columns: ColumnDef<UpcomingCompaniesDTO>[] = [
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'description',
    header: 'Description',
  },
  {
    accessorKey: 'courses',
    header: 'Courses',
    cell: ({ row }) => {
      return row.original.courses.join(', ');
    },
  },
  {
    accessorKey: 'deadline',
    header: 'Deadline',
    cell: ({ row }) => {
      return new Date(row.original.deadline).toLocaleString();
    },
  },
  {
    accessorKey: 'departments',
    header: 'Departments',
    cell: ({ row }) => {
      return row.original.departments.join(', ');
    },
  },
  {
    accessorKey: 'ctc',
    header: 'CTC',
  },
  {
    accessorKey: 'category',
    header: 'Category',
  },
  {
    accessorKey: 'offer',
    header: 'Offer',
  },
  {
    accessorKey: 'batch',
    header: 'Batch',
  },
  {
    accessorKey: 'doc',
    header: 'Doc',
    cell: ({ row }) => {
      return (
        <a
          href={`${row.getValue('doc')}`}
          target="_blank"
          className="text-blue-500 font-medium "
        >
          View Doc
        </a>
      );
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
              <Dialog>
                <DialogTrigger asChild>
                  <p className="flex flex-row p-1 items-center cursor-pointer justify-start">
                    <IconPencil className="h-4 w-4 mr-2" />
                    <p className="text-sm">View Details & Edit</p>
                  </p>
                </DialogTrigger>
                <UpcomingCompaniesForm
                  type={FormType.UPDATE}
                  data={{
                    name: row.original.name,
                    _id: row.original._id,
                    description: row.original.description,
                    doc: row.original.doc,
                    courses: row.original.courses,
                    deadline: row.original.deadline,
                    departments: row.original.departments,
                    category: row.original.category,
                    offer: row.original.offer,
                    batch: row.original.batch,
                    ctc: row.original.ctc,
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
                      await deleteUpcomingCompanies(row.original._id);
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
