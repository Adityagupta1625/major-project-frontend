export default function AnnouncementCard() {
  return (
    <article className="my-4 mx-2 rounded-xl bg-white p-4 ring ring-gray-200 sm:p-6 lg:p-8 shadow-md">
      <div className="flex items-start sm:gap-8">
        <div>
          <strong className="rounded border border-indigo-500 bg-indigo-500 px-3 py-1.5 text-[10px] font-medium text-white">
            {new Date().toDateString()}
          </strong>

          <h3 className="mt-4 text-lg font-medium sm:text-xl text-black">
            <a href="#" className="hover:underline">
              Some Interesting Podcast Title
            </a>
          </h3>

          <p className="mt-1 text-sm text-gray-700">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam
            nulla amet voluptatum sit rerum, atque, quo culpa ut necessitatibus
            eius suscipit eum accusamus, aperiam voluptas exercitationem facere
            aliquid fuga. Sint.
          </p>
        </div>
      </div>
    </article>
  );
}
