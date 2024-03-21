import { PlacementFormInterface } from '@/types/placementForm';
import axios from 'axios';

export const getAllPlacementForms = (
  token: string
): Promise<PlacementFormInterface[]> => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/placementForm`, {
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
