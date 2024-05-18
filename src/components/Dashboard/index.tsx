'use client';
import Navbar from '@/components/Navbar';
import { getAllAnnouncements } from '@/lib/announcements/get';
import { AnnouncementsDTO } from '@/types/announcements';
import { useEffect, useState } from 'react';
import Announcement from './Announcements';

export default function Dashboard() {
  const [announcements, setAnnouncements] = useState<AnnouncementsDTO[]>([]);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    getAllAnnouncements(page)
      .then((result) => {
        setAnnouncements(result);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <>
      <Navbar />
      <Announcement data={announcements} />
    </>
  );
}
