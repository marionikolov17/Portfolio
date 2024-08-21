/* eslint-disable react/no-unescaped-entities */
import { CiLinkedin } from "react-icons/ci";
import { MdOutlineContentPaste, MdOutlineEmail, MdOutlinePhone, MdOutlineSubject } from "react-icons/md";

export default function ContactSection() {
    return (
        <>
            <section className="w-full flex sm:flex-row mt-24 mb-8">
                <div className="grow w-1/2 flex justify-end px-24">
                    <form className="block w-full sm:w-96">
                        <div className="mt-4 mb-6">
                            <label htmlFor="email" className="flex items-center font-medium mb-1">
                                Your email
                                <MdOutlineEmail className="ms-2 text-xl"/>
                            </label>
                            <input 
                                type="email"
                                required 
                                id="email"
                                placeholder="johndoe@gmail.com"
                                className="w-full border-0 rounded-sm ring-inset ring-gray-300 px-2 py-1.5 ring-1 shadow-sm sm:leading-6 focus:ring-2 placeholder:text-gray-400"
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="subject" className="flex items-center font-medium">
                                Subject
                                <MdOutlineSubject className="ms-2 text-xl"/>
                            </label>
                            <input 
                                type="text"
                                required 
                                id="subject"
                                placeholder="Job proporsal"
                                className="w-full border-0 rounded-sm ring-inset ring-gray-300 px-2 py-1.5 ring-1 shadow-sm sm:leading-6 focus:ring-2 placeholder:text-gray-400"
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="content" className="flex items-center font-medium">
                                Content
                                <MdOutlineContentPaste className="ms-2 text-xl"/>
                            </label>
                            <textarea 
                                required 
                                id="content"
                                placeholder="Type..."
                                className="w-full min-h-32 border-0 rounded-sm ring-inset ring-gray-300 px-2 py-1.5 ring-1 shadow-sm sm:leading-6 focus:ring-2 placeholder:text-gray-400"
                            ></textarea>
                        </div>
                        <button className="w-full flex justify-center items-center py-2 rounded-lg bg-blue-500 text-white">
                            Submit
                        </button>
                    </form>
                </div>
                <div className="grow-0 w-1/2 block px-6">
                    <h2 className="text-6xl font-bold">Let's get in touch!</h2>
                    <p className="flex items-center mt-4">
                        <MdOutlineEmail className="me-2 text-xl"/>
                        marionikolovdev@gmail.com
                    </p>
                    <p className="flex items-center mt-2">
                        <CiLinkedin className="me-2 text-xl"/>
                        <a href="https://www.linkedin.com/in/marionikolovdev/">marionikolovdev</a>
                    </p>
                    <p className="flex items-center mt-2">
                        <MdOutlinePhone className="me-2 text-xl"/>
                        +359884640709
                    </p>
                </div>
            </section>
        </>
    )
}