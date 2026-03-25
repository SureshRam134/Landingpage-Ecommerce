import '../style/UserSignUp.css'
import SignUp from './SignUp';
import Sign_img from '../assets/sign-img.png'



const AdminSignup = () => {

    const links = {
        title : "Admin",
        role :2,
        logLink : "/admin/login"

    }

     return (
        <>
            <div className="user-signup-container">
                <img src={Sign_img} alt="" />

                <div className='user-signup'>
                    <div>
                        <SignUp links={links}/>
                    </div>
                </div>
            </div>
        </>
    )
}







export default AdminSignup;