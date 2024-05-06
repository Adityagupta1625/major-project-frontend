import { UserProfileInput } from '@/types/userProfile';
import axios from 'axios';

export const getAllUserProfile = (
  token: string
): Promise<UserProfileInput[]> => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/user-profile/all`, {
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
