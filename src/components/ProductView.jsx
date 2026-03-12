import { useParams } from "react-router-dom";
import './cssComponents/ProductView.css'
import { useEffect, useState } from "react";
import Shirt from '../assets/Product_shirt_Best.png'
import Bag from '../assets/Product_bag_Best.png'
import Speaker from '../assets/Product_speaker_Best.png'
import Table from '../assets/Product_table_Best.png'
import ProductBox from "./ProductBox";

const ProductView = () => {
    const{productid} = useParams()

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const fetchFunction =async () => {
        setLoading(true)
        try {
            const response = await fetch("https://fakestoreapi.com/products" )
            if(response.ok) {
                const getData = await response.json()
                setData(getData)
            }
        } 
        catch (error) {
            console.log("server error or internet error:", error);
        }
        finally{
            setLoading(false)
        }
        
    }

    useEffect(() => {
            fetchFunction ()
        },[])

    const [productDetails, setProductDetails] = useState([
            {
                id:"1",
                image: Shirt,
                title: "The north coat",
                price: 260,
                oldPrice: 360,
                star: 5,
                comments: 65,
            },
            {
                id:"2",
                image: Bag,
                title: "Gucci duffle bag",
                price: 960,
                oldPrice: 1160,
                star: 3,
                comments: 65,
            },
            {
                id:"3",
                image: Speaker,
                title: "RGB liquid CPU Cooler",
                price: 160,
                oldPrice: 170,
                star: 2,
                comments: 65,
            },
            {
                id:"4",
                image: Table,
                title: "Small Bookself",
                price: 360,
                oldPrice: 20,
                star: 3,
                comments: 65,
            },
            {
                id:"5",
                image: Table,
                title: "Small Bookself",
                price: 360,
                oldPrice: 20,
                star: 1,
                comments: 65,
            },
            {
                id:"6",
                image: Table,
                title: "Small Bookself",
                price: 360,
                oldPrice: 20,
                star: 4,
                comments: 65,
            },
            {
                id:"7",
                image: Table,
                title: "Small Bookself",
                price: 360,
                oldPrice: 20,
                star: 2,
                comments: 65,
            },
            {
                id:"8",
                image: Table,
                title: "Small Bookself",
                price: 360,
                oldoldPrice: 20,
                star: 3,
                comments: 65,
            },
    
        ])

    // split id data
    const prdtid = productid.split(":")[1]

    const findProduct = data?.filter((item) => item.id === Number(prdtid))
    console.log(findProduct,"fillter");

    const defaultProduct = productDetails.filter((item) => item.id === Number(prdtid))
        
    const design ={
        cardWidth:"80%",cardHeight:"80%",imgWidth:"400px",imgHeight:"400px",imageOutPadding:"15px",
        imgInPadding:"15px",imgBackground:"gray",hSize:"40px",pSize:"25px",iconButtonWidth:"50px",
        iconButtonHeight:"50px",iconWidth:"20px",iconHeight:"20px",offerBtnAdjust:"35px",iconBtnAdjust:"35px",
        hPadding:"20px 0px 0xp 18px", pPadding:"20px 0px 0xp 18px", hHeight:"60px"
    }
 

    if(loading) {
        return (
            <h1 className="loading">Loading...!</h1>
        )
    }
    return(
        <>
            <div className="product-view ">
                <ProductBox productData= {findProduct ? findProduct?.[0]: defaultProduct } design={design}  template="4"/> 
            </div>


        </>
    )
}


export default ProductView;