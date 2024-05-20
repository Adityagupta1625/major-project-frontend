import { Button } from '@/components/ui/button';
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { updateSubmission } from '@/lib/submission/update';
import { MouseEvent, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type updateStatusFormProps = {
  status: string;
  id: string;
};

const options = [
  { label: 'Accepted', value: 'Accepted' },
  { label: 'Pending', value: 'Pending' },
  { label: 'Rejected', value: 'Rejected' },
];

export function UpdateStatusForm(props: updateStatusFormProps) {
  const [status, setStatus] = useState<string>(props.status);
  const handleSubmit = (e: MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    updateSubmission({ status: status }, props.id)
      .then(() => {
        toast.success('Successfully Updated Status');
        window.location.reload();
      })
      .catch(() => {});
  };

  return (
    <>
      <DialogContent className="max-w-[325px]">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl">
            Update Status
          </DialogTitle>
        </DialogHeader>

        <Select
          value={status}
          onValueChange={(e) => {
            setStatus(e);
          }}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select Status" />
          </SelectTrigger>
          <SelectContent>
            {options.map((option, key) => {
              return (
                <SelectItem key={key} value={option.value}>
                  {option.label}
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select>
        <Button
          className="w-full"
          type="submit"
          onClick={(e) => {
            handleSubmit(e as any);
          }}
        >
          Submit
        </Button>
      </DialogContent>
    </>
  );
}
