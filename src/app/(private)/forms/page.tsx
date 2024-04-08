'use client';
import Form from '@/components/Dashboard/Forms';
import Navbar from '@/components/Navbar';
import { getAllPlacementForms } from '@/lib/placementForm/get';
import { PlacementFormInterface } from '@/types/placementForm';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';

const Page = () => {
  const [cookies, setCookies] = useCookies(['token']);
  const [placementForm, setPlacementForm] = useState<
    Array<PlacementFormInterface>
  >([]);

  useEffect(() => {
    getAllPlacementForms(cookies.token)
      .then((result) => {
        setPlacementForm(result);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <>
      <Navbar />
      <Form data={placementForm} />
    </>
  );
};

export default Page;
