import { useCallback, useRef, useState } from "react"
import '../style/OurProduct.css'
import ProductBox from "./ProductBox"
import Subnavbar from "./Subnavbar"
import Chaco from '../assets/ourProduct-chaco.png'
import Laptop from '../assets/ourProductLaptop.png'
import Camera from '../assets/ourProductCam.png'
// slider
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';





const OurProduct = () => {

    // title
    const titleName = {
        title: "Our Products",
        subTitle: "Explore Our Products"
    }


    // product details
    const [productDetails, setProductDetails] = useState([
        {
            image: Chaco,
            title: "The north coat",
            price: 260,
            lessPrice: 360,
            star: 2,
            comments: 65,
        },
        {
            image: Laptop,
            title: "Gucci duffle bag",
            price: 960,
            lessPrice: 1160,
            star: 4,
            comments: 65,
        },
        {
            image: Camera,
            title: "RGB liquid CPU Cooler",
            price: 160,
            lessPrice: 170,
            star: 3,
            comments: 65,
        },
        {
            image: Camera,
            title: "Small Bookself",
            price: 360,
            lessPrice: 20,
            star: 2,
            comments: 65,
        },
        {
            image: Camera,
            title: "Small Bookself",
            price: 360,
            lessPrice: 20,
            star: 5,
            comments: 65,
        },
        {
            image: Camera,
            title: "Small Bookself",
            price: 360,
            lessPrice: 20,
            star: 4,
            comments: 65,
        },
    ])

//slider state
const [swiperInstance, setSwiperInstance] = useState(null)

    return (
        <>
            <div className="our-product-container container">

                {/* sub nav */}
                <Subnavbar titleName={titleName} swiper= {swiperInstance}/>

                {/* our products */}
                <Swiper
                    onSwiper={setSwiperInstance}
                    slidesPerView={4}
                    centeredSlides={false}
                    spaceBetween={35}
                    navigation={false}
                    modules={[Pagination, Navigation]}
                    className="product-swiper"
                >
                    {productDetails.map((item, index) => (
                        <SwiperSlide>
                            <ProductBox  productData= {item} index = {index}  template="3"/>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="product-view-button">
                    <button>View All Products</button>
                </div>

            </div>
        </>
    )
}


export default OurProduct;