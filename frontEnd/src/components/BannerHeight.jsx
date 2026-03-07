import { NavLink } from "react-router-dom"
import './cssComponents/BannerHeight.css'


const BannerHeight = () => {

    return (

        <>
            <div className="banner-height-container">
                <div className="banner-height-content">
                    <h2>{ }</h2>
                    <p>{ }</p>
                    <button><NavLink>{ }</NavLink></button>
                </div>
            </div>
        </>
    )
}

const BannerLength = () => {
    return (
        <>
            <div className="banner-lenght-container">
                <div className="banner-lenght-content">
                    <h1>content</h1>
                </div>
                <div className="banner-lenght-image">
                    <p>image ref</p>
                </div>
            </div>
        </>
    )
}


export   {BannerHeight , BannerLength}