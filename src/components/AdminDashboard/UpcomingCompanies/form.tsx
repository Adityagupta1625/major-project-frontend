import TextField from '@/components/Forms/textfield';
import { Button } from '@/components/ui/button';
import {
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { FormType } from '@/constants/all.enum';
import { addUpcomingCompanies } from '@/lib/upcomingCompanies/add';
import { updateUpcomingCompanies } from '@/lib/upcomingCompanies/update';
import { UpcomingCompaniesInterface } from '@/types/upcomingCompanies';
import { fileUpload } from '@/utils/handleUpload';
import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type UpcomingCompaniesProps = {
  type: FormType;
  data: UpcomingCompaniesInterface;
};

export function UpcomingCompaniesForm(props: UpcomingCompaniesProps) {
  const [name, setName] = useState<string>(props.data.name);
  const [description, setDescription] = useState<string>(
    props.data.description
  );
  const [doc, setDoc] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setDoc(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
    try {
      e.preventDefault();
      let url = props.data.doc;

      if (doc !== null) {
        url = await fileUpload(doc!, 'Upcoming Companies');
        if (!url) throw new Error('Failed to upload document');
      }

      if (props.type === FormType.ADD) {
        await addUpcomingCompanies({ name, description, doc: url });
        toast.success('Details Added Successfully!!');
      } else {
        await updateUpcomingCompanies(
          { name, description, doc: url },
          props.data._id
        );
        toast.success('Details Updated Successfully!!');
      }

      window.location.reload();
    } catch (e: any) {
      console.log(e.response);
      toast.error(e?.message ?? 'Something Went Wrong!!');
    }
  };

  return (
    <>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            {props.type === FormType.ADD ? 'Add' : ' View & Edit'} Upcoming
            Companies
          </DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <TextField
              name="name"
              type="text"
              placeholder="Enter name"
              value={name}
              setValue={setName}
              className="block w-96 rounded-lg border border-gray-200 px-5 py-3 leading-6 placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500 focus:ring-opacity-50 "
            ></TextField>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <textarea
              name="description"
              placeholder="Enter description"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              rows={4}
              cols={10}
              className="block w-96 rounded-lg border border-gray-200 px-5 py-3 leading-6 placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500 focus:ring-opacity-50 "
            ></textarea>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <input
              type="file"
              className="block w-96 rounded-lg border border-gray-200 px-5 py-3 leading-6 placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500 focus:ring-opacity-50 "
              onChange={handleFileChange}
            ></input>
          </div>
        </div>
        <DialogFooter>
          <Button
            type="submit"
            onClick={(e) => {
              handleSubmit(e);
            }}
          >
            Submit
          </Button>
        </DialogFooter>
      </DialogContent>
    </>
  );
}
