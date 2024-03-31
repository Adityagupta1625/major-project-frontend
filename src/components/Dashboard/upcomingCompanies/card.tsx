export default function Card(props: {
  title: string;
  description: string;
  doc: string | null;
}) {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg bg-white shadow-sm border-2 border-gray-100">
      <div className="bg-gray-50 px-5 py-4">
        <h3 className="flex flex-row font-medium justify-between">
          <span> {props.title} </span>
        </h3>
      </div>

      <div className="grow p-5 line-clamp-4">
        <p>{props.description}</p>
      </div>

      {props.doc !== null ? (
        <div className="grow p-5 text-blue-500">
          <a href={`${props.doc}`} className="text-sm">
            View Doc
          </a>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}