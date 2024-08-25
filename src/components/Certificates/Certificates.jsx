import { certificates } from "../../data/certificates";
import Certificate from "./Certificate/Certificate";

export default function Certificates() {
    return (
        <>
            <section className="w-full mt-10 flex flex-col items-center max-h-max px-6">
                {certificates.map(certificate => <Certificate key={certificate.id} certificate={certificate}/>)}
            </section>
        </>
    )
}