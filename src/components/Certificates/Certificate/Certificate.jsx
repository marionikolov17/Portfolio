/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaAngleLeft, FaAngleRight, FaExternalLinkAlt } from "react-icons/fa";
import Loader from "../../Loader/Loader";

export default function Certificate({ certificate, goNext, goPrevious }) {
  const [isImageLoading, setIsImageLoading] = useState(true);

  return (
    <>
      {isImageLoading &&
      <div className="flex justify-center items-center">
        <Loader />  
      </div>}
      <img
        className="max-w-full sm:max-w-[500px]"
        src={certificate.imageUrl}
        alt="certificate"
        onLoad={() => setIsImageLoading(false)}
      />
      <div className="flex items-center justify-around mt-4">
        <FaAngleLeft className="mx-4 text-3xl cursor-pointer text-gray-500 hover:text-black" onClick={goPrevious}/>
        <div className="grow flex flex-col items-center">
          <h1 className="mt-2 text-xl sm:text-2xl font-bold text-center">
            {certificate.title}
          </h1>
          <a
            href={certificate.credentialUrl}
            className="flex w-max items-center mt-3 border rounded-lg py-2 px-4 ring-1 ring-gray-100 hover:bg-gray-100 hover:text-blue-700"
          >
            Show credential
            <FaExternalLinkAlt className="ms-2" />
          </a>
        </div>
        <FaAngleRight className="mx-4 text-3xl cursor-pointer text-gray-500 hover:text-black" onClick={goNext} />
      </div>
    </>
  );
}
