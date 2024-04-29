export interface UserProfile {
  userId: string;
  name: string | null;
  rollNo: string | null;
  department: string | null;
  batch: string | null;
  _id?: string;
  course: string | null;
}

export interface UserProfileDTO {
  name: string;
  department: Enum.Departments;
  batch: string;
  course: Enum.Courses;
  rollNo: string;
  resume: string;
  marks10: number;
  marks12: number;
  cgpa: number;
  mobileNo: string;
  personalEmail: string;
  email: string;
}
