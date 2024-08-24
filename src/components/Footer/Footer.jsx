import { motion } from "framer-motion"

export default function Footer() {
    return (
        <>
            <footer className="z-50 w-full bg-black max-h-max mt-12 py-3 flex flex-col items-center">
                <motion.a 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    href="https://www.flaticon.com" 
                    className="text-white text-center text-base sm:text-xl font-medium" 
                    title="icons"
                >Icons created by Freepik - Flaticon</motion.a>
                <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-white text-sm"
                >All rights reserved. 2024©</motion.p>
            </footer>
        </>
    )
}