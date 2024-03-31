import Form from '@/components/Dashboard/Forms';
import Navbar from '@/components/Navbar';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Forms',
  description: 'Forms',
};

const Page = () => {
  return (
    <>
      <Navbar />
      <Form />
    </>
  );
};

export default Page;
