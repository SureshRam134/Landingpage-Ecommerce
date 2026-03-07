import { NavLink } from "react-router-dom";
import './cssComponents/Topbar.css'


const Topbar = () => {


    return (
        <>
            <div className="top-container">
                <div className="top-split">
                    <p>Summer Sale For All Swim Suits And Free Express Delivery-OFF 50%! <NavLink className={"shop-link"} to= "">ShopNow</NavLink></p>

                    {/* lang select */}
                    <select name="" id="">
                        <option value="">English</option>
                    </select>

                </div>

            </div>
        </>
    )
}

export default Topbar;