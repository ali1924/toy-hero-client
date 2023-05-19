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