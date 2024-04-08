import { UserProfile } from '@/types/userProfile';
import axios from 'axios';

export const getUserProfile = (token: string): Promise<UserProfile | null> => {
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
