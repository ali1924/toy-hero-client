import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Toy = ({ toy }) => {
    // console.log(toy);
    const { sellerName, toyName, subcategory, price, quantity } = toy;
    return (
        <>
            <tr>
                <td>{sellerName}</td>
                <td>{toyName}</td>
                <td>{subcategory}</td>
                <td>{price}</td>
                <td>{quantity}</td>
                <td>
                    <Link to={`/toys/${toy._id}`}><button>Details</button></Link>
                </td>
            </tr>
        </>
    );
};

export default Toy;