import '../style/SignUp.css'
import { NavLink } from 'react-router-dom';
import '../style/SignTemplate.css'
import { useContext, useState } from 'react';
import { Context } from '../Context/CreateContext';
import axios from "axios"




const SignUp = ({ links = {} }) => {
    const { userData, setUserData } = useContext(Context);
    const inistional = {
        roleId: "",
        name: "",
        email: "",
        password: ""
    }

    const [user, setUser] = useState(inistional)

    const [error, setError] = useState(inistional)



    const inputHandleFun = (e) => {
        const { name, value } = e.target
        setUser({
            ...user, [name]: value
        })
        setError({
            ...error, [name]: ""
        })
    }


    const userSubmitFun = async (e) => {
        e.preventDefault()

        
            const { name, email, password = "" } = user;
            const number = email.match(/\d/g) || ""
            let newError = {} || "";

            if (!name) { newError.name = "Please Enter Your Name" }
            if (!email) { newError.email = "Please Enter Your Email or Number" }


            if (isNaN(email)) {
                if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z.-]+\.[a-zA-Z]{2,}$/.test(email)) { newError.email = "Enter Valid Email" }
            }

            if (!isNaN(email)) {
                if (number.length > 10) { newError.email = "mobile max num 10 only" }
            }


            if (!password) newError.password = "Please Create Your Password"
            // let errorMsg = "";
            else if (!/(?=.*[a-z])/.test(password)) newError.password = "Must have one small character, ";
            else if (!/(?=.*[A-Z])/.test(password)) newError.password = "Must have one capital character, ";
            else if (!/(?=.*[@#$%^&!])/.test(password)) newError.password = "Must have one special character, ";
            else if (!/(?=.*\d)/.test(password)) newError.password = "Must have one number, ";
            else if (password.length < 8) newError.password = "Must have min 8 character";
            // if (errorMsg !== "") { newError.password = errorMsg;}

            console.log(newError);

            if (Object.keys(newError).length > 0) {
                setError(newError);
                return;
            }

            let data = {
                roleId: links?.role === 1 ? 1 : links?.role === 2 ? 2 : links?.role === 3 ? 3 : "",
                name: user.name,
                email: user.email,
                password: user.password
            }
            console.log(data, "data1");

        try {
            const reg_api = await  axios.post("http://localhost:5000/api/register", data)
            alert(reg_api.data.message)
            console.log(reg_api.message)

        } catch (error) {
            console.log("server error", error.data.message);
        }

        setUser(inistional)
        setError(inistional)
    }



    return (

        <>
            <div className="signup-container">
                <h1 className="signup-title">Create an {links.title} account</h1>
                <p className="signup-description">Enter your details below</p>
                <form action="" className='signup-form' onSubmit={userSubmitFun}>
                    <input type="text"
                        placeholder="Name"
                        className='signup-input'
                        name='name'
                        value={user.name}
                        onChange={inputHandleFun}
                    />
                    {error.name && <span id='signup-error'>{error.name}</span>}
                    <input type="text"
                        placeholder="Email or Phone Number"
                        className='signup-input'
                        name={'email'}
                        value={user.email}
                        onChange={inputHandleFun}
                    />
                    {error.email && <span id='signup-error'>{error.email}</span>}
                    <input type="text"
                        placeholder="Password"
                        className='signup-input'
                        name='password'
                        value={user.password}
                        onChange={inputHandleFun}
                    />
                    {error.password && <span id='signup-error'>{error.password}</span>}
                    <button type="submit" className='signup-conformation-btn'>Create Account</button>
                </form>
                <NavLink className="signup-google-link" to="/">
                    <button className='signup-googlebtn-signup'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_1448_3667)">
                                <path d="M23.766 12.2764C23.766 11.4607 23.6999 10.6406 23.5588 9.83807H12.24V14.4591H18.7217C18.4528 15.9494 17.5885 17.2678 16.323 18.1056V21.1039H20.19C22.4608 19.0139 23.766 15.9274 23.766 12.2764Z" fill="#4285F4" />
                                <path d="M12.2401 24.0008C15.4766 24.0008 18.2059 22.9382 20.1945 21.1039L16.3276 18.1055C15.2517 18.8375 13.8627 19.252 12.2445 19.252C9.11388 19.252 6.45946 17.1399 5.50705 14.3003H1.5166V17.3912C3.55371 21.4434 7.7029 24.0008 12.2401 24.0008Z" fill="#34A853" />
                                <path d="M5.50253 14.3003C4.99987 12.8099 4.99987 11.1961 5.50253 9.70575V6.61481H1.51649C-0.18551 10.0056 -0.18551 14.0004 1.51649 17.3912L5.50253 14.3003Z" fill="#FBBC04" />
                                <path d="M12.2401 4.74966C13.9509 4.7232 15.6044 5.36697 16.8434 6.54867L20.2695 3.12262C18.1001 1.0855 15.2208 -0.034466 12.2401 0.000808666C7.7029 0.000808666 3.55371 2.55822 1.5166 6.61481L5.50264 9.70575C6.45064 6.86173 9.10947 4.74966 12.2401 4.74966Z" fill="#EA4335" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1448_3667">
                                    <rect width="24" height="24" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>

                        <span style={{ paddingLeft: "16px" }}>Sign up with Google</span>
                    </button>
                </NavLink>
                <p className="signup-sub-description">Already have account? <NavLink to={links.logLink} className='signup-log-link-path'>Log in</NavLink></p>
            </div>
        </>
    )
}

export default SignUp;  