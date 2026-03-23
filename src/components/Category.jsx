
import '../style/Category.css'
import Subnavbar from './Subnavbar';
import Mobile from '../assets/CellPhone.png'
import Camera from '../assets/Camera.png'
import Computer from '../assets/Computer.png'
import Gamepad from '../assets/Gamepad.png'
import Headphone from '../assets/Headphone.png'
import SmartWatch from '../assets/SmartWatch.png'


//slider
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { useState } from 'react';



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

    const [swiperInstance, setSwiperInstance] = useState(null) 

    return (
        <div className="category-container container">

            {/* title container */}
            <Subnavbar titleName={titleName} swiper={swiperInstance} />
            <div className="category-slides">

                <Swiper
                    onSwiper={setSwiperInstance}
                    slidesPerView={6}
                    centeredSlides={false}
                    spaceBetween={10}
                    navigation={false}
                    modules={[Pagination, Navigation]}
                    className="mySwiper category-swiper"
                >
                    {
                        category.map((item, index) => (
                            // slider content
                            <SwiperSlide>
                                <div key={index} className="category-slide">
                                    <div className='category-box-content'>
                                        <img src={item.image} alt="" />
                                        <h3>{item.title}</h3>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }

                </Swiper>
            </div>


            <hr className='hr-line' />

        </div>

    )
}

export default Category;