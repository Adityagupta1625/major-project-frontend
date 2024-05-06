import { UserProfileInput } from '@/types/userProfile';
import axios from 'axios';
import { getToken } from '../token';

export const getUserProfile = (): Promise<UserProfileInput | null> => {
  const token = getToken();
  return new Promise((resolve, reject) => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/user-profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
