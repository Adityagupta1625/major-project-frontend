import AdminDashboard from '@/components/AdminDashboard';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admin Dashboard',
  description: 'Admin Dashboard',
};

const Page = async () => {
  return <AdminDashboard />;
};

export default Page;
