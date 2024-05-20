import { UserSubmissionDetails } from '@/types/submission';
import axios from 'axios';
import { getToken } from '../token';

export const getUserSubmissionDetails = (
  companyId: string,
  page: number
): Promise<{ data: UserSubmissionDetails[]; totalPages: number }> => {
  const token = getToken();

  return new Promise((resolve, reject) => {
    axios
      .get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/submission/company?companyId=${companyId}&page=${page}&limit=${10}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response.data);
      });
  });
};

export const getAllUserSubmissionDetails = (
  companyId: string
): Promise<UserSubmissionDetails[]> => {
  const token = getToken();

  return new Promise((resolve, reject) => {
    axios
      .get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/submission/company/all?companyId=${companyId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response.data);
      });
  });
};
