'use client';
import DetailPage from '@/components/Dashboard/Annoucements/detail';
import Navbar from '@/components/Navbar';
import { getAnnoucementbyId } from '@/lib/annoucements/getById';
import { AnnoucementsInterface } from '@/types/annoucements';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';

export default function AnnoucementsPage() {
  const [cookies, setCookies] = useCookies(['token']);
  const [data, setData] = useState<AnnoucementsInterface>({
    title: '',
    description: '',
    doc: '',
    _id: '',
    createdAt: new Date(),
  });
  const params = useParams<{ slug: string }>();

  useEffect(() => {
    getAnnoucementbyId(cookies.token, params.slug)
      .then((res) => {
        setData(res);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <>
      <Navbar />
      <DetailPage data={data}></DetailPage>
    </>
  );
}
