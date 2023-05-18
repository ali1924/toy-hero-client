import React, { useState } from 'react';

const AddToy = () => {
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const handleAddToy = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content lg:w-[80%] w-[90%]">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 sm:min-w-full lg:min-w-full">
                    <div className="card-body sm:min-w-full lg:min-w-full">
                        <h1 className="text-3xl text-center font-bold">Please give some information</h1>

                        <span className='text-2xl text-green-500'>{success}</span>
                        <span className='text-2xl text-red-600'>{error}</span>

                        <form onSubmit={handleAddToy} className='space-y-3 w-full'>
                            <div className='lg:grid lg:grid-cols-2 lg:g-2 lg:m-3'>
                                <div className="form-control lg:mb-3 mb-3">
                                    <input
                                        type="name"
                                        name='sellerName'
                                        placeholder="Your name"
                                        className="input input-bordered"
                                    />
                                </div>
                                <div className="form-control lg:ml-2 lg:mb-3 mb-3">
                                    <input
                                        type="email"
                                        name='email'
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
                                        name='photo'
                                        placeholder="Toy photo url"
                                        className="input input-bordered"
                                    />
                                </div>
                                <div className="form-control lg:mb-3 mb-3">
                                    <input
                                        type="text"
                                        name='subcategory'
                                        placeholder="Sub-category"
                                        className="input input-bordered"
                                    />
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
                                    className="textarea textarea-primary h-24" placeholder="Description"
                                ></textarea>
                            </div>
                            <div className="form-control mt-6 lg:mx-3">
                                <input
                                    type="submit"
                                    value="Add a Toy"
                                    className="btn hover:bg-orange-400 bg-[#FF3811]"
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