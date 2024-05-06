import { UpcomingCompaniesDTO } from '@/types/upcomingCompanies';
import axios from 'axios';
import { getToken } from '../token';

export const updateUpcomingCompanies = (
  data: Partial<UpcomingCompaniesDTO>,
  id: string
) => {
  const token = getToken();
  console.log('token', token);

  return new Promise((resolve, reject) => {
    axios
      .put(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/upcoming-companies/${id}`,
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
