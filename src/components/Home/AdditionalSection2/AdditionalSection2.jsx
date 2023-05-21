import React from 'react';
import './AdditionalSection2.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
const AdditionalSection2 = () => {
    return (
        <div className='grid lg:grid-cols-3 grid-cols-1 mt-14 gap-5 mx-5 lg:mx-10 pb-4'
        
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
        >
            <div className='featured-item bg-white'>
                <div className='flex justify-center mb-[17px]'>
                    <img src="https://htmldemo.net/kidol/kidol/assets/img/icons/f1.png" alt="" />
                </div>
                <div className="featured-info">
                    <h4 className="title  text-5xl font-extrabold">Free Service</h4>
                    <p className='text-xl font-medium'>If you buy any toy then we will service lifetime.</p>
                </div>
            </div>
            <div className='featured-item bg-white'>
                <div className='flex justify-center mb-[17px]'>
                    <img src="https://htmldemo.net/kidol/kidol/assets/img/icons/f2.png" alt="" />
                </div>
                <div className="featured-info">
                    <h4 className="title text-5xl font-extrabold">Support 24/7</h4>
                    <p>If you buy any toy then we will support every single day.</p>
                </div>
            </div>
            <div className='featured-item bg-white'>
                <div className='flex justify-center mb-[17px]'>
                    <img src="https://htmldemo.net/kidol/kidol/assets/img/icons/f3.png" alt="" />
                </div>
                <div className="featured-info">
                    <h4 className="title text-5xl font-extrabold">Cash Back</h4>
                    <p>If you buy any toy then we will cash back.</p>
                </div>
            </div>
        </div>
    );
};

export default AdditionalSection2;