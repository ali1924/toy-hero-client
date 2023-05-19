import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import MyToyUpdateInfo from '../MyToyUpdateInfo/MyToyUpdateInfo';
const MyToyUpdate = () => {
    const { user, loading } = useContext(AuthContext);
    const myToy = useLoaderData();
    const params = useParams();
    const id = params.id;
    const navigate = useNavigate();

    // update 
    const handleUpdate = (event) => {
        event.preventDefault();
        const form = event.target;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        const toyInfo = {
            price,
            quantity,
            description,
        }
        fetch(`http://localhost:5000/updateToy/${id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(toyInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    navigate('/my-toys'); 
                }
            })

    }
    if (!loading) {
        return (
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content lg:w-[80%] w-[90%]">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 sm:min-w-full lg:min-w-full">
                        <div className="card-body sm:min-w-full lg:min-w-full">
                            <h1 className="text-3xl text-center font-bold">Please update your information</h1>
                            <form onSubmit={handleUpdate} className='space-y-3 w-full'>
                                <div className='lg:grid lg:grid-cols-2 lg:g-2 lg:m-3'>
                                    <div className="form-control lg:ml-2 lg:mb-3 mb-3">
                                        <input
                                            type="text"
                                            name='price'
                                            placeholder="Price"
                                            defaultValue={myToy?.price}
                                            className="input input-bordered"
                                        />
                                    </div>
                                    <div className="form-control lg:mb-3 mb-3">
                                        <input
                                            type="text"
                                            name='quantity'
                                            placeholder="Quantity"
                                            defaultValue={myToy?.quantity}
                                            className="input input-bordered"
                                        />
                                    </div>
                                </div>
                                <div className="form-control lg:mx-3 lg:mb-3 mb-3">
                                    <textarea
                                        className="textarea textarea-primary h-24" placeholder="Description"
                                        name='description'
                                        defaultValue={myToy?.description}
                                    ></textarea>
                                </div>
                                <div className="form-control mt-6 lg:mx-3">
                                    <input
                                        type="submit"
                                        value="Submit"
                                        className="btn hover:bg-orange-400 bg-[#FF3811]"
                                    />
                                </div>
                            </form>
                        </div>

                    </div>

                </div>
            </div>
        );
    }
};

export default MyToyUpdate;