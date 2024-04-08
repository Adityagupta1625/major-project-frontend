import { AnnoucementsInterface } from '@/types/annoucements';

export default function DetailPage(props: { data: AnnoucementsInterface }) {
  return (
    <div className="flex flex-col m-6 p-6 w-full">
      <h1 className="text-3xl font-bold text-center">{props.data.title}</h1>
      <p className="text-lg">{props.data.description}</p>
      <span className="text-sm text-blue-500 my-3">
        <a href={`${props.data.doc}`}>View Doc</a>
      </span>
    </div>
  );
}
