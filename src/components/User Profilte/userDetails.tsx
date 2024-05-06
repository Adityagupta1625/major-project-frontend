import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { allBranchOptions } from '@/constants/branches';
import { allCoursesOptions } from '@/constants/courses';
import { updateUserProfile } from '@/lib/userProfile/update';
import { UserProfileInput } from '@/types/userProfile';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { Button } from '../ui/button';
import resolver from './resolver';

export default function UserProfileForm(props: {
  data: UserProfileInput | null;
}) {
  const {
    reset,
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<UserProfileInput>({ resolver });

  useEffect(() => {
    if (props.data !== null) {
      reset({ ...props.data });
    }
  }, [props.data]);

  const onSubmit = (data: UserProfileInput) => {
    if (data.marks10 !== null) {
      data.marks10 = parseFloat(data.marks10 as string);
    }

    if (data.marks12 !== null) {
      data.marks12 = parseFloat(data.marks12 as string);
    }

    if (data.cgpa !== null) {
      data.cgpa = parseFloat(data.cgpa as string);
    }

    updateUserProfile(data)
      .then((result) => {
        toast.success('Data Updated Successfully!!');
        reset({ ...result });
        window.location.reload();
      })
      .catch((e) => {
        console.log(e);
        toast.error('failed to set data, Try again Later!!');
      });
  };

  return (
    <form
      className="flex flex-col w-full items-center mx-4 my-2"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="space-y-6 grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-1 w-full  justify-center place-self-center">
        <div className="flex flex-col">
          <Input
            type="text"
            placeholder="Name"
            {...register('name')}
            className="w-11/12 mt-6"
          />
          {errors.name && (
            <p className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
              {errors.name.message}
            </p>
          )}
        </div>
        <div className="flex flex-col">
          <Select
            value={props.data?.department ?? 'Select a Department'}
            onValueChange={(e) => {
              setValue('department', e, { shouldValidate: true });
            }}
          >
            <SelectTrigger className="w-11/12">
              <SelectValue placeholder="Select a Department" />
            </SelectTrigger>
            <SelectContent>
              {allBranchOptions.map((option, key) => {
                return (
                  <SelectItem key={key} value={option.value}>
                    {option.label}
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
          {errors.department && (
            <p className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
              {'Invalid Department Selection'}
            </p>
          )}
        </div>

        <div className="flex flex-col">
          <Input
            type="text"
            placeholder="Batch"
            {...register('batch')}
            className="w-11/12"
          />
          {errors.batch && (
            <p className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
              {errors.batch.message}
            </p>
          )}
        </div>

        <div className="flex flex-col">
          <Select
            value={props.data?.course ?? 'Select a Course'}
            onValueChange={(e) => {
              setValue('course', e, { shouldValidate: true });
            }}
          >
            <SelectTrigger className="w-11/12">
              <SelectValue placeholder="Course" />
            </SelectTrigger>
            <SelectContent>
              {allCoursesOptions.map((option, key) => {
                return (
                  <SelectItem key={key} value={option.value}>
                    {option.label}
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
          {errors.course && (
            <p className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
              {'Invalid Course Selection'}
            </p>
          )}
        </div>

        <div className="flex flex-col">
          <Input
            type="text"
            placeholder="Roll No"
            {...register('rollNo')}
            className="w-11/12"
          />
          {errors.rollNo && (
            <p className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
              {errors.rollNo.message}
            </p>
          )}
        </div>

        <div className="flex flex-col">
          <Input
            type="text"
            placeholder="Resume"
            {...register('resume')}
            className="w-11/12"
          />
          {errors.resume && (
            <p className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
              {errors.resume.message}
            </p>
          )}
        </div>

        <div className="flex flex-col">
          <Input
            type="text"
            placeholder="10th Marks"
            {...register('marks10')}
            className="w-11/12"
          />
          {errors.marks10 && (
            <p className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
              {errors.marks10.message}
            </p>
          )}
        </div>

        <div className="flex flex-col">
          <Input
            type="text"
            placeholder="12th Marks"
            {...register('marks12')}
            className="w-11/12"
          />
          {errors.marks12 && (
            <p className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
              {errors.marks12.message}
            </p>
          )}
        </div>

        <div className="flex flex-col">
          <Input
            type="text"
            placeholder="CGPA"
            {...register('cgpa')}
            className="w-11/12"
          />
          {errors.cgpa && (
            <p className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
              {errors.cgpa.message}
            </p>
          )}
        </div>

        <div className="flex flex-col">
          <Input
            type="text"
            placeholder="Mobile No"
            {...register('mobileNo')}
            className="w-11/12"
          />
          {errors.mobileNo && (
            <p className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
              {errors.mobileNo.message}
            </p>
          )}
        </div>

        <div className="flex flex-col">
          <Input
            type="email"
            placeholder="Personal Email"
            {...register('personalEmail')}
            className="w-11/12"
          />
          {errors.personalEmail && (
            <p className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
              {errors.personalEmail.message}
            </p>
          )}
        </div>

        <div className="flex flex-col">
          <Input
            type="email"
            placeholder="Official Email"
            {...register('officialEmail')}
            className="w-11/12"
          />
          {errors.officialEmail && (
            <p className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
              {errors.officialEmail.message}
            </p>
          )}
        </div>
      </div>
      <Button
        className="w-1/2 lg:w-2/12 sm:w-3/12 mt-4"
        onClick={() => {
          console.log(errors);
        }}
      >
        Update Profile
      </Button>
    </form>
  );
}
