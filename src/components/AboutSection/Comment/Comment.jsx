/* eslint-disable react/prop-types */
import { FaHeart } from "react-icons/fa";

export default function Comment({ likes, shares, time, children }) {
  return (
    <>
      <div className="mt-2 flex w-full py-2 px-4">
        <div className="w-12 h-12 shrink-0 border shadow-sm flex justify-center rounded-full overflow-hidden">
          <img src="/images/mario-2.png" className="object-cover" alt="" />
        </div>
        <div className="grow shrink ms-4">
          <h3 className="text-base font-bold">
            <span className="text-green-500">@</span>mario
          </h3>
          {children}
          <div className="flex mt-1">
            <time className="text-xs sm:text-sm text-slate-400">{time}</time>
            <p className="text-xs sm:text-sm ms-4">{likes} likes</p>
            <p className="text-xs sm:text-sm ms-4">{shares} shares</p>
          </div>
        </div>
        <div>
          <FaHeart className="text-xl text-green-500" />
        </div>
      </div>
    </>
  );
}
