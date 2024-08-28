import { MdDone } from "react-icons/md";
import Comment from "./Comment/Comment";

export default function AboutSection() {
    return (
        <>
            <section className="px-2 sm:px-0 sm:mt-0 mt-4 w-full flex justify-center">
                <div className="w-full sm:w-[80%] lg:w-[65%] 2xl:w-[45%] h-max border rounded-lg shadow-sm bg-white flex flex-row">
                    <div className="grow flex flex-col py-2">
                        <div className="block grow overflow-y-scroll no-scrollbar border-b">
                            <Comment likes={3} shares={24} time={"just now"}>
                                <p className="text-sm sm:text-base">2.5+ years of experience building web applications.</p>
                            </Comment>
                            <Comment likes={63} shares={29} time={"4 mintues ago"}>
                                <div className="flex items-center">
                                    <MdDone className="text-xl text-green-500 me-2"/>
                                    <p className="text-sm sm:text-base font-medium">Passionate</p>
                                </div>
                                <div className="flex items-center mt-1">
                                    <MdDone className="text-xl text-green-500 me-2"/>
                                    <p className="text-sm sm:text-base font-medium">Motivated</p>
                                </div>
                                <div className="flex items-center mt-1">
                                    <MdDone className="text-xl text-green-500 me-2"/>
                                    <p className="text-sm sm:text-base font-medium">Disciplined</p>
                                </div>
                                <div className="flex items-center mt-1">
                                    <MdDone className="text-xl text-green-500 me-2"/>
                                    <p className="text-sm sm:text-base font-medium">Hard Working</p>
                                </div>
                                <div className="flex items-center mt-1">
                                    <MdDone className="text-xl text-green-500 me-2"/>
                                    <p className="text-sm sm:text-base font-medium">Attention to detail</p>
                                </div>
                            </Comment>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}