import React from 'react';
import error from '../../assets/images/404/404page.jpg';
import { Link } from 'react-router-dom';
const Error = () => {
    return (
        <div className='flex justify-center items-center h-[100vh]'

            style={{
                backgroundImage: `url(${error})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
            }}>
            <Link className='' to="/">
                <button className='btn text-white bg-accent text-2xl font-extrabold'>
                    Go to Home
                </button></Link>
        </div>
    );
};

export default Error;