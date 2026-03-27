import { useContext, useEffect, useState } from "react";
import '../style/ListEdit.css'
import EditDatas from "./DataEditComponets/EditDatas";
import { Context } from "../Context/CreateContext";
import api from "../Api/AxiosInstances";
import axios from "axios";


const UserList = () => {

    const { setDataEdit, edit, setEdit } = useContext(Context)

    const links = {
        name: "User",
        backLink: "/admin/user"
    }

    const dataGetFunction = async () => {
        try {
            const res = await axios.get("http://localhost:5000/api/user")
            setData(res.data.dbData);

        } catch (error) {
            if (error.response?.status === 404) alert(error.response.data.message)
            else console.log("errro: internal server error", error);

        }

    }
    useEffect(() => {
        dataGetFunction()
    }, [])

    

    const [data, setData] = useState([])

    const editFun = (itm) => {
        setEdit(itm?.id)
        setDataEdit(itm)
    }



    const softDeleteFunction = async (itm) => {
        const newActive = !itm.active
        try {
            const SoftDelete = await axios.patch(`http://localhost:5000/api/user/softdelete/${itm.id}`, { active: newActive })
            setData(pre =>
                pre.map((item) =>
                    item.id === itm.id ? {...item, active: newActive ? 1 : 0 } :item)
        )


        } catch (error) {
            console.log("server error", error);
        }
    }
    

    // const deleteFun = async(id) => {
    //     try {
    //         const SoftDelete = await axios.delete(`http://localhost:5000/api/user/delete/${id}`)
    //         alert(SoftDelete.data.message)

    //         setData(pre=> pre.filter((item) => item.id !== id))

    //     } catch (error) {
    //         console.log("internal sever error" , error);

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
                                        data?.map((item, index) => (
                                            <tr key={index} >
                                                <td>{item.id}</td>
                                                <td>{item.name}</td>
                                                <td>{item.email}</td>
                                                <td>
                                                    <button onClick={() => { editFun(item) }}>Edit</button>
                                                    <button
                                                        className={item.active === 0 ? "active" : "inactive"}
                                                        onClick={() => { softDeleteFunction(item) }}>Delete</button>
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
