import { createContext, useEffect, useState } from "react";



export const Context = createContext();


const CreateContext = ({children}) => {

    // current user
    const user = localStorage.getItem("user")
    const currentUser = user ? JSON.parse(user) : ""
    
    // get data
    const getdata = localStorage.getItem ("registered");
    const data = getdata ? JSON.parse(getdata) : []

    const userDataFun = () => {
        setUserData(data)
    }

    useEffect (() => {
        userDataFun()
    },[]) 
    

    const [userSign, setUserSign] = useState(false)
    const [userData, setUserData] = useState([])
    // const [currentUser, setCurrentUser] = useState('')
    return(

        <>
            <Context.Provider value={{userSign, setUserSign, userData, setUserData, currentUser}}>
                {children}
            </Context.Provider>
        </>
    )
}


export default CreateContext;