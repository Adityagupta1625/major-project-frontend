import { getAllUserProfile } from '@/lib/userProfile/getAll';
import { UserProfileInput } from '@/types/userProfile';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { DataTable } from '../../utils/Table';
import { columns } from './columns';

export default function StudentDetails() {
  const [data, setData] = useState<UserProfileInput[]>([]);
  const [cookies, setCookies] = useCookies(['token']);

  useEffect(() => {
    getAllUserProfile(cookies.token)
      .then((result) => {
        setData(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="flex flex-col w-full max-w-10xl p-4 lg:p-8">
      <h1 className="text-3xl font-bold text-black text-center my-2 mb-6 p-2">
        Student Details
      </h1>

      <DataTable columns={columns} data={data} />
    </div>
  );
}
