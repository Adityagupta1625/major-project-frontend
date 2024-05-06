export default function Card(props: {
  status: string;
  companyName: string;
  ctc: string;
  category: string;
}) {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg bg-white shadow-sm border-2 border-gray-100">
      <div className="bg-gray-50 px-5 py-4">
        <h3 className="flex flex-row font-medium justify-between">
          <span> {props.companyName} </span>
        </h3>
      </div>

      <div className="grow p-5 line-clamp-4">
        <p>
          <b>Status:</b> {props.status}
        </p>
        <p>
          <b>Category:</b> {props.category}
        </p>
        <p>
          <b>CTC:</b> {props.ctc}
        </p>
      </div>
    </div>
  );
}
