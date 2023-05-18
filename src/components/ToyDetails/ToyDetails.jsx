import React from 'react';
import { useLoaderData } from 'react-router-dom';
const ToyDetails = () => {
    const toyData = useLoaderData();
    console.log(toyData);
    const { toyName, toyPhoto, sellerName, rating, quantity, price, email ,description} = toyData;
    return (
        <div className='flex w-full justify-center'>
            <div className="card card-compact w-full mx-4 my-8 lg:w-1/3 bg-base-200 shadow-xl">
                <figure>
                    <img
                        src={toyPhoto}
                        alt="Shoes"
                        className='p-3 rounded-lg'
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{toyName}</h2>
                    <p>Price: ${price}</p>
                    <p>Quantity: {quantity}</p>
                    <p>Ratting: {rating}</p>
                    <p>Description: <br />
                        <span>{description}</span>
                    </p>
                    <h2>Seller: {sellerName}</h2>
                    <p>Email: {email}</p>
                </div>
            </div>
        </div>
    );
};

export default ToyDetails;