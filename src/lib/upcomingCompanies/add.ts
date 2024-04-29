import { UpcomingCompaniesDTO } from '@/types/upcomingCompanies';
import axios from 'axios';
import { getToken } from '../token';

export const addUpcomingCompanies = (data: Partial<UpcomingCompaniesDTO>) => {
  const token = getToken();

  return new Promise((resolve, reject) => {
    axios
      .post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/upcoming-companies`,
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
