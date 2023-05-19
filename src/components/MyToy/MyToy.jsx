import React from 'react';
import { Link } from 'react-router-dom';
const MyToy = ({ toy,handleDelete,handleUpdate}) => {
    // console.log(toy);
    const { _id, sellerName, toyName, subcategory, price, quantity } = toy;
    return (
        <>
            <tr>
                <td>{sellerName}</td>
                <td>{toyName}</td>
                <td>{subcategory}</td>
                <td>{price}</td>
                <td>{quantity}</td>
                <td >
                    <Link to={`/update-toy/${_id}`}>
                        <button>Update</button>
                    </Link>
                </td>
                <td>
                    <button onClick={() => handleDelete(_id)}>Delete</button>
                </td>
            </tr>
        </>
    );
};

export default MyToy;