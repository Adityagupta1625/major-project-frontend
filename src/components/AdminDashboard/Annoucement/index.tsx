import { Button } from '@/components/ui/button';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import { FormType } from '@/constants/all.enum';
import { getAllAnnoucements } from '@/lib/annoucements/get';
import { AnnoucementsInterface } from '@/types/annoucements';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { DataTable } from '../../utils/Table';
import { columns } from './columns';
import { AnnoucementsForm } from './form';

export default function Annoucements() {
  const [data, setData] = useState<AnnoucementsInterface[]>([]);
  const [cookies, setCookies] = useCookies(['token']);

  useEffect(() => {
    getAllAnnoucements(cookies.token)
      .then((result) => {
        setData(result);
      })
      .catch(() => {});
  }, []);

  return (
    <div className="flex flex-col w-full max-w-10xl p-4 lg:p-8">
      <h1 className="text-3xl font-bold text-black text-center my-2 mb-6 p-2">
        Annoucements
      </h1>
      <div className="flex flex-row justify-end">
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-black rounded-lg text-md text-white mb-3 w-28 md:w-48 p-2 hover:bg-gray-700">
              {' '}
              Add{' '}
            </Button>
          </DialogTrigger>
          <AnnoucementsForm
            type={FormType.ADD}
            data={{
              title: '',
              _id: '',
              description: '',
              doc: '',
              createdAt: new Date(),
            }}
          />
        </Dialog>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
