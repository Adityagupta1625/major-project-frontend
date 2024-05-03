'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { resetPassword } from '@/lib/auth/resetPassword';
import { getUserProfile } from '@/lib/userProfile/get';
import { updateUserProfile } from '@/lib/userProfile/update';
import { User } from '@/types/user';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserProfileForm from './userDetails';

export default function UserProfile() {
  const [name, setName] = useState<string | null>(null);
  const [course, setCourse] = useState<string | null>(null);
  const [department, setDepartment] = useState<string | null>(null);
  const [batch, setBatch] = useState<string | null>(null);
  const [rollNo, setRollNo] = useState<string | null>(null);
  const [newPassword, setNewPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [cookies, setCookies] = useCookies(['token']);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setUser(JSON.parse(window.sessionStorage.getItem('user') as string));
    }

    getUserProfile(cookies.token)
      .then((result) => {
        if (result !== null) {
          setCourse(result.course);
          setName(result.name);
          setBatch(result.batch);
          setDepartment(result.department);
          setRollNo(result.rollNo);
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

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    try {
      e.preventDefault();

      const data = await updateUserProfile({
        rollNo: rollNo,
        course: course,
        department: department,
        batch: batch,
        name: name,
        userId: user?._id as string,
      });

      toast.success('Details updated Successfully!!');

      setRollNo(data.rollNo);
      setBatch(data.batch);
      setName(data.name);
      setCourse(data.course);
      setDepartment(data.department);
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
        {/* <div className="flex flex-col overflow-hidden bg-white shadow-sm  ">
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
                Your account’s vital info.
              </p>
            </div>
            <div className="md:w-2/3 md:pl-24">
              <form className="space-y-6 xl:w-2/3">
                <div className="space-y-1">
                  <Input
                    type="text"
                    placeholder="Name"
                    value={name ?? ''}
                    disabled={name !== null}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </div>

                <div className="space-y-1">
                  <Input
                    type="text"
                    placeholder="Roll No"
                    value={rollNo ?? ''}
                    disabled={rollNo !== null}
                    onChange={(e) => {
                      setRollNo(e.target.value);
                    }}
                  />
                </div>

                <div className="space-y-1">
                  <Select
                    onValueChange={(e) => {
                      setCourse(e);
                    }}
                    value={course ?? ''}
                    disabled={course !== null}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Course" />
                    </SelectTrigger>
                    <SelectContent>
                      {allCoursesOptions.map((option, key) => {
                        return (
                          <SelectItem key={key} value={option.value}>
                            {option.label}
                          </SelectItem>
                        );
                      })}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-1">
                  <Select
                    onValueChange={(e) => {
                      setDepartment(e);
                    }}
                    value={department ?? ''}
                    disabled={department !== null}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Department" />
                    </SelectTrigger>
                    <SelectContent>
                      {allBranchOptions.map((option, key) => {
                        return (
                          <SelectItem key={key} value={option.value}>
                            {option.label}
                          </SelectItem>
                        );
                      })}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-1">
                  <Input
                    type="text"
                    placeholder="Batch"
                    value={batch ?? ''}
                    disabled={batch !== null}
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
                    disabled={
                      name !== null &&
                      department !== null &&
                      course !== null &&
                      batch !== null &&
                      rollNo !== null
                    }
                  >
                    {' '}
                    Update{' '}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div> */}
        <UserProfileForm />
        {/* END Vital Info */}

        {/* Change Password */}
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
