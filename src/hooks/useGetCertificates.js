import { useEffect, useState } from "react";
import { getCertificates } from "../services/certificate.service";

export function useGetCertificates() {
    const [certificates, setCertificates] = useState();
    const [isLoading, setIsLoading] = useState();
    const [error, setError] = useState();

    useEffect(() => {
        (async () => {
            setIsLoading(true);
            
            try {
                const data = await getCertificates();
                setCertificates(data.documents);
            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        })()
    }, [])

    return { certificates, isLoading, error }
}