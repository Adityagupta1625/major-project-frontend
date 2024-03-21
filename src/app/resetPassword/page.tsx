import ResetPasswordForm from '@/components/Forms/resetPasswordForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reset Password',
  description: 'Reset Password to your account',
};

const Page = () => {
  return <ResetPasswordForm />;
};

export default Page;
