
import '../style/UserSignUp.css'
import SignUp from './SignUp';

import Sign_img from '../assets/sign-img.png'


const UserSignUp = () => {

    return (
        <>
            <div className="user-signup-container">
                <img src={Sign_img} alt="" />

                <div className='user-signup'>
                    <div>
                        <SignUp />
                    </div>
                </div>
            </div>
        </>
    )
}



export default UserSignUp;