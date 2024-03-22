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
import { deleteAnnoucements } from '@/lib/annoucements/delete';
import { AnnoucementsInterface } from '@/types/annoucements';
import { IconDots, IconPencil, IconTrash } from '@tabler/icons-react';
import { ColumnDef } from '@tanstack/react-table';
import { toast } from 'react-toastify';
import { AnnoucementsForm } from './form';

export const columns: ColumnDef<AnnoucementsInterface>[] = [
  {
    accessorKey: 'title',
    header: 'Title',
  },
  {
    accessorKey: 'description',
    header: 'Description',
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
                <AnnoucementsForm
                  type={FormType.UPDATE}
                  data={{
                    title: row.original.title,
                    _id: row.original._id,
                    description: row.original.description,
                    doc: row.original.doc,
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
                      await deleteAnnoucements(row.original._id);
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
