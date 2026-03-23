
import '../style/SecondView.css'
import Left from '../assets/Left-Arrow.png'
import Product1 from '../assets/product1.png'
import star from '../assets/start.png'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'






const SecondView = () => {

    // cart button show and hidden
    const [cartBtn, setCartBtn] = useState(false)
    const cartShow = {
        display: "block"
    }
    const cartHidden = {
        display: "none"
    }


    const [flashSales, setFlashSales] = useState([
        {
            offer: "40",
            image: Product1,
            title: "HAVIT HV-G92 Gamepad",
            price: "120",
            lessPrice: "160",
            reviews: "⭐⭐⭐⭐⭐",
            comments: "88"

        },
        {
            offer: "40",
            image: Product1,
            title: "HAVIT HV-G92 Gamepad",
            price: "120",
            lessPrice: "160",
            reviews: "⭐⭐⭐⭐⭐",
            comments: "88"

        },
        {
            offer: "40",
            image: Product1,
            title: "HAVIT HV-G92 Gamepad",
            price: "120",
            lessPrice: "160",
            reviews: "⭐⭐⭐⭐⭐",
            comments: "88"

        },
        {
            offer: "40",
            image: Product1,
            title: "HAVIT HV-G92 Gamepad",
            price: "120",
            lessPrice: "160",
            reviews: "⭐⭐⭐⭐⭐",
            comments: "88"

        },
        {
            offer: "40",
            image: Product1,
            title: "HAVIT HV-G92 Gamepad",
            price: "120",
            lessPrice: "160",
            reviews: "⭐⭐⭐⭐⭐",
            comments: "88"

        },
        {
            offer: "40",
            image: Product1,
            title: "HAVIT HV-G92 Gamepad",
            price: "120",
            lessPrice: "160",
            reviews: "⭐⭐⭐⭐⭐",
            comments: "88"

        },
        {
            offer: "40",
            image: Product1,
            title: "HAVIT HV-G92 Gamepad",
            price: "120",
            lessPrice: "160",
            reviews: "⭐⭐⭐⭐⭐",
            comments: "88"

        },
        {
            offer: "40",
            image: Product1,
            title: "HAVIT HV-G92 Gamepad",
            price: "120",
            lessPrice: "160",
            reviews: "⭐⭐⭐⭐⭐",
            comments: "88"

        },
        {
            offer: "40",
            image: Product1,
            title: "HAVIT HV-G92 Gamepad",
            price: "120",
            lessPrice: "160",
            reviews: "⭐⭐⭐⭐⭐",
            comments: "88"

        },
        {
            offer: "40",
            image: Product1,
            title: "HAVIT HV-G92 Gamepad",
            price: "120",
            lessPrice: "160",
            reviews: "⭐⭐⭐⭐⭐",
            comments: "88"

        },
        {
            offer: "40",
            image: Product1,
            title: "HAVIT HV-G92 Gamepad",
            price: "120",
            lessPrice: "160",
            reviews: "⭐⭐⭐⭐⭐",
            comments: "88"

        },
        {
            offer: "40",
            image: Product1,
            title: "HAVIT HV-G92 Gamepad",
            price: "120",
            lessPrice: "160",
            reviews: "⭐⭐⭐⭐⭐",
            comments: "88"

        },
        {
            offer: "40",
            image: Product1,
            title: "HAVIT HV-G92 Gamepad",
            price: "120",
            lessPrice: "160",
            reviews: "⭐⭐⭐⭐⭐",
            comments: "88"

        },
        {
            offer: "40",
            image: Product1,
            title: "HAVIT HV-G92 Gamepad",
            price: "120",
            lessPrice: "160",
            reviews: "⭐⭐⭐⭐⭐",
            comments: "88"

        },
        {
            offer: "40",
            image: Product1,
            title: "HAVIT HV-G92 Gamepad",
            price: "120",
            lessPrice: "160",
            reviews: "⭐⭐⭐⭐⭐",
            comments: "88"

        },
        
    ])


    const cardButtonFun = () => {
        setCartBtn(!cartBtn)
    }



    return (
        <>
            <div className="second-container">
                <div className="second-center">
                    <header className="second-header">
                        <div className='second-title'>
                            <div className='second-title-box'>
                                <h3><span></span> Today's</h3>
                                <h1>Flash Sales</h1>
                            </div>
                            <div className="second-date-display">
                                <div className="second-date-show">
                                    <div className="second-days">
                                        <h5>Days <span>03</span></h5>
                                        <p>:</p>
                                        <h5>Hours <span>23</span></h5>
                                        <p>:</p>
                                        <h5>Minutes <span>45</span></h5>
                                        <p>:</p>
                                        <h5>Seconds <span>23</span></h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="second-slide">
                            <button><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.5 12H20M20 12L13 5M20 12L13 19" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            </button>
                            <button><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11 5L4 12L11 19M4 12H20" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            </button>
                        </div>
                    </header>

                    <div className="second-slider">
                        <div className="second-slides">
                            {
                                flashSales.map((item, index) => (
                                    <div className="second-slide-box"
                                        onClick={cardButtonFun}
                                    >
                                        {/* card display show */}
                                        <div className='second-img-box'>
                                            <img src={item.image} alt="" />
                                            <div className='second-offer-box'>
                                                <div className='second-offer-show'>
                                                    <p>-{item.offer}%</p>
                                                </div>
                                                <div className='second-like-button'>
                                                    <button><svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M4.75 0.75C2.5412 0.75 0.75 2.48964 0.75 4.63594C0.75 6.36852 1.45 10.4805 8.3404 14.6373C8.46383 14.711 8.60552 14.75 8.75 14.75C8.89448 14.75 9.03617 14.711 9.1596 14.6373C16.05 10.4805 16.75 6.36852 16.75 4.63594C16.75 2.48964 14.9588 0.75 12.75 0.75C10.5412 0.75 8.75 3.10511 8.75 3.10511C8.75 3.10511 6.9588 0.75 4.75 0.75Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                    </button>
                                                    <button><svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M19.6198 6.712C20.0938 7.332 20.0938 8.169 19.6198 8.788C18.1268 10.737 14.5448 14.75 10.3628 14.75C6.1808 14.75 2.5988 10.737 1.1058 8.788C0.875187 8.49113 0.75 8.12592 0.75 7.75C0.75 7.37408 0.875187 7.00887 1.1058 6.712C2.5988 4.763 6.1808 0.75 10.3628 0.75C14.5448 0.75 18.1268 4.763 19.6198 6.712V6.712Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M10.3628 10.75C12.0196 10.75 13.3628 9.40685 13.3628 7.75C13.3628 6.09315 12.0196 4.75 10.3628 4.75C8.70594 4.75 7.36279 6.09315 7.36279 7.75C7.36279 9.40685 8.70594 10.75 10.3628 10.75Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        {/* cart button */}
                                        <div className='second-cart-button' style={cartBtn ? cartShow : cartHidden}>
                                            <NavLink className="second-cart-Navbutton">Add To Cart</NavLink>
                                        </div>

                                        {/* card details show */}
                                        <div className='second-slide-content'>
                                            <h2 >{item.title}</h2>
                                            <p>${item.price}<span>&{item.lessPrice}</span></p>
                                            <p className='second-star'>{item.reviews}
                                                <span>({item.comments})</span> </p>
                                        </div>
                                    </div>
                                ))
                            }

                        </div>
                            <div className='second-all-product'>
                                <button><NavLink className="second-product-navbtn" to={'#'}>View All Product</NavLink></button>
                                <hr />
                            </div>
                    </div>

                    <div>

                    </div>



                </div>

            </div>
        </>
    )
}


export default SecondView;