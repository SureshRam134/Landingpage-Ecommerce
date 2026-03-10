import './cssComponents/TodayProduct.css'
import ProductBox from "./ProductBox";
import Subnavbar from "./Subnavbar";
import Shirt from '../assets/Product_shirt_Best.png'
import Bag from '../assets/Product_bag_Best.png'
import Speaker from '../assets/Product_speaker_Best.png'
import Table from '../assets/Product_table_Best.png'
import React, { useState } from 'react';




const TodayProduct = () => {

    // title
    const titleName = {
        title: "Today's",
        subTitle: "Flash Sales"
    }

    //product
    const [productDetails, setProductDetails] = useState([
        {
            image: Shirt,
            title: "The north coat",
            price: 260,
            lessPrice: 360,
            star: 5,
            comments: 65,
        },
        {
            image: Bag,
            title: "Gucci duffle bag",
            price: 960,
            lessPrice: 1160,
            star: 3,
            comments: 65,
        },
        {
            image: Speaker,
            title: "RGB liquid CPU Cooler",
            price: 160,
            lessPrice: 170,
            star: 2,
            comments: 65,
        },
        {
            image: Table,
            title: "Small Bookself",
            price: 360,
            lessPrice: 20,
            star: 3,
            comments: 65,
        },
        {
            image: Table,
            title: "Small Bookself",
            price: 360,
            lessPrice: 20,
            star: 1,
            comments: 65,
        },
        {
            image: Table,
            title: "Small Bookself",
            price: 360,
            lessPrice: 20,
            star: 4,
            comments: 65,
        },
        {
            image: Table,
            title: "Small Bookself",
            price: 360,
            lessPrice: 20,
            star: 2,
            comments: 65,
        },
        {
            image: Table,
            title: "Small Bookself",
            price: 360,
            lessPrice: 20,
            star: 3,
            comments: 65,
        },

    ])


    const start = <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.25" d="M13.9461 6.83189C15.0168 6.022 14.444 4.31533 13.1015 4.31533H10.6724C10.0584 4.31533 9.51615 3.91536 9.33482 3.32884L8.61067 0.98653C8.20403 -0.328787 6.34224 -0.328787 5.93559 0.98653L5.21145 3.32884C5.03012 3.91536 4.48782 4.31533 3.87391 4.31533H1.40274C0.0645511 4.31533 -0.510949 6.01289 0.55135 6.82669L2.66783 8.44808C3.13198 8.80365 3.32627 9.41024 3.15509 9.96932L2.38609 12.4809C1.98729 13.7834 3.4948 14.8305 4.57614 14.0021L6.42174 12.5882C6.9241 12.2034 7.62216 12.2034 8.12452 12.5882L9.95382 13.9896C11.0367 14.8192 12.5457 13.768 12.1428 12.4648L11.3631 9.94286C11.189 9.37991 11.3861 8.76824 11.8561 8.41278L13.9461 6.83189Z" fill="black"/>
</svg>


    const [swiperInstance, setSwiperInstance] = useState(null)

    //slider
    return (
        <>
            <div className="today-product-container container">

                {/* header */}
                <Subnavbar titleName={titleName} swiper= {swiperInstance}/>
                {/* Product */}
                <ProductBox productDetails={productDetails} template="1" setSwiperInstance={setSwiperInstance} />
                <button className='today-product-view-all-product'>View All Products</button>
                <hr />
            </div>
        </>
    )
}

export default TodayProduct;