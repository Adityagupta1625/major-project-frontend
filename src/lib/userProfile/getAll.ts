import { UserProfileInput } from '@/types/userProfile';
import axios from 'axios';
import { getToken } from '../token';

export const getAllUserProfile = (
  page: number
): Promise<{
  data: UserProfileInput[];
  totalPages: number;
}> => {
  const token = getToken();
  return new Promise((resolve, reject) => {
    axios
      .get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/user-profile/all?page=${page}&limit=${10}`,
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
        reject(err);
      });
  });
};
