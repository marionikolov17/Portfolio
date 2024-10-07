import { useQuery } from "@tanstack/react-query";
import { getClientInformation } from "../services/reports.service";
import { useEffect } from "react";

export function useInitVisit() {
    const { isError, data, error } = useQuery({
        queryKey: ["client", "info"],
        queryFn: getClientInformation
    });

    useEffect(() => {
        if (data !== null && data !== undefined) {
            console.log(data)
        }
    }, [data])
}