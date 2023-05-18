import React from 'react';
import './ErrorPage.css';
import { Link } from 'react-router-dom';
const ErrorPage = () => {
    return (
        <div className='error-container'>
            <h1>404</h1>
            <p>Not Found</p>
            <Link to='/' className='btn-goHome'>Go to Home</Link>
        </div>
    );
};

export default ErrorPage;