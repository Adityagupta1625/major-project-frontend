import Card from './card';

export default function Form() {
  return (
    <div className="flex flex-col w-full h-full items-center m-6 p-6">
      <h1 className="text-black font-bold text-4xl">Forms</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:gap-8 m-4 p-4 w-full">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((key) => {
          return (
            <Card
              key={key}
              title="testing"
              departments={['CS', 'Math']}
              courses={['B.Tech', 'M.Tech']}
              formId="1"
              deadline={new Date()}
            />
          );
        })}
      </div>
    </div>
  );
}
