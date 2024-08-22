/* eslint-disable react/prop-types */
import { FaPlus, FaGithub } from "react-icons/fa";
import { MdOutlineWebhook } from "react-icons/md";
import DetailCard from "./DetailCard/DetailCard";
import { useState } from "react";

export default function ProjectCard({ project }) {
    const [isDetailsOpened, setIsDetailsOpened] = useState(false);

    const openDetails = () => setIsDetailsOpened(true);

    const closeDetails = () => setIsDetailsOpened(false);

    const goToGithub = () => {
        window.location = project.githubUrl;
    }

    const goToDemo = () => {
        window.location = project.demoUrl;
    }

    return (
        <>
            {isDetailsOpened && <DetailCard project={project} closeDetails={closeDetails}/>}
            {!isDetailsOpened && <div className="flex flex-col border h-[360px] w-80 rounded-md shadow-sm mx-4 my-4">
                <div className="w-full overflow-hidden flex justify-center items-center h-28 border-b">
                    <img src={project.imageUrl} alt="" />
                </div>
                <div className="grow shrink-0">
                    <h2 className="mt-4 text-center font-bold text-xl">{project.name}</h2>
                    <p className="text-center px-4 text-sm mt-4">{project.summary}</p>
                    <button className="flex items-center mx-auto mt-4 text-sm border rounded-lg py-2 px-4" onClick={openDetails}>
                        See more 
                        <FaPlus className="ms-2"/>
                    </button>
                </div>
                <div className="grow shrink-1 flex border-t">
                    <button className="w-1/2 flex items-center justify-center border-r text-base" onClick={goToGithub}>
                        Github
                        <FaGithub className="ms-2"/>
                    </button>
                    <button className="w-1/2 flex items-center justify-center text-base" onClick={goToDemo}>
                        Demo
                        <MdOutlineWebhook className="ms-2 text-xl"/>
                    </button>
                </div>
            </div>}
        </>
    )
}