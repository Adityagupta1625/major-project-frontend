import { addUpcomingCompaniesInterface } from '@/types/upcomingCompanies';
import axios from 'axios';
import { getToken } from '../token';

export const addUpcomingCompanies = (data: addUpcomingCompaniesInterface) => {
  const token = getToken();
  console.log('token', token);

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
