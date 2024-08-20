import { MdOutlineWorkOutline } from "react-icons/md";

export default function ServiceCard() {
    return (
        <>
            <div className="w-96 min-h-80 max-h-max border shadow-sm rounded-lg px-4 py-2 my-4">
                <div className="w-full h-36 overflow-hidden flex justify-center items-center">
                    <img src="/images/web-app.png" alt="" className="w-20" />
                </div>
                <h3 className="text-center text-xl font-bold">Web Application</h3>
                <p className="mt-4">Building your desired web application, exactly the way you want! Let's start working together!</p>
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