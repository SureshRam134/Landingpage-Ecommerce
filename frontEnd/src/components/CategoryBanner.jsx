import '../style/CategoryBanner.css'
import BannerImg from '../assets/Banner.png'
import BannerBack from '../assets/BlurShadow.png'

const CategoryBanner = () => {


    return (
        <section className="banner-container">
            <div className='banner-content'>
                <p className='sub-title'>Category</p>
                <p className='description'>Enhance Your <br /> Music Experiences</p>
                <div className='time-dates-container'>
                    <div className='date-time-box'>
                        <p className='time-number'>23</p>
                        <p className='time-content'>Hours</p>
                    </div>
                    <div className='date-time-box'>
                        <p className='time-number'>05</p>
                        <p className='time-content'>Days</p>
                    </div>
                    <div className='date-time-box'>
                        <p className='time-number'>59</p>
                        <p className='time-content'>Minutes</p>
                    </div>
                    <div className='date-time-box'>
                        <p className='time-number'>35</p>
                        <p className='time-content'>Seconds</p>
                    </div>
                </div>
                <button>
                    Buy Now!
                </button>
            </div>

            <div className="banner-image">
                <div>
                    <img src={BannerImg} alt="" />
                </div>
            </div>

        </section>
    )
}


export default CategoryBanner;