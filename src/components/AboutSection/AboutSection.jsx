import { FaHeart } from "react-icons/fa";

export default function AboutSection() {
    return (
        <>
            <section className="w-full flex justify-center">
                <div className="w-[70%] h-[650px] border rounded-lg shadow-sm bg-white flex flex-row">
                    <div className="w-1/2 flex justify-center overflow-hidden border-r">
                        <img 
                            className=""
                            src="https://firebasestorage.googleapis.com/v0/b/zynkle.appspot.com/o/1722873721408-6296EA50-631B-4E58-B887-CEC068F30D39.jpeg?alt=media&token=f5663ef6-88a2-4780-9ee6-04974ca77248" 
                            alt="" 
                        />
                    </div>
                    <div className="w-1/2 grow flex flex-col">
                        <div className="block grow overflow-y-scroll no-scrollbar border-b">
                            <div className="my-4 flex w-full py-2 px-4">
                                <div className="w-12 h-12 border shadow-sm flex justify-center rounded-full overflow-hidden">
                                    <img src="/images/mario-2.png" className="object-cover" alt="" />
                                </div>
                                <div className="grow ms-4">
                                    <h3 className="text-base font-bold"><span className="text-green-500">@</span>mario</h3>
                                    <p className="text-base">This is just a test text.</p>
                                    <div className="flex mt-1">
                                        <time className="text-sm text-slate-400">a few seconds ago</time>
                                        <p className="text-sm ms-4">3 likes</p>
                                        <p className="text-sm ms-4">24 shares</p>
                                    </div>
                                </div>
                                <div>
                                    <FaHeart className="text-xl text-green-500"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}