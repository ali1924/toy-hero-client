import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ShopByCategoryCart from '../ShopByCategoryCart/ShopByCategoryCart';
const ShopByCategory = () => {
    const [allToys, setAllToys] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/allToyData')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setAllToys(data);
        })
    }, [])


    console.log('all', allToys[5]?.subcategory);
    return (
        <div className='my-6'>
            <div>

                <div className="carousel w-full">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src="/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src="/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src="/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <img src="/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>
            <h1 className='text-center text-4xl text-bold py-4'>Shop by Category</h1>
            <Tabs>
                <TabList className='text-center'>
                    <Tab>Building Blocks</Tab>
                    <Tab>Remote Control</Tab>
                    <Tab>Pull-Back</Tab>
                </TabList>

                <TabPanel>
                    <div className='grid lg:grid-cols-3 gap-4'>
                        {
                            allToys.filter(toy => toy?.subcategory == 'Building Blocks')
                                .map(toy => <ShopByCategoryCart
                                    key={toy._id}
                                    toy={toy}
                                ></ShopByCategoryCart>)
                        }
                    </div>
                    
                </TabPanel>
                <TabPanel>
                    <div className='grid lg:grid-cols-3 gap-4'>
                        {
                            allToys.filter(toy => toy?.subcategory == 'Remote Control')
                                .map(toy => <ShopByCategoryCart
                                    key={toy._id}
                                    toy={toy}
                                ></ShopByCategoryCart>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid lg:grid-cols-3 gap-4'>
                        {
                            allToys.filter(toy => toy?.subcategory == 'Pull-Back')
                                .map(toy => <ShopByCategoryCart
                                    key={toy._id}
                                    toy={toy}
                                ></ShopByCategoryCart>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ShopByCategory;