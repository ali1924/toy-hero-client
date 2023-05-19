import React from 'react';
import img1 from '../../../assets/images/banner/1.jpg';
import './Banner.css';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full h-[600px]">
                <div id='slide1' className="carousel-item relative w-full">
                    <img src={img1} className="w-full rounded-lg" />
                    <div className="absolute h-full flex items-center lg:ps-24 ps-5 left-0 right-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className='text-white space-y-8 '>
                            <h2 className='text-4xl lg:text-6xl font-bold'>
                                Affordable <br />
                                Price For Buying <br />
                                Toys</h2>
                            <p className='text-2xl'>
                                There are many toys are available in our Website.
                                <br />
                                <span>Ready to buy? Please.....</span>
                            </p>
                            <div className='flex gap-2 text-white'>
                                <Link to='/login'>
                                    <button className="btn bg-red-600 w-40">Login</button>
                                </Link>
                                <div className="divider lg:divider-horizontal">OR</div>
                                <Link to='/register'>
                                    <button className="btn bg-red-600 w-40 ">Register</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Banner;