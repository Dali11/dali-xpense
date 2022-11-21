import React,{useEffect} from "react";
import icon1 from "./img/product/cards/icon1.svg"
import icon2 from "./img/product/cards/icon2.svg"
import icon3 from "./img/product/cards/icon3.svg"
import AOS from 'aos';
import 'aos/dist/aos.css';

const Product = () => {
    

        useEffect(() => {
            AOS.init();
          }, [])
    
    return ( 
        <div className="md:pb-40 pl-6 md:px-40">

            <div className="flex flex-col md:gap-2 pb-32 md:flex-row">
                <h4 
                className="font-bold text-gray-800 text-4xl md:text-8xl pb-8"
                data-aos="fade-right" 
                data-aos-duration="1000"
                data-aos-easing="ease-in-sine"
                >
                    The product we work with.
                </h4>
                <h3 
                className="text-gray-300 text-sm  :mdtext-xl uppercase pb-8 md:ml-10 md:mt-10 md:w-2/5" 
                data-aos="flip-down" 
                data-aos-duration="1000"
                data-aos-easing="ease-in-sine"
                >
                    Tellus lacus morbi sagittis lacus in. Amet nisl at mauris enim accumsan nisi, tincidunt vel. Enim ipsum, amet quis ullamcorper eget ut
                </h3>
            </div>

            {/* ..................card................. */}

            <div className="grid grid-cols-1 gap-24 md:grid-cols-3 pb-32 gap-20">

                
                {/* ...................card-1................. */}

                <div className="text-center p-5 pb-10 shadow-lg" 
                // data-aos="zoom-out" 
                // data-aos-duration="1000"
                // data-aos-easing="ease-in-sine"
                >
                    <div className="flex justify-center pb-4">
                        <img src={icon1} alt="" />
                    </div>
                    <div className="content">
                        <h4 className="text-4xl pb-3">Cross platform</h4>
                        <p className="text-gray-300 pb-11  text-l">Elit esse cillum dolore eu fugiat nulla pariatur</p>
                    </div>
                </div>

                {/* ...................card-2................. */}

                <div className="text-center p-5 pb-10 shadow-lg" 
                // data-aos="zoom-out" 
                // data-aos-duration="1000"
                // data-aos-easing="ease-in-sine"
                >
                    <div className="flex justify-center pb-4">
                        <img src={icon2} alt="" />
                    </div>
                    <div className="content">
                        <h4 className="text-4xl pb-3">Cloud server</h4>
                        <p className="text-gray-300 pb-11  text-l">Elit esse cillum dolore eu fugiat nulla pariatur</p>
                    </div>
                </div>
                {/* ...................card-3................. */}

                <div className="text-center p-5 pb-10 shadow-lg" 
                // data-aos="zoom-out" 
                // data-aos-duration="1000"
                // data-aos-easing="ease-in-sine"
                >
                    <div className="flex justify-center pb-4">
                        <img src={icon3} alt="" />
                    </div>
                    <div className="content">
                        <h4 className="text-4xl pb-3">Pure Javascript</h4>
                        <p className="text-gray-300 pb-11  text-l">Elit esse cillum dolore eu fugiat nulla pariatur</p>
                    </div>
                </div>

            </div>
        </div>
     );
}
 
export default Product;