import { SubmissionDTO } from '@/types/submission';
import axios from 'axios';
import { getToken } from '../token';

export const addSubmission = (data: Partial<SubmissionDTO>) => {
  const token = getToken();

  return new Promise((resolve, reject) => {
    axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/submission`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response.data);
      });
  });
};
