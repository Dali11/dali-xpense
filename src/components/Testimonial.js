import React from "react";
import avatar2 from "./img/testimonial/avatar2.png"
import avatar3 from "./img/testimonial/avatar3.png"
import avatar4 from "./img/testimonial/avatar4.png"


const Testimonial = () => {
    return ( 
        <div className="pb-32 md:pl-20">
            <div className="header pl-6 text-center md:px-40 pb-8">
                <h2 className="font-bold text-gray-800 text-4xl md:text-8xl pb-8">we have millions of best wishers</h2>
            </div>

            {/* cards go here */}

            <div className="cards pl-6 flex flex-col gap-20 w-full md:flex-row">
                

                <div className="card2 bg-lime-500 relative w-80 rounded-lg">
                    <div className="items bg-white top-4 relative">
                        <div className="content p-6 text-lg">
                            <p>Eleifend fames amet, fames enim. 
                                Ullamcorper pellentesque ac volutpat nibh
                                 aliquet et, ut netus. Vel, fringilla sit eros
                                  pretium felis massa mauris, aliquam congue.</p>
                        </div>
                        <div className="wishers flex gap-3">
                            <img className="ml-4" src={avatar2} alt="" />
                            <p className="font-bold">Cameron Williamson, <span className="text-gray-400">CEO</span></p>
                        </div>
                    </div>
                </div>

                <div className="card3 bg-blue-700 relative w-80 rounded-lg">
                    <div className="items bg-white top-4 relative">
                        <div className="content p-6 text-lg">
                            <p>Eleifend fames amet, fames enim. 
                                Ullamcorper pellentesque ac volutpat nibh
                                 aliquet et, ut netus. Vel, fringilla sit eros
                                  pretium felis massa mauris, aliquam congue.</p>
                        </div>
                        <div className="wishers flex gap-3">
                            <img className="ml-4" src={avatar3} alt="" />
                            <p className="font-bold">Cameron Williamson, <span className="text-gray-400">CEO</span></p>
                        </div>
                    </div>
                </div>

                <div className="card4 bg-yellow-500 relative w-80 rounded-lg">
                    <div className="items bg-white top-4 relative">
                        <div className="content p-6 text-lg">
                            <p>Eleifend fames amet, fames enim. 
                                Ullamcorper pellentesque ac volutpat nibh
                                 aliquet et, ut netus. Vel, fringilla sit eros
                                  pretium felis massa mauris, aliquam congue.</p>
                        </div>
                        <div className="wishers flex gap-3">
                            <img className="ml-4" src={avatar4} alt="" />
                            <p className="font-bold">Cameron Williamson, <span className="text-gray-400">CEO</span></p>
                        </div>
                    </div>
                </div>


               

            </div>
        </div>
     );
}
 
export default Testimonial;