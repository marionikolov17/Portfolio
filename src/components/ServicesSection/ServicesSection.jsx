import ServiceCard from "./ServiceCard/ServiceCard";

export default function ServicesSection() {
    return (
        <>
            <section className="w-full flex flex-col sm:flex-row mt-12 min-h-[500px] max-h-max">
                <div className="shrink w-full sm:w-1/2 grow-0 flex justify-center items-center">
                    <h1 className="text-3xl sm:text-6xl font-bold">Services</h1>
                </div>
                <div className="grow w-full sm:w-auto flex flex-col justify-center items-center sm:items-start sm:px-0 px-4">
                    <ServiceCard />
                    <ServiceCard />
                </div>
            </section>
        </>
    )
}