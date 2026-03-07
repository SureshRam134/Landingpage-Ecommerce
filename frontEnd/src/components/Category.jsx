import { useCallback, useRef, useState } from 'react';
import './cssComponents/Category.css'
import Subnavbar from './Subnavbar';
import Mobile from '../assets/CellPhone.png'
import Camera from '../assets/Camera.png'
import Computer from '../assets/Computer.png'
import Gamepad from '../assets/Gamepad.png'
import Headphone from '../assets/Headphone.png'
import SmartWatch from '../assets/SmartWatch.png'



const Category = () => {

    // title
    const titleName = {
        title: "Category",
        subTitle: "Browse By Category"
    }


    const [category, setCategory] = useState([
        {
            image: Mobile,
            title: "Phones"
        },
        {
            image: Computer,
            title: "Computer"
        },
        {
            image: SmartWatch,
            title: "SmartWatch"
        },
        {
            image: Camera,
            title: "Camera"
        },
        {
            image: Headphone,
            title: "Headphone"
        },
        {
            image: Gamepad,
            title: "Gamepad"
        },
        {
            image: Gamepad,
            title: "Gamepad"
        },
        {
            image: Gamepad,
            title: "Gamepad"
        },
        {
            image: Gamepad,
            title: "Gamepad"
        },
    ])

    //slide 
    const refSlider = useRef(null)
    const leftSlide = useCallback(() => {
        refSlider.current.scrollLeft -= 200
    }, [refSlider])

    const rightSlide = useCallback(() => {
        refSlider.current.scrollLeft += 200
    }, [refSlider])

    return (
        <div className="category-container">
            <div className="category-center">
                {/* title container */}
                <Subnavbar titleName={titleName} leftSlide={leftSlide} rightSlide={rightSlide} />
                <div className="category-slider" ref={refSlider}>
                    <div className="category-slides">
                        {
                            category.map((item, index) => (
                                // slider content
                                <div key={index} className="category-slide">
                                    <div className='category-box-content'>
                                        <img src={item.image} alt="" />
                                        <h3>{item.title}</h3>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>

                <hr className='hr-line' />
            </div>
        </div>

    )
}

export default Category;