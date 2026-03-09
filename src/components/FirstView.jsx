import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

import { NavLink } from 'react-router-dom';
import './cssComponents/FirstView.css'
import FirstIMg from '../assets/hero1.jpg'
import Apple from '../assets/Apple.png'
import ArrowRight from '../assets/arrow-right.png'
import Group1 from '../assets/Group.png'




const FirstView = () => {

    const items = ["Woman's Fashion", "Men's Fashion", "Electronics", "Home & Lifestyle", "Medicne", "Sport & Outdoor",
        "Baby's & Toys", "Groceries & Pets", "Health & Beauty"

    ]


    const [openNav, setOpenNav] = useState(false)

    const navStyleOpen = {
        transform: "translateX(0px)",
    }
    const navStyleClose = {
        transform: "translateX(-174px)",
    }



    // slide arr in object
    const groupBtn = []
    const slide = [
        {
            title: "iphone 14 Series",
            subImg1: Apple,
            VoucherPersentage: "Up to 10%",
            Voucher: "Off Voucher",
            shopBtn: "Shop Now",
            subImg2: ArrowRight,
            img: FirstIMg,
            slide: groupBtn
        },

    ]

    for (let i = 0; i < slide.length; i++) {
        let grp = Group1
        if (i === 5) {
            alert("max 5 Slide")
            break;
        } else {
            groupBtn.push(grp)
        }
    }





    return (
        <div className="first-view-container">
            <div className="first-view-center">
                <div className="first-view-items">
                    <div className='nav-items-split'>
                        <ul>
                            {
                                items.map((item) => <li><NavLink className={"first-view-link"}>{item}</NavLink></li>)
                            }
                        </ul>
                        <p>dfd</p>

                    </div>
                </div>

                <div className="first-mobile-nav" style={openNav ? navStyleOpen : navStyleClose}>
                    <ul>
                        {
                            items.map((item) => <li><NavLink className={"first-view-link"}>{item}</NavLink></li>)
                        }
                    </ul>
                    <button
                        onClick={() => setOpenNav(!openNav)}
                    >
                        {!openNav ? "OP" : "Cl"}
                    </button>
                </div>
                {/* slider*/}
                <div className='first-view-slider'>
                    <div className="first-view-slides">

                        <Swiper
                            pagination={{
                                dynamicBullets: true,
                            }}
                            modules={[Pagination]}
                            className="mySwiper"
                        >

                            {/* {
                                slide.map((item, index) => ( */}
                            <div className='first-view-slide'>
                                <div className='first-view-splits'>
                                    <div className='first-view-content'>
                                        <div className='first-view-text1'>
                                            <img src={Apple} alt="Apple img" />
                                            <h1>fhjwiv</h1>
                                        </div>
                                        <div className='first-view-text2'>
                                            <h3>djkjdwbv</h3>
                                            <h3>jdwivdwiuvb</h3>
                                        </div>
                                        <div className='first-view-text3'>
                                            <button>nkdwvkdbv</button>
                                            <img src={ArrowRight} alt="Arrow Right" />
                                        </div>
                                        <div className='first-view-group-btn'>
                                            {groupBtn.map((item, index) => <img key={index} src={item} alt="slide Button" />)}
                                        </div>

                                    </div>

                                    <div className='first-view-img'>
                                        <img src={FirstIMg} alt="Mobile Img" />
                                    </div>
                                </div>
                            </div>
                            {/* ))
                            } */}
                        </Swiper>


                    </div>
                </div>

            </div>

        </div>
    )
}

export default FirstView;