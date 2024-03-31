'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

export default function UserProfile() {
  const [name, setName] = useState<string>('');
  const [branch, setBranch] = useState<string>('');
  const [department, setDepartment] = useState<string>('');
  const [batch, setBatch] = useState<string>('');
  const [rollNo, setRollNo] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const handleResetPassword = (e: React.MouseEvent<HTMLButtonElement>) => {
    try {
      e.preventDefault();
      if (newPassword !== confirmPassword)
        throw new Error('Passwords do not match');
    } catch (e: any) {
      toast.error(e);
      console.log(e);
    }
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    try {
      e.preventDefault();
    } catch (e: any) {
      toast.error(e);
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
        <div className="flex flex-col overflow-hidden bg-white shadow-sm  ">
          <div className="grow p-5 md:flex lg:p-8">
            <div className="mb-5 border-b dark:border-gray-700 md:mb-0 md:w-1/3 md:flex-none md:border-0">
              <h3 className="mb-1 flex items-center justify-start space-x-2 font-semibold">
                <svg
                  className="hi-mini hi-user-circle inline-block size-5 text-black"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-5.5-2.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM10 12a5.99 5.99 0 00-4.793 2.39A6.483 6.483 0 0010 16.5a6.483 6.483 0 004.793-2.11A5.99 5.99 0 0010 12z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>User Profile</span>
              </h3>
              <p className="mb-5 text-sm text-gray-500 dark:text-gray-400">
                Your account’s vital info. Only your username will be publicly
                visible.
              </p>
            </div>
            <div className="md:w-2/3 md:pl-24">
              <form className="space-y-6 xl:w-2/3">
                <div className="space-y-1">
                  <Input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </div>

                <div className="space-y-1">
                  <Input
                    type="text"
                    placeholder="Roll No"
                    value={rollNo}
                    onChange={(e) => {
                      setRollNo(e.target.value);
                    }}
                  />
                </div>

                <div className="space-y-1">
                  <Input
                    type="text"
                    placeholder="Branch"
                    value={branch}
                    onChange={(e) => {
                      setBranch(e.target.value);
                    }}
                  />
                </div>

                <div className="space-y-1">
                  <Input
                    type="text"
                    placeholder="Department"
                    value={department}
                    onChange={(e) => {
                      setDepartment(e.target.value);
                    }}
                  />
                </div>

                <div className="space-y-1">
                  <Input
                    type="text"
                    placeholder="Batch"
                    value={batch}
                    onChange={(e) => {
                      setBatch(e.target.value);
                    }}
                  />
                </div>

                <div className="space-y-1">
                  <Button
                    onClick={(e) => {
                      handleSubmit(e);
                    }}
                  >
                    {' '}
                    Update{' '}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* END Vital Info */}

        {/* Change Password */}
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
        {/* END Change Password */}
      </div>
      {/* END Page Partials: User Profile: With Cards */}
    </>
  );
}
