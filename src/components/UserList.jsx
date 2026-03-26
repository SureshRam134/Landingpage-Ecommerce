import { useContext, useEffect, useState } from "react";
import '../style/ListEdit.css'
import EditDatas from "./DataEditComponets/EditDatas";
import { Context } from "../Context/CreateContext";
import api from "../Api/AxiosInstances";


const UserList = () => {

    const { dataEdit, setDataEdit, edit, setEdit } = useContext(Context)

    const links = {
        name: "User",
        backLink: "/admin/user"
    }
    // const gotData = {
    //     tableName:"user",
    //     role:1
    // }

    const dataGotFunction = async () => {
        try {
            // const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/getuser`)
            const res = await api.get("/api/getuser")
            setData(res.data.dbData);

        } catch (error) {
            if (error.response?.status === 404) alert(error.response.data.message)
            else console.log("errro: internal server error", error);

        }

    }
    useEffect(() => {
        dataGotFunction()
    }, [])

    const [data, setData] = useState([])

    const editUserFun = (data) => {
        setEdit(data?.id)
        setDataEdit(data)
    }




    // const softDeleteFunction = async(newId) => {
    //     const id = newId;
    //     try {
    //         const SoftDelete = await axios.post("http://localhost:5000/api/deactivate/",id)
    //         console.log(SoftDelete.data);
            
    //     } catch (error) {
    //         console.log("server error",error);
    //     }
    // }

    return (
        <>
            <div className="list-container">
                {
                    !edit ?
                        <div className="list-content">
                            <h1>User List:</h1>
                            <table className="list-table">
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Active</th>
                                        <th> Action </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        data.map((item, index) => (
                                            <tr key={index} >
                                                <td>{item.id}</td>
                                                <td>{item.name}</td>
                                                <td>{item.email}</td>
                                                <td className="active">active </td>
                                                
                                                <td>
                                                    <button onClick={() => editUserFun(item)}>Edit</button>
                                                    <button>Delete</button>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>

                        : 
                        <div>
                            <EditDatas links={links} updateData={setData} />

                        </div>
                        
                }
            </div>

        </>
    )
}


export default UserList;
