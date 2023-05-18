import React, { useState } from 'react';
import './Blog.css';
const Blog = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='space-y-2 lg:space-y-4'>
            <h1 className='xl-4xl lg:text-5xl text-white text-bold rounded-md  py-2 lg:py-5'>Frequently Asked Questions</h1>
            {/* Q---1 */}
            <div tabIndex={0} className="collapse group space-y-1 rounded-md">
                <div
                    className="collapse-title bg-custom hover:bg-indigo-950  text-2xl text-white text-bold group-focus:text-secondary-content
                    flex justify-between
                    "
                    onClick={()=>setIsOpen(!isOpen)}
                 >
                    <p>What is an access token and refresh token? How do they work and where should we store them on the client-side?</p>
                    <p>{ isOpen?'Close':'Open'}</p>
                </div>
                {
                    isOpen && <div className="collapse-content bg-custom text-2xl text-white text-bold group-focus:text-secondary-content">
                        <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                    </div>
                }
            </div>
            {/* Q-2 */}
            <div tabIndex={0} className="collapse group space-y-1 rounded-md">
                <div
                    className="collapse-title bg-custom hover:bg-indigo-950  text-2xl text-white text-bold group-focus:text-secondary-content
                    flex justify-between
                    "
                    onClick={()=>setIsOpen(!isOpen)}
                >
                    <p>Compare SQL and NoSQL databases?</p>
                    <p>{ isOpen?'Close':'Open'}</p>
                </div>
                {
                    isOpen && <div className="collapse-content bg-custom text-2xl text-white text-bold group-focus:text-secondary-content">
                        <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                    </div>
                }
            </div>
            {/* Q-3 */}
            <div tabIndex={0} className="collapse group space-y-1 rounded-md">
                <div
                    className="collapse-title bg-custom hover:bg-indigo-950  text-2xl text-white text-bold group-focus:text-secondary-content
                    flex justify-between
                    "
                    onClick={()=>setIsOpen(!isOpen)}
                >
                    <p>What is express js? What is Nest JS (google it)?</p>
                    <p>{ isOpen?'Close':'Open'}</p>
                </div>
                {
                    isOpen && <div className="collapse-content bg-custom text-2xl text-white text-bold group-focus:text-secondary-content">
                        <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                    </div>
                }
            </div>
            {/* Q-4 */}
            <div tabIndex={0} className="collapse group space-y-1 rounded-md">
                <div
                    className="collapse-title bg-custom hover:bg-indigo-950  text-2xl text-white text-bold group-focus:text-secondary-content
                    flex justify-between
                    "
                    onClick={()=>setIsOpen(!isOpen)}
                >
                    <p>What is MongoDB aggregate and how does it work (google it)?</p>
                    <p>{ isOpen?'Close':'Open'}</p>
                </div>
                {
                    isOpen && <div className="collapse-content bg-custom text-2xl text-white text-bold group-focus:text-secondary-content">
                        <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                    </div>
                }
            </div>
        </div>
    );
};

export default Blog;