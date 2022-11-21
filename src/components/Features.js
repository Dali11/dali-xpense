import React from "react";
import logo from "./img/features/arrow-right.svg"
import feature1 from "./img/features/feature1-img.svg"
import feature2 from "./img/features/feature2-img.svg"
import feature3 from "./img/features/feature3-img.svg"


const Features = () => {
    return ( 
        <div className="pl-6 md:px-40 pb-32">

            {/* card features */}

            <div className="feature1 flex flex-col md:flex-row md:gap-8">
                <div 
                className=" w-full"
                data-aos="zoom-in-down" 
                data-aos-duration="1000"
                data-aos-easing="ease-in-sine"
                >
                    <h3 className="text-gray-300 uppercase text-2xl pb-8">Always online</h3>
                    <h4 className="font-bold text-gray-800 text-4xl md:text-8xl pb-8">Real-time support <br></br>with cloud</h4>
                    <p className="text-gray-300 :mdtext-xl uppercase pb-8">Tellus lacus morbi sagittis lacus in. Amet nisl at mauris enim accumsan nisi, tincidunt vel. Enim ipsum, amet quis ullamcorper eget ut</p>
                    <div 
                    className="text-orange-600 text-xl flex gap-3 pb-10 md:pb-48" 
                    data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine">
                        <span>Learn More</span>
                        <img className="pt-1" src={logo} alt="logo" />
                    </div>
                </div>

                <div className="image pb-48" data-aos="zoom-out" data-aos-duration="5000" data-aos-easing="ease-out-sine">
                    <img src={feature1} alt="feature1" />
                </div>
            </div>


                    {/* ............feature2..................... */}


            <div className="feature2 flex flex-col md:flex-row md:gap-8">
                <div 
                className=" w-9/12 md:order-2"
                data-aos="fade-right" 
                data-aos-duration="1000"
                data-aos-easing="ease-in-sine"
                >
                    <h3 className="text-gray-300 text-2xl uppercase pb-8">free some cost</h3>
                    <h4 className="font-bold text-gray-800 text-4xl md:text-8xl pb-8">save cost <br></br>for you and family</h4>
                    <p className="text-gray-300 :mdtext-xl uppercase pb-8">Tellus lacus morbi sagittis lacus in. Amet nisl at mauris enim accumsan nisi, tincidunt vel. Enim ipsum, amet quis ullamcorper eget ut</p>
                    <div className="text-orange-600 text-xl flex gap-3 pb-10 md:pb-48">
                        <span>Learn More</span>
                        <img className="pt-1" src={logo} alt="logo" />
                    </div>
                </div>

                <div className="order-1 pb-48"
                data-aos="fade-left" 
                data-aos-duration="1000"
                data-aos-easing="ease-in-sine"
                >
                    <img src={feature2} alt="feature1" />
                </div>
            </div>

                    {/* ............feature3..................... */}

            
                    <div className="feature1 flex flex-col md:flex-row md:gap-8">
                <div 
                className=" w-full"
                data-aos="zoom-in-down" 
                data-aos-duration="1000"
                data-aos-easing="ease-in-sine"
                >
                    <h3 className="text-gray-300 uppercase text-2xl pb-8">Always online</h3>
                    <h4 className="font-bold text-gray-800 text-4xl md:text-8xl pb-8">Real-time support <br></br>with cloud</h4>
                    <p className="text-gray-300 :mdtext-xl uppercase pb-8">Tellus lacus morbi sagittis lacus in. Amet nisl at mauris enim accumsan nisi, tincidunt vel. Enim ipsum, amet quis ullamcorper eget ut</p>
                    <div 
                    className="text-orange-600 text-xl flex gap-3 pb-10 md:pb-48" 
                    data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine">
                        <span>Learn More</span>
                        <img className="pt-1" src={logo} alt="logo" />
                    </div>
                </div>

                <div className="image pb-48" data-aos="fade-right"  data-aos-offset="500" data-aos-duration="6000" data-aos-easing="ease-out-sine">
                    <img src={feature3} alt="feature1" />
                </div>
            </div>

        </div>
     );
}
 
export default Features;