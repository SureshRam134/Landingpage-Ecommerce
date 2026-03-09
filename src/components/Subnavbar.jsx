
import './cssComponents/Subnavbar.css'

const Subnavbar = ({ titleName, leftSlide, rightSlide, featureTitle }) => {

    return (
        <>
            <div className='subnav-header-box container'>
                <h1><span></span> {titleName.title}</h1>
                <div className="subnav-sub-title">

                    {/* sub title */}
                    {
                        titleName.title === "Today's" ?
                            <div className='sub-title-controler'>
                                <h2>{titleName.subTitle}</h2>
                                {/* day offers shower */}
                                <div className="sub-date-display">
                                    <div className="sub-days">
                                        <div className='sub-days-hours'>
                                            <h5>Days</h5>
                                            <p className='sub-num'>03</p>
                                        </div>
                                        <p className='sun-col'>:</p>

                                        <div className='sub-days-hours'>
                                            <h5>Hours</h5>
                                            <p className='sub-num'>23</p>
                                        </div>
                                        <p className='sun-col'>:</p>

                                        <div className='sub-days-hours'>
                                            <h5>Minutes</h5>
                                            <p className='sub-num'>45</p>
                                        </div>
                                        <p className='sun-col'>:</p>
                                        <div className='sub-days-hours'>
                                            <h5>Seconds </h5>
                                            <p className='sub-num'>23</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            :
                            <h2>{titleName.subTitle}</h2>
                    }

                    {/* slider btn */}
                    <div className="subnav-slide-btn">
                        {
                            titleName.title === "This Month" ?
                                <button className='sub-allproduct'> View All</button>
                                :
                                <div className='subnav-slide-center'>
                                    {!featureTitle && <button
                                        onClick={leftSlide}
                                    ><svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8 1L1 8L8 15M1 8H17" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </button>}
                                    {!featureTitle && <button
                                        onClick={rightSlide}
                                    ><svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0.75 7.75H17.25M17.25 7.75L10.25 0.75M17.25 7.75L10.25 14.75" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </button>}
                                </div>

                        }
                    </div>
                </div>

            </div>
        </>
    )
}

export default Subnavbar 