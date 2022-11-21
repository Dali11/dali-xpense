import React from "react";
import mainlogo from "./img/header/logo.svg"
import facebook from "./img/copyright/facebook.svg"
import linkedin from "./img/copyright/linkedin.svg"
import twitter from "./img/copyright/twitter.svg"

const Footer = () => {
    return ( 
        <div className="footer pt-20 pl-4  md:px-40 pb-20">
            <div className="before-footer flex justify-between flex-col md:flex-row">
                <div className="logo pl-24 pb-10 font-bold">
                    <img src={mainlogo} alt="" />
                </div>
                <div className="links  text-center">
                <h2 className="pb-8 font-bold text-lg">LINKS</h2>
                    <ul className="flex flex-col gap-2 font-bold">
                        <li>Home</li>
                        <li>About us</li>
                        <li>Careers</li>
                        <li>Pricing</li>
                        <li>Features</li>
                        <li>Blog</li>
                    </ul>
                </div>
                <div className="legal text-center pt-10 md:pt-0">
                    <h2 className="pb-8 font-bold text-lg">LEGAL</h2>
                    <ul className="flex flex-col gap-2 font-bold">
                        <li>Terms of use</li>
                        <li>Terms and conditions</li>
                        <li>Privacy policy</li>
                        <li>Cookie policy</li>
                    </ul>
                </div>
                
                <div className="newsletter text-center pt-10 md:pt-0">
                    <h2 className="pb-8 font-bold text-lg">NEWSLETTER</h2>
                    <p className="pb-6 text-gray-600 mr-5 text-xl">Over 25000 people have subscribed</p>
                    <div className="flex">
                        <input className="p-3 text-gray-600 border border-transparent w-full" type="text" name="" placeholder="Enter your Email" />
                        <button className="bg-orange-600 p-3 text-white rounded-md mr-5">subscribe</button>
                        <span class="animate-ping absolute inline-flex h-3/12 p-2 rounded-full bg-sky-400 opacity-75"></span>
                    </div>
                    <p className="pt-2 text-gray-300">we don't sell your email and spam </p>
                </div>
            </div>

            <div className="after-footer flex flex-col items-center justify-between gap-4 md:flex-row md:gap-9 pt-14 text-sm">
                <div className="privacy">
                    <span>privacy & terms</span>
                    <span className="ml-3">contact us</span>
                </div>
                <div className="copyright">
                    <span>copyright @ 2022 xpense</span>
                </div>
                <div className="link-icons flex gap-2">
                    <img src={facebook} alt="" />
                    <img src={linkedin} alt="" />
                    <img src={twitter} alt="" />
                </div>
            </div>
        </div>
     );
}
 
export default Footer;