export default function UserProfile() {
  return (
    <>
      {/* Page Partials: User Profile: With Cards */}
      <div className="space-y-4 text-gray-800 lg:space-y-8 bg-white">
        {/* Vital Info */}
        <div className="flex flex-col overflow-hidden bg-white shadow-sm  ">
          <div className="grow p-5 md:flex lg:p-8">
            <div className="mb-5 border-b dark:border-gray-700 md:mb-0 md:w-1/3 md:flex-none md:border-0">
              <h3 className="mb-1 flex items-center justify-start space-x-2 font-semibold">
                <svg
                  className="hi-mini hi-user-circle inline-block size-5 text-blue-500"
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
                Your account’s vital info. Only your username and photo will be
                publicly visible.
              </p>
            </div>
            <div className="md:w-2/3 md:pl-24">
              <form className="space-y-6 xl:w-2/3">
                <div className="space-y-1">
                  <label className="font-medium">Photo</label>
                  <div className="space-y-4 sm:flex sm:items-center sm:space-x-4 sm:space-y-0">
                    <div className="inline-flex size-16 items-center justify-center rounded-full bg-gray-100 text-gray-300  dark:text-gray-500">
                      <svg
                        className="hi-solid hi-user inline-block size-8"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <label className="block">
                      <span className="sr-only">Choose profile photo</span>
                      <input
                        type="file"
                        id="photo"
                        name="photo"
                        className="block w-full text-sm text-gray-500 file:mr-4 file:rounded file:border-0 file:bg-blue-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-blue-700 hover:file:bg-blue-100 dark:text-gray-400 dark:file:bg-blue-200 dark:file:text-blue-800 dark:hover:file:bg-blue-300"
                      />
                    </label>
                  </div>
                </div>
                <div className="space-y-1">
                  <label htmlFor="Roll Number" className="font-medium">
                    Roll Number
                  </label>
                  <input
                    type="text"
                    id="Roll Number"
                    name="Roll Number"
                    placeholder="20113008"
                    className="block w-full rounded-lg border border-gray-200 px-3 py-2 leading-6 placeholder-gray-500 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 "
                  />
                </div>
                <div className="space-y-1">
                  <label htmlFor="name" className="font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Aman Jain"
                    className="block w-full rounded-lg border border-gray-200 px-3 py-2 leading-6 placeholder-gray-500 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 "
                  />
                </div>
                <div className="space-y-1">
                  <label htmlFor="email" className="font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="aman@nitj.ac.in"
                    className="block w-full rounded-lg border border-gray-200 px-3 py-2 leading-6 placeholder-gray-500 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 "
                  />
                </div>
                <div className="space-y-1">
                  <label htmlFor="branch" className="font-medium">
                    Branch
                  </label>
                  <input
                    type="text"
                    id="branch"
                    name="branch"
                    placeholder="IPE"
                    className="block w-full rounded-lg border border-gray-200 px-3 py-2 leading-6 placeholder-gray-500 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                  />
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
                  className="hi-mini hi-lock-closed inline-block size-5 text-blue-500"
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
                  <label htmlFor="password" className="font-medium">
                    Current Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="block w-full rounded-lg border border-gray-200 px-3 py-2 leading-6 placeholder-gray-500 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 "
                  />
                </div>
                <div className="space-y-1">
                  <label htmlFor="password_new" className="font-medium">
                    New Password
                  </label>
                  <input
                    type="password"
                    id="password_new"
                    name="password_new"
                    className="block w-full rounded-lg border border-gray-200 px-3 py-2 leading-6 placeholder-gray-500 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                  />
                </div>
                <div className="space-y-1">
                  <label htmlFor="password_new_confirm" className="font-medium">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="password_new_confirm"
                    name="password_new_confirm"
                    className="block w-full rounded-lg border border-gray-200 px-3 py-2 leading-6 placeholder-gray-500 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center space-x-2 rounded-lg border border-blue-700 bg-blue-700 px-3 py-2 text-sm font-semibold leading-5 text-white hover:border-blue-600 hover:bg-blue-600 hover:text-white focus:ring focus:ring-blue-400 focus:ring-opacity-50 active:border-blue-700 active:bg-blue-700 "
                >
                  Update Password
                </button>
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
