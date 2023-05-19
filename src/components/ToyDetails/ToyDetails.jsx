import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
const ToyDetails = () => {
    const toyData = useLoaderData();
    console.log(toyData);
    const { toyName, toyPhoto, sellerName, rating, quantity, price, email ,description} = toyData;
    return (
        <div className='flex w-full justify-center bg-base-300 p-8 lg:p-16'>
            <div className='lg:flex gap-4 w-full rounded bg-white pb-3'>
                <img className='lg:w-1/2 px-6 py-3 rounded' src={toyPhoto} alt="" />
                <div className='my-auto space-y-1 px-6'>
                    <h3>{toyName}</h3>
                    <p>Price: <span className='text-orange-400'>${price}</span></p>
                    <p>Quantity: {quantity}</p>
                    <p>Rating: {rating}</p>
                    <p>
                        <span className='font-bold'>Description:</span> <br />
                        <span>{description}</span>
                    </p>
                    <p>Seller: {sellerName}</p>
                    <p>Email: {email}</p>
                    <div className='flex gap-2 lg:pt-5 pt-3'>
                        <Link to='/toys' className='mr-5'>
                            <button className="btn btn-accent w-32">Go Back</button>
                        </Link>
                        <Link to='/'>
                            <button className="btn btn-accent w-32">Go to Home</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToyDetails;