import { Button } from '@/components/ui/button';
import {
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { formatFieldName } from '@/components/utils/utility';
import { UserProfileDTO } from '@/types/userProfile';
import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type userProfileProps = {
  data: UserProfileDTO;
};

export function UpdateStudentDetailsForm(props: userProfileProps) {
  const initialUserProfile: UserProfileDTO = {
    name: props.data.name,
    department: props.data.department,
    batch: props.data.batch,
    course: props.data.course,
    rollNo: props.data.rollNo,
    resume: props.data.resume,
    marks10: props.data.marks10,
    marks12: props.data.marks12,
    cgpa: props.data.cgpa,
    mobileNo: props.data.mobileNo,
    personalEmail: props.data.personalEmail,
    email: props.data.email,
  };

  const [userProfile, setUserProfile] =
    useState<UserProfileDTO>(initialUserProfile);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    let { name, value } = e.target;

    if (name === 'marks10' || name === 'marks12' || name === 'cgpa') {
      value = value.replace(/[^0-9.]/g, '');
      value = parseFloat(value).toFixed(2);
    }

    setUserProfile((prevProfile) => ({ ...prevProfile, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
    try {
      e.preventDefault();

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
          <DialogTitle>View and Update Student Profile</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            {Object.entries(userProfile).map(([key, value]) => (
              <Input
                className="w-96"
                type="text"
                name={key}
                placeholder={formatFieldName(key)}
                value={value}
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            ))}
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
