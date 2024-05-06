'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { resetPassword } from '@/lib/auth/resetPassword';
import { getUserProfile } from '@/lib/userProfile/get';
import { User } from '@/types/user';
import { UserProfileInput } from '@/types/userProfile';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserProfileForm from './userDetails';

export default function UserProfile() {
  const [newPassword, setNewPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [user, setUser] = useState<User | null>(null);
  const [cookies, setCookies] = useCookies(['token']);
  const [userProfile, setUserProfile] = useState<UserProfileInput | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setUser(JSON.parse(window.sessionStorage.getItem('user') as string));
    }

    getUserProfile(cookies.token)
      .then((result) => {
        if (result !== null) {
          setUserProfile(result);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const handleResetPassword = async (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    try {
      e.preventDefault();

      if (newPassword === '') throw new Error('New Password is required');

      if (newPassword !== confirmPassword)
        throw new Error('Passwords do not match');

      await resetPassword(user?.email as string, newPassword);
      toast.success('Password reset successful');
      setConfirmPassword('');
      setNewPassword('');
    } catch (e: any) {
      toast.error(e?.message);
      console.log(e);
    }
  };

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="space-y-4 text-gray-800 lg:space-y-8 bg-white">
        <div className="mt-8">
          <p className="text-center mt-4 mb-1 font-semibold text-black text-3xl">
            Your Profile
          </p>
          <UserProfileForm data={userProfile} />
        </div>
        <hr />
        <div className="flex flex-col overflow-hidden bg-white shadow-sm ">
          <div className="grow p-5 md:flex lg:p-8">
            <div className="mb-5 border-b dark:border-gray-700 md:mb-0 md:w-1/3 md:flex-none md:border-0">
              <h3 className="mb-1 flex items-center justify-start space-x-2 font-semibold">
                <svg
                  className="hi-mini hi-lock-closed inline-block size-5 text-black"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Change Password</span>
              </h3>
              <p className="mb-5 text-sm text-gray-500 dark:text-gray-400">
                Changing your sign in password is an easy way to keep your
                account secure.
              </p>
            </div>
            <div className="md:w-2/3 md:pl-24">
              <form className="space-y-6 xl:w-2/3">
                <div className="space-y-1">
                  <Input
                    type="password"
                    placeholder="Password"
                    value={newPassword}
                    onChange={(e) => {
                      setNewPassword(e.target.value);
                    }}
                  />
                </div>
                <div className="space-y-1">
                  <Input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => {
                      setConfirmPassword(e.target.value);
                    }}
                  />
                </div>
                <Button
                  onClick={(e) => {
                    handleResetPassword(e);
                  }}
                >
                  {' '}
                  Reset Password{' '}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
