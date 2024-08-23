export default function DesktopNavigation() {
    return (
        <>
            <nav className="fixed bg-white h-screen left-0 w-[68px] z-40 shadow-sm border-r hidden lg:flex flex-col items-center overflow-hidden">
                <div className="mt-4 rounded-full border p-2 shadow-sm">
                    <h3 className="flex items-end text-lg font-bold">M
                        <div className="w-2 h-2 bg-green-500 rounded-full mb-1"></div>
                    </h3>
                </div>
                <div className="w-full min-h-28 py-6 flex justify-center items-center mt-6 border-r-4 border-r-green-500 bg-gray-100">
                    <a href="" className="text-lg font-normal inline-block rotate-90">Projects</a>
                </div>
                <div className="w-full min-h-28 py-6 flex justify-center items-center hover:bg-gray-100">
                    <a href="" className="text-lg font-normal inline-block rotate-90">Services</a>
                </div>
                <div className="w-full min-h-28 py-6 flex justify-center items-center hover:bg-gray-100">
                    <a href="" className="text-lg font-normal inline-block rotate-90">Career</a>
                </div>
                <div className="w-full min-h-28 py-6 flex justify-center items-center hover:bg-gray-100">
                    <a href="" className="text-lg font-normal inline-block rotate-90">Contact</a>
                </div>
            </nav>
        </>
    )
}