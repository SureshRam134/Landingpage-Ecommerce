import './cssComponents/TodayProduct.css'
import { useCallback, useRef, useState } from "react";
import ProductBox from "./ProductBox";
import Subnavbar from "./Subnavbar";
import Shirt from '../assets/Product_shirt_Best.png'
import Bag from '../assets/Product_bag_Best.png'
import Speaker from '../assets/Product_speaker_Best.png'
import Table from '../assets/Product_table_Best.png'




const TodayProduct = () => {

    // title
    const titleName = {
        title: "Today's",
        subTitle: "Flash Sales"
    }

    //scroll 

    const scrollRef = useRef(null)
    const leftSlide = useCallback(() => {
        scrollRef.current.scrollLeft -= 200
    }, [scrollRef])

    const rightSlide = useCallback(() => {
        scrollRef.current.scrollLeft += 200
    }, [scrollRef])
    //product
    const [productDetails, setProductDetails] = useState([
        {
            image: Shirt,
            title: "The north coat",
            price: 260,
            lessPrice: 360,
            star: "⭐⭐⭐⭐⭐",
            comments: 65,
        },
        {
            image: Bag,
            title: "Gucci duffle bag",
            price: 960,
            lessPrice: 1160,
            star: "⭐⭐⭐⭐⭐",
            comments: 65,
        },
        {
            image: Speaker,
            title: "RGB liquid CPU Cooler",
            price: 160,
            lessPrice: 170,
            star: "⭐⭐⭐⭐⭐",
            comments: 65,
        },
        {
            image: Table,
            title: "Small Bookself",
            price: 360,
            lessPrice: 20,
            star: "⭐⭐⭐⭐⭐",
            comments: 65,
        },

    ])
    return (
        <>
            <div className="today-product-container">
                <div className="today-product-center">
                    {/* header */}
                    <Subnavbar titleName={titleName} leftSlide={leftSlide} rightSlide={rightSlide} />
                    {/* Product */}
                    <ProductBox productDetails={productDetails} titleName1="Today's" scrollRef={scrollRef} />
                    <button className='today-product-view-all-product'>View All Products</button>
                    <hr />
                </div>
            </div>
        </>
    )
}

export default TodayProduct;