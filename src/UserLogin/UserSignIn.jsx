import '../style/UserSignIn.css'
import SignIn from './SignIn';
import Sign_img from '../assets/sign-img.png'


const UserSignIn = () => {
    return (
        <>
            <div className="user-singin-container">
                <img src={Sign_img} alt="" />

                <div className='user-signin'>
                    <div>
                        <SignIn  />
                    </div>
                
                </div>
            </div>
        </>
    )
}


export default UserSignIn;