import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import googleImg from '../../assets/images/login/google.png'
import { AuthContext } from '../Provider/AuthProvider';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
import NavBar from '../Shared/NavBar/NavBar';
import Footer from '../Shared/Footer/Footer';
const Login = () => {
    useEffect(() => {
        document.title = "Login | Toy Hero";
    }, [])
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

        signIn(email, password)
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
        <div>
            <NavBar></NavBar>
            <div className='bg-[url("https://i.ibb.co/dKFfrCy/bg-login.jpg")] bg-no-repeat  bg-cover h-[100vh] flex items-center'>
                <div className="lg:w-1/4 mx-auto w-[80%]">
                    <div className='bg-black h-16 flex items-center justify-center p-2'>
                        <h2 className='text-white text-2xl font-bold'>Toy Hero</h2>
                    </div>
                    <div className='px-4 pb-4 lg:px-6 bg-white pt-6 lg:pt-8 space-y-2'>
                        <h1 className="text-xl">Login</h1>
                        <p className='text-xl'>Don't have an account?
                            <span className='text-accent'>
                                <Link to='/register'> Register</Link>
                            </span>
                        </p>

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

    );
};

export default Login;