import { NavLink } from "react-router-dom";
import '../style/Topbar.css'


const Topbar = () => {


    return (
        <>
            <div className="topbar">
                <div className="top-container container">

                    <p className="p-tag">Summer Sale For All Swim Suits And Free Express Delivery-OFF 50%! <NavLink className={"shop-link"} to="">ShopNow</NavLink></p>

                    {/* lang select */}   
                        <select className="topbar-select" name="" id="">
                            <option value="">English</option>
                        </select>
                    

                </div>

            </div>
        </>
    )
}

export default Topbar;