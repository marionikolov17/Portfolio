/* eslint-disable no-unused-vars */
import { useMutation, useQuery } from "@tanstack/react-query";
import { getClientInformation, reportInitVisit } from "../services/reports.service";
import { useEffect } from "react";

export function useInitVisit(setFetchedData, setCreatedNotificationID, setCreatedViewID) {
    const { isError, data, error } = useQuery({
        queryKey: ["client", "info"],
        queryFn: getClientInformation
    });

    const { mutate } = useMutation({
        mutationFn: (data) => reportInitVisit(data),
        onSuccess: (response) => {
            console.log(response)
            setCreatedNotificationID(response.createdNotificationsRecord.$id);
            setCreatedViewID(response.createdViewsRecord.$id);
        }
    })

    useEffect(() => {
        if (data !== null && data !== undefined) {
            console.log(data)
            setFetchedData(data);
            mutate(data);
        }
    }, [data, setFetchedData, mutate])
}