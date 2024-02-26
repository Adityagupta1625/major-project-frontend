export default function Table() {
  return (
    <>
      {/* Tables: In Card with Search and Actions */}
      <div className="flex flex-col text-gray-800 overflow-hidden bg-white shadow-sm">
        <div className="flex flex-col gap-3 bg-gray-50 px-5 py-4 text-center  sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <div>
            <h3 className="mb-1 font-semibold">Companies Visited</h3>
          </div>
          <div className="flex items-center gap-2">
            <select
              id="date"
              name="date"
              className="block w-full rounded-lg border border-gray-200 px-3 py-2 text-sm font-semibold leading-5 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 "
            >
              <option>2023</option>
              <option>2022</option>
              <option>2021</option>
              <option>2020</option>
              <option selected>Present</option>
            </select>
          </div>
        </div>
        <div className="grow border-b border-gray-100 p-5 ">
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 my-px ml-px flex w-10 items-center justify-center rounded-l text-gray-500">
              <svg
                className="hi-mini hi-magnifying-glass inline-block size-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <input
              type="text"
              id="search"
              name="search"
              className="block w-full rounded-lg border border-gray-200 py-2 pl-10 pr-3 text-sm leading-6 placeholder-gray-400 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 "
              placeholder="Search all subscriptions.."
            />
          </div>
        </div>
        <div className="grow p-5">
          {/* Responsive Table Container */}
          <div className="min-w-full overflow-x-auto rounded bg-white ">
            {/* Table */}
            <table className="min-w-full whitespace-nowrap align-middle text-sm">
              {/* Table Header */}
              <thead>
                <tr>
                  <th className="border-b-2 border-gray-200/50 pb-4 pr-3 text-left font-semibold ">
                    Name
                  </th>
                  <th className="border-b-2 border-gray-200/50 px-3 pb-4 text-left font-semibold text-gray-900 ">
                    Role
                  </th>
                  <th className="border-b-2 border-gray-200/50 px-3 pb-4 text-left font-semibold text-gray-900 ">
                    JD
                  </th>
                  <th className="border-b-2 border-gray-200/50 px-3 pb-4 text-right font-semibold text-gray-900 ">
                    Branches Allowed
                  </th>
                  <th className="border-b-2 border-gray-200/50 px-3 pb-4 text-right font-semibold text-gray-900 ">
                    CTC
                  </th>
                </tr>
              </thead>
              {/* END Table Header */}

              {/* Table Body */}
              <tbody>
                <tr className="border-b border-gray-100 ">
                  <td className="py-3 pr-3 font-medium">Accenture</td>
                  <td className="p-3 text-gray-500 ">SDE</td>
                  <td className="p-3">
                    <div className="inline-flex rounded-full border border-transparent bg-emerald-100 px-2 py-1 text-xs font-semibold leading-4 text-emerald-900">
                      PDF DOC
                    </div>
                  </td>
                  <td className="p-3 text-right">ALL</td>
                  <td className="p-3 text-right">12 LPA</td>
                </tr>
              </tbody>
              {/* END Table Body */}
            </table>
            {/* END Table */}
          </div>
          {/* END Responsive Table Container */}
        </div>
      </div>
      {/* END Tables: In Card with Search and Actions */}
    </>
  );
}
