import { UserProfile } from '@/types/userProfile';
import axios from 'axios';
import { getToken } from '../token';

export const updateUserProfile = (
  data: Partial<UserProfile>
): Promise<UserProfile> => {
  const token = getToken();

  return new Promise((resolve, reject) => {
    axios
      .put(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/user-profile`, data, {
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
