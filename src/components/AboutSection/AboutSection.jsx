import { motion } from "framer-motion";
import { MdDone } from "react-icons/md";
import Comment from "./Comment/Comment";
import { FaHeart } from "react-icons/fa";
import { TfiCommentAlt } from "react-icons/tfi";
import { CiBookmarkCheck, CiShare2 } from "react-icons/ci";

export default function AboutSection() {
    return (
        <>
            <section className="lg:mt-0 mt-4 w-full flex justify-center" id="about">
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.75 }}
                    className="w-full sm:w-[80%] lg:w-[65%] 2xl:w-[45%] h-max sm:border sm:rounded-lg sm:shadow-sm bg-white flex flex-row"
                >
                    <div className="grow flex flex-col py-2">
                        <div className="block grow overflow-x-hidden overflow-y-scroll no-scrollbar border-b pb-4">
                            <Comment likes={3} shares={24} time={"just now"}>
                                <p className="text-sm sm:text-base">2.5+ years of experience building web applications and interfaces.</p>
                            </Comment>
                            <Comment likes={63} shares={29} time={"4 mintues ago"}>
                                <div className="flex items-center">
                                    <MdDone className="text-xl text-green-500 me-2"/>
                                    <p className="text-sm sm:text-base font-medium">Passionate</p>
                                </div>
                                <div className="flex items-center mt-1">
                                    <MdDone className="text-xl text-green-500 me-2"/>
                                    <p className="text-sm sm:text-base font-medium">Motivated</p>
                                </div>
                                <div className="flex items-center mt-1">
                                    <MdDone className="text-xl text-green-500 me-2"/>
                                    <p className="text-sm sm:text-base font-medium">Disciplined</p>
                                </div>
                                <div className="flex items-center mt-1">
                                    <MdDone className="text-xl text-green-500 me-2"/>
                                    <p className="text-sm sm:text-base font-medium">Hard Working</p>
                                </div>
                                <div className="flex items-center mt-1">
                                    <MdDone className="text-xl text-green-500 me-2"/>
                                    <p className="text-sm sm:text-base font-medium">Attention to detail</p>
                                </div>
                            </Comment>
                            <Comment likes={99} shares={2} time={"an hour ago"}>
                                <p className="text-sm sm:text-base font-bold">Looking for new opportunities to continue improving myself!</p>
                            </Comment>
                        </div>
                        <div className="grow-0 shrink-0 pb-2">
                            <div className="flex overflow-hidden">
                                <motion.div 
                                    initial={{ x: -200 }}
                                    whileInView={{ x: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="flex grow items-center justify-start pt-4"
                                >
                                    <FaHeart className="text-2xl text-green-500 ms-5"/>
                                    <TfiCommentAlt className="text-2xl ms-5"/>
                                    <CiShare2 className="text-2xl ms-5"/>
                                </motion.div>
                                <motion.div 
                                    initial={{ x: 20 }}
                                    whileInView={{ x: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="flex grow justify-end items-center pt-4"
                                >
                                    <CiBookmarkCheck className="text-2xl text-green-500 me-5"/>
                                </motion.div>
                            </div>
                            <p className="ms-5 font-bold mt-3">3222 likes</p>
                            <p className="ms-5 text-slate-400 text-xs">2 hours ago</p>
                        </div>
                    </div>
                </motion.div>
            </section>
        </>
    )
}