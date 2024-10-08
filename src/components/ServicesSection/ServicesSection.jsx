import { motion } from "framer-motion";
import { services } from "../../data/services";
import ServiceCard from "./ServiceCard/ServiceCard";

export default function ServicesSection() {
    return (
        <>
            <section id="services" className="w-full flex flex-col sm:flex-row mt-12 sm:min-h-[500px] max-h-max">
                <div className="shrink w-full sm:w-1/2 grow-0 flex justify-center items-center">
                    <motion.h1 
                        initial={{ opacity: 0, y: 75 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.75 }}
                        className="text-3xl sm:text-6xl font-bold"
                    >Services</motion.h1>
                </div>
                <div className="grow w-full sm:w-auto flex flex-col justify-center items-center sm:items-start sm:px-0 px-4">
                    {services.map(service => <ServiceCard key={service.id} service={service}/>)}
                </div>
            </section>
        </>
    )
}