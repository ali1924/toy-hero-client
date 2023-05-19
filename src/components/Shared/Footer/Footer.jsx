import React from 'react';
import { Link } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons' 

const Footer = () => {
    return (
        <div className='bg-neutral-800'>
            <footer className="footer footer-center p-10  text-base-content rounded">
                <div className="grid grid-flow-col gap-4">
                    <Link to='' className="link link-hover text-white text-xl font-medium hover:text-accent">About us</Link>
                    <Link to='' className="link link-hover text-white text-xl font-medium hover:text-accent">Contact</Link>
                    <Link to='' className="link link-hover text-white text-xl font-medium hover:text-accent">Toys</Link>
                    <Link to='' className="link link-hover text-white text-xl font-medium hover:text-accent">Toy Hero</Link>
                </div>
                <div>
                    <div className="grid grid-flow-col gap-4">
                        <Link to='https://twitter.com/'>
                            <FontAwesomeIcon className='h-8 w-8 rounded-md text-white p-1  bg-neutral-600 hover:bg-sky-600' icon={faFacebookF} />
                        </Link>

                        <Link to="https://youtube.com/">
                            <FontAwesomeIcon className='h-8 w-8 rounded-md text-white p-1  bg-neutral-600 hover:bg-sky-600' icon={faFacebookF} /></Link>

                        <Link to="https://facebook.com/">
                        <FontAwesomeIcon className='h-8 w-8 rounded-md text-white p-1  bg-neutral-600 hover:bg-sky-600' icon={faFacebookF} />
                        </Link>
                    </div>
                </div>
                <div>
                    <p className='text-xl text-white'>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;