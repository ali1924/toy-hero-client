import React, { useEffect, useState } from 'react';

const AllToys = () => {
    const [toys, setToys] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => {
                setToys(data);
       }) 
    }, [])
    console.log(toys);
    return (
        <div>
            
        </div>
    );
};

export default AllToys;