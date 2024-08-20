import ServiceCard from "./ServiceCard/ServiceCard";

export default function ServicesSection() {
    return (
        <>
            <section className="w-full flex mt-12 min-h-[500px] max-h-max">
                <div className="shrink w-1/2 grow-0 flex justify-center items-center">
                    <h1 className="text-6xl font-bold">Services</h1>
                </div>
                <div className="grow flex flex-col justify-center items-start">
                    <ServiceCard />
                    <ServiceCard />
                </div>
            </section>
        </>
    )
}