import * as Enum from '../constants/all.enum';
import { UpcomingCompaniesDTO } from './upcomingCompanies';
import { UserProfileDTO } from './userProfile';

export type SubmissionDTO = {
  userId: string;
  companyId: string;
  status: string;
  comment: string[];
  _id: string;
};

export type UserSubmissionDetails = {
  userProfile: UserProfileDTO;
  status: Enum.FormStatus;
  comments: string[];
};

export type SubmissionDetailsWithCompany = {
  companyDetails: UpcomingCompaniesDTO;
  status: Enum.FormStatus;
  comments: string[];
};
