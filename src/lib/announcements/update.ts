import { AnnouncementsDTO } from '@/types/announcements';
import axios from 'axios';
import { getToken } from '../token';

export const updateAnnouncement = (
  data: Partial<AnnouncementsDTO>,
  id: string
) => {
  const token = getToken();
  console.log('token', token);

  return new Promise((resolve, reject) => {
    axios
      .put(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/announcements/${id}`,
        data,
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
