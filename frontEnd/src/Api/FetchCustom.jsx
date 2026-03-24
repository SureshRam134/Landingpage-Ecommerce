import { useEffect, useState } from "react"



const FetchCustom = (URL) => {

    const [data, setData] = useState([])
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)


    const fetchData = async() => {
        setLoading(true)
        try{
            const response = await fetch(URL)
            if(response.ok) {
                const datas = await response.json()
                setData(datas)
            }
            
        }
        catch(error){
            setError(error)
        }
        finally{
            setLoading(false)
        }
    }
    
    useEffect(() => {
        fetchData()
    },[URL]) 

    return {data, error, loading}

    
}

export default FetchCustom;