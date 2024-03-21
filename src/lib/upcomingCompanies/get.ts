import { UpcomingCompaniesInterface } from '@/types/upcomingCompanies';
import axios from 'axios';

export const getAllUpcomingCompanies = (
  token: string
): Promise<UpcomingCompaniesInterface[]> => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/upcoming-companies`, {
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
