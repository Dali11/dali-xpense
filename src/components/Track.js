import React,{useEffect} from "react";
import hero from "./img/hero/image.svg"
import AOS from 'aos';
import 'aos/dist/aos.css';

const Track = () => {

    useEffect(() => {
        AOS.init();
      }, [])

    return ( 
        <div className="pt-24 pb-48 overflow-hidden flex flex-col flex-wrap md:flex-row md:pl-32">

            <div className="content"
            data-aos="fade-down"
            data-aos-duration="1000"
             data-aos-offset="200" 
             data-aos-easing="ease-in-sine">

                <h3 
                className="
                font-bold text-gray-900 text-5xl text-center pr-32
                 md:text-8xl
                 "
                 >
                    Track your 
                    <br></br>Expense to <br></br>Save Money
                </h3>
                <h4 className="
                text-gray-500 text-center pr-40 text-lg 
                md:text-xl py-6 ml-7">
                    Helps you to organize your income and expenses
                </h4>

                <div className="flex gap-6 pr-40 ml-16  text-center pt-8 pb-3  
                md:block">
                    <button className="text-white text-sm h-20 p-5 w-44 font-bold rounded-xl bg-orange-500 md:p-7 md:h-24 pl-18 pr-18 md:text-2xl">Try free demo</button>
                    <p className="text-gray-300 mt-8 inline-block text-lg md:text-2xl ml-3">Web, iOs and Android</p>
                </div>
            </div>


            <div className="avg ml-12" data-aos-delay="700" data-aos="fade-left">
                <img className="w-3/5" src={hero} alt="" />

            </div>
            
        </div>
     );
}
 
export default Track;