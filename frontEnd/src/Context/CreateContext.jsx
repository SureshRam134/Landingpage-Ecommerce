import { createContext, useEffect, useState } from "react";



export const Context = createContext();


const CreateContext = ({children}) => {

    // current user
    const user = localStorage.getItem("user")
    const currentUser = user ? JSON.parse(user) : ""

    //bd user
    const dbCurrentUserFun = async() => {
        const response = await fetch('http://localhost:5000/user')
        
        try{
            if(response.ok) {
                const data = await response.json()
                setDBUser(data)
            }
        }catch(error) {
            console.log("error:" ,error);
            
        }
   }
    useEffect(()=> {
        dbCurrentUserFun()
    },[])
    
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
    const [dbUser, setDBUser] = useState()
    return(

        <>
            <Context.Provider value={{userSign, setUserSign, userData, setUserData, currentUser, dbUser}}>
                {children}
            </Context.Provider>
        </>
    )
}


export default CreateContext;