
import '../style/UserSignUp.css'
import SignUp from './SignUp';

import Sign_img from '../assets/sign-img.png'


const UserSignUp = () => {
    const links = {
         title : "User",
         role :1,
         logLink : "/login",
    }
    return (
        <>
            <div className="user-signup-container">
                <img src={Sign_img} alt="" />

                <div className='user-signup'>
                    <div>
                        <SignUp links= {links}/>
                    </div>
                </div>
            </div>
        </>
    )
}



export default UserSignUp;