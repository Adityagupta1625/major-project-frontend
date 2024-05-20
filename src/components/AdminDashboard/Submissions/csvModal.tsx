import { DialogContent, DialogHeader } from '@/components/ui/dialog';
import { getAllUserSubmissionDetails } from '@/lib/submission/getUserSubmissions';
import { UserSubmissionDetails } from '@/types/submission';
import { DialogTitle } from '@radix-ui/react-dialog';
import { useEffect, useState } from 'react';
import { CSVLink } from 'react-csv';

export default function CSVModal(props: { companyId: string }) {
  const [csvData, setCSVData] = useState<UserSubmissionDetails[]>([]);

  useEffect(() => {
    getAllUserSubmissionDetails(props.companyId)
      .then((result) => {
        setCSVData(result);
      })
      .catch();
  }, [props.companyId]);
  return (
    <DialogContent className="sm:max-w-[435px]">
      <DialogHeader>
        <DialogTitle>Are you Want to Download data?</DialogTitle>
      </DialogHeader>

      <CSVLink
        filename={'data.csv'}
        data={csvData}
        className="bg-black rounded-lg text-md text-white mb-3 w-28 p-2 hover:bg-gray-700 text-center"
      >
        Yes
      </CSVLink>
    </DialogContent>
  );
}
