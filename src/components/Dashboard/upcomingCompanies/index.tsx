import { UpcomingCompaniesInterface } from '@/types/upcomingCompanies';
import Card from './card';

export default function upcomingCompanies(props: {
  data: UpcomingCompaniesInterface[];
}) {
  return (
    <div className="flex flex-col w-full h-full items-center m-6 p-6">
      <h1 className="text-black font-bold text-4xl">Upcoming Companies </h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:gap-8 m-4 p-4 w-full">
        {props.data.map((data: UpcomingCompaniesInterface, key: number) => {
          return (
            <Card
              key={key}
              title={data.name}
              description={data.description}
              doc={data.doc}
            />
          );
        })}
      </div>
    </div>
  );
}
