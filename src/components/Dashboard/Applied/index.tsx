'use client';
import { getUserSubmissionDetails } from '@/lib/submission/getAppliedCompanies';
import { SubmissionDetailsWithCompany } from '@/types/submission';
import { useEffect, useState } from 'react';
import Card from './card';

export default function AppliedCompanies() {
  const [placementForm, setPlacementForm] = useState<
    Array<SubmissionDetailsWithCompany>
  >([]);

  useEffect(() => {
    getUserSubmissionDetails()
      .then((result) => {
        setPlacementForm(result);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <div className="flex flex-col w-full h-full items-center m-6 p-6">
      <h1 className="text-black font-bold text-4xl">Applied Companies</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:gap-8 m-4 p-4 w-full">
        {placementForm.map(
          (value: SubmissionDetailsWithCompany, key: number) => {
            return (
              <Card
                key={key}
                ctc={value.ctc}
                category={value.category}
                companyName={value.companyName}
                status={value.status}
              />
            );
          }
        )}
      </div>
    </div>
  );
}
