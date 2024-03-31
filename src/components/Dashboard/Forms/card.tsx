export default function Card(props: {
  title: string;
  departments: string[];
  courses: string[];
  deadline: Date;
  formId: string;
}) {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg bg-white shadow-sm border-2 border-gray-100">
      <div className="bg-gray-50 px-5 py-4">
        <h3 className="flex flex-row font-medium justify-between">
          <span> {props.title} </span>
          <span>{props.deadline.toLocaleString()} </span>
        </h3>
      </div>

      <div className="grow p-5 line-clamp-4">
        <p>
          <b>Departments Allowed:</b> {props.departments.join(', ')}
        </p>
        <p>
          <b>Courses Allowed:</b> {props.courses.join(', ')}
        </p>
      </div>

      <div className="grow px-5 py-2 text-blue-500">
        <a
          href={`https://docs.google.com/forms/d/e/${props.formId}/viewform`}
          className="text-sm"
        >
          View Form
        </a>
      </div>
    </div>
  );
}
