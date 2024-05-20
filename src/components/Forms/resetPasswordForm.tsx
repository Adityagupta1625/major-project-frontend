'use client';
import TextField from '@/components/Forms/textfield';
import { resetPassword } from '@/lib/auth/resetPassword';
import { Auth } from '@/types/auth';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useCookies } from 'react-cookie';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from './button';

export default function ResetPasswordForm() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [, setCookies] = useCookies(['token']);
  const router = useRouter();

  const handleResetPassword = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    try {
      e.preventDefault();

      if (email === '' || password === '') {
        toast.warn('Please fill all the fields');
        return;
      }

      if (email.includes('@') === false) {
        toast.warn('Please enter a valid email');
        return;
      }

      if (password !== confirmPassword) {
        toast.error('Passwords do not match');
        return;
      }

      const data: Auth = (await resetPassword(email, password)) as any;
      toast.success(data.message);
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setCookies('token', data.token, { path: '/' });
      router.push('/login');
    } catch (e: any) {
      console.log(e.response);
      toast.error(e?.response?.data ?? 'Something Went Wrong!!');
    }
  };

  return (
    <>
      {/* Pages: Sign In: Boxed */}

      {/* Page Container */}
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
      <div
        id="page-container"
        className="mx-auto flex min-h-dvh w-full min-w-[320px] flex-col bg-gray-100 text-gray-800"
      >
        {/* Page Content */}
        <main id="page-content" className="flex max-w-full flex-auto flex-col">
          <div className="relative mx-auto flex min-h-dvh w-full max-w-10xl items-center justify-center overflow-hidden p-4 lg:p-8">
            {/* Sign In Section */}
            <section className="w-full max-w-xl py-6">
              {/* Header */}
              <header className="mb-10 text-center">
                <h1 className="mb-2 inline-flex items-center space-x-2 text-2xl font-bold">
                  <span>Reset Your Password</span>
                </h1>
              </header>
              {/* END Header */}

              {/* Sign In Form */}
              <div className="flex flex-col overflow-hidden rounded-lg bg-white shadow-sm ">
                <div className="grow p-5 md:px-16 md:py-12">
                  <form className="space-y-6">
                    <TextField
                      name="email"
                      type="email"
                      placeholder="Enter your Email Id"
                      value={email}
                      setValue={setEmail}
                      className="block w-full rounded-lg border border-gray-200 px-5 py-3 leading-6 placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500 focus:ring-opacity-50 "
                    ></TextField>
                    <TextField
                      name="password"
                      type="password"
                      placeholder="Enter your password"
                      value={password}
                      setValue={setPassword}
                      className="block w-full rounded-lg border border-gray-200 px-5 py-3 leading-6 placeholder-gray-500 focus:border-blue-500  focus:ring-blue-500 focus:ring-opacity-50 "
                    ></TextField>
                    <TextField
                      name="confirm password"
                      type="password"
                      placeholder="Confirm your password"
                      value={confirmPassword}
                      setValue={setConfirmPassword}
                      className="block w-full rounded-lg border border-gray-200 px-5 py-3 leading-6 placeholder-gray-500 focus:border-blue-500  focus:ring-blue-500 focus:ring-opacity-50 "
                    ></TextField>
                    <div>
                      <Button
                        className="inline-flex w-full items-center justify-center space-x-2 rounded-lg border border-blue-700 bg-blue-700 px-6 py-3 font-semibold leading-6 text-white hover:border-blue-600 hover:bg-blue-600 hover:text-white focus:ring focus:ring-blue-400 focus:ring-opacity-50 active:border-blue-700 active:bg-blue-700 "
                        onClick={(e) => {
                          handleResetPassword(e);
                        }}
                        name="Reset Password"
                      ></Button>
                    </div>
                  </form>
                </div>
              </div>
              {/* END Sign In Form */}
            </section>
            {/* END Sign In Section */}
          </div>
        </main>
        {/* END Page Content */}
      </div>
      {/* END Page Container */}

      {/* END Pages: Sign In: Boxed */}
    </>
  );
}
