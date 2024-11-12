/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";
import RedirectLoader from "../shared/components/RedirectLoader/RedirectLoader";

const RedirectContext = createContext();

export function useRedirect() {
    return useContext(RedirectContext);
}

export default function RedirectContextProvider({ children }) {
    const [isRedirecting, setIsRedirecting] = useState(false);
    const [redirectUrl, setRedirectUrl] = useState("");

    return (
        <RedirectContext.Provider
            value={{
                isRedirecting, setIsRedirecting,
                redirectUrl, setRedirectUrl,
            }}
        >
            {isRedirecting ?
            <>
                <RedirectLoader />
                {children}
            </>
            :
            <>
                {children}
            </>}
        </RedirectContext.Provider>
    )
}