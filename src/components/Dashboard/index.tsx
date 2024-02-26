import AnnouncementCard from './AnnoucementCard';
import Card from './Card';

export default function Dashboard() {
  return (
    <div className="w-full h-full flex flex-row m-5 p-3 items-center">
      <div className="w-3/4 flex flex-col items-center justify-center">
        <h1 className="text-3xl text-blue-700 font-bold mb-8">
          {' '}
          Announcements{' '}
        </h1>
        <div className="flex-grow overflow-y-auto h-[80vh] scrollbar-none">
          {[1, 2, 3, 4, 5, 7, 8, 9, 10].map((value: number) => (
            <AnnouncementCard key={value} />
          ))}
        </div>
      </div>
      <div className="w-1/4 flex flex-col">
        <div className="w-full flex flex-col">
          <h3 className="text-xl text-blue-700 font-bold text-center m-6">
            Upcoming Companies
          </h3>
          <div className="w-full flex flex-col items-center">
            <div className="w-full flex flex-col items-center justify-start h-[30vh] overflow-y-auto scrollbar-none scroll-smooth focus:scroll-auto">
              {[1, 2, 3, 4, 5, 7, 8, 9, 10].map((value: number) => (
                <Card key={value} />
              ))}
            </div>
            <span className="text-blue-500 text-sm underline cursor-pointer m-2">
              View all
            </span>
          </div>
        </div>
        <div className="w-full flex flex-col">
          <h3 className="text-xl text-blue-700 font-bold text-center m-6">
            Resources
          </h3>
          <div className="w-full flex flex-col items-center">
            <div className="w-full flex flex-col items-center justify-start h-[25vh] overflow-y-auto scrollbar-none scroll-smooth focus:scroll-auto">
              {[1, 2, 3, 4, 5, 7, 8, 9, 10].map((value: number) => (
                <Card key={value} />
              ))}
            </div>
            <span className="text-blue-500 text-sm underline cursor-pointer m-2">
              View all
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
