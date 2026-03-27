import { NavLink } from 'react-router-dom';
import '../../style/EditDatas.css'
import { useContext, useState } from 'react';
import { Context } from '../../Context/CreateContext';
// import api from '../../Api/AxiosInstances';
import axios from 'axios';


const EditDatas = ({links= {}, updateData = {}}) => {

    const {dataEdit, setDataEdit, setEdit} = useContext(Context) 
    const [errorDataEdit, setErrorDataEdit] = useState({})

    const EditinputHandleFun = (e) => {
        const {name, value} = e.target;
        setDataEdit({...dataEdit, [name] : value})
        setErrorDataEdit({...errorDataEdit, [name] : ""})
    }
    
    const EditSubmitFun = async(e) => {
        e.preventDefault()
        try {
            const {name, email} = dataEdit
            const newError = {}
            if(!name) newError.name= "Please Enter Name"
            if(!email) newError.email= "Please Enter Email or Phone Number"

            if(Object.keys(newError).length > 0) {
                setErrorDataEdit(newError)
                return;
            }
            // const update_res = await api.put("/api/update",dataEdit)
            const update_res = await axios.put("http://localhost:5000/api/user/update",dataEdit)
            alert(update_res.data.message)
            const newData = update_res.data.newData
            console.log(newData);
            setEdit(null)
            setDataEdit("")
            updateData(pre => pre.map((item) => item.id === newData.id ? newData : item) )

        } catch (error) {
            console.log(error);
            
        }

    }


    const backFunction = () => {
        setEdit (null)
        setDataEdit({})
    }


    return (
        <div className="edit-container">
            <h1 className="edit-title">Modify the {links.name} details </h1>
            <p className="edit-description">Check your details below</p>
            <form action="" className='edit-form' onSubmit={EditSubmitFun}>
                <input type="text"
                    placeholder="Name"
                    className='edit-input'
                    name='name'
                    value={dataEdit?.name}
                    onChange={EditinputHandleFun}
                />
                {errorDataEdit?.name && <span id='edit-error'>{errorDataEdit.name}</span>}
                <input type="text"
                    placeholder="Email or Phone Number"
                    className='edit-input'
                    name={'email'}
                    value={dataEdit?.email}
                    onChange={EditinputHandleFun}
                />
                {errorDataEdit?.email && <span id='edit-error'>{errorDataEdit.email}</span>}
                <button type="submit" className='edit-conformation-btn'>Save</button>
            </form>

            <p className="edit-sub-description">If Don,t to Edit? <NavLink to={links.backLink} onClick={backFunction} className='edit-log-link-path'>Back</NavLink></p>
        </div>
    )
}

export default EditDatas;