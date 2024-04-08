import { Button } from '@/components/ui/button';
import {
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { FormType } from '@/constants/all.enum';
import { addAnnoucement } from '@/lib/annoucements/add';
import { updateAnnoucement } from '@/lib/annoucements/update';
import { AnnoucementsInterface } from '@/types/annoucements';
import { fileUpload } from '@/utils/handleUpload';
import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type AnnoucementsProps = {
  type: FormType;
  data: AnnoucementsInterface;
};

export function AnnoucementsForm(props: AnnoucementsProps) {
  const [title, setTitle] = useState<string>(props.data.title);
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
        url = await fileUpload(doc!, 'Annoucement');
        if (!url) throw new Error('Failed to upload document');
      }

      if (props.type === FormType.ADD) {
        await addAnnoucement({ title, description, doc: url });
        toast.success('Details Added Successfully!!');
      } else {
        await updateAnnoucement(
          { title, description, doc: url },
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
            {props.type === FormType.ADD ? 'Add' : ' View & Edit'} Annoucements
          </DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Input
              className="w-96"
              type="text"
              placeholder="company name"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Textarea
              rows={6}
              cols={10}
              value={description}
              className="w-96"
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              placeholder="Description"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Input type="file" onChange={handleFileChange} className="w-96" />
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
