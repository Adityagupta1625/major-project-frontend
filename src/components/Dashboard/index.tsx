'use client';
import Navbar from '@/components/Navbar';
import { getAllAnnouncements } from '@/lib/announcements/get';
import { AnnouncementsDTO } from '@/types/announcements';
import { useEffect, useState } from 'react';
import PaginationComponent from '../utils/pagination';
import Announcement from './Announcements';

export default function Dashboard() {
  const [announcements, setAnnouncements] = useState<AnnouncementsDTO[]>([]);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);

  useEffect(() => {
    getAllAnnouncements(page)
      .then((result) => {
        setAnnouncements(result.data);
        setTotalPages(result.totalPages);
      })
      .catch();
  }, [page]);

  return (
    <>
      <Navbar />
      <Announcement data={announcements} />
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
