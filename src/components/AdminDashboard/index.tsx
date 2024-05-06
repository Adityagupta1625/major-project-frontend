'use client';
import { Roles, SideBarStates } from '@/constants/all.enum';
import { getUser } from '@/lib/user/get';
import { User } from '@/types/user';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { ToastContainer } from 'react-toastify';
import Annoucements from './Annoucement';
import StudentDetails from './StudentsDetails';
import UpcomingCompanies from './UpcomingCompanies';

export default function AdminDashboard() {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [desktopSidebarOpen, setDesktopSidebarOpen] = useState(true);
  const [sideBarState, setSideBarState] = useState(SideBarStates.Dashboard);
  const [cookies, setCookies] = useCookies(['token']);
  const router = useRouter();

  useEffect(() => {
    if (cookies.token === undefined) {
      router.push('/login');
    }

    getUser(cookies.token)
      .then((data: User) => {
        if (data.role !== Roles.TPO) {
          router.push('/');
        } else {
          if (typeof window !== 'undefined') {
            const val = localStorage.getItem('Side Bar');
            if (
              typeof val !== 'undefined' &&
              val !== null &&
              Object.keys(SideBarStates).includes(val)
            ) {
              setSideBarState(val as SideBarStates);
            }
          }
        }
      })
      .catch((e) => {
        console.log(e);
        router.push('/login');
      });
  }, []);

  return (
    <>
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
        className={`mx-auto flex min-h-dvh w-full min-w-[320px] flex-col ${
          desktopSidebarOpen ? 'lg:pl-64' : ''
        }`}
      >
        {/* Page Sidebar */}

        <nav
          id="page-sidebar"
          aria-label="Main Sidebar Navigation"
          className={`fixed bottom-0 left-0 top-0 z-50 flex h-full w-full flex-col border-r border-gray-200 bg-white transition-transform duration-500 ease-out  lg:w-64 ${
            desktopSidebarOpen ? 'lg:translate-x-0' : 'lg:-translate-x-full'
          } ${mobileSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
        >
          {/* Sidebar Header */}
          <div className="flex h-16 w-full flex-none items-center justify-between px-4  lg:justify-center">
            {/* Brand */}
            <a
              href="/"
              className="group inline-flex items-center space-x-2 text-lg font-bold tracking-wide text-gray-900 hover:text-gray-600 "
            >
              <svg
                className="hi-mini hi-cube-transparent inline-block size-5 text-black transition group-hover:scale-110 "
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M9.638 1.093a.75.75 0 01.724 0l2 1.104a.75.75 0 11-.724 1.313L10 2.607l-1.638.903a.75.75 0 11-.724-1.313l2-1.104zM5.403 4.287a.75.75 0 01-.295 1.019l-.805.444.805.444a.75.75 0 01-.724 1.314L3.5 7.02v.73a.75.75 0 01-1.5 0v-2a.75.75 0 01.388-.657l1.996-1.1a.75.75 0 011.019.294zm9.194 0a.75.75 0 011.02-.295l1.995 1.101A.75.75 0 0118 5.75v2a.75.75 0 01-1.5 0v-.73l-.884.488a.75.75 0 11-.724-1.314l.806-.444-.806-.444a.75.75 0 01-.295-1.02zM7.343 8.284a.75.75 0 011.02-.294L10 8.893l1.638-.903a.75.75 0 11.724 1.313l-1.612.89v1.557a.75.75 0 01-1.5 0v-1.557l-1.612-.89a.75.75 0 01-.295-1.019zM2.75 11.5a.75.75 0 01.75.75v1.557l1.608.887a.75.75 0 01-.724 1.314l-1.996-1.101A.75.75 0 012 14.25v-2a.75.75 0 01.75-.75zm14.5 0a.75.75 0 01.75.75v2a.75.75 0 01-.388.657l-1.996 1.1a.75.75 0 11-.724-1.313l1.608-.887V12.25a.75.75 0 01.75-.75zm-7.25 4a.75.75 0 01.75.75v.73l.888-.49a.75.75 0 01.724 1.313l-2 1.104a.75.75 0 01-.724 0l-2-1.104a.75.75 0 11.724-1.313l.888.49v-.73a.75.75 0 01.75-.75z"
                  clipRule="evenodd"
                />
              </svg>
              <span>TPO NITJ</span>
            </a>
            {/* END Brand */}

            {/* Close Sidebar on Mobile */}
            <div className="lg:hidden">
              <button
                onClick={() => setMobileSidebarOpen(false)}
                type="button"
                className="inline-flex items-center justify-center space-x-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-semibold leading-5 text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300 focus:ring-opacity-25 active:border-gray-200 active:shadow-none"
              >
                <svg
                  className="hi-mini hi-x-mark -mx-0.5 inline-block size-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                </svg>
              </button>
            </div>
          </div>

          <div className="overflow-y-auto">
            <div className="w-full p-4">
              <nav className="space-y-1">
                <a
                  onClick={() => {
                    setSideBarState(SideBarStates.Dashboard);
                    localStorage.setItem('Side Bar', SideBarStates.Dashboard);
                  }}
                  className={
                    SideBarStates.Dashboard === sideBarState
                      ? 'group flex items-center space-x-2 rounded-lg border border-transparent px-2.5 text-sm font-medium text-gray-900 bg-gray-100 border-gray-100'
                      : 'group flex items-center space-x-2 rounded-lg border border-transparent px-2.5 text-sm font-medium text-gray-800 hover:bg-gray-50 hover:text-gray-900 active:border-gray-100 bg-white'
                  }
                >
                  <span
                    className={
                      SideBarStates.Dashboard === sideBarState
                        ? 'flex flex-none items-center text-gray-500'
                        : 'flex flex-none items-center group-hover:text-gray-500 text-gray-400 cursor-pointer'
                    }
                  >
                    <svg
                      className="hi-outline hi-home inline-block size-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                      />
                    </svg>
                  </span>
                  <span className="grow py-2">Upcoming Companies</span>
                </a>

                <a
                  onClick={() => {
                    localStorage.setItem('Side Bar', SideBarStates.Annoucement);
                    setSideBarState(SideBarStates.Annoucement);
                  }}
                  className={
                    SideBarStates.Annoucement === sideBarState
                      ? 'group flex items-center space-x-2 rounded-lg border border-transparent px-2.5 text-sm font-medium text-gray-900 bg-gray-100 border-gray-100 cursor-pointer'
                      : 'group flex items-center space-x-2 rounded-lg border border-transparent px-2.5 text-sm font-medium text-gray-800 hover:bg-gray-50 hover:text-gray-900 active:border-gray-100 bg-white cursor-pointer'
                  }
                >
                  <span
                    className={
                      SideBarStates.Annoucement === sideBarState
                        ? 'flex flex-none items-center text-gray-500'
                        : 'flex flex-none items-center group-hover:text-gray-500 text-gray-400 cursor-pointer'
                    }
                  >
                    <svg
                      className="hi-outline hi-briefcase inline-block size-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                      />
                    </svg>
                  </span>
                  <span className="grow py-2">Annoucements</span>
                </a>
                <a
                  onClick={() => {
                    setSideBarState(SideBarStates.StudentDetails);
                    localStorage.setItem(
                      'Side Bar',
                      SideBarStates.StudentDetails
                    );
                  }}
                  className={
                    SideBarStates.StudentDetails === sideBarState
                      ? 'group flex items-center space-x-2 rounded-lg border border-transparent px-2.5 text-sm font-medium text-gray-900 bg-gray-100 border-gray-100 cursor-pointer'
                      : 'group flex items-center space-x-2 rounded-lg border border-transparent px-2.5 text-sm font-medium text-gray-800 hover:bg-gray-50 hover:text-gray-900 active:border-gray-100 bg-white cursor-pointer'
                  }
                >
                  <span
                    className={
                      SideBarStates.StudentDetails === sideBarState
                        ? 'flex flex-none items-center text-gray-500 cursor-pointer'
                        : 'flex flex-none items-center group-hover:text-gray-500 text-gray-400 cursor-pointer'
                    }
                  >
                    <svg
                      className="hi-outline hi-clipboard-document-list inline-block size-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
                      />
                    </svg>
                  </span>
                  <span className="grow py-2">Student Details</span>
                </a>

                <a
                  onClick={() => {
                    setSideBarState(SideBarStates.FormSubmission);
                    localStorage.setItem(
                      'Side Bar',
                      SideBarStates.FormSubmission
                    );
                  }}
                  className={
                    SideBarStates.FormSubmission === sideBarState
                      ? 'group flex items-center space-x-2 rounded-lg border border-transparent px-2.5 text-sm font-medium text-gray-900 bg-gray-100 border-gray-100 cursor-pointer'
                      : 'group flex items-center space-x-2 rounded-lg border border-transparent px-2.5 text-sm font-medium text-gray-800 hover:bg-gray-50 hover:text-gray-900 active:border-gray-100 bg-white cursor-pointer'
                  }
                >
                  <span
                    className={
                      SideBarStates.FormSubmission === sideBarState
                        ? 'flex flex-none items-center text-gray-500 cursor-pointer'
                        : 'flex flex-none items-center group-hover:text-gray-500 text-gray-400 cursor-pointer'
                    }
                  >
                    <svg
                      className="hi-outline hi-clipboard-document-list inline-block size-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
                      />
                    </svg>
                  </span>
                  <span className="grow py-2">Form Submissions</span>
                </a>
              </nav>
            </div>
          </div>
        </nav>

        <header
          id="page-header"
          className={`fixed left-0 right-0 top-0 z-30 flex h-16 flex-none items-center bg-white shadow-sm  ${
            desktopSidebarOpen ? 'lg:pl-64' : ''
          }`}
        >
          <div className="mx-auto flex w-full max-w-10xl justify-between px-4 lg:px-8">
            <div className="flex items-center space-x-2">
              <div className="hidden lg:block">
                <button
                  onClick={() => setDesktopSidebarOpen(!desktopSidebarOpen)}
                  type="button"
                  className="inline-flex items-center justify-center space-x-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-semibold leading-5 text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300 focus:ring-opacity-25 active:border-gray-200 active:shadow-none "
                >
                  <svg
                    className="hi-solid hi-menu-alt-1 inline-block size-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>

              <div className="lg:hidden">
                <button
                  onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
                  type="button"
                  className="inline-flex items-center justify-center space-x-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-semibold leading-5 text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300 focus:ring-opacity-25 active:border-gray-200 active:shadow-none "
                >
                  <svg
                    className="hi-solid hi-menu-alt-1 inline-block size-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </header>

        <main
          id="page-content"
          className="flex max-w-full flex-auto flex-col pt-16"
        >
          {sideBarState === SideBarStates.Dashboard ? (
            <UpcomingCompanies></UpcomingCompanies>
          ) : sideBarState === SideBarStates.Annoucement ? (
            <Annoucements></Annoucements>
          ) : sideBarState === SideBarStates.StudentDetails ? (
            <StudentDetails></StudentDetails>
          ) : null}
        </main>
      </div>
    </>
  );
}
