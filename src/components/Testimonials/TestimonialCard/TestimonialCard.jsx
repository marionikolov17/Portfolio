/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";

export default function TestimonialCard({ testimonial, className }) {
  return (
    <>
      <section className={"bg-gray-50 dark:bg-gray-800 mx-4 transition duration-500 ease-in" + ""}>
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-max-screen sm:w-[700px] px-4 py-8 mx-auto text-center lg:py-14 lg:px-6"
        >
          <figure className="max-w-screen-md mx-auto">
            <svg
              className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
              viewBox="0 0 24 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                fill="currentColor"
              ></path>
            </svg>
            <blockquote>
              <p className="text-lg sm:text-xl font-medium text-gray-900 md:text-2xl dark:text-white">
                "{testimonial?.text}"
              </p>
            </blockquote>
            <figcaption className="flex items-center justify-center mt-6 space-x-3">
              <img
                className="w-6 h-6 rounded-full"
                src={testimonial?.authorImageUrl}
                alt="profile picture"
              />
              <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                <div className="text-sm sm:text-base pr-3 font-medium text-gray-900 dark:text-white">
                  {testimonial?.authorName}
                </div>
                <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
                  {testimonial?.authorJob}
                </div>
              </div>
            </figcaption>
          </figure>
        </motion.div>
      </section>
    </>
  );
}
