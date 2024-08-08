/* eslint-disable react/no-unescaped-entities */
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function HeroSection() {
    return (
        <>
            <section className="block">
                <header className="w-full flex justify-around p-5">
                    <div className="flex items-center justify-start grow">
                        <h2 className="text-white text-2xl cursor-pointer ms-6">
                            <span className="text-lg text-slate-600">crafted by</span> Mario's Portfolio Builder
                        </h2>
                    </div>
                    <div className="sm:grow"></div>
                </header>
                <div className="flex p-6 max-h-max mt-10 items-center">
                    <div className="grow w-1/2 flex justify-center items-center p-6">
                        <div className="w-[300px] h-[300px] overflow-hidden rounded-full shadow-sm">
                            <img src="/images/mario.png" alt="" className="object-cover" />
                        </div>
                    </div>
                    <div className="grow-0 shrink flex flex-col h-full p-6">
                        <h1 className="text-white text-6xl font-bold">Hi, I'm Mario Nikolov</h1>
                        <div className="flex">
                            <p className="text-white text-lg mt-1 underline underline-offset-8">Javascript Web Developer,</p>
                            <p className="text-white text-lg mt-1 ms-3">Creator of Zynkle</p>
                        </div>
                        <div className="flex mt-6">
                            <a href="" className="text-2xl text-white me-4"><FaLinkedin /></a>
                            <a href="" className="text-2xl text-white me-4"><FaGithub /></a>
                            <a href="" className="text-2xl text-white me-4"><FaInstagram /></a>
                        </div>
                        <p className="text-white mt-6 pe-14 max-w-[70%]">
                            I am a developer with 2.5+ years of experience in developing web applications and interfaces.
                            I am looking for opportunities to learn new skills and become a better version of myself.
                        </p>
                        <div className="flex mt-6">
                            <button className="hero-section-button">
                                Projects
                            </button>
                            <button className="hero-section-button">
                                Certificates
                            </button>
                            <button className="hero-section-button">
                                Contact
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}