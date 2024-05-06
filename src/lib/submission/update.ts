import { SubmissionDTO } from '@/types/submission';
import axios from 'axios';
import { getToken } from '../token';

export const updateSubmission = (data: Partial<SubmissionDTO>, id: string) => {
  const token = getToken();

  return new Promise((resolve, reject) => {
    axios
      .put(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/submission/${id}`, data, {
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
