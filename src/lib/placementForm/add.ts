import { addPlacementFormInterface } from '@/types/placementForm';
import axios from 'axios';
import { getToken } from '../token';

export const addPlacementForm = (
  data: addPlacementFormInterface
): Promise<{
  message: string;
  url: string;
}> => {
  const token = getToken();

  return new Promise((resolve, reject) => {
    axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/placementForm`, data, {
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
