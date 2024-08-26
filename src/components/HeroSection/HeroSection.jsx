/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import { FaAngular, FaLinkedin, FaNode } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SiExpress, SiReact, SiRedux, SiTailwindcss, SiTypescript } from "react-icons/si";
import { motion } from "framer-motion";

export default function HeroSection() {
    const [title, setTitle] = useState("");
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const finalTitle = "Hi, I'm Mario Nikolov";

        if (index == finalTitle.length) return;

        const timeout = setTimeout(() => {
            setTitle(prevTitle => prevTitle + finalTitle[index]);
            setIndex(prevIndex => prevIndex + 1);
        }, 100)

        return () => {
            clearTimeout(timeout)
        }
    }, [index])

    return (
        <>
            <section className="block">
                <div className="flex flex-col lg:p-6 max-h-max lg:mt-10 items-center">
                    <div className="flex justify-center items-center p-2 lg:p-6">
                        <div className="w-[280px] h-[280px] overflow-hidden rounded-full flex justify-center items-center ring-2 ring-gray-100">
                            <motion.img 
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.75 }}
                                src="/images/mario-2.png" 
                                alt="" 
                                className="scale-75" 
                            />
                        </div>
                    </div>
                    <motion.div 
                        initial={{ opacity: 0, y: 75 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.75 }}
                        className="w-full shrink flex flex-col items-center h-full p-2 lg:p-6"
                    >
                        <h1 className="text-2xl lg:text-6xl font-bold title text-center lg:text-start">{title}</h1>
                        <div className="flex lg:flex-row flex-col">
                            <p className="text-lg mt-1 underline underline-offset-8 text-center lg:text-start">Javascript Web Developer,</p>
                            <p className="text-lg mt-1 ms-3 text-center lg:text-start">Full-stack developer</p>
                        </div>
                        <div className="flex items-center justify-center lg:justify-start gap-4 lg:gap-0 mt-6 lg:mt-12 flex-wrap">
                            <h3 className="me-6 text-lg border-r-2 pe-6">Tech Stack</h3>
                            <SiReact className="text-4xl text-[#61dbfb] me-6"/>
                            <SiRedux className="text-4xl text-[#764abc] me-6"/>
                            <FaAngular className="text-4xl text-[#dd1b16] me-6"/>
                            <FaNode className="text-4xl text-[#3c873a] me-6"/>
                            <SiExpress className="text-4xl me-6"/>
                            <SiTypescript className="text-4xl text-[#007acc] me-6"/>
                            <SiTailwindcss className="text-4xl text-[#06b6d4] me-6"/>
                        </div>
                        <div className="flex mt-12 justify-center lg:justify-start">
                            <a href="" className="text-2xl me-4"><FaLinkedin /></a>
                            <a href="" className="text-2xl me-4"><FaGithub /></a>
                            <a href="" className="text-2xl me-4"><FaInstagram /></a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    )
}