import { Navigate, Outlet } from "react-router-dom";
import Footer from "./Footer";
import Topbar from "./Topbar"
import '../style/Layout.css'
import { useContext } from "react";
import { Context } from "../Context/CreateContext";
import AdminNav from "./NavComponents/AdminNav";
import DelarNav from "./NavComponents/DelarNav";
import UserNav from "./NavComponents/UserNav";



const User = ({allowedRoles}) => {

    const { currentUser } = useContext(Context)

    const topScrollFun = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }
    if (!currentUser)
        return <Navigate to="/login" />

    if (allowedRoles !== currentUser.role)
        return <p>Access Denied </p>

        return (
            <>
                <div className="layout-container">
                    <header>
                        <Topbar />
                        <UserNav />
                    </header>
                    <main>
                        <Outlet />
                    </main>
                    <button onClick={topScrollFun} className="bottom-scrool-btn ">
                        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 20V4M5 11L12 4L19 11" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                    <footer>
                        <Footer />
                    </footer>

                </div>
            </>
        )
}


const Admin = ({ allowedRoles }) => {
    const { currentUser } = useContext(Context)
    if (!currentUser)
        return <Navigate to="/admin/login" />
    
    if (allowedRoles !== currentUser?.role)
        return <p>Access Denied </p>

        return (
            <>
                <header>
                    <Topbar />
                    <AdminNav />
                </header>
                <Outlet />
                <footer>
                    <Footer />
                </footer>
            </>
        )
}





const Delar = ({ allowedRoles }) => {
    const { currentUser } = useContext(Context)
    if (!currentUser)
        return <Navigate to="/delar/login" />

    if (allowedRoles !== currentUser?.role)
        return <p>Access Denied </p>

   
        return (
            <>
                <header>
                    <Topbar />
                    <DelarNav />
                </header>
                <Outlet />
                <footer>
                    <Footer />
                </footer>
            </>
        )
}




export { User, Admin, Delar } 
