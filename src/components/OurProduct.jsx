import { useCallback, useRef, useState } from "react"
import './cssComponents/OurProduct.css'
import ProductBox from "./ProductBox"
import Subnavbar from "./Subnavbar"
import Chaco from '../assets/ourProduct-chaco.png'
import Laptop from '../assets/ourProductLaptop.png'
import Camera from '../assets/ourProductCam.png'





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
            star: "⭐⭐⭐⭐⭐",
            comments: 65,
        },
        {
            image: Laptop,
            title: "Gucci duffle bag",
            price: 960,
            lessPrice: 1160,
            star: "⭐⭐⭐⭐⭐",
            comments: 65,
        },
        {
            image: Camera,
            title: "RGB liquid CPU Cooler",
            price: 160,
            lessPrice: 170,
            star: "⭐⭐⭐⭐⭐",
            comments: 65,
        },
        {
            image: Camera,
            title: "Small Bookself",
            price: 360,
            lessPrice: 20,
            star: "⭐⭐⭐⭐⭐",
            comments: 65,
        },
        {
            image: Camera,
            title: "Small Bookself",
            price: 360,
            lessPrice: 20,
            star: "⭐⭐⭐⭐⭐",
            comments: 65,
        },
        {
            image: Camera,
            title: "Small Bookself",
            price: 360,
            lessPrice: 20,
            star: "⭐⭐⭐⭐⭐",
            comments: 65,
        },
    ])

    const scrollRef = useRef(null)
    const leftSlide = useCallback(() => {
        alert("yuiiu")
        scrollRef.current.scrollLeft -= 330

    }, [scrollRef])

    const rightSlide = useCallback(() => {
        alert("yuiiu")
        scrollRef.current.scrollLeft += 330
    }, [scrollRef])
    return (
        <>
            <div className="our-product-container container">

                {/* sub nav */}
                <Subnavbar titleName={titleName} />

                {/* our products */}
                <ProductBox productDetails={productDetails} titleName1="Our Products" newProduct="New product" leftSlide={leftSlide} rightSlide={rightSlide} />
                <div className="product-view-button">
                    <button>View All Products</button>
                </div>

            </div>
        </>
    )
}


export default OurProduct;