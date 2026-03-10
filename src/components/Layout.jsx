import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Home from "./Home";
import Navbar from "./Navbar"
import Topbar from "./Topbar"
import './cssComponents/Layout.css'
import { useRef } from "react";


const Layout = () => {

    const  topScroll =  useRef(null)
    const topscroll = () => {
        topScroll.current.scrollTop =- 500
    }

    return (
        <>
            <div ref={topScroll} className="lolayout-container">
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
                    <button onClick={topscroll}>
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