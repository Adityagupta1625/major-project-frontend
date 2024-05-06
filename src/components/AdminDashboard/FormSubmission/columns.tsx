'use client';
import { SubmissionDetailsByCompany } from '@/types/submission';
import { ColumnDef } from '@tanstack/react-table';
import Actions from './Actions';

export const columns: ColumnDef<SubmissionDetailsByCompany>[] = [
  {
    accessorKey: 'companyName',
    header: 'Company Name',
  },
  {
    accessorKey: 'deadline',
    header: 'Deadline',
    cell: ({ row }) => {
      return <span>{new Date(row.original.deadline).toLocaleString()}</span>;
    },
  },
  {
    accessorKey: 'submissions',
    header: 'Submissions',
  },
  {
    accessorKey: 'actions',
    header: 'Actions',
    enableHiding: false,
    cell: ({ row }) => {
      return <Actions companyId={row.original.companyId}></Actions>;
    },
  },
];
