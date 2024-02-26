import LoginForm from '@/components/Forms/loginForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login',
  description: 'Login to your account',
};

const Page = () => {
  return <LoginForm />;
};

export default Page;
