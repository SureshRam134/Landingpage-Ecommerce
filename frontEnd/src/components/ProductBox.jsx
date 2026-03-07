import { useState } from 'react';
import './cssComponents/ProductBox.css'


const ProductBox = ({ productDetails, titleName1, scrollRef}) => {

    // active state use show (add to cart) button 
    const [active, setActive] = useState(null)
    // handle foucus add to cart
    const handleFocus = (inx) => {
        setActive(inx)
    }

    

    return (
        <>
            {/* product box container */}
            <div className='product-container'>
                <div className='scroll-product'>
                    <div ref={scrollRef} className={titleName1 === "Our Products" ? 'product-box-controler1' : 'product-box-controler2'} >
                        {/* main product box create multi box using map methods */}
                        {
                            productDetails.map((item, index) => (
                                <div key={index} className='product-box'
                                    onMouseEnter={() => { handleFocus(index) }}
                                    onBlur={() => (setActive(null))}

                                >
                                    <div className='product-content-image-control'>
                                        <div className='product-top-image-box'>
                                            <div className='product-image'>
                                                <img src={item.image} alt="Product Image" />
                                                {titleName1 && active === index && <button className='add-to-cart'>Add To Cart</button>}
                                            </div>
                                            {
                                                titleName1 === "Today's" || "Our Products" ?
                                                    <div className='product-icons1'>
                                                        {titleName1 === "Today's" &&
                                                            <div className='offer'>
                                                                <p>-40%</p>
                                                            </div>}
                                                        <div className='icons'>
                                                            <button>
                                                                <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M4.75 0.75C2.5412 0.75 0.75 2.48964 0.75 4.63594C0.75 6.36852 1.45 10.4805 8.3404 14.6373C8.46383 14.711 8.60552 14.75 8.75 14.75C8.89448 14.75 9.03617 14.711 9.1596 14.6373C16.05 10.4805 16.75 6.36852 16.75 4.63594C16.75 2.48964 14.9588 0.75 12.75 0.75C10.5412 0.75 8.75 3.10511 8.75 3.10511C8.75 3.10511 6.9588 0.75 4.75 0.75Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                                </svg>
                                                            </button>
                                                            <button>
                                                                <svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M19.6198 6.712C20.0938 7.332 20.0938 8.169 19.6198 8.788C18.1268 10.737 14.5448 14.75 10.3628 14.75C6.1808 14.75 2.5988 10.737 1.1058 8.788C0.875187 8.49113 0.75 8.12592 0.75 7.75C0.75 7.37408 0.875187 7.00887 1.1058 6.712C2.5988 4.763 6.1808 0.75 10.3628 0.75C14.5448 0.75 18.1268 4.763 19.6198 6.712V6.712Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                                    <path d="M10.3628 10.75C12.0196 10.75 13.3628 9.40685 13.3628 7.75C13.3628 6.09315 12.0196 4.75 10.3628 4.75C8.70594 4.75 7.36279 6.09315 7.36279 7.75C7.36279 9.40685 8.70594 10.75 10.3628 10.75Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                                </svg>
                                                            </button>
                                                        </div>
                                                    </div>
                                                    :
                                                    <div className='product-icons2'>
                                                        <button>
                                                            <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M4.75 0.75C2.5412 0.75 0.75 2.48964 0.75 4.63594C0.75 6.36852 1.45 10.4805 8.3404 14.6373C8.46383 14.711 8.60552 14.75 8.75 14.75C8.89448 14.75 9.03617 14.711 9.1596 14.6373C16.05 10.4805 16.75 6.36852 16.75 4.63594C16.75 2.48964 14.9588 0.75 12.75 0.75C10.5412 0.75 8.75 3.10511 8.75 3.10511C8.75 3.10511 6.9588 0.75 4.75 0.75Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                            </svg>
                                                        </button>
                                                        <button>
                                                            <svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M19.6198 6.712C20.0938 7.332 20.0938 8.169 19.6198 8.788C18.1268 10.737 14.5448 14.75 10.3628 14.75C6.1808 14.75 2.5988 10.737 1.1058 8.788C0.875187 8.49113 0.75 8.12592 0.75 7.75C0.75 7.37408 0.875187 7.00887 1.1058 6.712C2.5988 4.763 6.1808 0.75 10.3628 0.75C14.5448 0.75 18.1268 4.763 19.6198 6.712V6.712Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                                <path d="M10.3628 10.75C12.0196 10.75 13.3628 9.40685 13.3628 7.75C13.3628 6.09315 12.0196 4.75 10.3628 4.75C8.70594 4.75 7.36279 6.09315 7.36279 7.75C7.36279 9.40685 8.70594 10.75 10.3628 10.75Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                            </svg>
                                                        </button>
                                                    </div>
                                            }
                                        </div>

                                        {titleName1 === "Our Products" ?
                                            <div className='product-bottom-content-box'>
                                                <h4>{item.title}</h4>
                                                <h5><span className='our-Product-prices' style={{ color: " #DB4444" }}>${item.price}</span>{item.star}<span>({item.comments})</span></h5>

                                            </div>
                                            :
                                            <div className='product-bottom-content-box'>
                                                <h4>{item.title}</h4>
                                                <p>${item.price}<span>${item.lessPrice}</span></p>
                                                <h5>{item.star}<span>({item.comments})</span></h5>

                                            </div>}

                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )

}


export default ProductBox