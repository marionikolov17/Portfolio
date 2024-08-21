import { MdOutlineWorkOutline } from "react-icons/md";
import { IoIosDoneAll } from "react-icons/io";

export default function ServiceCard() {
    return (
        <>
            <div className="w-80 sm:w-96 min-h-80 max-h-max border shadow-sm rounded-lg px-4 py-2 my-4">
                <div className="w-full h-36 overflow-hidden flex justify-center items-center">
                    <img src="/images/web-app.png" alt="" className="w-20" />
                </div>
                <h3 className="text-center text-xl font-bold">Web Application</h3>
                {/* Benefits */}
                <div className="flex items-center my-2">
                    <IoIosDoneAll className="ms-4 text-3xl"/>
                    <p className="ms-1">Building full-stack application</p>
                </div>
                <div className="flex items-center my-2">
                    <IoIosDoneAll className="ms-4 text-3xl"/>
                    <p className="ms-1">Fast delivery</p>
                </div>
                <div className="flex justify-center my-4">
                    <button className="flex items-center border rounded-lg py-2 px-4">
                        Apply now
                        <MdOutlineWorkOutline className="ms-2"/>    
                    </button>
                </div>
            </div>
        </>
    )
}