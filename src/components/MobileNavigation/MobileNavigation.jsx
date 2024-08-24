import { motion } from "framer-motion";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

export default function MobileNavigation() {
  return (
    <>
      <section className="lg:hidden flex items-center h-16 mb-2">
        <div className="grow flex justify-start ps-6">
            <div className="mt-4 rounded-full border p-2 shadow-sm cursor-pointer">
            <h3 className="flex items-end text-lg font-bold">
                M<div className="w-2 h-2 bg-green-500 rounded-full mb-1"></div>
            </h3>
            </div>
        </div>
        <div className="grow flex justify-end pe-6">
            <CiMenuFries className="text-3xl"/>
        </div>

        {/* Actual Menu */}
        <div className="fixed top-0 w-full h-screen bg-white z-50 flex flex-col items-center justify-center">
            <IoMdClose className="text-4xl absolute top-0 right-0 m-4 cursor-pointer"/>
            <motion.button 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-gray-900 w-44 px-4 py-1.5 flex justify-center items-center border shadow-sm ring-2 ring-gray-100 font-bold text-xl my-3 rounded-lg focus:ring-4"
            >
                Projects
            </motion.button>
            <motion.button 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-gray-900 w-44 px-4 py-1.5 flex justify-center items-center border shadow-sm ring-2 ring-gray-100 font-bold text-xl my-3 rounded-lg focus:ring-4"
            >
                Services
            </motion.button>
            <motion.button 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="text-gray-900 w-44 px-4 py-1.5 flex justify-center items-center border shadow-sm ring-2 ring-gray-100 font-bold text-xl my-3 rounded-lg focus:ring-4"
            >
                Career
            </motion.button>
            <motion.button 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.5 }}
                className="text-gray-900 w-44 px-4 py-1.5 flex justify-center items-center border shadow-sm ring-2 ring-gray-100 font-bold text-xl my-3 rounded-lg focus:ring-4"
            >
                Contact
            </motion.button>
        </div>
      </section>
    </>
  );
}
