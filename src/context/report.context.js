/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

const ReportContext = createContext();

export function ReportContextProvider({ children }) {
    const [fetchedData, setFetchedData] = useState();
    const [createdNotificationID, setCreatedNotificationID] = useState();
    const [createdViewID, setCreatedViewID] = useState();

    return (
        <ReportContext.Provider value={{
            fetchedData,
            setFetchedData,
            createdNotificationID,
            setCreatedNotificationID,
            createdViewID,
            setCreatedViewID
        }}>
            { children }
        </ReportContext.Provider>
    )
}