'use client';
import Navbar from '@/components/Navbar';
import { AnnoucementsInterface } from '@/types/annoucements';
import Annoucement from './Annoucements';

export default function Dashboard(props: { data: AnnoucementsInterface[] }) {
  return (
    <>
      <Navbar />
      <Annoucement data={props.data} />
    </>
  );
}
