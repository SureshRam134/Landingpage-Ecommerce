import FirstView from "./FirstView";
import Category from "./Category";
import SellingProduct from "./SellingProduct";
import TodayProduct from "./TodayProduct";
import OurProduct from "./OurProduct";
import Featured from "./Featured";


const Home = () => {


    return (
        <>
            <div className="container">
                    {/* first page */}
                    <FirstView />

                    {/* second page */}
                    <TodayProduct />

                    {/* Category */}
                    <Category />

                    {/* Best Selling */}
                    <SellingProduct />

                    {/* OurProduct */}
                    <OurProduct />

                    {/* Featured */}
                    <Featured />
            </div>
        </>
    )
}

export default Home;