import React from 'react';
import img1 from '../../../assets/images/banner/1.jpg';
import './Banner.css';

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full h-[600px]">
                <div id='slide1' className="carousel-item relative w-full">
                    <img src={img1} className="w-full rounded-lg" />
                    <div className="absolute h-full flex items-center  left-0 right-0 background">
                        <div className='text-white space-y-8 '>
                            <h2 className='text-6xl font-bold'>
                                Affordable <br />
                                Price For Car <br />
                                Servicing</h2>
                            <p className='text-2xl'>
                                There are many variations of passages of  available, but
                                <br />
                                the majority have suffered alteration in some form
                            </p>
                            <div>
                                <button className="btn btn-warning mr-5">Discover More</button>
                                <button className="btn btn-outline btn-secondary">Latest Project</button>
                            </div>
                            <div className=''>
                                <a href="#slide6" className="btn btn-circle">❮</a>
                                <a href="#slide2" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Banner;