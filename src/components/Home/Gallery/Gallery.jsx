import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import './Gallery.css';

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

import image1 from "../../../assets/images/gallery/gallery1.jpg";
import image2 from "../../../assets/images/gallery/gallery2.jpg";
import image3 from "../../../assets/images/gallery/gallery3.jpg";
import image4 from "../../../assets/images/gallery/gallery4.jpg";
import image5 from "../../../assets/images/gallery/gallery5.jpg";

const Gallery = () => {
    return (
        <div className="">
            <h2 className="lg:text-5xl text-2xl font-semibold text-center lg:my-14 my-5">Photo Gallery</h2>
            <Swiper
                spaceBetween={30}
                centeredSlides={false}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 50,
                    },
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img
                        className="w-[100%] max-h-[250px] min-h-[250px]"
                        src={image1}
                        alt=""
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="w-[100%] max-h-[250px] min-h-[250px]"
                        src={image2}
                        alt=""
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="w-[100%] max-h-[250px] min-h-[250px]"
                        src={image4}
                        alt=""
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="w-[100%] max-h-[250px] min-h-[250px]"
                        src={image5}
                        alt=""
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="w-[100%] max-h-[250px] min-h-[250px]"
                        src={image2}
                        alt=""
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="w-[100%] max-h-[250px] min-h-[250px]"
                        src={image3}
                        alt=""
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="w-[100%] max-h-[250px] min-h-[250px]"
                        src={image4}
                        alt=""
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="w-[100%] max-h-[250px] min-h-[250px]"
                        src={image5}
                        alt=""
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Gallery;