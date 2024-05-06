import * as Enum from '../constants/all.enum';

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
  department: Enum.Departments | string;
  batch: string;
  course: Enum.Courses | string;
  rollNo: string;
  resume: string;
  marks10: number;
  marks12: number;
  cgpa: number;
  mobileNo: string;
  personalEmail: string;
  email: string;
}

export type UserProfileInput = {
  name: string;
  department: string;
  batch: string;
  course: string;
  rollNo: string;
  resume: string;
  marks10: string | number;
  marks12: string | number;
  cgpa: string | number;
  mobileNo: string;
  personalEmail: string;
  officialEmail: string;
  userId?: string;
};
