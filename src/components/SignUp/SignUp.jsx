import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import img from '../../images/login/login.svg';
import { AuthContext } from '../Provider/AuthProvider';
const SignUp = () => {
    const { createUser } = useContext(AuthContext);
    console.log(createUser);
    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        // create user
        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
            }).catch(error => {
                const errorMessage = error.message;
                console.log(errorMessage);
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 mr-12">
                    <img src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-3xl text-center font-bold">Sign Up</h1>
                        <form onSubmit={handleSignUp}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    type="text"
                                    name='name'
                                    placeholder="Your name"
                                    className="input input-bordered"
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="text"
                                    name='email'
                                    placeholder="Your email"
                                    className="input input-bordered"
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
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
                                    value="Sign Up"
                                    className="btn hover:bg-orange-400 bg-[#FF3811]"
                                />
                            </div>
                        </form>
                        <p className='text-xl my-4 text-center'>Already have an account?
                            <span className='text-orange-600 font-bold'>
                                <Link to='/login'> Login</Link>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;