import './cssComponents/items.css'

const Card = ({ design = {}, data = {} }) => {

    const { cardWidth, cardHeight, imgWidth, imgHeight, imageOutPadding,
        imgInPadding, imgBackground, hSize, pSize, iconButtonWidth,
        iconButtonHeight, iconWidth, iconHeight, offerBtnAdjust, iconBtnAdjust,
        pPadding, hPadding
    } = design

    const { title, price, oldPrice, rating, reviews, image, star, comments,category } = data || {}



    return (
        <div className='card-container' style={{ width: cardWidth, height: cardHeight }}>
            <div className='image-box' style={{ margin: imageOutPadding , borderRadius: "5px"}}>
                <img src={image} alt="image" style={{ width: imgWidth, height: imgHeight, padding: imgInPadding, backgroundColor: imgBackground , borderRadius: "5px"}} />
            </div>

            <div className='icon-offer'>
                <p style={{ fontSize: pSize, top: offerBtnAdjust, left: offerBtnAdjust }}>-40%</p>
                <div className='icon' style={{ top: iconBtnAdjust, right: iconBtnAdjust }}>
                    <button style={{ width: iconButtonWidth, height: iconButtonHeight }}>
                        <svg width={iconWidth || "18"} height={iconHeight || "16"} viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.75 0.75C2.5412 0.75 0.75 2.48964 0.75 4.63594C0.75 6.36852 1.45 10.4805 8.3404 14.6373C8.46383 14.711 8.60552 14.75 8.75 14.75C8.89448 14.75 9.03617 14.711 9.1596 14.6373C16.05 10.4805 16.75 6.36852 16.75 4.63594C16.75 2.48964 14.9588 0.75 12.75 0.75C10.5412 0.75 8.75 3.10511 8.75 3.10511C8.75 3.10511 6.9588 0.75 4.75 0.75Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                    <button style={{ width: iconButtonWidth, height: iconButtonHeight }}>
                        <svg width={iconWidth || "21"} height={iconWidth || "16"} viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.6198 6.712C20.0938 7.332 20.0938 8.169 19.6198 8.788C18.1268 10.737 14.5448 14.75 10.3628 14.75C6.1808 14.75 2.5988 10.737 1.1058 8.788C0.875187 8.49113 0.75 8.12592 0.75 7.75C0.75 7.37408 0.875187 7.00887 1.1058 6.712C2.5988 4.763 6.1808 0.75 10.3628 0.75C14.5448 0.75 18.1268 4.763 19.6198 6.712V6.712Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M10.3628 10.75C12.0196 10.75 13.3628 9.40685 13.3628 7.75C13.3628 6.09315 12.0196 4.75 10.3628 4.75C8.70594 4.75 7.36279 6.09315 7.36279 7.75C7.36279 9.40685 8.70594 10.75 10.3628 10.75Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>


            <div className='content-box'>
                <h1 className='content-title' style={{ fontSize: hSize , padding: "20px 0px 0xp 30px"}}>{title}</h1>
                <p className='content-price' style={{ fontSize: pSize, padding: "20px 0px 0xp 30px" }}>{category}</p>
                <p className='content-price' style={{ fontSize: pSize, padding: "20px 0px 0xp 30px"}}>${price}<span>${oldPrice}</span></p>
                <p className='content-star' style={{ fontSize: pSize, padding: "20px 0px 0xp 30px"}}>{
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
                    <span style={{ textDecoration: "none" }}>({rating?.count || comments})</span></p>
            </div>
        </div>
    )
}

export default Card;