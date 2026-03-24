import '../style/ProductBox.css'
import { useState } from "react"
import { NavLink } from 'react-router-dom';


const ProductBox = ({ productData = {}, design = {}, template = {}, index = {} }) => {

    const { id, title, price, description, category, image, rating, rate,
        count, star, comments, lessPrice, oldPrice } = productData

    const { cardWidth, cardHeight, imgWidth, imgHeight, imageOutPadding,
        imgInPadding, imgBackground, hSize, pSize, iconButtonWidth,
        iconButtonHeight, iconWidth, iconHeight, offerBtnAdjust, iconBtnAdjust,
        pPadding, hPadding, hHeight
    } = design


    // active state use show (add to cart) button 
    const [active, setActive] = useState(null)
    // handle foucus add to cart
    const handleFocus = (inx) => {
        setActive(inx)
    }
    const handleLeave = () => {
        setActive(null)
    }

    let temp = ""
    let tempNumber = [1, 2, 3, 4, 5]
    const productTemp = tempNumber.find((num) => num === Number(template))
    temp = productTemp



    if (!temp) return alert("No template")
    return (
        <>
            {/* product box container */}
            <div className='product-container' style={{ width: cardWidth, height: cardHeight }}>
                {
                    Number(temp) === 1 ?
                        // scroller useing product
                        <div className='product-box'
                            onMouseEnter={() => { handleFocus(index) }}
                            onMouseLeave={() => (handleLeave())}
                        >

                            <div className='product-image'>
                                <img src={image} alt="Product Image" />
                                {active === index && <button className='add-to-cart'>Add To Cart</button>}
                            </div>

                            <div className='product-icons1'>
                                <p className='offer'>-40%</p>

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


                            <div className='product-bottom-content-box'>
                                <h4>{title}</h4>
                                {category && <p>{category}</p>}
                                <p>${price}<span style={{ textDecoration: "line-through", padding: "0px 0px 0px 10px" }}>${lessPrice || oldPrice}</span></p>
                                <div className='product-Params-button'>
                                    <p>{
                                        Array.from({ length: 5 }, (_, i) => i).map((num) =>
                                            <span>
                                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    < path d="M13.9461 6.83189C15.0168 6.022 14.444 4.31533 13.1015 4.31533H10.6724C10.0584 4.31533 9.51615 3.91536 9.33482 3.32884L8.61067 0.98653C8.20403 -0.328787 6.34224 -0.328787 5.93559 0.98653L5.21145 3.32884C5.03012 3.91536 4.48782 4.31533 3.87391 4.31533H1.40274C0.0645511 4.31533 -0.510949 6.01289 0.55135 6.82669L2.66783 8.44808C3.13198 8.80365 3.32627 9.41024 3.15509 9.96932L2.38609 
                                                                            12.4809C1.98729 13.7834 3.4948 14.8305 4.57614 14.0021L6.42174 12.5882C6.9241 12.2034 7.62216 12.2034 8.12452 12.5882L9.95382 13.9896C11.0367 14.8192 12.5457 
                                                                            13.768 12.1428 12.4648L11.3631 9.94286C11.189 9.37991 11.3861 8.76824 11.8561 8.41278L13.9461 
                                                                            6.83189Z" fill={num + 1 < Math.floor(rating?.rate || star) ? "yellow" : "gray"} />
                                                </svg >
                                            </span>
                                        )
                                    }
                                        <span style={{ padding: "0px 0px 0px 10px" }}>({rating?.count || comments})</span></p>

                                    <button>
                                        <NavLink className={"params-navlink"} to={`/product/:${id}`}>Show Product</NavLink>
                                    </button>
                                </div>

                            </div>
                        </div>
                        :

                        Number(temp) === 2 ?
                            // non scroller
                            <div key={index} className='product-box'>

                                <div className='product-image'>
                                    <img src={image} alt="Product Image" />
                                </div>

                                <div className='product-icons2'>
                                    <button>
                                        <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4.75 0.75C2.5412 0.75 0.75 2.48964 0.75 4.63594C0.75 6.36852 1.45 10.4805 8.3404 
                                                                14.6373C8.46383 14.711 8.60552 14.75 8.75 14.75C8.89448 14.75 9.03617 14.711 9.1596 14.6373C16.05 10.4805 16.75 6.36852 16.75 4.63594C16.75 2.48964 14.9588 0.75 12.75 0.75C10.5412 0.75 8.75 3.10511 8.75 3.10511C8.75 3.10511 6.9588 0.75 4.75 0.75Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </button>
                                    <button>
                                        <svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19.6198 6.712C20.0938 7.332 20.0938 8.169 19.6198 8.788C18.1268 10.737 14.5448 14.75 10.3628 14.75C6.1808 14.75 2.5988 10.737 1.1058 8.788C0.875187 8.49113 0.75 8.12592 0.75 7.75C0.75 7.37408 0.875187 7.00887 1.1058 6.712C2.5988 4.763 6.1808 0.75 10.3628 0.75C14.5448 0.75 18.1268 4.763 19.6198 6.712V6.712Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M10.3628 10.75C12.0196 10.75 13.3628 9.40685 13.3628 7.75C13.3628 6.09315 12.0196 4.75 10.3628 4.75C8.70594 4.75 7.36279 6.09315 7.36279 7.75C7.36279 9.40685 8.70594 10.75 10.3628 10.75Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </button>
                                </div>

                                <div className='product-bottom-content-box'>
                                    <h4>{title}</h4>
                                    <p>${price}<span style={{ textDecoration: "line-through", padding: "0px 0px 0px 10px" }}>${lessPrice || oldPrice}</span>{oldPrice}</p>
                                    <p>{
                                        Array.from({ length: 5 }, (_, i) => i).map((num) =>
                                            <span>
                                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    < path d="M13.9461 6.83189C15.0168 6.022 14.444 4.31533 13.1015 4.31533H10.6724C10.0584 4.31533 9.51615 3.91536 9.33482 3.32884L8.61067 0.98653C8.20403 -0.328787 6.34224 -0.328787 5.93559 0.98653L5.21145 3.32884C5.03012 3.91536 4.48782 4.31533 3.87391 4.31533H1.40274C0.0645511 4.31533 -0.510949 6.01289 0.55135 6.82669L2.66783 8.44808C3.13198 8.80365 3.32627 9.41024 3.15509 9.96932L2.38609 12.4809C1.98729 13.7834 3.4948 14.8305 4.57614 14.0021L6.42174 12.5882C6.9241 12.2034 7.62216 12.2034 8.12452 12.5882L9.95382 13.9896C11.0367 14.8192 12.5457 13.768 12.1428 12.4648L11.3631 9.94286C11.189 9.37991 11.3861 8.76824 11.8561 8.41278L13.9461 
                                                                    6.83189Z" fill={num + 1 <= Math.floor(rating?.rate || star) ? "yellow" : "gray"} />
                                                </svg >
                                            </span>
                                        )
                                    }
                                        <span style={{ padding: "0px 0px 0px 10px" }}>({rating?.count || comments})</span></p>

                                </div>

                            </div> :

                            Number(temp) === 3 ?
                                <div key={index} className='product-box'
                                    onMouseEnter={() => { handleFocus(index) }}
                                    onMouseLeave={() => (handleLeave())}

                                >
                                    <div className='product-image'>
                                        <img src={image} alt="Product Image" />
                                        {active === index && <button className='add-to-cart'>Add To Cart</button>}
                                    </div>

                                    <div className='product-icons1'>
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

                                    <div className='product-bottom-content-box'>
                                        <h4>{title}</h4>
                                        <p>${price}<span className='our-Product-prices' style={{ color: " #DB4444", margin: "0px 5px", textDecoration: "line-through" }}>{oldPrice}</span  >
                                            <span style={{ padding: "0px 0px 0px 10px" }}>
                                                {
                                                    Array.from({ length: 5 }, (_, i) => i).map((num) =>

                                                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            < path d="M13.9461 6.83189C15.0168 6.022 14.444 4.31533 13.1015 4.31533H10.6724C10.0584 4.31533 9.51615 3.91536 9.33482 3.32884L8.61067 0.98653C8.20403 -0.328787 6.34224 -0.328787 5.93559 0.98653L5.21145 3.32884C5.03012 3.91536 4.48782 4.31533 3.87391 4.31533H1.40274C0.0645511 4.31533 -0.510949 6.01289 0.55135 6.82669L2.66783 8.44808C3.13198 8.80365 3.32627 9.41024 3.15509 9.96932L2.38609 12.4809C1.98729 13.7834 3.4948 14.8305 4.57614 14.0021L6.42174 12.5882C6.9241 12.2034 7.62216 12.2034 8.12452 12.5882L9.95382 13.9896C11.0367 14.8192 12.5457 13.768 12.1428 12.4648L11.3631 9.94286C11.189 9.37991 11.3861 8.76824 11.8561 8.41278L13.9461 6.83189Z" fill={num + 1 <= Math.floor(rating?.rate || star) ? "yellow" : "gray"} />
                                                        </svg >

                                                    )
                                                }

                                                <span style={{ padding: "0px 0px 0px 10px" }}> ({rating?.count || comments})</span></span></p>
                                    </div>

                                </div> :

                                Number(temp === 4) ?
                                    <div key={index} className='product-box'
                                        onMouseEnter={() => { handleFocus(index) }}
                                        onMouseLeave={() => (handleLeave())}
                                    >

                                        <div className='product-image' style={{ padding: imageOutPadding, backgroundColor: imgBackground }}>
                                            <img src={image} style={{ width: imgWidth, height: imgHeight, padding: imgInPadding }} alt="Product Image" />
                                        </div>

                                        <div className='product-icons1'>
                                            <p className='offer' style={{ fontSize: pSize, top: offerBtnAdjust, left: offerBtnAdjust, padding: pPadding }}>-40%</p>
                                            <div className='icons' style={{ top: iconBtnAdjust, right: iconBtnAdjust }}>
                                                <button style={{ width: iconButtonWidth, height: iconButtonHeight }}>
                                                    <svg width={iconWidth || "18"} height={iconHeight || "16"} viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M4.75 0.75C2.5412 0.75 0.75 2.48964 0.75 4.63594C0.75 6.36852 1.45 10.4805 8.3404 14.6373C8.46383 14.711 8.60552 14.75 8.75 14.75C8.89448 14.75 9.03617 14.711 9.1596 14.6373C16.05 10.4805 16.75 6.36852 16.75 4.63594C16.75 2.48964 14.9588 0.75 12.75 0.75C10.5412 0.75 8.75 3.10511 8.75 3.10511C8.75 3.10511 6.9588 0.75 4.75 0.75Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                </button>
                                                <button style={{ width: iconButtonWidth, height: iconButtonHeight }}>
                                                    <svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M19.6198 6.712C20.0938 7.332 20.0938 8.169 19.6198 8.788C18.1268 10.737 14.5448 14.75 10.3628 14.75C6.1808 14.75 2.5988 10.737 1.1058 8.788C0.875187 8.49113 0.75 8.12592 0.75 7.75C0.75 7.37408 0.875187 7.00887 1.1058 6.712C2.5988 4.763 6.1808 0.75 10.3628 0.75C14.5448 0.75 18.1268 4.763 19.6198 6.712V6.712Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M10.3628 10.75C12.0196 10.75 13.3628 9.40685 13.3628 7.75C13.3628 6.09315 12.0196 4.75 10.3628 4.75C8.70594 4.75 7.36279 6.09315 7.36279 7.75C7.36279 9.40685 8.70594 10.75 10.3628 10.75Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>


                                        <div className='product-bottom-content-box'>
                                            <h4 style={{ fontSize: hSize, padding: hPadding, height: hHeight }}>{title}</h4>
                                            {category && <p style={{ fontSize: pSize, padding: pPadding }}>{category}</p>}
                                            <p style={{ fontSize: pSize, padding: pPadding }}>${price}<span>${lessPrice || oldPrice}</span></p>
                                            <div className='product-Params-button'>
                                                <p style={{ fontSize: pSize, padding: pPadding }}>{
                                                    Array.from({ length: 5 }, (_, i) => i).map((num) =>
                                                        <span>
                                                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                < path d="M13.9461 6.83189C15.0168 6.022 14.444 4.31533 13.1015 4.31533H10.6724C10.0584 4.31533 9.51615 3.91536 9.33482 3.32884L8.61067 0.98653C8.20403 -0.328787 6.34224 -0.328787 5.93559 0.98653L5.21145 3.32884C5.03012 3.91536 4.48782 4.31533 3.87391 4.31533H1.40274C0.0645511 4.31533 -0.510949 6.01289 0.55135 6.82669L2.66783 8.44808C3.13198 8.80365 3.32627 9.41024 3.15509 9.96932L2.38609 
                                                    12.4809C1.98729 13.7834 3.4948 14.8305 4.57614 14.0021L6.42174 12.5882C6.9241 12.2034 7.62216 12.2034 8.12452 12.5882L9.95382 13.9896C11.0367 14.8192 12.5457 
                                                    13.768 12.1428 12.4648L11.3631 9.94286C11.189 9.37991 11.3861 8.76824 11.8561 8.41278L13.9461 
                                                    6.83189Z" fill={num + 1 < Math.floor(rating?.rate || star) ? "yellow" : "gray"} />
                                                            </svg >
                                                        </span>
                                                    )
                                                }
                                                    <span>({rating?.count || comments})</span></p>
                                                <button>
                                                    <NavLink className={"params-navlink"} to={`/product/:${id}`}>Show Product</NavLink>
                                                </button>
                                            </div>

                                        </div>
                                    </div>

                                    : <h2>No Template</h2>
                }

            </div >












        </>
    )

}


export default ProductBox