'use client';
import { SubmissionDetailsWithCompany } from '@/types/submission';
import { ColumnDef } from '@tanstack/react-table';

export const columns: ColumnDef<SubmissionDetailsWithCompany>[] = [
  {
    accessorKey: 'status',
    header: 'Status',
  },
  {
    accessorKey: 'companyDetails.name',
    header: 'Company Name',
  },

  {
    accessorKey: 'actions',
    header: '',
    enableHiding: false,
    cell: ({ row }) => {
      return (
        <></>
        // <DropdownMenu>
        //   <DropdownMenuTrigger asChild>
        //     <Button variant="ghost" className="h-8 w-8 p-0">
        //       <span className="sr-only">Open menu</span>
        //       <IconDots className="h-4 w-4" />
        //     </Button>
        //   </DropdownMenuTrigger>
        //   <DropdownMenuContent align="end">
        //     <DropdownMenuLabel>Actions</DropdownMenuLabel>
        //     <DropdownMenuSeparator />
        //     <DropdownMenuItem asChild>
        //       <Dialog>
        //         <DialogTrigger asChild>
        //           <p className="flex flex-row p-1 items-center cursor-pointer justify-start">
        //             <IconPencil className="h-4 w-4 mr-2" />
        //             <p className="text-sm">View Details & Edit</p>
        //           </p>
        //         </DialogTrigger>
        //         <UpdateStudentDetailsForm data={row.original} />
        //       </Dialog>
        //     </DropdownMenuItem>
        //   </DropdownMenuContent>
        // </DropdownMenu>
      );
    },
  },
];
