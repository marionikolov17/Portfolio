/* eslint-disable react/prop-types */
import { MdOutlineWorkOutline } from "react-icons/md";
import { IoIosDoneAll } from "react-icons/io";

export default function ServiceCard({ service }) {
  return (
    <>
      <div className="w-80 sm:w-96 min-h-80 max-h-max border shadow-sm rounded-lg px-4 py-2 mt-4 sm:my-4">
        <div className="w-full h-36 overflow-hidden flex justify-center items-center">
          <img src={service.imageUrl} alt="" className="w-20" />
        </div>
        <h3 className="text-center text-xl font-bold">{service.name}</h3>
        {/* Benefits */}
        {service.benefits.map((benefit, index) => {
          return (
            <div key={index} className="flex items-center my-2">
              <IoIosDoneAll className="ms-4 text-3xl text-green-500" />
              <p className="ms-1">{benefit}</p>
            </div>
          );
        })}
        <div className="flex justify-center my-4">
          <button className="flex items-center border rounded-lg py-2 px-4">
            Apply now
            <MdOutlineWorkOutline className="ms-2" />
          </button>
        </div>
      </div>
    </>
  );
}
