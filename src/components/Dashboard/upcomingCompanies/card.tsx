import { addSubmission } from '@/lib/submission/add';
import { Dispatch, SetStateAction } from 'react';
import { toast } from 'react-toastify';

export default function Card(props: {
  title: string;
  description: string;
  doc: string | null;
  deadline: Date;
  departments: string[];
  courses: string[];
  ctc: string;
  batch: string;
  category: string;
  offer: string;
  _id: string;
  applied: boolean;
  setApplied: Dispatch<SetStateAction<boolean>>;
}) {
  const handleSubmission = async () => {
    try {
      props.setApplied(true);
      await addSubmission({ companyId: props._id });
      toast.success('Successfully Submitted');
      props.setApplied(true);
    } catch (e: any) {
      props.setApplied(false);
      toast.error('Error in applying, Retry later: ', e.message);
      console.log(e);
    }
  };

  return (
    <>
      <div className="flex flex-col overflow-hidden rounded-lg bg-white shadow-sm border-2 border-gray-100">
        <div className="bg-gray-50 px-5 py-4">
          <h3 className="flex flex-row font-medium justify-between">
            <span> {props.title} </span>
            <span>{props.deadline.toLocaleString()} </span>
          </h3>
        </div>

        <div className="grow px-5 py-2">
          <p>{props.description}</p>
        </div>

        <div className="grow px-5 py-2">
          <p>
            <b>Departments Allowed:</b> {props.departments.join(', ')}
          </p>
          <p>
            <b>Courses Allowed:</b> {props.courses.join(', ')}
          </p>
          <p>
            <b> CTC: </b> {props.ctc} <span>({props.category})</span>
          </p>
          <p>
            <b>OFFER:</b> {props.offer}
          </p>

          <p></p>
        </div>

        {props.doc !== null ? (
          <div className="flex flex-row  justify-between items-center grow p-5">
            <a href={`${props.doc}`} className="text-sm text-blue-700">
              View Doc
            </a>

            {props.applied ? (
              <button
                className="h-8 w-44 bg-blue-400 text-white rounded-md cursor-pointer hover:bg-blue-600"
                disabled
              >
                Applied
              </button>
            ) : (
              <button
                className="h-8 w-44 bg-blue-700 text-white rounded-md cursor-pointer hover:bg-blue-600"
                onClick={handleSubmission}
              >
                Apply{' '}
              </button>
            )}
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}
