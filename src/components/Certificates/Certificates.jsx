/* eslint-disable react/prop-types */
import { useState } from "react";
import Certificate from "./Certificate/Certificate";

export default function Certificates({ certificates, isLoading, error }) {
    const [currentCertificateIndex, setCurrentCertificateIndex] = useState(0);

    const goNext = () => {
        if (currentCertificateIndex + 1 == certificates.length) {
            return setCurrentCertificateIndex(0);
        }

        setCurrentCertificateIndex(currentIndex => currentIndex + 1);
    }

    const goPrevious = () => {
        if (currentCertificateIndex == 0) {
            return setCurrentCertificateIndex(certificates.length - 1);
        }

        setCurrentCertificateIndex(currentIndex => currentIndex - 1);
    }

    return (
        <>
            <section className="w-full mt-10 flex flex-col items-center max-h-max px-6">
                {certificates && certificates.map((certificate, index) => {
                    if (index == currentCertificateIndex) {
                        return <Certificate 
                                    key={certificate.$id} 
                                    certificate={certificate}
                                    goNext={goNext}
                                    goPrevious={goPrevious}
                               />
                    }
                    return ""
                })}
                {error && <p className="text-red-600 text-lg text-center my-3">Could not get certificates right now</p>}
            </section>
        </>
    )
}