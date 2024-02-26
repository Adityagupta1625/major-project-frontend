import Stats from '@/components/Stats';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Stats',
  description: 'Placement Releated Stats',
};

const Page = () => {
  return <Stats />;
};

export default Page;
