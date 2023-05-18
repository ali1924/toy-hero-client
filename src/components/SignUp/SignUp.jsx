import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
const SignUp = () => {
    const { createUser ,updateUser} = useContext(AuthContext);
    const [ error, setError ] = useState('');
    const [success, setSuccess ] = useState('');
    // console.log(createUser);
    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        console.log(name, email, password,photo);

        // create user
        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                loggedUser.displayName = name;
                console.log(loggedUser);
                setError('');
                updateUser(name, photo);
                setSuccess('Successfully SignUp');
            }).catch(error => {
                const errorMessage = error.message;
                // console.log(errorMessage);
                setError(errorMessage);
                setSuccess('');
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content lg:w-1/2 w-full">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 sm:min-w-full lg:min-w-[70%]">
                    <div className="card-body sm:min-w-full lg:min-w-full">
                        <h1 className="text-3xl font-bold">Register</h1>

                        <span className='text-2xl text-green-500'>{success}</span>
                        <span className='text-2xl text-red-600'>{error}</span>

                        <form onSubmit={handleSignUp} className='space-y-3 w-full'>
                            <div className="form-control">
                                <input
                                    type="text"
                                    name='name'
                                    placeholder="Your name"
                                    className="input input-bordered"
                                />
                            </div>
                            <div className="form-control">
                                <input
                                    type="text"
                                    name='email'
                                    placeholder="Your email"
                                    className="input input-bordered"
                                />
                            </div>
                            <div className="form-control">
                                <input
                                    type="text"
                                    name='password'
                                    placeholder="Your password"
                                    className="input input-bordered"
                                />
                            </div>
                            <div className="form-control">
                                <input
                                    type="text"
                                    name='photo'
                                    placeholder="Your photo url"
                                    className="input input-bordered"
                                />
                            </div>
                            <div className="form-control mt-6">
                                <input
                                    type="submit"
                                    value="Register"
                                    className="btn hover:bg-orange-400 bg-[#FF3811]"
                                />
                            </div>
                        </form>
                        <p className='text-xl my-4 text-center'>Already have an account?
                            <span className='text-orange-600 font-bold'>
                                <Link to='/login'>Login</Link>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;