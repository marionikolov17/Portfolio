/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";

export default function Comment({ likes, shares, time, children }) {
  return (
    <>
      <motion.div 
        initial={{ x: 200 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.5 }}
        className="mt-2 flex w-full py-2 px-4"
      >
        <div className="w-12 h-12 shrink-0 border shadow-sm flex justify-center rounded-full overflow-hidden">
          <img src="/images/mario-min.png" className="object-cover" alt="" />
        </div>
        <div className="grow shrink ms-4">
          <h3 className="text-sm sm:text-base font-bold">
            <span className="text-green-500">@</span>mario_dev
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
      </motion.div>
    </>
  );
}
