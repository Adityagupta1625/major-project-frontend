import { AnnouncementsDTO } from '@/types/announcements';
import axios from 'axios';
import { getToken } from '../token';

export const getAllAnnouncements = (
  page: number
): Promise<AnnouncementsDTO[]> => {
  const token = getToken();
  return new Promise((resolve, reject) => {
    axios
      .get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/announcements?page=${page}&limit=${10}`,
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
