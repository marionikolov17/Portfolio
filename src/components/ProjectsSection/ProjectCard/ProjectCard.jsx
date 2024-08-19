import { FaPlus, FaGithub } from "react-icons/fa";
import { MdOutlineWebhook } from "react-icons/md";

export default function ProjectCard() {
    return (
        <>
            <div className="flex flex-col border h-[360px] w-80 rounded-md shadow-sm mx-4 my-4">
                <div className="w-full overflow-hidden flex justify-center items-center h-28 border-b">
                    <img src="/images/zynkle-logo-thumbnail.jpg" alt="" />
                </div>
                <div className="grow shrink-0">
                    <h2 className="mt-4 text-center font-bold text-xl">Zynkle</h2>
                    <p className="text-center px-4 text-sm mt-4">Incoming social media app, connecting people around the world.</p>
                    <button className="flex items-center mx-auto mt-4 text-sm border rounded-lg py-2 px-4">
                        See more 
                        <FaPlus className="ms-2"/>
                    </button>
                </div>
                <div className="grow shrink-1 flex border-t">
                    <button className="w-1/2 flex items-center justify-center border-r text-base">
                        Github
                        <FaGithub className="ms-2"/>
                    </button>
                    <button className="w-1/2 flex items-center justify-center text-base">
                        Demo
                        <MdOutlineWebhook className="ms-2 text-xl"/>
                    </button>
                </div>
            </div>
        </>
    )
}