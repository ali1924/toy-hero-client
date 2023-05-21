import React, { useEffect, useState } from 'react';
import Toy from '../Toy/Toy';
const Toys = () => {
    //sort code
    useEffect(() => {
        document.title = "Home | All Toys";
    }, [])
    const [toys, setToys] = useState([]);
    useEffect(() => {
        fetch(`https://assignment-11-server-beige-three.vercel.app/toys`)
            .then(res => res.json())
            .then(data => {
                setToys(data);
            })
    },[])
    // console.log(toys);


    const handleSearch = (event) => {
        event.preventDefault();
        const searchText = event.target.searchText.value;
        // console.log(searchText)
        fetch(`https://assignment-11-server-beige-three.vercel.app/searchToy/${searchText}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setToys(data);
                // console.log(toys);
            })
    }

    return (
        <div className='mb-8'>
            <h2 className='text-3xl text-center py-3 font-bold'>Our Awesome Toys</h2>
            <form onSubmit={handleSearch} className='flex justify-center my-3'>
                <input
                    type="text"
                    name='searchText'
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs"
                />
                <input
                    className='btn btn-accent text-white'
                    type="submit" value="Search" />
            </form>
            <div className="overflow-x-auto w-full lg:px-10 px-2">
                <table className="table table-zebra w-full border-2 rounded-lg">
                    {/* head */}
                    <thead>
                        <tr className='text-3xl'>
                            <th>Seller</th>
                            <th>Toy Name</th>
                            <th>
                                Sub category
                            </th>
                            <th>Price
                                <br />
                                Order by Ascending
                            </th>
                            <th>Quantity</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            toys.map(toy => <Toy
                                key={toy._id}
                                toy={toy}
                            ></Toy>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};
export default Toys;