import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import img from '../../images/login/login.svg';
import { AuthContext } from '../Provider/AuthProvider';
const Login = () => {
    const { user,updateUser,signIn } = useContext(AuthContext);
    // console.log(user);
    // console.log(updateUser);
    // const { displayName, email } = user;
    // console.log(email, displayName);
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        signIn(email,password)
            .then(result => {
                const user = result.user;
                // console.log(user);
                setSuccess('Successfully Login');
                setError('');

            })
            .catch(error => {
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
                        <h1 className="text-3xl font-bold">Login</h1>

                        <span className='text-2xl text-green-500'>{success}</span>
                        <span className='text-2xl text-red-600'>{error}</span>

                        <form onSubmit={handleLogin} className='space-y-3 w-full'>
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
                                    value="Sign In"
                                    className="btn hover:bg-orange-400 bg-[#FF3811]"
                                />
                            </div>
                        </form>
                        <p className='text-xl my-4 text-center'>New to Toy Hero?
                            <span className='text-orange-600 font-bold'>
                                <Link to='/register'>Register</Link>
                            </span>
                        </p>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Login;