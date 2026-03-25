import '../style/UserSignIn.css'
import SignIn from './SignIn';
import Sign_img from '../assets/sign-img.png'



const DelarLogin = () => {
    const links = {
         title : "Dealer",
          role:3,
         signLink : "/delar/signup",
         homeLink:'/delar/'
    }
    return (
        <>
            <div className="user-singin-container">
                <img src={Sign_img} alt="" />

                <div className='user-signin'>
                    <div>
                        <SignIn links={links}/>
                    </div>
                
                </div>
            </div>
        </>
    )
}

export default DelarLogin;