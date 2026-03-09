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
import RightImg from '../assets/hero1.jpg'
import Apples from '../assets/apples.png'
import ArrowRight from '../assets/arrow-right.png'




const FirstView = () => {

    const items = ["Woman's Fashion", "Men's Fashion", "Electronics", "Home & Lifestyle", "Medicne", "Sport & Outdoor",
        "Baby's & Toys", "Groceries & Pets", "Health & Beauty"

    ]



    // slide arr in object
    const slide = [
        {
            title: "iphone 14 Series",
            subImg1: Apples,
            VoucherPersentage: "Up to 10%",
            Voucher: "Off Voucher",
            shopBtn: "Shop Now",
            subImg2: ArrowRight,
            img: RightImg,
        },
        {
            title: "iphone 14 Series",
            subImg1: Apples,
            VoucherPersentage: "Up to 10%",
            Voucher: "Off Voucher",
            shopBtn: "Shop Now",
            subImg2: ArrowRight,
            img: RightImg,
        },
        {
            title: "iphone 14 Series",
            subImg1: Apples,
            VoucherPersentage: "Up to 10%",
            Voucher: "Off Voucher",
            shopBtn: "Shop Now",
            subImg2: ArrowRight,
            img: RightImg,
        },

    ]

    return (
        <div className="first-view-container ">

            <div className='nav-items'>
                <ul>
                    {
                        items.map((item) => <li><NavLink className={"first-view-link"}>{item}</NavLink></li>)
                    }
                </ul>
            </div>


            {/* slider*/}


            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >

                {
                    slide.map((item, index) => (
                        <SwiperSlide>
                            <div key={index} className='first-view-slide'>
                                <div className='first-view-content'>
                                    <div className='first-view-text1'>
                                        <img src={item.subImg1} alt="Apple img" />
                                        <h1>{item.title}</h1>
                                    </div>
                                    <div className='first-view-text2'>
                                        <h3>{item.VoucherPersentage}</h3>
                                        <h3>{item.Voucher}</h3>
                                    </div>
                                    <div className='first-view-text3'>
                                        <button>{item.shopBtn}</button>
                                        <img src={item.subImg2} alt="Arrow Right" />
                                    </div>

                                </div>

                                <div className='first-view-img'>
                                 
                                    <img src={item.img} alt="Mobile Img" />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>


        </div>

    )
}

export default FirstView;