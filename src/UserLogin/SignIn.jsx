import '../style/SignIn.css'
import { NavLink, useNavigate } from 'react-router-dom';
import '../style/SignTemplate.css'
import { Context } from '../Context/CreateContext';
import { useContext, useEffect, useState } from 'react';


const SignIn = () => {
    const navigate = useNavigate();
    const { userData, setUserData , currentUser} = useContext(Context);
    const autoHomeNavFun = () => {
        if(currentUser) return navigate('/')
    }
    useEffect (() => {
        autoHomeNavFun()
    },[])

    const ourUser = [
        {
            role:1,
            email:"Customer@gmail.com",
            password:"customer@1"
        },
        {
            role:2,
            email:"admin@gmail.com",
            password:"admin@1"
        },
        {
            role:3,
            email:"dealer@gmail.com",
            password:"delaer@1"
        },
    ]


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


    const userSubmitFun = (e) => {
        e.preventDefault();
        const { email, password } = logUser
        const logError = {} || ""

        if (!email) logError.email = "Please Enter Email or Phone number"
        if (!password) logError.password = "Please Enter Password"

        if (Object.keys(logError).length > 0) {
            setLogError(logError);
            return;
        }

        const findUser = ourUser.find((item) => item.email === email)
        console.log(findUser);

        if (!findUser) return alert("Email Invaild")
        if (findUser.password !== password) return alert("Invaild Password")



        setLogUser(initional)
        setLogError(initional)
        const currentUser = {
            role: findUser.role,
            email: findUser.email,
        }
        localStorage.setItem("user", JSON.stringify(currentUser))
        alert("Successfully login")
        navigate('/')

    }

    const passToggleFun = () => {
        setPassToggle(!passToggle)
    }

    

    return (

        <>
            <div className="signin-container">
                <h1 className="signin-title">Log in to Exclusive</h1>
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
                <p className="signin-sub-description"> Don't have account? <NavLink to="/signup" className='signin-log-link-path'>Sign Up?</NavLink></p>
            </div>
        </>
    )
}

export default SignIn;  