import React from "react";
import logo from "./img/features/arrow-right.svg"
import icon1 from "./img/pricing/icon1.svg"
import icon2 from "./img/pricing/icon2.svg"
import icon3 from "./img/pricing/icon3.svg"

const Pricing = () => {
    return ( 
        <div className="md:px-40 pb-32">
            <div className="pb-10 ml-20 md:ml-32">
                <h2 className="font-bold text-gray-800 text-4xl md:text-7xl pb-8">Choose your flexible plan.</h2>
            </div>

            {/* cards go here */}
            <div className="flex flex-col gap-10 md:flex-row">

                {/* .............card-1................ */}
                <div className="card-1 w-10/12 p-9 ml-8 md:p-6 md:w-1/3 border shadow-md">
                    <div className="image pb-6">
                        <img className="ml-2" src={icon1} alt="" />
                    </div>
                    <div className="plan">
                        <h2 className="pb-6 font-bold text-gray-700 text-4xl">Stater Plan</h2>
                        <div className="data pb-6">
                            <ul className="flex flex-col gap-4 text-lg">
                                <li>store unlimated data</li>
                                <li>Export to pdf, xls,csv</li>
                                <li>Cloud server</li>
                            </ul>
                        </div>
                    </div>
                    <div className="price pb-6">
                        <span className="font-bold text-gray-900 text-xl">$9.99/year</span><br></br>
                        <span className="text-gray-400">up to 3 user + 1.99 per user</span>
                    </div>
                    <div className="flex gap-2 text-xl font-bold w-4/5 bg-orange-400 p-3 md:w-3/5 rounded-xl">
                        <span className="text-white ">Get this</span>
                        <span className="mt-1 ml-1"><img src={logo} alt="" /></span>
                    </div>
                </div>

                {/* .............card-2................ */}

                <div className="card-1 w-10/12 p-9 ml-8 md:p-6 md:w-1/3 border shadow-md">
                    <div className="image pb-6">
                        <img className="ml-2" src={icon2} alt="" />
                    </div>
                    <div className="plan">
                        <h2 className="pb-6 font-bold text-gray-700 text-4xl">Silver Plan</h2>
                        <div className="data pb-6">
                            <ul className="flex flex-col gap-4 text-lg">
                                <li>store unlimated data</li>
                                <li>Export to pdf, xls,csv</li>
                                <li>Cloud server</li>
                            </ul>
                        </div>
                    </div>
                    <div className="price pb-6">
                        <span className="font-bold text-gray-900 text-xl">$9.99/year</span><br></br>
                        <span className="text-gray-400">up to 3 user + 1.99 per user</span>
                    </div>
                    <div className="flex gap-2 text-xl font-bold w-4/5 bg-orange-400 p-3 md:w-3/5 rounded-xl">
                        <span className="text-white ">Get this</span>
                        <span className="mt-1 ml-1"><img src={logo} alt="" /></span>
                    </div>
                </div>

                    {/* .............card-3................ */}

                    <div className="card-1 w-10/12 p-9 ml-8 md:p-6 md:w-1/3 border shadow-md">
                    <div className="image pb-6">
                        <img className="ml-2" src={icon3} alt="" />
                    </div>
                    <div className="plan">
                        <h2 className="pb-6 font-bold text-gray-700 text-4xl">Diamond Plan</h2>
                        <div className="data pb-6">
                            <ul className="flex flex-col gap-4 text-lg">
                                <li>store unlimated data</li>
                                <li>Export to pdf, xls,csv</li>
                                <li>Cloud server</li>
                            </ul>
                        </div>
                    </div>
                    <div className="price pb-6">
                        <span className="font-bold text-gray-900 text-xl">$9.99/year</span><br></br>
                        <span className="text-gray-400">up to 3 user + 1.99 per user</span>
                    </div>
                    <div className="flex gap-2 text-xl font-bold w-4/5 bg-orange-400 p-3 md:w-3/5 rounded-xl">
                        <span className="text-white ">Get this</span>
                        <span className="mt-1 ml-1"><img src={logo} alt="" /></span>
                    </div>
                </div>

                {/* end of card */}
            </div>
        </div>
     );
}
 
export default Pricing;