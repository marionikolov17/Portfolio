import Comment from "./Comment/Comment";

export default function AboutSection() {
    return (
        <>
            <section className="w-full flex justify-center">
                <div className="w-[40%] h-[650px] border rounded-lg shadow-sm bg-white flex flex-row">
                    <div className="grow flex flex-col">
                        <div className="block grow overflow-y-scroll no-scrollbar border-b">
                            <Comment />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}