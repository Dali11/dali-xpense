import React from "react";
import bg from "./img/overview/bg.svg"
import product from "./img/overview/product.svg"
import cola from  "./img/overview/brands/coca-cola.svg"
import facebook from  "./img/overview/brands/facebook.svg"
import google from  "./img/overview/brands/google.svg"
import linkedin from  "./img/overview/brands/linkedin.svg"
import samsung from  "./img/overview/brands/samsung.svg"


const OverView = () => {
    return ( 
        <div className="over-view">
            <main className="relative">
                <div>
                    <img src={bg} alt="" />
                </div>
                <div
                 className="absolute top-5 left-10 md:top-32 md:left-32"
                 data-aos="fade-right"
                 data-aos-duration="2000">
                    <img className="w-4/5 md:w-full" src={product} alt="product" />
                </div>
            </main>

            <div className="brands md:ml-80 md:pt-32">
                <div className="pb-48 flex flex-wrap gap-6 w-full md:w-4/5"
                data-aos="fade-left"
                data-aos-offset="500"
                data-aos-duration="9000"
                >
                    <img className="w-3/12" src={cola} alt="" />
                    <img src={facebook} alt="" />
                    <img src={google} alt="" />
                    <img src={linkedin} alt="" />
                    <img src={samsung} alt="" />
                </div>
            </div>
        </div>
     );
}
 
export default OverView;