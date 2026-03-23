import { createContext, useEffect, useState } from "react";



export const Context = createContext();


const CreateContext = ({children}) => {
    const getdata = localStorage.getItem ("registered");
    const data = getdata ? JSON.parse(getdata) : []

    const storeDataFun = () => {
        setUserData(data)
    }
    useEffect (() => {
        storeDataFun()
    },[])

    const [userSign, setUserSign] = useState(false)
    const [userData, setUserData] = useState([])
    return(
        <>
            <Context.Provider value={{userSign, setUserSign, userData, setUserData}}>
                {children}
            </Context.Provider>
        </>
    )
}


export default CreateContext;