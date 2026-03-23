import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar"
import Topbar from "./Topbar"
import '../style/Layout.css'



const Layout = ({ user }) => {

    console.log(user,1);
    
    const topScrollFun = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }

    if (user.role == 1){
        return (
            <>
                <div className="layout-container">
                    {/* header */}
                    <header>
                        <Topbar />
                        <Navbar />
                    </header>
                    {/* main */}
                    <main>
                        <Outlet />
                    </main>
                    {/* footer */}
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

    return(
        <>
            404
        </>
    )
}


const Admin = ({ user }) => {

    console.log(user,2);
    if (user.role == 2){
        return (
            <>
                <header>Header</header>
                <Outlet />
                <footer>
                    Footer
                </footer>
            </>
        )
    }
    return (
        <p>Please login user</p>
    )
}


const Delar = ({ user }) => {
    console.log(user,3);
    if (user.role == 3) {
        return (
            <>
                <header>Header</header>
                <Outlet />
                <footer>
                    Footer
                </footer>
            </>
        )
    }
    return (
        <p>Please login user</p>
    )
}

export { Layout, Admin, Delar } 
