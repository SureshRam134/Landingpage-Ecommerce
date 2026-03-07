
import { NavLink } from 'react-router-dom';
import './cssComponents/FirstView.css'
import FirstIMg from '../assets/hero1.jpg'
import Apple from '../assets/Apple.png'
import ArrowRight from '../assets/arrow-right.png'
import Group1 from '../assets/Group.png'
import { useState } from 'react';
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
        {
            title: "iphone 14 Series",
            subImg1: Apple,
            VoucherPersentage: "Up to 10%",
            Voucher: "Off Voucher",
            shopBtn: "Shop Now",
            subImg2: ArrowRight,
            img: FirstIMg
        },
    ]

    for (let i = 0; i < slide.length; i++) {
        let grp = Group1
        if (i === 4) {
            alert("max 4 Slide")
            break;
        } else {
            groupBtn.push(grp)
        }
    }





    return (
        <div className="first-view-container">
            <div className="first-view-center">
                <div className="first-view-items">
                    <ul>
                        {
                            items.map((item) => <li><NavLink className={"first-view-link"}>{item}</NavLink></li>)
                        }
                    </ul>
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
                <p></p>
                <div className="first-view-slide">
                    {
                        slide.map((item, index) => (
                            <div className='first-scroller-gap'>
                                <div className='first-view-splits'>
                                    <div key={index} className='first-view-content'>
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
                                        <div className='first-view-group-btn'>
                                            {groupBtn.map((item, index) => <img key={index} src={item} alt="slide Button" />)}
                                        </div>

                                    </div>

                                    <div className='first-view-img'>
                                        <img src={item.img} alt="Mobile Img" />
                                    </div>
                                </div>
                            </div>
                        ))
                    }


                </div>

            </div>

        </div>
    )
}

export default FirstView;