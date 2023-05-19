import React from 'react';
import { Link } from 'react-router-dom';

const ShopByCategoryCart = ({ toy }) => {
    console.log(toy);
    const { _id,toyName, toyPhoto, sellerName, rating, quantity, price, email, description } = toy;
    return (
            <div className="card card-compact w-full mx-4 my-8  bg-base-200 shadow-xl">
                <figure>
                    <img
                        src={toyPhoto}
                        alt="Shoes"
                        className='p-3 rounded-lg'
                    />
                </figure>
                <div className="card-body ">
                    <h2 className="card-title">{toyName}</h2>
                    <div className='text-sm'>
                        <p>Price: <span className='text-orange-500'>${price}</span></p>
                        <p>Quantity: {quantity}</p>
                        <p>Ratting: {rating}</p>
                        <p>Description: <br />
                            <span>{description}</span>
                        </p>
                        <h2>Seller: {sellerName}</h2>
                        <p>Email: {email}</p>
                    </div>
                    <div className="">
                    <Link to={`/toys/${_id}`}>
                        <button className='btn btn-block'>Details</button>
                    </Link>
                    </div>
                </div>
            </div>
    );
};

export default ShopByCategoryCart;