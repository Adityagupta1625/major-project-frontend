import { UserProfileInput } from './userProfile';

export type SubmissionDTO = {
  userId: string;
  companyId: string;
  status: string;
  comment: string[];
  _id: string;
};

export interface UserSubmissionDetails extends UserProfileInput {
  status: string;
  _id: string;
}

export type SubmissionDetailsWithCompany = {
  status: string;
  companyName: string;
  ctc: string;
  category: string;
};

export type SubmissionDetailsByCompany = {
  companyName: string;
  submissions: number;
  deadline: string;
  companyId: string;
};
