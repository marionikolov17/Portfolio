import { FaHeart } from "react-icons/fa";

export default function Comment() {
  return (
    <>
      <div className="my-4 flex w-full py-2 px-4">
        <div className="w-12 h-12 border shadow-sm flex justify-center rounded-full overflow-hidden">
          <img src="/images/mario-2.png" className="object-cover" alt="" />
        </div>
        <div className="grow ms-4">
          <h3 className="text-base font-bold">
            <span className="text-green-500">@</span>mario
          </h3>
          <p className="text-base">This is just a test text.</p>
          <div className="flex mt-1">
            <time className="text-sm text-slate-400">a few seconds ago</time>
            <p className="text-sm ms-4">3 likes</p>
            <p className="text-sm ms-4">24 shares</p>
          </div>
        </div>
        <div>
          <FaHeart className="text-xl text-green-500" />
        </div>
      </div>
    </>
  );
}
