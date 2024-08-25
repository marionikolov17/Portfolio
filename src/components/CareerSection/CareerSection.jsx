/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import { MdDone } from "react-icons/md";

export default function CareerSection() {
  return (
    <>
      <section id="career" className="w-full sm:mt-10 block mb-8">
        <motion.h1 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center text-3xl sm:text-6xl font-bold"
        >
          My Career
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center text-slate-400 text-lg"
        >So far...</motion.p>
        <div className="flex justify-center px-4 mt-8">
          <ol className="relative border-s border-gray-200 dark:border-gray-700 max-w-[800px]">
            <motion.li 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.75 }}
              className="mb-10 ms-4"
            >
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.75, duration: 0.5 }}
                className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"
              ></motion.div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Sometime in 2020
              </time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Experimenting with HTML and CSS
              </h3>
              <p className="mb-4 text-base font-normal text-gray-500">
                My programming journey started in the early 2020, when I first started learning HTML and CSS
                and experimented with different interfaces.
              </p>
            </motion.li>
            <motion.li 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.75 }}
              className="mb-10 ms-4"
            >
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.75, duration: 0.5 }}
                className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"
              ></motion.div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Early 2021
              </time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                First steps in the Javascript's world
              </h3>
              <p className="mb-2 text-base font-normal text-gray-700">
                In 2021 I started learning Javascript. I learned:
              </p>
              <div className="flex items-center mb-2">
                <MdDone className="me-2 text-green-600"/>
                <p>The Basic Syntax</p>
              </div>
              <div className="flex items-center mb-2">
                <MdDone className="me-2 text-green-600"/>
                <p>Functions and algorithms</p>
              </div>
              <div className="flex items-center mb-2">
                <MdDone className="me-2 text-green-600"/>
                <p>Classes and OOP</p>
              </div>
              <div className="flex items-center mb-2">
                <MdDone className="me-2 text-green-600"/>
                <p>What is Node.js and Express.js</p>
              </div>
              <div className="flex flex-wrap items-center">
                <MdDone className="me-2 text-green-600"/>
                <p>The exsistence of powerful frameworks and libraries for Front-end development.</p>
              </div>
            </motion.li>
            <motion.li 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.75 }}
              className="mb-10 ms-4"
            >
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.75, duration: 0.5 }}
                className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"
              ></motion.div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                2022
              </time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Experimenting in different types of software development
              </h3>
              <p className="text-base font-normal text-black">
                I have tried almost every type of software development such as:
                Game Development, Desktop App Development, Machine Learning and AI, Mobile Development, etc.
                And I have found that I love Web Development the most. ❤️
              </p>
            </motion.li>
            <motion.li 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.75 }}
              className="mb-10 ms-4"
            >
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.75, duration: 0.5 }}
                className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"
              ></motion.div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                January 2023
              </time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Started my learning path in SoftUni
              </h3>
              <p className="text-base font-normal text-gray-500">
                I have felt that I have missed some important concepts during self-learning Javascript,
                so I needed some guidance and I wanted to see how programming is studied in my country.
              </p>
            </motion.li>
            <motion.li 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.75 }}
              className="mb-10 ms-4"
            >
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.75, duration: 0.5 }}
                className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"
              ></motion.div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                May 2024
              </time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Joined the "Intern and Tech Lead Academy 2"
              </h3>
              <p className="text-base font-normal text-gray-500">
                I joined this academy in order to gain real insights on how a day of work of a software developer looks motion.like
                and to see how a real business project/product is built from scratch and to gain more experience.
              </p>
            </motion.li>
            <motion.li 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.75 }}
              className="ms-4"
            >
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.75, duration: 0.5 }}
                className="absolute w-3 h-3 bg-green-500 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"
              ></motion.div>
              <time className="mb-1 text-sm font-normal leading-none text-green-600">
                August 2024
              </time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Finished my learning in SoftUni
              </h3>
              <p className="text-base font-normal text-black">
                I finished the whole 'Javascript Web Developer' path with excellent results.
              </p>
              <button className="mt-2 border flex items-center py-2 px-4 rounded-lg text-sm text-gray-900 font-medium border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700">
                Hide Certificates
                <svg className="w-3 h-3 ms-2 rtl:rotate-180 rotate-90" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
              </button>
            </motion.li>
          </ol>
        </div>
      </section>
    </>
  );
}
