import React, { useEffect } from 'react';
import './ErrorPage.css';
import { Link } from 'react-router-dom';
const ErrorPage = () => {
    useEffect(() => {
        document.title = "ErrorPage| Toy Hero";
    }, [])
    return (
        <div className='error-container'>
            <h1>404</h1>
            <p>Not Found</p>
            <Link to='/' className='btn-goHome'>Go to Home</Link>
        </div>
    );
};

export default ErrorPage;
