'use client';
import { getUserSubmissionDetails } from '@/lib/submission/getUserSubmissions';
import { UserSubmissionDetails } from '@/types/submission';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import CSVDownloadButton from 'react-json-to-csv';
import { DataTable } from '../../utils/Table';
import { columns } from './colums';

export default function StudentSubmissions() {
  const [data, setData] = useState<UserSubmissionDetails[]>([]);
  const params = useParams<{ companyId: string }>();

  useEffect(() => {
    getUserSubmissionDetails(params.companyId)
      .then((result) => {
        setData(result);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div className="flex flex-col w-full max-w-10xl p-4 lg:p-8">
      <h1 className="text-3xl font-bold text-black text-center my-2 mb-6 p-2">
        Submission Details
      </h1>
      <div className="flex flex-row justify-end m-2">
        <CSVDownloadButton
          data={data.map((value) => {
            return value.status === 'Accepted';
          })}
          filename="data.csv"
          style={{
            backgroundColor: 'black',
            width: '12rem',
            color: 'white',
            border: '2px solid gray',
            margin: '3px',
            padding: '4px',
            borderRadius: '8px',
            height: '40px',
          }}
        />
      </div>

      <DataTable columns={columns} data={data} />
    </div>
  );
}
