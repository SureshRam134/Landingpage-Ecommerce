import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Home from "./Home";
import Navbar from "./Navbar"
import Topbar from "./Topbar"
import './cssComponents/Layout.css'


const Layout = () => {


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
                    <Outlet/>
                </main>
                {/* footer */}

                <div className="bottom-scrool-btn">
                    <button>
                        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 20V4M5 11L12 4L19 11" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                    </button>
                </div>
                <footer>
                    <Footer />
                </footer>

            </div>
        </>
    )
}

export default Layout;