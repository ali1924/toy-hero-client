import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import googleImg from '../../assets/images/login/google.png'
import { AuthContext } from '../Provider/AuthProvider';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
const Login = () => {
    const { user, signIn } = useContext(AuthContext);
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    // private route
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log( email, password);

        signIn(email,password)
            .then(result => {
                const user = result.user;
                // console.log(user);
                setSuccess('Successfully Login');
                setError('');
                navigate(from, { replace: true });

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
                        <SocialLogin>{googleImg}</SocialLogin>
                    </div>
                    

                </div>

            </div>
        </div>
    );
};

export default Login;