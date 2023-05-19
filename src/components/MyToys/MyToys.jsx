import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import MyToy from '../MyToy/MyToy';
import { data } from 'autoprefixer';
const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [myToys, setMyToys] = useState([]);
    const url = `http://localhost:5000/toy/email?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setMyToys(data);
        })
    }, [user,url])
    // delete toy single data
    const handleDelete = (id) => {
        console.log('delete:', id);
        fetch(`http://localhost:5000/toys/${id}`, {
            method:"DELETE"
        }).then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    alert('deleted successfully');
                    const remaining =myToys.filter(booking => booking._id !== id);
                    setMyToys(remaining);
                }
        })
    }
    // update toy single data
    const handleUpdate = (id) => {
        console.log('update:', id);
    }
    return (
        <div className='mb-8'>
            <h2 className='text-3xl text-center py-3 font-bold'>My Toys</h2>
            <div className="overflow-x-auto w-full">
                <table className="table table-zebra w-full rounded-lg">
                    {/* head */}
                    <thead>
                        <tr className='text-3xl'>
                            <th>Seller</th>
                            <th>Toy Name</th>
                            <th>Sub category</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Status</th>
                            <th>Info</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            myToys.map(toy => <MyToy
                                key={toy._id}
                                toy={toy}
                                handleDelete={handleDelete}
                                handleUpdate={handleUpdate}
                            ></MyToy>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyToys;