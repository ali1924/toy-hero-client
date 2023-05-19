import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import Footer from '../Shared/Footer/Footer';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
import NavBar from '../Shared/NavBar/NavBar';
const SignUp = () => {
    useEffect(() => {
        document.title = "Register | Toy Hero";
    }, [])
    const { createUser, updateUser } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    // console.log(createUser);
    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        console.log(name, email, password, photo);

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
                            <div className="form-control mt-6">
                                <input
                                    type="submit"
                                    value="Login"
                                    className="btn hover:bg-accent bg-accent-focus"
                                />
                            </div>
                        </form>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div >
            <Footer></Footer>
        </div>
        // <div className="hero min-h-screen bg-base-200">
        //     <div className="hero-content lg:w-1/2 w-full">
        //         <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 sm:min-w-full lg:min-w-[70%]">
        //             <div className="card-body sm:min-w-full lg:min-w-full">
        //                 <h1 className="text-3xl font-bold">Register</h1>

        //                 <span className='text-2xl text-green-500'>{success}</span>
        //                 <span className='text-2xl text-red-600'>{error}</span>

        //                 <form onSubmit={handleSignUp} className='space-y-3 w-full'>
        //                     <div className="form-control">
        //                         <input
        //                             type="text"
        //                             name='name'
        //                             placeholder="Your name"
        //                             className="input input-bordered"
        //                         />
        //                     </div>
        //                     <div className="form-control">
        //                         <input
        //                             type="text"
        //                             name='email'
        //                             placeholder="Your email"
        //                             className="input input-bordered"
        //                         />
        //                     </div>
        //                     <div className="form-control">
        //                         <input
        //                             type="text"
        //                             name='password'
        //                             placeholder="Your password"
        //                             className="input input-bordered"
        //                         />
        //                     </div>
        //                     <div className="form-control">
        //                         <input
        //                             type="text"
        //                             name='photo'
        //                             placeholder="Your photo url"
        //                             className="input input-bordered"
        //                         />
        //                     </div>
        //                     <div className="form-control mt-6">
        //                         <input
        //                             type="submit"
        //                             value="Register"
        //                             className="btn hover:bg-orange-400 bg-[#FF3811]"
        //                         />
        //                     </div>
        //                 </form>
        //                 <p className='text-xl my-4 text-center'>Already have an account?
        //                     <span className='text-orange-600 font-bold'>
        //                         <Link to='/login'>Login</Link>
        //                     </span>
        //                 </p>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
};

export default SignUp;