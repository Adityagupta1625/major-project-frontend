import { AnnoucementsInterface } from '@/types/annoucements';
import Card from './card';

export default function Annoucement(props: { data: AnnoucementsInterface[] }) {
  return (
    <div className="flex flex-col w-full h-full items-center m-6 p-6">
      <h1 className="text-black font-bold text-4xl">Announcements </h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:gap-8 m-4 p-4 w-full">
        {props.data.map((announcement: AnnoucementsInterface, key: number) => {
          return (
            <Card
              key={key}
              title={announcement.title}
              description={announcement.description}
              date={new Date(announcement.createdAt)}
              doc={announcement.doc}
              _id={announcement._id}
            />
          );
        })}
      </div>
    </div>
  );
}
