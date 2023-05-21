import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const AddToy = () => {

    <option selected value="Sports car">Sports car</option>
    const [subcategory, setSubCategory] = useState('Sports car')
    const handleSubCategory = (event) => {
        setSubCategory(event.target.value)
    }
    useEffect(() => {
        document.title = "Add a Toy | Toy Hero";
    }, [])
    const { user } = useContext(AuthContext);
    console.log(user);
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const handleAddToy = (event) => {
        event.preventDefault();
        const form = event.target;
        const sellerName = form.sellerName.value;
        const email = form.email.value;
        const toyName = form.toyName.value;
        const toyPhoto = form.toyPhoto.value;
        const price = parseInt(form.price.value);
        const quantity = form.quantity.value;
        const rating = form.rating.value;
        const description = form.description.value;
        const toyInfo = {
            sellerName: user.displayName,
            email:user.email,
            toyName,
            toyPhoto,
            subcategory,
            price,
            quantity,
            rating,
            description,
        }
        fetch('https://assignment-11-server-beige-three.vercel.app/add-toy', {
            method: "POST",
            headers: {
                'content-type':'application/json',
            },
            body: JSON.stringify(toyInfo),
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.insertedId) {
                    alert('Added Successfully');
                    navigate('/my-toys');
                }
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content lg:w-[80%] w-[90%]">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 sm:min-w-full lg:min-w-full">
                    <div className="card-body sm:min-w-full lg:min-w-full">
                        <h1 className="text-xl lg:text-3xl text-center font-bold">Please give some information</h1>

                        <span className='text-2xl text-green-500'>{success}</span>
                        <span className='text-2xl text-red-600'>{error}</span>

                        <form onSubmit={handleAddToy} className='space-y-3 w-full'>
                            <div className='lg:grid lg:grid-cols-2 lg:g-2 lg:m-3'>
                                <div className="form-control lg:mb-3 mb-3">
                                    <input
                                        type="name"
                                        name='sellerName'
                                        defaultValue={user?.displayName}
                                        placeholder="Your name"
                                        className="input input-bordered"
                                    />
                                </div>
                                <div className="form-control lg:ml-2 lg:mb-3 mb-3">
                                    <input
                                        type="email"
                                        name='email'
                                        defaultValue={user?.email}
                                        placeholder="Your email"
                                        className="input input-bordered"
                                    />
                                </div>
                                <div className="form-control lg:mb-3 mb-3">
                                    <input
                                        type="text"
                                        name='toyName'
                                        placeholder="Toy name"
                                        className="input input-bordered"
                                    />
                                </div>
                                <div className="form-control lg:ml-2 lg:mb-3 mb-3">
                                    <input
                                        type="text"
                                        name='toyPhoto'
                                        placeholder="Toy photo url"
                                        className="input input-bordered"
                                    />
                                </div>
                                <div className="form-control lg:mb-3 mb-3">
                                    {/* <input
                                        type="text"
                                        name='subcategory'
                                        placeholder="Sub-category"
                                        className="input input-bordered"
                                        required
                                    /> */}
                                    <select className="input input-bordered" onClick={handleSubCategory}>
                                        <option selected value="Sports car">Sports car</option>
                                        <option value="Regular Car">Regular Car</option>
                                        <option value="Police car">Police car</option>
                                    </select>
                                </div>
                                <div className="form-control lg:ml-2 lg:mb-3 mb-3">
                                    <input
                                        type="text"
                                        name='price'
                                        placeholder="Price"
                                        className="input input-bordered"
                                    />
                                </div>
                                <div className="form-control lg:mb-3 mb-3">
                                    <input
                                        type="text"
                                        name='quantity'
                                        placeholder="Quantity"
                                        className="input input-bordered"
                                    />
                                </div>
                                <div className="form-control lg:ml-2 lg:mb-3 mb-3">
                                    <input
                                        type="text"
                                        name='rating'
                                        placeholder="Ratting"
                                        className="input input-bordered"
                                    />
                                </div>
                            </div>
                            <div className="form-control lg:mx-3 lg:mb-3 mb-3">
                                <textarea
                                    className="textarea input-border h-24" placeholder="Description"
                                    name='description'
                                ></textarea>
                            </div>
                            <div className="form-control mt-6 lg:mx-3">
                                <input
                                    type="submit"
                                    value="Add a Toy"
                                    className="btn hover:bg-accent-focus bg-accent"
                                />
                            </div>
                        </form>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default AddToy;