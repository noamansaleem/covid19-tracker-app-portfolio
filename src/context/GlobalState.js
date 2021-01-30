import React, { createContext, useEffect, useState } from 'react';

export const GlobalContext = createContext({});

export const GlobalProvider = ({ children }) => {
    const [globalData, setGlobalData] = useState({ data: { Recovered: '', Death: '', Confirmed: '', Last_Checked: '', Last_Reported: '' } });
    const [isFetchingGlobal, setIsFetchingGlobal] = useState(true);
    useEffect(() => {
        const getGlobalData = async () => {
            setIsFetchingGlobal(true);
            const response = await fetch("https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total", {
                "method": "GET",
                "headers": {
                    "x-rapidapi-key": "ec946e1451mshb1b0b24a029e26bp11027ajsnf05a1b051256",
                    "x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com"
                }
            });
            const finalGlobalData = await response.json();
            console.log(finalGlobalData);
            setGlobalData(finalGlobalData);
            setIsFetchingGlobal(false);
        }
        getGlobalData();
    }, [])
    return (
        <GlobalContext.Provider value={{
            globalData,
            isFetchingGlobal,
        }}>
            { children}
        </GlobalContext.Provider >
    )
}