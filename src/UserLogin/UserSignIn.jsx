import '../style/UserSignIn.css'
import SignIn from './SignIn';
import Sign_img from '../assets/sign-img.png'


const UserSignIn = () => {
    const links = {
        title: "User",
        role: 1,
        signLink: "/signup",
        homeLink: "/"
    }
    return (
        <>
            <div className="user-singin-container">
                <img src={Sign_img} alt="" />

                <div className='user-signin'>
                    <div>
                        <SignIn links={links} />
                    </div>

                </div>
            </div>
        </>
    )
}


export default UserSignIn;