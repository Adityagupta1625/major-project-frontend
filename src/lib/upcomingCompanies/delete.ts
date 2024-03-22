import axios from 'axios';
import { getToken } from '../token';

export const deleteUpcomingCompanies = (
  id: string
): Promise<{ message: string }> => {
  const token = getToken();

  return new Promise((resolve, reject) => {
    axios
      .delete(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/upcoming-companies/${id}`,
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
