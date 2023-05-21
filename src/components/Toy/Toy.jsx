import React from 'react';
import { Link} from 'react-router-dom';
const Toy = ({ toy}) => {
    // console.log(toy);
    const { _id,sellerName, toyName, subcategory, price, quantity } = toy;
    return (
        <>
            <tr className='hover:bg-base-300'>
                <td>{sellerName}</td>
                <td>{toyName}</td>
                <td>{subcategory}</td>
                <td>{price}</td>
                <td>{quantity}</td>
                <td>
                    <Link to={`/toys/${_id}`}>
                        <button>Details</button>
                    </Link>
                </td>
            </tr>
        </>
    );
};

export default Toy;