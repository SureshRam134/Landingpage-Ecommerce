import '../style/SignIn.css'
import { NavLink, useNavigate } from 'react-router-dom';
import '../style/SignTemplate.css'
import { Context } from '../Context/CreateContext';
import { useContext, useState } from 'react';
import axios from 'axios';


const SignIn = ({ links = {} }) => {

    const { userData, setUserData, currentUser, dbUser } = useContext(Context);


    const navigate = useNavigate()

    const autoHomeNavFun = (data) => {
        if (data?.role) {

            if (data?.role === links.role) {
                window.location.href = links.homeLink
            }
        }
        else {
            window.location.href = '/login'
        }
    }

    let initional = {
        email: '',
        password: '',
    }


    const [logUser, setLogUser] = useState(initional)
    const [passToggle, setPassToggle] = useState(false)

    const [logError, setLogError] = useState(initional)
    const inputHandle = (e) => {
        const { name, value } = e.target;
        setLogUser({ ...logUser, [name]: value })
        setLogError({ ...logError, [name]: "" })
    }


    const userSubmitFun = async (e) => {
        e.preventDefault();
        const { email, password } = logUser
        const logError = {} || ""

        if (!email) logError.email = "Please Enter Email or Phone number"
        if (!password) logError.password = "Please Enter Password"

        if (Object.keys(logError).length > 0) {
            setLogError(logError);
            return;
        }

        try {

            const users = {
                roleId: links?.role === 1 ? 1 : links?.role === 2 ? 2 : links?.role === 3 ? 3 : "",
                email: logUser.email,
                password: logUser.password
            }
            const get_api = await axios.post("http://localhost:5000/api/user", users)
            alert(get_api.data.message);


            setLogUser(initional)
            setLogError(initional)
           

            localStorage.setItem("user", JSON.stringify(get_api.data.userDetails))
            alert("Successfully login")
            await autoHomeNavFun(get_api.data.userDetails)

        } catch (error) {
            if (error.response?.status === 401) {
                alert(error.response.data.message);
                const checkUserRole = [1, 2, 3]
                if (checkUserRole.includes(links.role)) {
                    if (error.response.data.currentRole === 1 && links.role !== 1) return navigate('/login')
                    else if (error.response.data.currentRole === 2 && links.role !== 2) return navigate('/admin/login')
                    else if (error.response.data.currentRole === 3 && links.role !== 3) return navigate('/Delar/login')
                }

            } else {
                console.log("Server error", error);
            }



        }
    }

    const passToggleFun = () => {
        setPassToggle(!passToggle)
    }

    if (currentUser) {
        return autoHomeNavFun(currentUser)
    }
    return (

        <>
            <div className="signin-container">
                <h1 className="signin-title">Log in to {links.title} Exclusive</h1>
                <p className="signin-description">Enter your details below</p>
                <form action="" className='signin-form' onSubmit={userSubmitFun}>
                    <input type="text"
                        placeholder="Email or Phone Number"
                        className='signin-input'
                        name="email"
                        value={logUser.email}
                        onChange={inputHandle}
                    />
                    {logError.email && <span className='signin-error'>{logError.email}</span>}

                    <div className='pass-visiable-icon'>
                        <input
                            type={passToggle ? "type" : "password"}
                            placeholder="Password"
                            className='signin-input'
                            name="password"
                            value={logUser.password}
                            onChange={inputHandle}
                        />
                        <span onClick={passToggleFun} className='pass-icon'>{passToggle ?
                            <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="17" cy="17" r="17" fill="white" />
                                <path d="M26.257 15.962C26.731 16.582 26.731 17.419 26.257 18.038C24.764 19.987 21.182 24 17 24C12.818 24 9.23601 19.987 7.74301 18.038C7.51239 17.7411 7.38721 17.3759 7.38721 17C7.38721 16.6241 7.51239 16.2589 7.74301 15.962C9.23601 14.013 12.818 10 17 10C21.182 10 24.764 14.013 26.257 15.962V15.962Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M17 20C18.6569 20 20 18.6569 20 17C20 15.3431 18.6569 14 17 14C15.3431 14 14 15.3431 14 17C14 18.6569 15.3431 20 17 20Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            :
                            <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="17" cy="17" r="17" fill="red" />
                                <path d="M26.257 15.962C26.731 16.582 26.731 17.419 26.257 18.038C24.764 19.987 21.182 24 17 24C12.818 24 9.23601 19.987 7.74301 18.038C7.51239 17.7411 7.38721 17.3759 7.38721 17C7.38721 16.6241 7.51239 16.2589 7.74301 15.962C9.23601 14.013 12.818 10 17 10C21.182 10 24.764 14.013 26.257 15.962V15.962Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M17 20C18.6569 20 20 18.6569 20 17C20 15.3431 18.6569 14 17 14C15.3431 14 14 15.3431 14 17C14 18.6569 15.3431 20 17 20Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>


                        }</span>

                    </div>



                    {logError.password && <span className='signin-error'>{logError.password}</span>}
                    <div className='signin-btn-container'>
                        <button type='submit' className='signin-conformation-btn'>Log In</button>
                        <button className='signin-forget-btn'>Forget Password?</button>
                    </div>
                </form>
                <p className="signin-sub-description"> Don't have account? <NavLink to={links.signLink} className='signin-log-link-path'>Sign Up?</NavLink></p>
            </div>
        </>
    )
}

export default SignIn;  