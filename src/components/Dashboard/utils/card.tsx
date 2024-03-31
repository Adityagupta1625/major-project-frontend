export default function Card() {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg bg-white shadow-sm border-2 border-gray-100">
      <div className="bg-gray-50 px-5 py-4">
        <h3 className="font-medium">Card Title</h3>
      </div>

      <div className="grow p-5">
        <p>Content..</p>
      </div>
    </div>
  );
}
