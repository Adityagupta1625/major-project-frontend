import Navbar from '@/components/Navbar';
import UserProfile from '@/components/User Profilte';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'User Profile',
  description: 'Profile Info',
};

const Page = () => {
  return (
    <>
      <Navbar></Navbar>
      <UserProfile></UserProfile>
    </>
  );
};

export default Page;
