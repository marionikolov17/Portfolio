/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import { CiLinkedin } from "react-icons/ci";
import { MdOutlineContentPaste, MdOutlineEmail, MdOutlinePhone, MdOutlineSubject } from "react-icons/md";

export default function ContactSection() {
    return (
        <>
            <section id="contact" className="w-full flex flex-col-reverse sm:flex-row mt-10 sm:mt-24 mb-8">
                <motion.div 
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.75 }}
                    className="grow w-full sm:w-1/2 flex justify-end px-6 lg:px-24"
                >
                    <form className="block w-full lg:w-96">
                        <div className="mt-4 mb-6">
                            <label htmlFor="email" className="flex items-center font-medium mb-1">
                                Your email
                                <MdOutlineEmail className="ms-2 text-xl"/>
                            </label>
                            <input 
                                type="email"
                                required 
                                id="email"
                                placeholder="johndoe@gmail.com"
                                className="w-full border-0 rounded-sm ring-inset ring-gray-300 px-2 py-1.5 ring-1 shadow-sm sm:leading-6 focus:ring-2 placeholder:text-gray-400"
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="subject" className="flex items-center font-medium">
                                Subject
                                <MdOutlineSubject className="ms-2 text-xl"/>
                            </label>
                            <input 
                                type="text"
                                required 
                                id="subject"
                                placeholder="Job proporsal"
                                className="w-full border-0 rounded-sm ring-inset ring-gray-300 px-2 py-1.5 ring-1 shadow-sm sm:leading-6 focus:ring-2 placeholder:text-gray-400"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="content" className="flex items-center font-medium">
                                Content
                                <MdOutlineContentPaste className="ms-2 text-xl"/>
                            </label>
                            <textarea 
                                required 
                                id="content"
                                placeholder="Type..."
                                className="w-full min-h-32 border-0 rounded-sm ring-inset ring-gray-300 px-2 py-1.5 ring-1 shadow-sm sm:leading-6 focus:ring-2 placeholder:text-gray-400"
                            ></textarea>
                        </div>
                        <button className="w-full flex justify-center items-center py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white focus:ring-4 focus:outline-none focus:ring-blue-300">
                            Submit
                        </button>
                    </form>
                </motion.div>
                <motion.div 
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.75 }}
                    className="grow-0 w-full sm:w-1/2 block px-6"
                >
                    <h2 className="text-3xl sm:text-6xl font-bold">Let's get in touch!</h2>
                    <p className="flex items-center mt-4">
                        <MdOutlineEmail className="me-2 text-xl"/>
                        marionikolovdev@gmail.com
                    </p>
                    <p className="flex items-center mt-2">
                        <CiLinkedin className="me-2 text-xl"/>
                        <a href="https://www.linkedin.com/in/marionikolovdev/">marionikolovdev</a>
                    </p>
                    <p className="flex items-center mt-2 mb-4">
                        <MdOutlinePhone className="me-2 text-xl"/>
                        +359884640709
                    </p>
                </motion.div>
            </section>
        </>
    )
}