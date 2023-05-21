import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import Footer from '../Shared/Footer/Footer';
import NavBar from '../Shared/NavBar/NavBar';
const SignUp = () => {
    const { createUser, updateUser } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    useEffect(() => {
        document.title = "Toy Hero | Register";
    }, [])
    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;

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
        <div>
            <NavBar></NavBar>
            <div className='bg-[url("https://i.ibb.co/dKFfrCy/bg-login.jpg")] bg-no-repeat  bg-cover h-[100vh] flex items-center'>
                <div className="lg:w-1/4 mx-auto w-[80%]">
                    <div className='bg-black h-16 flex items-center justify-center p-2'>
                        <h2 className='text-white text-2xl font-bold'>Toy Hero</h2>
                    </div>
                    <div className='px-4 pb-4 lg:px-6 bg-white pt-6 lg:pt-8 space-y-2'>
                        <h1 className="text-xl">Register</h1>
                        <p className='text-xl'>Already an account?
                            <span className='text-accent'>
                                <Link to='/login'> Login</Link>
                            </span>
                        </p>

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
                                    placeholder="Your photoUrl"
                                    className="input input-bordered"
                                />
                            </div>
                            <div className="form-control mt-6">
                                <input
                                    type="submit"
                                    value="Login"
                                    className="btn hover:bg-accent bg-accent-focus"
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div >
            <Footer></Footer>
        </div>
    );
};

export default SignUp;