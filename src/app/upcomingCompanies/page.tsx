import UpcomingCompanies from '@/components/Dashboard/upcomingCompanies';
import Navbar from '@/components/Navbar';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Upcoming Companies',
  description: 'Upcoming Companies',
};

const Page = () => {
  return (
    <>
      <Navbar />
      <UpcomingCompanies />
    </>
  );
};

export default Page;
