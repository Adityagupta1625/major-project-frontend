import { PlacementFormInterface } from '@/types/placementForm';
import Card from './card';

export default function Form(props: { data: PlacementFormInterface[] }) {
  return (
    <div className="flex flex-col w-full h-full items-center m-6 p-6">
      <h1 className="text-black font-bold text-4xl">Forms</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:gap-8 m-4 p-4 w-full">
        {props.data.map((value: PlacementFormInterface, key: number) => {
          return (
            <Card
              key={key}
              title={value.title}
              departments={value.departments}
              courses={value.courses}
              formId={value.formId}
              deadline={new Date(value.deadline)}
            />
          );
        })}
      </div>
    </div>
  );
}
