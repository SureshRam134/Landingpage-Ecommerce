import '../style/SignIn.css'
import { NavLink, useNavigate } from 'react-router-dom';
import '../style/SignTemplate.css'
import { Context } from '../Context/CreateContext';
import {  useContext, useState } from 'react';


const SignIn = () => {

    const navigate = useNavigate();
    const { userData, setUserData } = useContext(Context);


    const [logUser, setLogUser] = useState({
        email: "",
        password:"",
    })

    const [logError, setLogError] = useState({
        email: "",
        password:"",
    })
    const inputHandle = (e) => {
        const {name, value} = e.target;
        setLogUser({...logUser, [name] : value})
        setLogError({...logError, [name] : ""})
    }


    const userSubmitFun = (e) => {
        e.preventDefault();
        const {email, password} = logUser
        const logError = {} || ""

        if(!email) logError.email="Please Enter Email or Phone number"
        if(!password) logError.password="Please Enter Password"

        const findUser = userData.find((item) => item.email === email)
        // console.log(findUser);
        
        if(email) {
            if(!findUser) logError.email="Email Invaild"
        }

        if(password) {
            if(findUser.password !== password) logError.password = "Invaild Password"
        }

        if(Object.keys(logError).length > 0) {
            setLogError(logError);
            return;
        }

        setLogUser({email:"", password:""})
        setLogError({email:"", password:""})
        localStorage.setItem("user", JSON.stringify(findUser.email))
        alert("Successfully login")
        navigate('/')

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
                    <input type="text" 
                    placeholder="Password" 
                    className='signin-input' 
                    name="password"
                    value={logUser.password}
                    onChange={inputHandle}
                    />
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