
import { NavLink } from "react-router-dom";
import Subnavbar from "./Subnavbar";
import './cssComponents/Featured.css'
import FreeDelivery from '../assets/feature-free.png'
import Services from '../assets/feature-services.png'
import Money from '../assets/feature-money.png'


const Featured = () => {
    // title
    const titleName = {
        title: "Featured",
        subTitle: "New Arrival"
    }


    // additional information object
    const informationText = [
        {
            image: FreeDelivery,
            title: "FREE AND FAST DELIVIERY",
            descrpition: "Free delivery for all orers over $140"
        },
        {
            image: Services,
            title: "24/7 CUSTOMER SERVICE",
            descrpition: "friendly 24/7 customer support"
        },
        {
            image: Money,
            title: "MONEY BACK GUARANTEE",
            descrpition: "We reurn money within 30 days"
        },
    ]

    return (

        <>
            <div className="featured-container container">

                {/* subnav */}
                <Subnavbar titleName={titleName} featureTitle="featured" />

                <div className="featured-box">
                    <div className="featured-left-box">
                        <div className="featured-left-centent">
                            <h1>PlayStation 5</h1>
                            <p>Black and White version of the PS5<br /> coming out on sale.</p>
                            <button><NavLink className="feature-nav-link">Shop Now</NavLink></button>

                        </div>
                    </div>
                    <div className="featured-right-box">
                        <div className="right-box-top" >
                            <div className="right-box-top-content">
                                <h1>Women's Collections</h1>
                                <p>Featured woman collections that<br /> give you another vibe</p>
                                <button><NavLink className="feature-nav-link">Shop Now</NavLink></button>
                            </div>
                        </div>
                        <div className="right-box-bottom">

                            <div className="right-box-bottom-left">
                                <div className="bottom-left-content">
                                    <h1>Speakers</h1>
                                    <p>Amazon wireless speakers</p>
                                    <button><NavLink className="feature-nav-link">Shop Now</NavLink></button>
                                </div>
                            </div>
                            <div className="right-box-bottom-right">
                                <div className="bottom-right-content">
                                    <h1>Perfume</h1>
                                    <p>GUCCI INTENSE OUD EDP</p>
                                    <button><NavLink className="feature-nav-link">Shop Now</NavLink></button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="addictional-informatioin">
                    {
                        informationText.map((item, index) => (
                            <div key={index} className="addictional-information-ontent">
                                <img src={item.image} alt="additional info Images" />
                                <h2>{item.title}</h2>
                                <p>{item.descrpition}</p>
                            </div>
                        ))
                    }
                </div>

            </div>
        </>
    )
}



export default Featured;