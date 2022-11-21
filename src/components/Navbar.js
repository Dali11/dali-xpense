import React, { useState } from "react";
import Button from "./Button";
import mainlogo from "./img/header/logo.svg"

const Navbar = () => {

    let Links = [
        {name:"Features",link:"/"},
        {name:"About Us",link:"/"},
        {name:"Pricing",link:"/"},
        {name:"Feedback",link:"/"}
    ]

    const[open, setOpen] = useState(false)

    return ( 
        <div className="shadow-md w-full  bg-white top-0 left-0">
            <div className="md:flex items-center justify-between  py-4 md:px-32 px-7">
                <div className="cursor-pointer flex items-center">
                    <img src={mainlogo} alt="" />
                    
                </div>

                <div onClick={() => setOpen(!open)} className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden">
                <ion-icon name={open ? "close" : "menu"}></ion-icon>
                </div>

                <ul className={` bg-white md:flex md:text-xl md:items-center md:pb-0 pb-12 absolute md:static md:z-auto left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20' : 'top-[-490px]'}`}>
                    {
                        Links.map((link) => {
                            return (
                                <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
                                    <a href={link.link} className="text-gray-800 hover:text-gray-400 duration-500">{link.name}</a>
                                </li>
                            )
                        })
                    }
                    <Button>
                        Request a demo
                    </Button>
                    {/* <Button>
                        Get started
                    </Button> */}
                </ul>
            </div>
        </div>
     );
}
 
export default Navbar;