/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaCaretLeft } from "react-icons/fa6";
import { FaCaretRight } from "react-icons/fa6";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { MdClose, MdDone, MdOutlineWebhook } from "react-icons/md";
import { icons } from "../../../../data/icons";

export default function DetailCard({ project, closeDetails }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goPreviousImage = () => {
    if (currentImageIndex == 0) {
      return setCurrentImageIndex(project.images.length - 1);
    }

    setCurrentImageIndex((currentIndex) => currentIndex - 1);
  };

  const goNextImage = () => {
    if (currentImageIndex == project.images.length - 1) {
      return setCurrentImageIndex(0);
    }

    setCurrentImageIndex((currentIndex) => currentIndex + 1);
  };

  const selectImage = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <>
      <section className="w-full my-4 max-h-max sticky top-0 px-4 sm:px-12 xl:px-24 flex justify-center items-center">
        <div
          className="z-0 w-full h-full absolute"
          onClick={closeDetails}
        ></div>

        <div className="w-full sm:h-[700px] bg-white rounded-lg flex flex-col lg:flex-row overflow-auto z-50 border shadow-sm relative">
          {/* Close button */}
          <MdClose 
           className="absolute right-0 top-0 m-4 text-2xl cursor-pointer z-50 lg:bg-transparent bg-white shadow-sm lg:shadow-none rounded-full"
           onClick={closeDetails}
           />
          {/* Project images section */}
          <div 
          className="overflow-hidden lg:grow shrink w-full lg:w-[80%] xl:w-[65%] 2xl:w-[40%] h-[300px] sm:h-[500px] lg:h-full flex items-center justify-center border-r relative"
            >
            <img
              src={project.images[currentImageIndex]}
              alt=""
              className="object-cover w-full h-full"
            />

            <div className="w-full flex absolute bottom-0 py-2 justify-center items-center bg-white border-t">
              <FaCaretLeft
                className="cursor-pointer text-2xl"
                onClick={goPreviousImage}
              />
              {project.images.map((_, index) => {
                if (currentImageIndex == index) {
                  return (
                    <div
                      key={index}
                      className="dot selected"
                      onClick={() => selectImage(index)}
                    ></div>
                  );
                }
                return (
                  <div
                    key={index}
                    className="dot"
                    onClick={() => selectImage(index)}
                  ></div>
                );
              })}
              <FaCaretRight
                className="cursor-pointer text-2xl"
                onClick={goNextImage}
              />
            </div>
          </div>
          {/* Project README */}
          <div className="grow w-full lg:w-[50%] block overflow-y-scroll overflow-x-hidden no-scrollbar p-6">
            <h1 className="text-3xl font-bold">{project.name}</h1> {/* Title */}
            <div className="readme-border my-3"></div>
            <h3 className="text-lg font-bold">
              {project.summary}
            </h3>{" "}
            {/* Summary */}
            {/* Buttons */}
            <div className="flex mt-4">
              <button className="flex items-center border rounded-lg py-1.5 px-4 me-2">
                Github
                <FaGithub className="ms-2" />
              </button>
              <button className="flex items-center border rounded-lg py-1.5 px-4">
                Demo
                <MdOutlineWebhook className="ms-2 text-xl" />
              </button>
            </div>
            {/* Tech stack */}
            <h2 className="mt-4 text-2xl font-bold">Tech Stack</h2>
            <div className="border my-3"></div>
            <ul>
              {Object.keys(project.tech).map((techKey) => {
                return (
                  <li className="my-3 flex items-center" key={techKey}>
                    <h4 className="text-lg me-2">{techKey}:</h4>
                    {project.tech[techKey].map((icon) => {
                      return icons[icon];
                    })}
                  </li>
                );
              })}
            </ul>
            {/* Features */}
            <h2 className="mt-4 text-2xl font-bold">Features</h2>
            <div className="border my-3"></div>
            {/* Feature */}
            {project.features.map((feature, index) => {
              return (
                <div className="flex items-center my-2" key={index}>
                  <IoCheckmarkDoneCircle className="text-3xl" />
                  <p className="ms-1">{feature}</p>
                </div>
              );
            })}
            {/* Skills */}
            <h2 className="mt-4 text-2xl font-bold">What I've learned</h2>
            <div className="border my-3"></div>
            {project.skills.map((skill, index) => {
              return (
                <div className="flex items-center my-2" key={index}>
                  <MdDone className="text-3xl" />
                  <p className="ms-1">{skill}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
