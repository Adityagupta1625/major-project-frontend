import { AnnoucementsInterface } from '@/types/annoucements';
import Card from './card';

export default function Annoucement(props: { data: AnnoucementsInterface[] }) {
  return (
    <div className="flex flex-col w-full h-full items-center m-6 p-6">
      <h1 className="text-black font-bold text-4xl">Annoucements </h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:gap-8 m-4 p-4 w-full">
        {props.data.map((annoucement: AnnoucementsInterface, key: number) => {
          return (
            <Card
              key={key}
              title={annoucement.title}
              description={annoucement.description}
              date={new Date(annoucement.createdAt)}
              doc={annoucement.doc}
              _id={annoucement._id}
            />
          );
        })}
      </div>
    </div>
  );
}
