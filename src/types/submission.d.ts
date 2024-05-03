export type SubmissionDTO = {
  userId: string;
  companyId: string;
  status: string;
  comment: string[];
  _id: string
};

export type UserSubmissionDetails={
  userProfile: UserProfileDTO
  status: Enum.FormStatus
  comments: string[]
}