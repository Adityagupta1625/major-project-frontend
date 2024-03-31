import { Button } from '@/components/ui/button';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import { FormType } from '@/constants/all.enum';
import { PlacementFormInterface } from '@/types/placementForm';
import { DataTable } from '../../utils/Table';
import { columns } from './columns';
import { Form } from './form';

export default function CreateForm(props: { data: PlacementFormInterface[] }) {
  return (
    <div className="flex flex-col w-full max-w-10xl p-4 lg:p-8">
      <h1 className="text-3xl font-bold text-black text-center my-2 mb-6 p-2">
        Create New Form
      </h1>
      <div className="flex flex-row justify-end">
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-black rounded-lg text-md text-white mb-3 w-28 md:w-48 p-2 hover:bg-gray-700">
              {' '}
              Add{' '}
            </Button>
          </DialogTrigger>
          <Form
            type={FormType.ADD}
            data={{
              title: '',
              departments: [],
              courses: [],
              deadline: new Date(),
              _id: '',
              formId: '',
            }}
          />
        </Dialog>
      </div>
      <DataTable columns={columns} data={props.data} />
    </div>
  );
}
