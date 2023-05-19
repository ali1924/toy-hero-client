import React, { useContext, useState } from 'react';
import { Navigate, useLoaderData, useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { data } from 'autoprefixer';

const MyToyUpdate = () => {
    const { user,loading } = useContext(AuthContext);
    const myToy = useLoaderData();
    const params = useParams();
    const id = params.id;    
    const navigate = useNavigate();
    const handleUpdate = (event) => {
        event.preventDefault();
        //
        // console.log(myToy);
        console.log('id: ',id);
        //
        const form = event.target;
        const sellerName = form.sellerName.value;
        const email = form.email.value;
        const toyName = form.toyName.value;
        const toyPhoto = form.toyPhoto.value;
        const subcategory = form.subcategory.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const rating = form.rating.value;
        const description = form.description.value;
        const toyInfo = {
            sellerName: user.displayName,
            email: user.email,
            toyName,
            toyPhoto,
            subcategory,
            price,
            quantity,
            rating,
            description,
        }
        // console.log(toyInfo);

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
                    // update info
                    // return <Navigate to='/my-toys'></Navigate>
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

                            {/* <span className='text-2xl text-green-500'>{success}</span>
                        <span className='text-2xl text-red-600'>{error}</span> */}

                            <form onSubmit={handleUpdate} className='space-y-3 w-full'>
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
                                            defaultValue={myToy?.toyName}
                                            className="input input-bordered"
                                        />
                                    </div>
                                    <div className="form-control lg:ml-2 lg:mb-3 mb-3">
                                        <input
                                            type="text"
                                            name='toyPhoto'
                                            placeholder="Toy photo url"
                                            defaultValue={myToy?.toyPhoto}
                                            className="input input-bordered"
                                        />
                                    </div>
                                    <div className="form-control lg:mb-3 mb-3">
                                        <input
                                            type="text"
                                            name='subcategory'
                                            placeholder="Sub-category"
                                            defaultValue={myToy?.subcategory}
                                            className="input input-bordered"
                                        />
                                    </div>
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
                                    <div className="form-control lg:ml-2 lg:mb-3 mb-3">
                                        <input
                                            type="text"
                                            name='rating'
                                            placeholder="Ratting"
                                            defaultValue={myToy?.rating}
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