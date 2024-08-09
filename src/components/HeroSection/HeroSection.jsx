/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import { FaAngular, FaLinkedin, FaNode } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SiExpress, SiReact, SiRedux, SiTailwindcss, SiTypescript } from "react-icons/si";

export default function HeroSection() {
    const [title, setTitle] = useState("");
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const finalTitle = "Hi, I'm Mario Nikolov";

        if (index == finalTitle.length) return;
        const timeout = setTimeout(() => {
            setTitle(prevTitle => prevTitle + finalTitle[index]);
            setIndex(prevIndex => prevIndex + 1);
        }, 200)

        return () => {
            clearTimeout(timeout)
        }
    }, [index])

    return (
        <>
            <section className="block">
                <div className="flex p-6 max-h-max mt-10 items-center">
                    <div className="grow flex justify-center items-center p-6">
                            <img src="/images/mario-2.png" alt="" className="w-[400px]" />
                    </div>
                    <div className="grow-0 w-1/2 shrink flex flex-col h-full p-6">
                        <h1 className="text-6xl font-bold title">{title}</h1>
                        <div className="flex">
                            <p className="text-lg mt-1 underline underline-offset-8">Javascript Web Developer,</p>
                            <p className="text-lg mt-1 ms-3">Creator of Zynkle</p>
                        </div>
                        <div className="flex mt-6">
                            <a href="" className="text-2xl me-4"><FaLinkedin /></a>
                            <a href="" className="text-2xl me-4"><FaGithub /></a>
                            <a href="" className="text-2xl me-4"><FaInstagram /></a>
                        </div>
                        <p className="mt-6 pe-14">
                            I am a developer with 2.5+ years of experience in developing web applications and interfaces.
                            I am looking for opportunities to learn new skills and become a better version of myself.
                        </p>
                        <div className="flex items-center mt-12">
                            <SiReact className="text-6xl text-[#61dbfb] me-6"/>
                            <SiRedux className="text-6xl text-[#764abc] me-6"/>
                            <FaAngular className="text-6xl text-[#dd1b16] me-6"/>
                            <FaNode className="text-6xl text-[#3c873a] me-6"/>
                            <SiExpress className="text-6xl me-6"/>
                            <SiTypescript className="text-6xl text-[#007acc] me-6"/>
                            <SiTailwindcss className="text-6xl text-[#06b6d4] me-6"/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}