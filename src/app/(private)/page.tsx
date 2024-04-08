'use client';
import Dashboard from '@/components/Dashboard';
import { getAllAnnoucements } from '@/lib/annoucements/get';
import { AnnoucementsInterface } from '@/types/annoucements';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';

export default function Home() {
  const [cookies, setCookies] = useCookies(['token']);
  const [annoucements, setAnnoucements] = useState<
    Array<AnnoucementsInterface>
  >([]);

  useEffect(() => {
    getAllAnnoucements(cookies.token)
      .then((result) => {
        setAnnoucements(result);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div className="bg-white h-full w-full">
      <Dashboard data={annoucements} />
    </div>
  );
}
