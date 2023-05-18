import React, { useState } from 'react';

const Blog = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <div tabIndex={0} className="collapse group space-y-1">
                <div
                    className="collapse-title bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content
                    flex justify-between"
                    onClick={()=>setIsOpen(!isOpen)}
                >
                    <p>What is an access token and refresh token? How do they work and where should we store them on the client-side?</p>
                    <p>{ isOpen?'Close':'Open'}</p>
                </div>
                {
                    isOpen && <div className="collapse-content bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
                        <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                    </div>
                }
            </div>
            <div tabIndex={0} className="collapse group space-y-1">
                <div
                    className="collapse-title bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content
                    flex justify-between"
                    onClick={()=>setIsOpen(!isOpen)}
                >
                    <p>Compare SQL and NoSQL databases?</p>
                    <p>{ isOpen?'Close':'Open'}</p>
                </div>
                {
                    isOpen && <div className="collapse-content bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
                        <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                    </div>
                }
            </div>
        </div>
    );
};

export default Blog;