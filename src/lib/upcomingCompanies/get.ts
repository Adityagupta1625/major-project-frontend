import { UpcomingCompaniesDTO } from '@/types/upcomingCompanies';
import axios from 'axios';
import { getToken } from '../token';

export const getAllUpcomingCompanies = (
  page: number
): Promise<UpcomingCompaniesDTO[]> => {
  const token = getToken();
  return new Promise((resolve, reject) => {
    axios
      .get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/upcoming-companies?page=${page}&limit=${10}`,
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
