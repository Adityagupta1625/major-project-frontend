'use client';
import { Button } from '@/components/ui/button';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import { getUserSubmissionDetails } from '@/lib/submission/getUserSubmissions';
import { UserSubmissionDetails } from '@/types/submission';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { DataTable } from '../../utils/Table';
import { columns } from './columns';
import CSVModal from './csvModal';

export default function StudentSubmissions() {
  const [data, setData] = useState<UserSubmissionDetails[]>([]);
  const params = useParams<{ companyId: string }>();
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);

  useEffect(() => {
    getUserSubmissionDetails(params.companyId, page)
      .then((result) => {
        setData(result.data);
        setTotalPages(result.totalPages);
      })
      .catch(() => {});
  }, [page]);

  return (
    <div className="flex flex-col w-full max-w-10xl p-4 lg:p-8">
      <h1 className="text-3xl font-bold text-black text-center my-2 mb-6 p-2">
        Submission Details
      </h1>
      <div className="flex flex-row justify-end m-2">
        <Dialog>
          <DialogTrigger>
            <Button className="bg-black rounded-lg text-md text-white mb-3 w-28 md:w-48 p-2 hover:bg-gray-700">
              Download Data
            </Button>
          </DialogTrigger>
          <CSVModal companyId={params.companyId} />
        </Dialog>
      </div>

      <DataTable
        columns={columns}
        data={data}
        setPage={setPage}
        totalPage={totalPages}
      />
    </div>
  );
}
