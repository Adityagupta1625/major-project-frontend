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
import { allBranchOptions } from '@/constants/branches';
import { allCoursesOptions } from '@/constants/courses';
import { allOfferCategories } from '@/constants/offerCategory';
import { allOfferType } from '@/constants/offerType';
import { addUpcomingCompanies } from '@/lib/upcomingCompanies/add';
import { updateUpcomingCompanies } from '@/lib/upcomingCompanies/update';
import { UpcomingCompaniesDTO } from '@/types/upcomingCompanies';
import { fileUpload } from '@/utils/handleUpload';
import { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';
import DateTimePicker from 'react-datetime-picker';
import 'react-datetime-picker/dist/DateTimePicker.css';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type UpcomingCompaniesProps = {
  type: FormType;
  data: UpcomingCompaniesDTO;
};

export function UpcomingCompaniesForm(props: UpcomingCompaniesProps) {
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

  const animatedComponents = makeAnimated();

  const [name, setName] = useState<string>(props.data.name);
  const [description, setDescription] = useState<string>(
    props.data.description
  );
  const [doc, setDoc] = useState<File | null>(null);

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
  const [deadline, setDeadline] = useState<any>(props.data.deadline);
  const [batch, setBatch] = useState<string>(props.data.batch);
  const [ctc, setCTC] = useState<string>(props.data.ctc);
  const [category, setCategory] = useState<{
    label: string;
    value: string;
  }>({
    label: props.data.category,
    value: props.data.category,
  });
  const [offer, setOffer] = useState<{
    label: string;
    value: string;
  }>({
    label: props.data.offer,
    value: props.data.offer,
  });

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
        await addUpcomingCompanies({
          name,
          description,
          doc: url,
          deadline,
          departments: selectedBranches.map((branch) => branch.value) as any,
          courses: selectedCourses.map((course) => course.value) as any,
          batch: batch,
          ctc: ctc,
          category: category.value,
          offer: offer.value,
        });
        toast.success('Details Added Successfully!!');
      } else {
        await updateUpcomingCompanies(
          {
            name,
            description,
            doc: url,
            deadline,
            departments: selectedBranches.map((branch) => branch.value) as any,
            courses: selectedCourses.map((course) => course.value) as any,
            batch: batch,
            ctc: ctc,
            category: category.value,
            offer: offer.value,
          },
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
      <DialogContent className="sm:max-w-[435px] overflow-y-scroll max-h-[90vh] scroll-smooth">
        <DialogHeader>
          <DialogTitle>
            {props.type === FormType.ADD ? 'Add' : ' View & Edit'} Upcoming
            Companies
          </DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Input
              className="w-96"
              type="text"
              placeholder="company name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
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
            <Select
              closeMenuOnSelect={false}
              defaultValue={defaultBranches}
              components={animatedComponents}
              isMulti
              options={allBranchOptions}
              onChange={(e) => {
                setSelectedBranches(e as any);
              }}
              className="w-96 rounded-lg  placeholder-gray-500 focus:border-black"
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
              className="w-96 rounded-lg  placeholder-gray-500 active:border-black active:ring-black"
              placeholder="Select Courses"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <DateTimePicker
              onChange={setDeadline}
              value={deadline}
              format={'y-MM-dd h:mm a'}
              disableClock={true}
              className="w-96 rounded-lg h-10  placeholder-gray-500 focus:border-black border-gray-50"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Input
              className="w-96"
              type="text"
              placeholder="Batch"
              value={batch}
              onChange={(e) => {
                setBatch(e.target.value);
              }}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Input
              className="w-96"
              type="text"
              placeholder="CTC"
              value={ctc}
              onChange={(e) => {
                setCTC(e.target.value);
              }}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Select
              closeMenuOnSelect={false}
              defaultValue={category}
              components={animatedComponents}
              options={allOfferCategories}
              onChange={(e) => {
                setCategory(e as any);
              }}
              className="w-96 rounded-lg  placeholder-gray-500 focus:border-black"
              placeholder="Select Category of Offer"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Select
              closeMenuOnSelect={false}
              defaultValue={offer}
              components={animatedComponents}
              options={allOfferType}
              onChange={(e) => {
                setOffer(e as any);
              }}
              className="w-96 rounded-lg  placeholder-gray-500 focus:border-black"
              placeholder="Select Offer Type"
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
