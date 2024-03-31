import Card from './card';

export default function Annoucement() {
  return (
    <div className="flex flex-col w-full h-full items-center m-6 p-6">
      <h1 className="text-black font-bold text-4xl">Annoucements </h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:gap-8 m-4 p-4 w-full">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((key) => {
          return (
            <Card
              key={key}
              title="testing"
              description='We would like to introduce "OM CAREERS" as a fast-growing & professionally managed Talent Search firm headquartered at Ludhiana, India. We are currently operating with a team of 300 resources. I hereby express our willingness to get associated with your prestigious Institute/University  .

            We are blessed to serve companies in "Fortune TOP 100" list, We are a proven strength and a very strong brand in sectors we are working with.  We are amongst the Best Recruitment Partners with MNCs by providing them Human Resources as per their requirement. We have been decorated with various Rewards and Recognition for Best Staffing Solutions from Multinational organizations. 
            
            Headquartered in Ludhiana, we have branches at Noida, Delhi, Bangalore, Ludhiana 2 locations, respectively.
            
            Currently we are providing 1 Year Exclusive Internship Program to young dynamic Professionals who want to build career in the HR domain that too especially in Hiring Industry for Big Corporate Houses. It includes exclusive training and development module undertaken by experienced professionals and unlimited opportunity to grow in the World’s Fastest growing Industry sitting in Ludhiana itself.'
              date={new Date()}
              doc={'https://www.youtube.com/'}
            />
          );
        })}
      </div>
    </div>
  );
}
