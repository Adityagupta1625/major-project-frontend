import { addPlacementFormInterface } from '@/types/placementForm';
import axios from 'axios';
import { getToken } from '../token';

export const updatePlacementForm = (
  data: addPlacementFormInterface,
  id: string
): Promise<{ message: string }> => {
  const token = getToken();

  return new Promise((resolve, reject) => {
    axios
      .put(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/placementForm/${id}`,
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
