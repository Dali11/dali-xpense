import Cta from "./Cta";
import Features from "./Features";
import Footer from "./Footer";
import OverView from "./OverView";
import Pricing from "./Pricing";
import Product from "./Product";
import Testimonial from "./Testimonial";
import Track from "./Track";



const Home = () => {
    return ( 
        <div className="home overflow-hidden">
            <Track />
            <OverView />
            <Features />
            <Product />
            <Pricing />
            <Testimonial />
            <Cta />
            <Footer />
        </div>
     );
}
 
export default Home;