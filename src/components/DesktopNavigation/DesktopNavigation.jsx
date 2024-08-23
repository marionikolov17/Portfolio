import { useState } from "react";
import { useEffect } from "react";

export default function DesktopNavigation() {
    const [offset, setOffset] = useState(0);

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    }

    useEffect(() => {
        const onScroll = () => {
            console.log(window.scrollY);
            setOffset(window.scrollY);
        }

        window.removeEventListener("scroll", onScroll);
        window.addEventListener("scroll", onScroll);

        return () => {
            window.removeEventListener("scroll", onScroll);
        }
    })

    return (
        <>
        <section className="fixed left-0 min-h-screen z-40 hidden lg:flex items-center">
            <nav className="bg-white w-[68px] shadow-md border flex flex-col items-center overflow-hidden">
                <div className="mt-4 rounded-full border p-2 shadow-sm cursor-pointer" onClick={scrollToTop}>
                    <h3 className="flex items-end text-lg font-bold">M
                        <div className="w-2 h-2 bg-green-500 rounded-full mb-1"></div>
                    </h3>
                </div>
                <div 
                    className={
                        offset > 150 && offset < 900 ?
                        "w-full min-h-28 py-6 flex justify-center items-center mt-6 border-r-4 border-r-green-500 bg-gray-100"
                        :
                        "w-full min-h-28 py-6 flex justify-center items-center mt-6 hover:bg-gray-100"
                    }
                >
                    <a href="#projects" className="text-lg font-normal inline-block rotate-90">Projects</a>
                </div>
                <div className={
                    offset > 900 && offset < 2200 ?
                    "w-full min-h-28 py-6 flex justify-center items-center border-r-4 border-r-green-500 bg-gray-100"
                    :
                    "w-full min-h-28 py-6 flex justify-center items-center hover:bg-gray-100"
                    }
                >
                    <a href="#services" className="text-lg font-normal inline-block rotate-90">Services</a>
                </div>
                <div className={
                    offset > 2700 && offset < 3700 ?
                    "w-full min-h-28 py-6 flex justify-center items-center border-r-4 border-r-green-500 bg-gray-100"
                    :
                    "w-full min-h-28 py-6 flex justify-center items-center hover:bg-gray-100"
                    }
                >
                    <a href="#career" className="text-lg font-normal inline-block rotate-90">Career</a>
                </div>
                <div className={
                    offset > 3700 ?
                    "w-full min-h-28 py-6 flex justify-center items-center border-r-4 border-r-green-500 bg-gray-100"
                    :
                    "w-full min-h-28 py-6 flex justify-center items-center hover:bg-gray-100"
                    }
                >
                    <a href="#contact" className="text-lg font-normal inline-block rotate-90">Contact</a>
                </div>
            </nav>
        </section>
        </>
    )
}