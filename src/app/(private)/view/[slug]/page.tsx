'use client';
import DetailPage from '@/components/Dashboard/Announcements/detail';
import Navbar from '@/components/Navbar';
import { getAnnoucementbyId } from '@/lib/announcements/getById';
import { AnnouncementsDTO } from '@/types/announcements';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';

export default function AnnoucementsPage() {
  const [cookies, setCookies] = useCookies(['token']);
  const [data, setData] = useState<AnnouncementsDTO>({
    title: '',
    description: '',
    doc: '',
    _id: '',
    createdAt: new Date(),
  });
  const params = useParams<{ slug: string }>();

  useEffect(() => {
    getAnnoucementbyId(params.slug)
      .then((res) => {
        setData(res);
      })
      .catch((e) => {});
  });

  return (
    <>
      <Navbar />
      <DetailPage data={data}></DetailPage>
    </>
  );
}
