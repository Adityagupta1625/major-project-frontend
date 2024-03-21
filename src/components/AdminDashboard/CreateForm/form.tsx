import TextField from '@/components/Forms/textfield';
import { Button } from '@/components/ui/button';
import {
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { FormType } from '@/constants/all.enum';
import { allBranchOptions } from '@/constants/branches';
import { allCoursesOptions } from '@/constants/courses';
import { addPlacementForm } from '@/lib/placementForm/add';
import { updatePlacementForm } from '@/lib/placementForm/update.';
import { PlacementFormInterface } from '@/types/placementForm';
import { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';
import DateTimePicker from 'react-datetime-picker';
import 'react-datetime-picker/dist/DateTimePicker.css';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { toast } from 'react-toastify';

type PlacementFormProps = {
  type: FormType;
  data: PlacementFormInterface;
};

export function Form(props: PlacementFormProps) {
  const defaultBranches = props.data.departments.map((department) => {
    return {
      label: department,
      value: department,
    };
  });

  const defaultCourses = props.data.courses.map((course) => {
    return {
      label: course,
      value: course,
    };
  });

  const [title, setTitle] = useState<string>(props.data.title);
  const [selectedBranches, setSelectedBranches] = useState<
    Array<{
      label: string;
      value: string;
    }>
  >(defaultBranches);
  const [selectedCourses, setSelectedCourses] = useState<
    Array<{
      label: string;
      value: string;
    }>
  >(defaultCourses);
  const [deadline, setDeadline] = useState<Date>(props.data.deadline);

  const handleSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
    try {
      e.preventDefault();

      const branches: string[] = [];
      const courses: string[] = [];

      selectedBranches.map((branch) => {
        branches.push(branch.value);
      });

      selectedCourses.map((course) => {
        courses.push(course.value);
      });

      if (props.type === FormType.ADD) {
        const resp = await addPlacementForm({
          title: title,
          departments: branches,
          courses: courses,
          deadline: deadline,
        });

        toast.success(resp.message);

        if (typeof window !== 'undefined') {
          window.open(resp.url, '_blank');
        }
      } else if (props.type === FormType.UPDATE) {
        const resp = await updatePlacementForm(
          {
            title: title,
            departments: branches,
            courses: courses,
            deadline: deadline,
          },
          props.data._id
        );

        toast.success('updated Successfully!!');

        window.location.reload();
      }
    } catch (e: any) {
      console.log(e);
      toast.error(e?.message ?? 'Something Went Wrong!!');
    }
  };
  const animatedComponents = makeAnimated();

  return (
    <>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            {props.type === FormType.ADD ? 'Create' : ' Update'} Form
          </DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-4 items-center gap-4">
          <TextField
            name="title"
            type="text"
            placeholder="Enter title"
            value={title}
            setValue={setTitle}
            className="block w-96 rounded-lg border border-gray-200 px-5 py-3 leading-6 placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500 focus:ring-opacity-50 "
          ></TextField>
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Select
            closeMenuOnSelect={false}
            defaultValue={defaultBranches}
            components={animatedComponents}
            isMulti
            options={allBranchOptions}
            onChange={(e) => {
              setSelectedBranches(e as any);
            }}
            className="w-96 rounded-lg px-5 py-3 leading-6 placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500 focus:ring-opacity-50"
            placeholder="Select Branches"
          />
        </div>

        <div className="grid grid-cols-4 items-center gap-4">
          <Select
            closeMenuOnSelect={false}
            defaultValue={defaultCourses}
            components={animatedComponents}
            isMulti
            options={allCoursesOptions}
            onChange={(e) => {
              setSelectedCourses(e as any);
            }}
            className="w-96 rounded-lg px-5 py-3 leading-6 placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500 focus:ring-opacity-50"
            placeholder="Select Courses"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <DateTimePicker
            onChange={setDeadline}
            value={deadline}
            format={'y-MM-dd h:mm a'}
            disableClock={true}
            className={`w-96 rounded-lg px-5 py-3 leading-6 placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500 focus:ring-opacity-50`}
          />
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
