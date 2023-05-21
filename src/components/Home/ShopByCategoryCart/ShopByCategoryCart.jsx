import React from 'react';
import { Link } from 'react-router-dom';

const ShopByCategoryCart = ({ toy }) => {
    const {_id,toyName, toyPhoto,rating, quantity, price } = toy;
    return (
        <div className='rounded-lg mb-3'>
            <div className='lg:flex gap-4 w-full rounded bg-white pb-3'>
                <img className='lg:w-[293px] lg:h-[187px] px-6 py-3 rounded' src={toyPhoto} alt="" />
                <div className='my-auto space-y-1 px-6'>
                    <h3>{toyName}</h3>
                    <p>Price: <span className='text-orange-400'>${price}</span></p>
                    <p>Quantity: {quantity}</p>
                    <p>Rating: {rating}</p>
                    <div className='flex gap-2 lg:pt-5 pt-3'>
                        <Link to={`/toys/${_id}`} className='mr-5'>
                            <button className="btn btn-accent w-28 text-white">Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopByCategoryCart;