import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ShopByCategoryCart from '../ShopByCategoryCart/ShopByCategoryCart';
const ShopByCategory = () => {
    const [allToys, setAllToys] = useState([]);
    useEffect(() => {
        fetch('https://assignment-11-server-beige-three.vercel.app/allToyData')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setAllToys(data);
            })
    }, [])
    return (
        <div className=''>
            <h1 className='text-center text-4xl text-bold py-4'>Shop by Category</h1>
            <Tabs>
                <TabList className='text-center py-2'>
                    <Tab>Sports car</Tab>
                    <Tab>Regular Car</Tab>
                    <Tab>Police car</Tab>
                </TabList>

                <TabPanel>
                    <div className='lg:grid  lg:grid-cols-2 lg:gap-4 w-full lg:px-24 px-5 py-3'>
                        {
                            allToys.filter(toy => toy?.subcategory == 'Sports car')
                                .map(toy => <ShopByCategoryCart
                                    key={toy._id}
                                    toy={toy}
                                ></ShopByCategoryCart>)
                        }
                    </div>

                </TabPanel>
                <TabPanel>
                    <div className='lg:grid  lg:grid-cols-2 lg:gap-4 w-full lg:px-24 px-5 py-3'>
                        {
                            allToys.filter(toy => toy?.subcategory == 'Regular Car')
                                .map(toy => <ShopByCategoryCart
                                    key={toy._id}
                                    toy={toy}
                                ></ShopByCategoryCart>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='lg:grid  lg:grid-cols-2 lg:gap-4 w-full lg:px-24 px-5 py-3'>
                        {
                            allToys.filter(toy => toy?.subcategory == 'Police car')
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