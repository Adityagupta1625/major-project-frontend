'use client';
import { DashboardStates } from '@/constants/all.enum';
import { Menu, Transition } from '@headlessui/react';
import { useRouter } from 'next/navigation';
import { Fragment, useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';

export default function Navbar() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [dashboardState, setDashboardState] = useState<DashboardStates>(
    DashboardStates.Annoucement
  );
  const [cookies, setCookie, removeCookie] = useCookies(['token']);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const navItem = window.sessionStorage.getItem('navItem');
      if (navItem) {
        setDashboardState(navItem as DashboardStates);
      }
    }
  }, []);

  return (
    <>
      {/* Page Container */}
      <div
        id="page-container"
        className="mx-auto flex  w-full min-w-[320px] flex-col"
      >
        {/* Page Header */}
        <header
          id="page-header"
          className="z-1 flex flex-none items-center bg-white shadow-sm "
        >
          <div className="container mx-auto px-4 lg:px-8 xl:max-w-7xl">
            <div className="flex justify-between py-4">
              {/* Left Section */}
              <div className="flex items-center space-x-2 lg:space-x-6">
                {/* Logo */}
                <a
                  href="/"
                  className="group inline-flex items-center space-x-2 text-lg font-bold tracking-wide text-gray-900 hover:text-gray-600 "
                >
                  <svg
                    className="hi-mini hi-cube-transparent inline-block size-5 text-blue-600 transition group-hover:scale-110 "
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
                {/* END Logo */}

                {/* Desktop Navigation */}
                <nav className="hidden items-center space-x-2 lg:flex">
                  <a
                    href="/"
                    className={
                      DashboardStates.Annoucement === dashboardState
                        ? 'group flex items-center space-x-2 rounded-lg border border-blue-100 bg-blue-50 px-3 py-2 text-sm font-medium text-blue-600 '
                        : 'group flex items-center space-x-2 rounded-lg border border-transparent px-3 py-2 text-sm font-medium text-gray-800 hover:bg-blue-50 hover:text-blue-600 active:border-blue-100'
                    }
                    onClick={() => {
                      setDashboardState(DashboardStates.Annoucement);
                      window.sessionStorage.setItem(
                        'navItem',
                        DashboardStates.Annoucement
                      );
                    }}
                  >
                    <span>Annoucements</span>
                  </a>
                  <a
                    href="/forms"
                    className={
                      DashboardStates.Forms === dashboardState
                        ? 'group flex items-center space-x-2 rounded-lg border border-blue-100 bg-blue-50 px-3 py-2 text-sm font-medium text-blue-600 '
                        : 'group flex items-center space-x-2 rounded-lg border border-transparent px-3 py-2 text-sm font-medium text-gray-800 hover:bg-blue-50 hover:text-blue-600 active:border-blue-100'
                    }
                    onClick={() => {
                      setDashboardState(DashboardStates.Forms);
                      window.sessionStorage.setItem(
                        'navItem',
                        DashboardStates.Forms
                      );
                    }}
                  >
                    <span>Forms</span>
                  </a>
                  <a
                    href="/upcomingCompanies"
                    className={
                      DashboardStates.UpcomingCompanies === dashboardState
                        ? 'group flex items-center space-x-2 rounded-lg border border-blue-100 bg-blue-50 px-3 py-2 text-sm font-medium text-blue-600 '
                        : 'group flex items-center space-x-2 rounded-lg border border-transparent px-3 py-2 text-sm font-medium text-gray-800 hover:bg-blue-50 hover:text-blue-600 active:border-blue-100'
                    }
                    onClick={() => {
                      setDashboardState(DashboardStates.UpcomingCompanies);
                      window.sessionStorage.setItem(
                        'navItem',
                        DashboardStates.UpcomingCompanies
                      );
                    }}
                  >
                    <span>Upcoming Companies</span>
                  </a>
                </nav>
                {/* END Desktop Navigation */}
              </div>

              <div className="flex items-center space-x-2">
                {/* User Dropdown */}
                <Menu as="div" className="relative inline-block">
                  {/* Dropdown Toggle Button */}
                  <Menu.Button className="inline-flex items-center justify-center space-x-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-semibold leading-5 text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300 focus:ring-opacity-25 active:border-gray-200 active:shadow-none ">
                    <svg
                      className="hi-mini hi-user-circle inline-block size-5 sm:hidden"
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
                    <span className="hidden sm:inline">Profile</span>
                    <svg
                      className="hi-mini hi-chevron-down hidden size-5 opacity-40 sm:inline-block"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Menu.Button>
                  {/* END Dropdown Toggle Button */}

                  {/* Dropdown */}
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="opacity-0 scale-90"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-90"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-lg shadow-xl focus:outline-none ">
                      <div className="divide-y divide-gray-100 rounded-lg bg-white ring-1 ring-black ring-opacity-5 ">
                        <div className="space-y-1 p-2.5">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="/userProfile"
                                className={`group flex items-center justify-between space-x-2 rounded-lg border border-transparent px-2.5 py-2 text-sm font-medium ${
                                  active
                                    ? 'bg-blue-50 text-blue-800 '
                                    : 'text-gray-700 hover:bg-blue-50 hover:text-blue-800 active:border-blue-100  '
                                }`}
                                onClick={() => {
                                  setDashboardState(DashboardStates.Profile);
                                  window.sessionStorage.setItem(
                                    'navItem',
                                    DashboardStates.Profile
                                  );
                                }}
                              >
                                <svg
                                  className="hi-mini hi-user-circle inline-block size-5 flex-none opacity-25 group-hover:opacity-50"
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
                                <span className="grow">Account</span>
                              </a>
                            )}
                          </Menu.Item>
                        </div>
                        <div className="space-y-1 p-2.5">
                          <Menu.Item>
                            {({ active }) => (
                              <p
                                className={`group flex items-center justify-between space-x-2 rounded-lg border border-transparent px-2.5 py-2 text-sm font-medium ${
                                  active
                                    ? 'bg-blue-50 text-blue-800 '
                                    : 'text-gray-700 hover:bg-blue-50 hover:text-blue-800 active:border-blue-100 '
                                }`}
                                onClick={() => {
                                  console.log('sign out');
                                  removeCookie('token', { path: '/' });
                                  router.push('/login');
                                }}
                              >
                                <svg
                                  className="hi-mini hi-lock-closed inline-block size-5 flex-none opacity-25 group-hover:opacity-50"
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
                                <span className="grow">Sign out</span>
                              </p>
                            )}
                          </Menu.Item>
                        </div>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>

                <div className="lg:hidden">
                  <button
                    onClick={() => setMobileNavOpen(!mobileNavOpen)}
                    type="button"
                    className="inline-flex items-center justify-center space-x-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-semibold leading-5 text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300 focus:ring-opacity-25 active:border-gray-200 active:shadow-none 0"
                  >
                    <svg
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      className="hi-solid hi-menu inline-block size-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div className={`lg:hidden ${mobileNavOpen ? '' : 'hidden'}`}>
              <nav className="flex flex-col space-y-2 border-t py-4 ">
                <a
                  href="/"
                  className={
                    DashboardStates.Annoucement === dashboardState
                      ? 'group flex items-center space-x-2 rounded-lg border border-blue-100 bg-blue-50 px-3 py-2 text-sm font-medium text-blue-600 '
                      : 'group flex items-center space-x-2 rounded-lg border border-transparent px-3 py-2 text-sm font-medium text-gray-800 hover:bg-blue-50 hover:text-blue-600 active:border-blue-100'
                  }
                  onClick={() => {
                    setDashboardState(DashboardStates.Annoucement);
                    window.sessionStorage.setItem(
                      'navItem',
                      DashboardStates.Annoucement
                    );
                  }}
                >
                  <span>Annoucements</span>
                </a>
                <a
                  href="/forms"
                  className={
                    DashboardStates.Forms === dashboardState
                      ? 'group flex items-center space-x-2 rounded-lg border border-blue-100 bg-blue-50 px-3 py-2 text-sm font-medium text-blue-600 '
                      : 'group flex items-center space-x-2 rounded-lg border border-transparent px-3 py-2 text-sm font-medium text-gray-800 hover:bg-blue-50 hover:text-blue-600 active:border-blue-100'
                  }
                  onClick={() => {
                    setDashboardState(DashboardStates.Forms);
                    window.sessionStorage.setItem(
                      'navItem',
                      DashboardStates.Forms
                    );
                  }}
                >
                  <span>Forms</span>
                </a>
                <a
                  href="/upcomingCompanies"
                  className={
                    DashboardStates.UpcomingCompanies === dashboardState
                      ? 'group flex items-center space-x-2 rounded-lg border border-blue-100 bg-blue-50 px-3 py-2 text-sm font-medium text-blue-600 '
                      : 'group flex items-center space-x-2 rounded-lg border border-transparent px-3 py-2 text-sm font-medium text-gray-800 hover:bg-blue-50 hover:text-blue-600 active:border-blue-100'
                  }
                  onClick={() => {
                    setDashboardState(DashboardStates.UpcomingCompanies);
                    window.sessionStorage.setItem(
                      'navItem',
                      DashboardStates.UpcomingCompanies
                    );
                  }}
                >
                  <span>Upcoming Companies</span>
                </a>
              </nav>
            </div>
          </div>
        </header>
      </div>
    </>
  );
}
