import { FaAngleLeft, FaAngleRight, FaExternalLinkAlt } from "react-icons/fa";

export default function Certificates() {
    return (
        <>
            <section className="w-full mt-8 flex flex-col items-center max-h-max px-6">
                <img 
                    className=""
                    src="/images/certificates/softuni-react.jpg" 
                    alt="certificate" 
                />
                <div className="flex items-center justify-around">
                    <FaAngleLeft className="mx-4 text-3xl cursor-pointer text-gray-500 hover:text-black"/>
                    <div className="grow flex flex-col items-center">
                        <h1 className="mt-2 text-xl sm:text-2xl font-bold text-center">ReactJS - June 2024</h1>
                        <a 
                            href=""
                            className="flex w-max items-center mt-3 border rounded-lg py-2 px-4 ring-1 ring-gray-100 hover:bg-gray-100 hover:text-blue-700"
                        >
                            Show credential
                            <FaExternalLinkAlt className="ms-2"/>
                        </a>
                    </div>
                    <FaAngleRight className="mx-4 text-3xl cursor-pointer text-gray-500 hover:text-black"/>
                </div>
            </section>
        </>
    )
}