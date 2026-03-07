import FirstView from "./FirstView";
import Category from "./Category";
import SellingProduct from "./SellingProduct";
import TodayProduct from "./TodayProduct";
import OurProduct from "./OurProduct";
import Featured from "./Featured";


const Home = () => {


    return (
        <>
            <div className="home-container">
                {/* main */}
                <main>
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
                </main>

            </div>
        </>
    )
}

export default Home;