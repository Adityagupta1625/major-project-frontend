import { DataTable } from '@/components/utils/Table';
import { getAllSubmissions } from '@/lib/submission/get';
import { SubmissionDetailsByCompany } from '@/types/submission';
import { useEffect, useState } from 'react';
import { columns } from './columns';

export default function FormSubmissions() {
  const [data, setData] = useState<SubmissionDetailsByCompany[]>([]);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    getAllSubmissions(page)
      .then((result) => {
        setData(result);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [page]);

  return (
    <div className="flex flex-col w-full max-w-10xl p-4 lg:p-8">
      <h1 className="text-3xl font-bold text-black text-center my-2 mb-6 p-2">
        Student Details
      </h1>

      <DataTable columns={columns} data={data} setPage={setPage} />
    </div>
  );
}
