'use client';
import UpcomingCompanies from '@/components/Dashboard/upcomingCompanies';
import Navbar from '@/components/Navbar';
import { getAllUpcomingCompanies } from '@/lib/upcomingCompanies/get';
import { UpcomingCompaniesDTO } from '@/types/upcomingCompanies';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';

const Page = () => {
  const [cookies, setCookies] = useCookies(['token']);
  const [upcomingCompanies, setUpcomingCompanies] = useState<
    Array<UpcomingCompaniesDTO>
  >([]);

  useEffect(() => {
    getAllUpcomingCompanies(cookies.token).then(
      (result: UpcomingCompaniesDTO[]) => {
        setUpcomingCompanies(result);
      }
    );
  }, []);

  return (
    <>
      <Navbar />
      <UpcomingCompanies data={upcomingCompanies} />
    </>
  );
};

export default Page;
