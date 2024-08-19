/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaCaretLeft } from "react-icons/fa6";
import { FaCaretRight } from "react-icons/fa6";

export default function DetailCard({ project }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const goPreviousImage = () => {
        if (currentImageIndex == 0) {
            return setCurrentImageIndex(project.images.length - 1);
        }

        setCurrentImageIndex(currentIndex => currentIndex - 1);
    }

    const goNextImage = () => {
        if (currentImageIndex == project.images.length - 1) {
            return setCurrentImageIndex(0);
        }

        setCurrentImageIndex(currentIndex => currentIndex + 1);
    }

    const selectImage = (index) => {
        setCurrentImageIndex(index)
    }

    return (
        <>
            <section className="w-full min-h-full fixed project-background top-0 p-24 flex justify-center items-center">
                <div className="w-full h-[700px] bg-white rounded-lg flex">
                    {/* Project images section */}
                    <div className="overflow-hidden grow-0 w-[40%] h-full flex items-center justify-center border-r relative">
                        <img src={project.images[currentImageIndex]} alt="" className="object-cover w-full h-full" />

                        <div className="w-full flex absolute bottom-0 py-2 justify-center items-center bg-white border-t">
                            <FaCaretLeft className="cursor-pointer text-3xl" onClick={goPreviousImage}/>
                            {project.images.map((_, index) => {
                                if (currentImageIndex == index) {
                                    return <div key={index} className="dot selected" onClick={() => selectImage(index)}></div>
                                }
                                return <div key={index} className="dot" onClick={() => selectImage(index)}></div>
                            })}
                            <FaCaretRight className="cursor-pointer text-3xl" onClick={goNextImage}/>
                        </div>
                    </div>
                    {/* Project README */}
                    <div className="grow">

                    </div>
                </div>
            </section>
        </>
    )
}