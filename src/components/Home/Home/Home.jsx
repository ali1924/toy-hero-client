import React, { useEffect } from 'react';
import Banner from '../Banner/Banner';
import ShopByCategory from '../ShopByCategory/ShopByCategory';

const Home = () => {
    useEffect(() => {
        document.title = "Home | Toy Hero";
    },[])
    return (
        <div>
            <Banner></Banner>
            <ShopByCategory></ShopByCategory>
        </div>
    );
};

export default Home;