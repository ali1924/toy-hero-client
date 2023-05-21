import React, { useEffect } from 'react';
import Banner from '../Banner/Banner';
import ShopByCategory from '../ShopByCategory/ShopByCategory';
import AdditionalSection2 from '../AdditionalSection2/AdditionalSection2';
import AdditionalSection1 from '../AdditionalSection1/AdditionalSection1';
import Gallery from '../Gallery/Gallery';

const Home = () => {
    useEffect(() => {
        document.title = "Home | Toy Hero";
    },[])
    return (
        <div className='bg-slate-200'>
            <Banner></Banner>
            <Gallery></Gallery>
            <ShopByCategory></ShopByCategory>
            <AdditionalSection2></AdditionalSection2>
            <AdditionalSection1></AdditionalSection1>
            
        </div>
    );
};

export default Home;