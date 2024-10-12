/* eslint-disable react/no-unescaped-entities */
import { useMutation } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { CiLinkedin } from "react-icons/ci";
import { MdOutlineContentPaste, MdOutlineEmail, MdOutlinePhone, MdOutlineSubject } from "react-icons/md";
import { createMessage } from "../../services/message.service";
import { useState } from "react";
import SuccessToast from "../SuccessToast/SuccessToast";

export default function ContactSection() {
    const [showToast, setShowToast] = useState(false);

    const mutation = useMutation({
        mutationFn: (data) => createMessage(data)
    })

    const { 
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    const onSend = async (data) => {
        mutation.mutate(data);
        reset();
        setShowToast(true);
    }

    return (
        <>
            {showToast && <SuccessToast setShowToast={setShowToast}/>}
            <section id="contact" className="w-full flex flex-col-reverse sm:flex-row mt-10 sm:mt-24 mb-8">
                <motion.div 
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.75 }}
                    className="grow w-full sm:w-1/2 flex justify-end px-6 lg:px-24"
                >
                    <form 
                        onSubmit={handleSubmit(onSend)}
                        className="block w-full lg:w-96"
                    >
                        <div className="mb-6">
                            <label htmlFor="name" className="flex items-center font-medium">
                                Your Name
                                <MdOutlineSubject className="ms-2 text-xl"/>
                            </label>
                            <input 
                                type="text"
                                {...register("name", { required: "This field is required" })} 
                                id="name"
                                placeholder="e.g John Doe"
                                className="w-full border-0 outline-none rounded-sm ring-gray-300 px-2 py-1.5 ring-1 shadow-sm sm:leading-6 focus:ring-2 focus:ring-green-500 transition duration-300 placeholder:text-gray-400"
                            />
                            {errors.name && (
                                <p className="text-red-600 text-sm mt-2">
                                    {errors.name.message}
                                </p>
                            )}
                        </div>
                        <div className="mt-4 mb-6">
                            <label htmlFor="email" className="flex items-center font-medium mb-1">
                                Your email
                                <MdOutlineEmail className="ms-2 text-xl"/>
                            </label>
                            <input 
                                type="email"
                                {...register("email", { 
                                    required: "This field is required",
                                    pattern: {
                                        value:
                                        /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i,
                                        message: "This field should be a valid email",
                                    },
                                })} 
                                id="email"
                                placeholder="johndoe@gmail.com"
                                className="w-full border-0 outline-none rounded-sm ring-gray-300 px-2 py-1.5 ring-1 shadow-sm sm:leading-6 focus:ring-2 focus:ring-green-500 transition duration-300 placeholder:text-gray-400"
                            />
                            {errors.email && (
                                <p className="text-red-600 text-sm mt-2">
                                    {errors.email.message}
                                </p>
                            )}
                        </div>
                        <div className="mb-6">
                            <label htmlFor="title" className="flex items-center font-medium">
                                Subject
                                <MdOutlineSubject className="ms-2 text-xl"/>
                            </label>
                            <input 
                                type="text"
                                {...register("title", { required: "This field is required" })} 
                                id="title"
                                placeholder="Job proporsal"
                                className="w-full border-0 outline-none rounded-sm ring-gray-300 px-2 py-1.5 ring-1 shadow-sm sm:leading-6 focus:ring-2 focus:ring-green-500 transition duration-300 placeholder:text-gray-400"
                            />
                            {errors.title && (
                                <p className="text-red-600 text-sm mt-2">
                                    {errors.title.message}
                                </p>
                            )}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message" className="flex items-center font-medium">
                                Content
                                <MdOutlineContentPaste className="ms-2 text-xl"/>
                            </label>
                            <textarea 
                                {...register("message", { required: "This field is required" })} 
                                id="message"
                                placeholder="Type..."
                                className="w-full min-h-32 border-0 rounded-sm outline-none ring-gray-300 px-2 py-1.5 ring-1 shadow-sm sm:leading-6 focus:ring-2 focus:ring-green-500 transition duration-300 placeholder:text-gray-400"
                            ></textarea>
                            {errors.message && (
                                <p className="text-red-600 text-sm">
                                    {errors.message.message}
                                </p>
                            )}
                        </div>
                        <button disabled={mutation.isPending} className="w-full flex justify-center items-center py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white focus:ring-4 focus:outline-none focus:ring-blue-300 disabled:bg-blue-300">
                            Submit
                        </button>
                        {mutation.isError && <p className="mt-1 text-red-600 text-center">Error: Could not send message</p>}
                    </form>
                </motion.div>
                <motion.div 
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.75 }}
                    className="grow-0 w-full sm:w-1/2 block px-6"
                >
                    <h2 className="text-3xl sm:text-6xl font-bold">Let's get in touch!</h2>
                    <p className="flex items-center mt-4">
                        <MdOutlineEmail className="me-2 text-xl"/>
                        marionikolovdev@gmail.com
                    </p>
                    <p className="flex items-center mt-2">
                        <CiLinkedin className="me-2 text-xl"/>
                        <a href="https://www.linkedin.com/in/marionikolovdev/">marionikolovdev</a>
                    </p>
                    <p className="flex items-center mt-2 mb-4">
                        <MdOutlinePhone className="me-2 text-xl"/>
                        +359884640709
                    </p>
                </motion.div>
            </section>
        </>
    )
}