'use client';
import PaginationComponent from '@/components/utils/pagination';
import { getAllCompaniesToApply } from '@/lib/upcomingCompanies/getToApply';
import { UpcomingCompaniesDTO } from '@/types/upcomingCompanies';
import { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Card from './card';

export default function UpcomingCompanies() {
  const [applied, setApplied] = useState<boolean>(false);
  const [upcomingCompanies, setUpcomingCompanies] = useState<
    Array<UpcomingCompaniesDTO>
  >([]);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);

  useEffect(() => {
    getAllCompaniesToApply(page)
      .then((result) => {
        setUpcomingCompanies(result.data);
        setTotalPages(result.totalPages);
      })
      .catch(() => {});
  }, [page]);

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
      <div className="flex flex-col w-full h-full items-center m-6 p-6">
        <h1 className="text-black font-bold text-4xl">Upcoming Companies </h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:gap-8 m-4 p-4 w-full">
          {upcomingCompanies.map((data: UpcomingCompaniesDTO, key: number) => {
            return (
              <Card
                key={key}
                title={data.name}
                description={data.description}
                doc={data.doc}
                deadline={new Date(data.deadline)}
                courses={data.courses}
                departments={data.departments}
                _id={data._id}
                offer={data.offer}
                category={data.category}
                batch={data.batch}
                ctc={data.ctc}
                applied={applied}
                setApplied={setApplied}
              />
            );
          })}
        </div>
      </div>
      <div className="flex items-center">
        <PaginationComponent
          page={page}
          setPage={setPage}
          totalPages={totalPages}
        />
      </div>
    </>
  );
}
