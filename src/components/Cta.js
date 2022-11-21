import React from "react";
import bg from "./img/cta/bg.svg"
import image1 from "./img/cta/image1.svg"
import image2 from "./img/cta/image2.svg"


const Cta = () => {
    return ( 
        <div className="cta relative">

            <div className="relative">
                <img className="" src={bg} alt="" />
            </div>

            <div className="items absolute top-0 md:top-4 w-full">
                <div className="item1 md:mt-20 md:ml-60 font-bold text-white text-center">
                    <h3 className=" pl-9 pt-2 text-2xl md:text-7xl text-center w-full">20M+ downloaded from 32 different countries</h3>
                    <h5 className=" ml-4 mt-2 md:text-4xl md:pt-10 md:mr-40">try demo for 7 days with full features</h5>
                </div>
                
                <div className="flex gap-10 pt-8">

                    <button className="text-orange-500 ml-32 p-3 rounded-lg md:ml-20 md:h-20 md:mt-10 md:p-8 md:text-2xl font-bold bg-white  md:rounded-xl order-2">try free demo</button>
                    <div className="item2 hidden md:block absolute ml-96 left-96">
                        <img className="ml-24" src={image1} alt="" />
                    </div>
                    <div className="item3 hidden md:block">
                        <img src={image2} alt="" />
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Cta;