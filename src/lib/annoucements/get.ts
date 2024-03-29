import { AnnoucementsInterface } from '@/types/annoucements';
import axios from 'axios';

export const getAllAnnoucements = (
  token: string
): Promise<AnnoucementsInterface[]> => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/announcements`, {
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
