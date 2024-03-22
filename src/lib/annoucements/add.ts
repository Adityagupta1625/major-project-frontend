import { addAnnoucementsInterface } from '@/types/annoucements';
import axios from 'axios';
import { getToken } from '../token';

export const addAnnoucement = (data: addAnnoucementsInterface) => {
  const token = getToken();
  console.log('token', token);

  return new Promise((resolve, reject) => {
    axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/announcements`, data, {
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
