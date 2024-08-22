import { useEffect, useState } from "react";
import TestimonialCard from "./TestimonialCard/TestimonialCard";
import { testimonials } from "../../data/testimonials";

export default function Testimonials() {
    const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (currentTestimonialIndex == testimonials.length - 1) {
                return setCurrentTestimonialIndex(0);
            }
    
            setCurrentTestimonialIndex(prevIndex => prevIndex + 1);
        }, 3000)

        return () => {
            clearTimeout(timeout);
        }
    }, [currentTestimonialIndex])

    return (
        <>
            <section className="w-full sm:mt-12 sm:mb-6 min-h-96 flex items-center justify-center overflow-x-hidden overflow-y-hidden flex-wrap">
                {testimonials.map((testimonial, index) => {
                    if (index == currentTestimonialIndex) {
                        return <TestimonialCard key={testimonial.id} testimonial={testimonial} className={""}/>
                    }
                    return <TestimonialCard key={testimonial.id} testimonial={testimonial} className={" absolute opacity-0 bottom-0"}/>
                })}
            </section>
        </>
    )
}