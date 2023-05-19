import React, { useEffect, useState } from 'react';
import Toy from '../Toy/Toy';
import ToyDetails from '../ToyDetails/ToyDetails';

const Toys = () => {
    const [toys, setToys] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/toys')
            .then(res => res.json())
            .then(data => {
                setToys(data);
            })
    }, [])
    // console.log(toys);


    const handleSearch = (event) => {
        event.preventDefault();
        const searchText = event.target.searchText.value;
        console.log(searchText)
        fetch(`http://localhost:5000/searchToy/${searchText}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setToys(data);
        })
    }

    return (
        <div className='mb-8'>
            <h2 className='text-3xl text-center py-3 font-bold'>Our Awesome Toys</h2>
            <form onSubmit={handleSearch} className='flex justify-center my-2'>
                <input
                    type="text"
                    name='searchText'
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs"
                />
                <input
                    className='btn btn-danger'
                    type="submit" value="Search" />
            </form>
            <div className="overflow-x-auto w-full">
                <table className="table table-zebra w-full rounded-lg">
                    {/* head */}
                    <thead>
                        <tr className='text-3xl'>
                            <th>Seller</th>
                            <th>Toy Name</th>
                            <th>Sub category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
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