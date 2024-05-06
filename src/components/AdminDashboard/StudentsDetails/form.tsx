import UserProfileForm from '@/components/User Profilte/userDetails';
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { UserProfileInput } from '@/types/userProfile';
import 'react-toastify/dist/ReactToastify.css';

type userProfileProps = {
  data: UserProfileInput;
};

export function UpdateStudentDetailsForm(props: userProfileProps) {
  const initialUserProfile: UserProfileInput = {
    officialEmail: props.data.officialEmail,
    personalEmail: props.data.personalEmail,
    name: props.data.name,
    batch: props.data.batch,
    cgpa: props.data.cgpa,
    department: props.data.department,
    course: props.data.course,
    rollNo: props.data.rollNo,
    mobileNo: props.data.mobileNo,
    marks10: props.data.marks10,
    marks12: props.data.marks12,
    resume: props.data.resume,
    userId: props.data.userId,
  };

  return (
    <>
      <DialogContent className="max-w-[1025px]">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl">
            View and Update Student Profile
          </DialogTitle>
        </DialogHeader>

        <UserProfileForm data={initialUserProfile} />
      </DialogContent>
    </>
  );
}
