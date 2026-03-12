import './cssComponents/TodayProduct.css'
import ProductBox from "./ProductBox";
import Subnavbar from "./Subnavbar";
import Shirt from '../assets/Product_shirt_Best.png'
import Bag from '../assets/Product_bag_Best.png'
import Speaker from '../assets/Product_speaker_Best.png'
import Table from '../assets/Product_table_Best.png'
import {useEffect, useState } from 'react';
// slider
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';




const TodayProduct = () => {


    // title
    const titleName = {
        title: "Today's",
        subTitle: "Flash Sales"
    }
    


    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const fetchFunction =async () => {
        setLoading(true)
        try {
            const response = await fetch("https://fakestoreapi.com/products" )
            console.log(typeof(response),"123");
            
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
 

    //product
    
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
            oldPrice: 20,
            star: 3,
            comments: 65,
        },

    ])



//slider state
const [swiperInstance, setSwiperInstance] = useState(null)
    

if(loading) {
    return <h1 className='loading'>Loading...!</h1>
}
return (
        <>
            
            <div className="today-product-container container">

              
                <Subnavbar titleName={titleName} swiper= {swiperInstance}/>
               

                
                   { 
                    data  ?
                    <Swiper
                    onSwiper={setSwiperInstance}
                    slidesPerView={4}
                    centeredSlides={false}
                    spaceBetween={35}
                    navigation={false}
                    modules={[Pagination, Navigation]}
                    className="product-swiper"
                >
                    {
                    data?.map((item, index) => (
                        <SwiperSlide>
                            <ProductBox  productData= {item} index = {index}  template="1"/>
                        </SwiperSlide>
                    ))}
                </Swiper>: <p>Server error</p>}
                <button className='today-product-view-all-product'>View All Products</button>
                <hr />
                
            
            
            </div>
            
        </>
    )
}

export default TodayProduct;