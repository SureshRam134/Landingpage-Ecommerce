import { useState } from "react"
import ProductBox from "./ProductBox"
import Subnavbar from "./Subnavbar"
import './cssComponents/SellingProduct.css'
import Shirt from '../assets/Product_shirt_Best.png'
import Bag from '../assets/Product_bag_Best.png'
import Speaker from '../assets/Product_speaker_Best.png'
import Table from '../assets/Product_table_Best.png'
import CategoryBanner from "./CategoryBanner"


const SellingProduct = () => {

    // title
    const titleName = {
        title: "This Month",
        subTitle: "Best Selling Products"
    }

    // product details
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
            <div className="selling-product-container container">
                <Subnavbar titleName={titleName} />
                <ProductBox productDetails={productDetails} />
                {/* banner */}
                <CategoryBanner />
            </div>
        </>
    )
}


export default SellingProduct;