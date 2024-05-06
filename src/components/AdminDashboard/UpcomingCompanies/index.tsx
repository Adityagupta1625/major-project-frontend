import { Button } from '@/components/ui/button';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import { FormType } from '@/constants/all.enum';
import { getAllUpcomingCompanies } from '@/lib/upcomingCompanies/get';
import { UpcomingCompaniesDTO } from '@/types/upcomingCompanies';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { DataTable } from '../../utils/Table';
import { columns } from './columns';
import { UpcomingCompaniesForm } from './form';

export default function UpcomingCompanies() {
  const [data, setData] = useState<UpcomingCompaniesDTO[]>([]);
  const [cookies, setCookies] = useCookies(['token']);

  useEffect(() => {
    getAllUpcomingCompanies(cookies.token)
      .then((result) => {
        setData(result);
      })
      .catch(() => {});
  }, []);

  return (
    <div className="flex flex-col w-full max-w-10xl p-4 lg:p-8">
      <h1 className="text-3xl font-bold text-black text-center my-2 mb-6 p-2">
        Upcoming Companies
      </h1>
      <div className="flex flex-row justify-end">
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-black rounded-lg text-md text-white mb-3 w-28 md:w-48 p-2 hover:bg-gray-700">
              {' '}
              Add{' '}
            </Button>
          </DialogTrigger>
          <UpcomingCompaniesForm
            type={FormType.ADD}
            data={{
              name: '',
              _id: '',
              description: '',
              doc: '',
              courses: [],
              departments: [],
              deadline: new Date(),
              batch: '',
              ctc: '',
              category: '',
              offer: '',
            }}
          />
        </Dialog>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
