import Comment from "./Comment/Comment";

export default function AboutSection() {
    return (
        <>
            <section className="w-full flex justify-center">
                <div className="w-[40%] h-[650px] border rounded-lg shadow-sm bg-white flex flex-row">
                    <div className="grow flex flex-col">
                        <div className="block grow overflow-y-scroll no-scrollbar border-b">
                            <Comment likes={3} shares={24} time={"a few seconds ago"}>
                                <p className="text-base">2.5+ years of experience building web applications.</p>
                            </Comment>
                            <Comment likes={63} shares={29} time={"4 mintues ago"}>
                                <p className="text-base">2.5+ years of experience building web applications.</p>
                            </Comment>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}