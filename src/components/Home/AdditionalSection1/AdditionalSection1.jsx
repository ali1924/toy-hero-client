import React from "react";
import image6 from "../../../assets/images/addtional-1/extra-1.jpg";
const AdditionalSection2 = () => {
    return (
        <div className="grid lg:grid-cols-[3fr,5fr] grid-cols-1 lg:my-14 gap-5 border-2 border-[#FCA5A4] rounded-md p-5 lg:p-20 flex-row-reverse overflow-hidde lg:mx-0 mx-5" data-aos="fade-right" data-aos-duration="3000" >
            <div>
                <h1 className="lg:flex items-center text-center">
                    $<span className="lg:text-7xl  font-extrabold mr-2 lg:mr-5">100</span>
                    <span className="lg:text-3xl lg:mr-5">
                        Statement <br /> credit
                    </span>
                </h1>
                <div className="text-center lg:text-left ">
                    <p className="mt-5 lg:text-left">
                        Product restrictions can be really useful in a number of distribution or manufacturing scenarios to ensure you sell the right products to the right customers.
                    </p>
                    <h1 className="my-3">Restriction</h1>
                    <a className=" my-2 bg-[#FCA5A4] text-white px-5 py-2 rounded-md" href="">
                        Learn more
                    </a>
                </div>
            </div>
            <div>
                <img className="w-[100%]" src={image6} alt="" />
            </div>
        </div>
    );
};

export default AdditionalSection2;